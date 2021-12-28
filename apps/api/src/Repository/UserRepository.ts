import { EntityRepository, Repository } from "typeorm"
import { sign } from "jsonwebtoken"
import { hash } from "bcryptjs"
import { compare } from "bcryptjs"

import User from "Entities/User"
import authConfig from "Utils/authConfig"

import { SerializedUser, UserRegister } from "@starter-project/entities"

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByEmail(email: string) {
    return this.findOne({
      where: { email },
    })
  }

  userExistsWithEmail(email: string): Promise<boolean> {
    return this.findByEmail(email)
      .then(user => !!user)
  }

  async createUser({ email, password: rawPassword }: UserRegister) {
    // create user
    const createdUser = new User()
    createdUser.email = email
    createdUser.password_hash = await this.generateHash(rawPassword)

    // save user
    return createdUser.save()
      .then(user => {
        let { password_hash: _, ...newUser } = user
        return newUser
      })
  }

  //? TODO: implement this right 
  // async updateUser(
  //   user: User,
  // ) {
  //   return user.save().then(() => user)
  // }

  listUsers() {
    return this.find({
      select: ['email', 'id'],
    })
  }

  findById(id: string) {
    return this.findOne({
      where: { id },
    })
  }

  generateHash(password: string) {
    return hash(password, 8)
  }

  compareHash(password: string, userPassword: string) {
    return compare(password, userPassword)
  }

  async checkCredentials(email: string, password: string) {
    const user = await this.findByEmail(email)
    if (!user || !await this.compareHash(password, user.password_hash))
      return null
    return user
  }

  generateToken(user: User) {
    const { secret, expiresIn } = authConfig.jwt
    return sign({ id: user.id }, secret, { expiresIn })
  }

  serialize(user: User): SerializedUser {
    const { email, id, role } = user
    const serializedUser: SerializedUser = { email, id, role }
    return serializedUser
  }

  async generateResetPasswordToken(email: string) {
    const { secret, expiresIn } = authConfig.token

    const user = await this.findOne({ where: { email } })
    if (!user) throw new Error("No user found")

    const token = sign({ id: user.id }, secret, { expiresIn })
    return token
  }
}

export default UserRepository
