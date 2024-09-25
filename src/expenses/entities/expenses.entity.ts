import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expenses {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title:string;

    @Column()
    description

    //TODO: debe ser de tipo Enum
    @Column()
    category
}