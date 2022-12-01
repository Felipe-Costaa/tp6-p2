const { produto } = require('../model/index')

const create = async data => {
    await produto.create(data)
}

const remove = async productId => {
    return await produto.destroy({
        where: {
            id: productId
        }
    })
}

module.exports = {
    create,
    getProductByName,
    remove
}