const getAllProducts = async(req, res) =>{
    res.status(200).json({msg: "I an GetAllProducts"})
}

const getAllProductsTesting = async(req, res)=>{
    res.status(200).json({msg: "I am getAllProductsTesting"})
}
module.exports = {getAllProducts, getAllProductsTesting}
