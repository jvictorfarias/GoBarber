import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import ShowProfileService from '@modules/users/services/ShowProfileService';
import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let updateUserAvatarService: UpdateUserAvatarService;
let fakeStorageProvider: FakeStorageProvider;
let showProfileService: ShowProfileService;

describe('ShowProfileService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateUserAvatarService = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );

    showProfileService = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show profile of a user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123123',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    const userInfo = await showProfileService.execute({ user_id: user.id });

    expect(userInfo).toMatchObject({
      name: 'John Doe',
      email: 'johndoe@example.com',
      avatar: 'avatar.jpg',
    });
  });

  it('should not be able to show profile of a non-existing user', async () => {
    await expect(
      showProfileService.execute({ user_id: 'non-existing' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
