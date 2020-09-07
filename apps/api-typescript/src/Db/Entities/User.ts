import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity, OneToOne, JoinColumn } from "typeorm"
import { nanoid } from "nanoid"

// INFO: check https://github.com/ai/nanoid and https://zelark.github.io/nano-id-cc/ to understand what this is for
const idSize = 10

@Entity()
export class User extends BaseEntity {

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToOne(() => User, user => user.bestFriend, { eager: false, onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: "best_friend_id" })
  bestFriend?: User

  @BeforeInsert()
  addId() {
    this.id = nanoid(idSize)
  }
}

export default User
