

const ProductData = [];
exports.add = async (req, res) => {
    
        console.log("result", req.body)
        const pro1 = {
            "id": ProductData.length + 1,
            "pname":req.body.pname,
            "pprice":req.body.pprice,
            "pdesc":req.body.pdesc
        }
        
        ProductData.push(pro1)
        console.log("final", ProductData)
        res.status(200).json({status:true, result:ProductData, message: "recevied"})

        
    
}

exports.get = async (req, res) => {
    console.log(ProductData)
    if(ProductData.length > 0){
        res.status(200).send({
            "status": true,
            "products": ProductData
        })
    }
}

exports.put = async (req, res) => {
    let id = req.params.id *1
    let proToUpdate = ProductData.find(p=>p.id === id)//will go throught each product and assign the product with the id in params
    let index = ProductData.indexOf(proToUpdate)
    let old = ProductData[index ]
    ProductData[index] = req.body;
    console.log[index]
    console.log(ProductData)
    console.log(ProductData.length)

    res.status(200).json({
        'status': "true",
        "message": "updated product ",
        "old": old,
        "new": ProductData[index]
    })
}