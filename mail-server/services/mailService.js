const nodemailer = require("nodemailer");

let smtpConfig = {
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false, // use SSL
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASSWORD,
    },
};

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport(smtpConfig);
    }

    async newNotification(to, link, title, subtitle) {
        await this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to,
            subject:`${title}: ${subtitle}`,
            text:``,
            html:`
            <table style="padding: 40px 0 30px 0;" cellpadding="0" cellspacing="0" width="100%">

            <td bgcolor="#0d0e97" style="padding: 0 5% 0 5%;">
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="75%" align="left">
                    <h3 style="color: #ffffff;">University ecosystem</h3>
                  </td>
                <tr>
              </table>
            </td>
        
            <tr>
            <td bgcolor="#ffffff">
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                <td bgcolor="#ffffff" >
                <h1 style="padding: 0 5% 0 5%; color: #0d0e97;">${title}</h1>
                <a href="${link}"><h1 style="padding: 0 5% 0 5%; color: #0d0e97;">${subtitle}</h1> </a> 
                </td>
                </tr>
                <tr>
                  <td bgcolor="#0d0e97" style="padding: 0 5% 0 5%;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="75%" align="left">
                          <h4 style="color: #ffffff;">${process.env.UNIVERSITY}</h4>
                        </td>
                        <td width="25%" align="right">
                          <h4 style="color: #ffffff;">${process.env.YEAR}</h4>
                        </td>
                      <tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            </tr>
          </table>
                `
        });
    }

    async newMessage(to, title, author) {
      await this.transporter.sendMail({
          from:process.env.SMTP_USER,
          to,
          subject:`${title} от пользователя: ${author}`,
          text:``,
          html:`
          <body style="margin: 0; padding: 0;">

          <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td bgcolor="#0d0e97" style="padding: 0 5% 0 5%;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="75%" align="left">
                          <h3 style="color: #ffffff;">University ecosystem</h3>
                        </td>
                      <tr>
                    </table>
                  </td>
                </tr>
          </table>
          
          <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                  <td width="100%" bgcolor="#ffffff" style="padding: 0 5% 0 5%;" align="left">
                      <h1 style="color: #0d0e97;">${title} от пользователя: ${author}</h1>
                  </td>
              </tr>
          </table>
      
        <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td bgcolor="#0d0e97" style="padding: 0 5% 0 5%;">
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td width="75%" align="left">
                      <h3 style="color: #ffffff;">${process.env.UNIVERSITY}</h3>
                    </td>
                    <td width="25%" align="right">
                      <h3 style="color: #ffffff;">${process.env.YEAR}</h3>
                    </td>
                  <tr>
                </table>
              </td>
            </tr>
        </table>
      </body>
              `,
      });
  }

  async TaskOrMaterial(to, link, title, subtitle) {
    await this.transporter.sendMail({
        from:process.env.SMTP_USER,
        to,
        subject:`${title}: ${subtitle}`,
        text:``,
        html:`
        <body style="margin: 0; padding: 0;">

        <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td bgcolor="#0d0e97" style="padding: 0 5% 0 5%;">
                  <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td width="75%" align="left">
                        <h3 style="color: #ffffff;">University ecosystem</h3>
                      </td>
                    <tr>
                  </table>
                </td>
              </tr>
        </table>
    
        <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td width="75%" bgcolor="#ffffff" style="padding: 0 5% 0 5%;" align="left">
                <h1 style="color: #0d0e97;">${title}</h1>
                <a href="${link}"><h1 style="color: #0d0e97;">${subtitle}</h1></a> 
                </td>
            </tr>
        </table>
    
        <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td bgcolor="#0d0e97" style="padding: 0 5% 0 5%;">
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td width="75%" align="left">
                      <h3 style="color: #ffffff;">${process.env.UNIVERSITY}</h3>
                    </td>
                    <td width="25%" align="right">
                      <h3 style="color: #ffffff;">${process.env.YEAR}</h3>
                    </td>
                  <tr>
                </table>
              </td>
            </tr>
        </table>
      </body>
            `,
    });
  }
}

module.exports = new MailService();