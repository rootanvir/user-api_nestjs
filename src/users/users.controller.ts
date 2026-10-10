import { Body, Controller, Delete, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Get,Post } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

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
    @Patch(':id')
    updateUser(@Param('id',ParseIntPipe)id: number,@Body()dto:UpdateUserDto){
        return this.userService.updateUser(id,dto);
    }

    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id: number){
        return this.userService.deleteUser(id);
    }
}
