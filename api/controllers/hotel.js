import Hotel from "../models/Hotel.js"

export const createHotel = async (req, res, next) => {
    // dbden veri aldıgım için async kullandım 
    const newHotel = new Hotel(req.body);
    // schema uzerinden yeni otel olusturdum
    try {
        const savedHotel = await newHotel.save();
        // savedHotel'e save ile yeni otelin verisi eklendi
        res.status(200).json(savedHotel);
        // 200 kodu ile geri donduruldu ve ekrana yazdırıldı.
    } catch (err) {
        next(err)
    }
}


// UPDATE
export const updatedHotel = async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        // findByIdAndUpdate'in 1.paramteresi otel idsi 2.paramteresi ise yeni otelin bilgileri($set mongodb deki komuttur.)
        // 3.paramtere ise yeni otelin verisi
        res.status(200).json(updatedHotel);
    } catch (err) {
        res.status(500).json(err);
    }
};


// DELETE
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Otel Silindi");
    } catch (err) {
        next(err)
    }
};


// GET
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err)
    }
};

// GET ALL
export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err)
    }
};
