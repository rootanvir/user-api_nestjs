import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) { }

    create(dto: CreateUserDto): Promise<User> {
        const user = this.usersRepository.create(dto);
        return this.usersRepository.save(user);
    }
    async getUser(id: number):Promise<User>{
        const user = await this.usersRepository.findOneBy({user_id:id});
        if(!user){
            throw new NotFoundException(`User ${id} not found`);
        }
        return user;
        
    }
    async deleteUser(id:number):Promise<{message:string}>{
        const user = await this.getUser(id);
        if(!user){
            throw new NotFoundException (`User ${id} not found`);
        }
        this.usersRepository.delete({user_id:id});
        return {message:`$user id:{user.user_id} & ${user.user_name} has been deleted successfully!`};
    }
    async updateUser(id: number, dto : UpdateUserDto):Promise<User>{
        const user = await this.getUser(id);
        Object.assign(user, dto);
        return this.usersRepository.save(user);
    }

    

    findAll():Promise<User[]>{
        return this.usersRepository.find();
    }
}