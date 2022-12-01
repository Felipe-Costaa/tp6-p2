const { order } = require('../model/index')

const create = async data => {
    await order.create(data)
}

const remove = async orderId => {
    return await order.destroy({
        where: {
            id: orderId
        }
    })
}

module.exports = {
    create,
    remove
}