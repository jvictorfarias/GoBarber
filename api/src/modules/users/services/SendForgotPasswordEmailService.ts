import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

// import User from '@modules/users/infra/typeorm/entities/User';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

interface IRequest {
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  private usersRepository: IUsersRepository;

  private mailProvider: IMailProvider;

  private userTokensRepository: IUserTokensRepository;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,

    @inject('MailProvider')
    mailProvider: IMailProvider,

    @inject('UserTokensRepository')
    userTokensRepository: IUserTokensRepository,
  ) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
    this.userTokensRepository = userTokensRepository;
  }

  public async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email not exists', 401);
    }

    const { token } = await this.userTokensRepository.generate(user.id);

    this.mailProvider.sendMail(
      email,
      `Pedido de recuperação recebido: ${token}`,
    );
  }
}

export default SendForgotPasswordEmailService;
