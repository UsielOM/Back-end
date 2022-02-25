import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Test{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:30,nullable:false})
    nombre:string;

    @Column({type:"int",nullable:false})
    edad:number
}

