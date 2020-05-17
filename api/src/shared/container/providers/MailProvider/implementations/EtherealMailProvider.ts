import { inject, injectable } from 'tsyringe';
import nodemailer, { TestAccount, Transporter } from 'nodemailer';
import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider';
import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

@injectable()
class EtherealMailProvider implements IMailProvider {
  private account: TestAccount;

  private transporter: Transporter;

  private mailTemplateProvider: IMailTemplateProvider;

  constructor(
    @inject('MailTemplateProvider')
    mailTemplateProvider: IMailTemplateProvider,
  ) {
    this.mailTemplateProvider = mailTemplateProvider;
    nodemailer.createTestAccount().then(testAccount => {
      this.account = testAccount;
      this.transporter = nodemailer.createTransport({
        host: this.account.smtp.host,
        port: this.account.smtp.port,
        secure: this.account.smtp.secure,
        auth: {
          user: this.account.user,
          pass: this.account.pass,
        },
      });
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    await this.transporter.sendMail({
      from: {
        name: from?.name || 'Equipe GoBarber',
        address: from?.email || 'empresa@gobarber.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });

    // console.log('Message sent: %s', message.messageId);

    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default EtherealMailProvider;
