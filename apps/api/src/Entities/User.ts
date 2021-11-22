import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"
import { IsEmail, IsUUID } from "class-validator"
import { nanoid } from "nanoid"

// INFO: check https://github.com/ai/nanoid and https://zelark.github.io/nano-id-cc/ to understand what this is for
const idSize = 10

@Entity()
export class User {

  @PrimaryColumn()
  @IsUUID()
  id: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password_hash: string;

  // add id to Animal
  @BeforeInsert()
  addId() {
    this.id = nanoid(idSize)
  }
}

export default User
