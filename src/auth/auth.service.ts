import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { getType } from 'mime';
import * as jwt from 'jsonwebtoken';

import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
       @InjectModel('User') private readonly userModel: PasswordLocalModel&lt;IUser&getType;
       } ){}


}
