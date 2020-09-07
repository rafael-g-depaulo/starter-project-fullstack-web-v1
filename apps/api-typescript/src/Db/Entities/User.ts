import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity } from "typeorm"
import { v4 as uuidv4 } from "uuid"

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

  @BeforeInsert()
  addId() {
    this.id = uuidv4()
  }
}

export default User
