module.exports = {
    send (req, res) {
        try {
            if (req.body.endPoint) {
                res.status(201).send(req.body.endPoint)
            }
            else res.status(404).send('Not found')
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }
}