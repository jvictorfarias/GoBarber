import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({ user_id });

    return response.status(200).json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { email, name, oldPassword, password } = request.body;
    const { id: user_id } = request.user;

    const updateProfile = container.resolve(UpdateProfileService);

    const updatedUser = await updateProfile.execute({
      user_id,
      email,
      name,
      oldPassword,
      password,
    });

    delete updatedUser?.password;

    return response.status(200).json(classToClass(updatedUser));
  }
}

export default ProfileController;
