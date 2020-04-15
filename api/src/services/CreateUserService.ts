import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    if (await usersRepository.findOne({ where: { email } })) {
      throw new AppError('Email address already used.');
    }

    const hash_password = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hash_password,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
