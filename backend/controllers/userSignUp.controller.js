import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
const userSignUp = async (req, res) => {

    const { fullname, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = await User.findOne({ email })

    if (newUser) {

        res.status(400).json({ error: "Email Already Exits Try Logging In" })
        return
    }
    await User.create({ fullname, email, password: hashedPassword })
    res.status(200).send({ success: true })
    res.end()


}

export default userSignUp
