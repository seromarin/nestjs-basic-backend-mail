import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Mail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subject: string;

    @Column()
    description: string;

    @Column()
    receiver: string;

    @Column()
    sender: string;

}