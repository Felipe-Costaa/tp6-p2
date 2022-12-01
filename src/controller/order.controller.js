const service = require('../service/order.service')

const create = async (req, res) => {
    if(await service.create(req.body)) res.status(201).send('Created')
    else (res.status(400).send('Invalid data supplied'))
}


const remove = async (req, res) => {
    const customerId = req.params.id
    if (await service.remove(customerId)) res.status(204).send('No content')
    else res.status(404).send('Invalid data supplied')
}

module.exports = {
    create,
    remove
}
