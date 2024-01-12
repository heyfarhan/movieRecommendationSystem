import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

const userLogin = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email })
    if (!user) {

        res.status(400).json({ error: "Email not Exits Try Signing In" })
        return
    }
    else {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    }
    res.status(200).json({ success: true })
    res.end()


}

export default userLogin
