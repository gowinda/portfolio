import { PassportLocalModel } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { debug } from 'console';
import { IUsersService } from './interfaces/iusers.service';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService implements IUsersService {
    constructor(@InjectModel('User') private readonly userModel: PassportLocalModel&lt;IUser&gt;) {}
    async findAll(): Promise&lt;IUser[]&gt; {
        return await this.userModel.find().exec();
    }

    async findOne(options: object): Promise&lt;IUser&gt; {
        return await this.userModel.findOne(options).exec();
    }

    async findById(ID: number): Promise&lt;IUser&gt; {
        return await this.userModel.findById(ID).exec();
    }
    async create(createUserDto: CreateUserDto): Promise&lt;IUser&gt; {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async update(ID: number, newValue: IUser): Promise&lt;IUser&gt; {
        const user = await this.userModel.findById(ID).exec();

        if (!user._id) {
            debug('user not found');
        }

        await this.userModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.userModel.findById(ID).exec();
    }
    async delete(ID: number): Promise&lt;string&gt; {
        try {
            await this.userModel.findByIdAndRemove(ID).exec();
            return 'The user has been deleted';
        }
        catch (err) {
            debug(err);
            return 'The user could not be deleted';
        }
    }
}