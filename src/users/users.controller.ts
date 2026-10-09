import { Body, Controller, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Get,Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor (private readonly userService: UserService){}
    @Post()
    create(@Body() dto: CreateUserDto){
        return this.userService.create(dto);
    }
    @Get(':id')
    findUser(@Param('id', ParseIntPipe) id:number){
        return this.userService.getUser(id);
    }

    @Get()
    findAll(){
        return this.userService.findAll();
    }
}
