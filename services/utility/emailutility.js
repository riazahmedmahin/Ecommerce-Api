import nodemailer from 'nodemailer'
import { EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_SECURITY, EMAIL_USER } from '../config/config.js'


export const SendEmail = async (EmailTo,EmailText,EmailSubject)=>{

    let transporter=nodemailer.createTransport(
        {
        host:EMAIL_HOST,
        port:EMAIL_PORT,
        secure:EMAIL_SECURITY,
        auth:{
            user:EMAIL_USER,
            pass:EMAIL_PASS
        },
        tls:{
            rejectUnauthoeized:false
    
           }
       },)

       let mailOptions={
        from:'TaskApi<info@teamrabbil.com>',
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
       }
       return await transporter.sendMail(mailOptions)

}

export default SendEmail;