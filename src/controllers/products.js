const ProductsModel = require('../models/productsModel')

async function get(req, res) {
    const { id } = req.params

    let obj = id ? {_id: id} : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'success'
    })
}

async function put(req, res) {
    const { id } = req.params

    // this 'PUT' method, in case it is mandatory to return the updated product

    const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, {new: true})

   /* this is another format to make the 'PUT' method, in case it is not mandatory to return the product
    const product = await ProductsModel.findById({ _id: id})

    await product.updateOne(req.body)
    */

    res.send({
        message: 'success',
        product,
    }) 
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id})

    const message = remove.deletedCount > 0 ? 'success' : 'error'

    res.send({
        message,
    })
}
module.exports = {
    get,
    post,
    put,
    remove,
}