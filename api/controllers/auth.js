import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js"
import jwt from "jsonwebtoken"
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        // yeni kullanıcı newUser.save() metodu kullanılarak veri tabanına kaydedilir. 
        res.status(200).json(newUser)
    } catch (error) {
        next(error)
    }
}
// şifre guvenligi icin bcryptjs kullandım

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, 'Kullanıcı bulunamadı.'));
        // kullanıcı yoksa error.js dosyamdaki createError func next middlewarede cagırıyorum 
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
            // kullanıcının girdiği şifreyi veritabanındaki şifre ile karşılaştırıyoruz
        );
        if (!isPasswordCorrect) return next(createError(400, "Sifre veya Kullanıcıadı hatalı"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)
        // guvenlik için id ve admin mi bilgilerini tokena aktarıyoruz

        const { password, isAdmin, ...digerBilgiler } = user._doc;
        // kullanıcının dbdeki diğer bilgilerini alıyoruz. Şifre ve yönetici bilgilerini ayıklıyoruz.
        res.cookie("access_token",token,{httpOnly:true}).status(200).json({ ...digerBilgiler });
    } catch (error) {
        next(error)
    }
}
//user verileri _doc içerisinde bulunur (insomniadan bak)