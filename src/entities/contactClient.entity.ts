import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./client.entity";

@Entity("contact_client")
class ContactClient {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  telephone: number;

  @ManyToOne((type) => Client, (client) => client.id, {
    onDelete: "CASCADE",
  })
  client: Client;
}

export { ContactClient };
