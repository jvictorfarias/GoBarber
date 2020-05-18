import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  password?: string;
  oldPassword?: string;
}

@injectable()
class UpdateProfileService {
  private usersRepository: IUsersRepository;

  private hashProvider: IHashProvider;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,

    @inject('HashProvider')
    hashProvider: IHashProvider,
  ) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
  }

  public async execute({
    user_id,
    name,
    email,
    password,
    oldPassword,
  }: IRequest): Promise<User | undefined> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const userWithUpdatedEmail = await this.usersRepository.findByEmail(email);

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
      throw new AppError('Email is already taken');
    }

    Object.assign(user, { name, email });

    if (password && !oldPassword) {
      throw new AppError('You need to send the old password to create a new.');
    }

    if (password && oldPassword) {
      const validOldPassword = await this.hashProvider.compareHash(
        oldPassword,
        user.password,
      );

      if (!validOldPassword) {
        throw new AppError('Old password is wrong.');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    return this.usersRepository.save(user);
  }
}

export default UpdateProfileService;
