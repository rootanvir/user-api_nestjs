import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    user_id!: number;
    
    @Column()
    user_name!: string;

    @Column()
    user_blood!: string;

    @Column()
    user_mobile!: string;
}