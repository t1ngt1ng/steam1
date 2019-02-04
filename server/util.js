/**
 *  author      : t1ng
 *  createTime  : 2019/2/2
 *  description :
 */

import config from './config/config';
import nodeMailer from 'nodemailer';

let sendMail = (smtpOptions, mailOptions) => {
  return new Promise((resolve, reject) => {
    var smtpTransport = nodeMailer.createTransport(smtpOptions);
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        resolve({success: false, msg: 'send email fail'});
        console.log(error);
        smtpTransport.close();
      } else {
        resolve({success: true});
        console.log('Message sent' + response.message);
        smtpTransport.close();
      }
    })
  })
}

export default {
  sendMailToSuperAdmin: async ({email, subject, html}) => {

    let option = config.mailOptions;

    option.to = email;
    option.subject = subject;
    option.html = html;
    console.log(option);

    return await sendMail(config.smtpOptions, option);
  }
}


