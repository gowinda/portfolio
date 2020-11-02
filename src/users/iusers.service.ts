import { IUser } from './user.interface';

export interface IUsersService {
    findAll(): Promise&lt;IUser[]&gt;;
    findById(ID: number): Promise&lt;IUser | null&gt;;
    findOne(options: object): Promise&lt;IUser | null&gt;;
    create(user: IUser): Promise&lt;IUser&gt;;
    update(ID: number, newValue: IUser): Promise&lt;IUser | null&gt;;
    delete(ID: number): Promise&lt;string&gt;;
}