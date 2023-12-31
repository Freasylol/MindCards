const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const nodemailer = require('nodemailer');
const myVar = require('./myVar');

const generateJwt = (id, email, roleId) => {
    return jwt.sign({
        id: id,
        email: email, 
        roleId: roleId},
        'secretKey',
        {expiresIn: '24h'}
    )
}

const sendEmail = async (recipient, subject, content) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'obereg2005.2002@gmail.com',
      pass: 'qada jcxq afza bsjb '
    }
  });

  const mailOptions = {
    from: 'obereg2005.2002@gmail.com',
    to: recipient,
    subject: subject,
    text: content
  };

  await transporter.sendMail(mailOptions);
};

function generateRandom4DigitNumber() {
    const min = 1000; // Minimum 4-digit number
    const max = 9999; // Maximum 4-digit number
  
    // Generate a random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNumber;
  }

class UserController {
    async getAll(req, res) {
        return await User.findAll().then(type => res.json(type));
    }

    async editUser(req, res) {
        const {id, first_name, last_name, email, password} = req.body;
        const user = await User.findOne({where: {id}})
        if (first_name) {
            console.log(first_name);
            user.first_name = first_name;
        }
        if (last_name) {
            console.log(last_name);
            user.last_name = last_name;
        }
        if (email) {
            console.log(email);
            user.email = email;
        }
        if (password) {
            const hashPassword = await bcrypt.hash(password, 5);
            console.log(hashPassword);
            user.password = hashPassword;
        }
        await user.save();
        const token = generateJwt(user.id, user.email, 1);
        return res.json(token);
    }

    async createOne(req, res, next) {
        const {first_name, last_name, email, password, roleId} = req.body;
        // const newUser = await User.findOne({where: {email}});
        // if (newUser) {
        //     return next(ApiError.badRequest('User with that email already exists'));
        // }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({first_name, last_name, email, password: hashPassword, roleId});
        const token = generateJwt(user.id, user.email, user.roleId);
        // return res.json(user);
        return res.json(token);
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.roleId)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest('User with email does not exist'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Specified incorrect password'));
        }
        const token = generateJwt(user.id, user.email, 1);
        // const random4Digit = generateRandom4DigitNumber();
        // sendEmail('sashakorostelev49@gmail.com', 'Two-factor authentication Message', String(random4Digit));
        // console.log(String(random4Digit));
        // myVar.setMyVariable(String(random4Digit));
        // return res.json({password});
        return res.json(token);
    }

    async verify(req, res) {
        if (!myVar) {
            myVar.setMyVariable('');
        }
        if (req.body.message === myVar.getMyVariable()) {
            return res.json('Successful authentication')
        } else {
            return res.json('Unsuccessful authentication')
        }
    }

    async getOne(req, res) {
        const id = Number(req.params.id);
        const user = await User.findOne({where: {id: id}});
        console.log(myVar.getMyVariable());
        return res.json(user);
    }

    async updateOne(req, res) {
        const id = Number(req.params.id);
        const {first_name, last_name, email, password, roleId} = req.body;
        const user = await User.update({first_name, last_name, email, password, roleId}, {where: {id: id}});
        return res.json(user);
    }

    async deleteOne(req, res) {
        User.destroy({
          where: {
            id: req.body.id
          }
        })
    }
}

module.exports = new UserController();