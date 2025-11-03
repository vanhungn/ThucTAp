const ModalUses = require('../modal/users')
const bcrypt = require('bcrypt')
const Login = async (req, res) => {
    try {
        const { phone, password } = req.body
        if (!phone || !password) {
            return res.status(400).json({
                message: "invite"
            })
        }
        const user = await ModalUses.findOne({ phone })
        if (!user) {
            return res.status(404).json({
                message: 'Phone does not exist',
            });
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            return res.status(404).json({
                message: 'Wrong password',
            });
        }
        return res.status(200).json({
            message: "success"
        })

    } catch (error) {
        console.log(error)
    }
}
const Register = async (req, res) => {
    try {
        const { phone, password } = req.body
        if (!phone || !password) {
            return res.status(400).json({
                message: "invite"
            })
        }
        const user = await ModalUses.findOne({ phone })
        if (user) {
            return res.status(404).json({
                message: 'Phone does not exist',
            });
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassWord = bcrypt.hashSync(password, salt);
        const data = await ModalUses.create({
            phone, password: hashPassWord
        })
        return res.status(200).json({
            data
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = { Login, Register }