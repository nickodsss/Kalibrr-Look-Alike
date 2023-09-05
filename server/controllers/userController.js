const { comparePassword } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { User } = require('../models/index')

class UserController {

    static async register(request, response, next) {
        try {
            const { username, email, password, phoneNumber, address } = request.body

            const created = await User.create({
                username,
                email,
                password,
                role: 'Admin',
                phoneNumber,
                address
            })

            response.status(201).json({
                message: created
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async login(request, response, next) {
        try {
            const { email, password } = request.body
            if (!email || !password) {
                throw {
                    name: 'Invalid'
                }
            }

            const user = await User.findOne({
                where: {
                    email
                }
            })

            if (!user) {
                throw {
                    name: 'Invalid'
                }
            }

            const isValidPassword = comparePassword(password, user.password)
            if (!isValidPassword) {
                throw { name: 'Invalid' }
            }
            console.log(isValidPassword)

            const token = createToken({
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            })

            // console.log(token)

            response.status(200).json({
                access_token: token,
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController