const sendMail = require("../helpers/mail");

const inicio = (req, res, next)  => {
    res.render('index');
}

const sendEmail = (req,res,next) => {
    const { name, email, phone, message } = req.body;

    const subject = `Website Contact Form:  ${name}`
    const text = `Ha recibido un nuevo mensaje del formulario de contacto de su sitio web.\n\nAquí están los detalles:\n\nNombre: ${name}\n\nCorreo electrónico: ${email}\n\nTelefóno: ${phone}\n\nMensaje:\n${message}`

    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Error interno' });
        } else {
            res.status(200).json({ message: 'Correo enviado' });
        }
    });
}

module.exports = {
    inicio,
    sendEmail
}