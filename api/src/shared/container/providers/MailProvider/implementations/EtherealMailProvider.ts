import nodemailer, { TestAccount, Transporter } from 'nodemailer';
import IMailProvider from '../models/IMailProvider';

class EtherealMailProvider implements IMailProvider {
  private account: TestAccount;

  private transporter: Transporter;

  constructor() {
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

  public async sendMail(to: string, body: string): Promise<void> {
    const message = await this.transporter.sendMail({
      from: 'Equipe GoBarber <empresa@gobarber.com.br>',
      to,
      subject: 'Recuperação de senha',
      text: body,
    });

    console.log('Message sent: %s', message.messageId);

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default EtherealMailProvider;
