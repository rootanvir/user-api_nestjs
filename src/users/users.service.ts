import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';


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
    findAll():Promise<User[]>{
        return this.usersRepository.find();
    }
}