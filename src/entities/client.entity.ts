import { Exclude } from "class-transformer";
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { ContactClient } from "./contactClient.entity";

@Entity("client")
class Client {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 128, unique: true })
  name: string;

  @Column({ length: 128 })
  @Exclude()
  password: string;

  @OneToMany((type) => ContactClient, (contact) => contact.client, {
    eager: true,
  })
  @JoinTable()
  contacts: ContactClient[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Client };
