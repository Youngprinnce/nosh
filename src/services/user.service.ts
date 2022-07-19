import { NotFoundException } from '../exceptions/not-found.exception';
import { AuthSignupRequest } from '../interfaces/requests/auth-request.interface';
import { IUser } from '../interfaces/reponses/auth-reponse.interface';
import UserModel from '../models/user.model';
import { ServerErrorException } from '../exceptions/server-error.exception';

class UserService {
  async findByEmail(email: string): Promise<IUser | null> {
    const user = await UserModel.findOne({email}).exec()
    return user;
  }

  async findById(id: string): Promise<IUser> {
    const user = await UserModel.findById(id).exec()

    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async create(payload: AuthSignupRequest): Promise<IUser> {
    return await UserModel.create(payload)
  }

  async updateUser(id: string, payload: any): Promise<IUser> {
    const userExist = await this.findById(id);
    const user = await UserModel.findByIdAndUpdate(userExist._id, payload, {new: true}).exec()
    if (!user) throw new ServerErrorException('Unable to update user')
    return user;
  }
}

export default new UserService();
