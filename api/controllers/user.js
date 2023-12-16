import User from "../models/User.js"
// UPDATE
export const updatedUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        // findByIdAndUpdate'in 1.paramteresi user idsi 2.paramteresi ise yeni userin bilgileri($set mongodb deki komuttur.)
        // 3.paramtere ise yeni userin verisi
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};


// DELETE
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Kullanıcı Silindi");
    } catch (err) {
        next(err)
    }
};


// GET
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
};

// GET ALL
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err)
    }
};
