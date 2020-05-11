import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

// import User from '@modules/users/infra/typeorm/entities/User';
// import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  private usersRepository: IUsersRepository;

  private mailProvider: IMailProvider;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,

    @inject('MailProvider')
    mailProvider: IMailProvider,
  ) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  public async execute({ email }: IRequest): Promise<void> {
    this.mailProvider.sendMail(email, 'Pedido de recuperação recebido');
  }
}

export default SendForgotPasswordEmailService;
