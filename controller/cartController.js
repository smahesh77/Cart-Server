

const ProductData = [];
exports.add = async (req, res) => {
    
        console.log("result", req.body)
        const pro1 = {
            "id": ProductData.length + 1,
            "pname":req.body.pname,
            "pprice":req.body.pprice,
            "pdecs":req.body.pdesc
        }

        ProductData.push(pro1)
        console.log("final", ProductData)
        res.status(200).json({status:true, result:ProductData, message: "recevied"})

        
    
}