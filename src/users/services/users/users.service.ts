import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParam, UpdateUserParam } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>){}
    findUsers() {
        return this.userRepository.find()
    }

    createUser(userDetails:CreateUserParam) {
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt:new Date(),
        })
        return this.userRepository.save(newUser)
    }

    updateUser(id:number,updateUserDetails:UpdateUserParam){
        return this.userRepository.update({id},{...updateUserDetails})
    }

    deleteUser(id:number) {
        return this.userRepository.delete({id})
    }
}
