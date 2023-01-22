const getAllUsers = async(req, res)=> {
    res.status(200).json({ msg: "I am getting all products"})
}

module.exports = {getAllUsers};