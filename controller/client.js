const modelClient = require('../modal/client')
const GetClient = async (req, res) => {
    try {
        const skip = parseInt(req.query.skip) || 1
        const limit = parseInt(req.query.skip) || 15
        const search = req.query.search || ""
        const count = await modelClient.countDocuments()
        const data = await modelClient.aggregate([
            {
                $match: {
                    $or: [
                        { nameSupplier: { $regex: search, $options: "i" } }
                    ]
                }
            },
            { $skip: (skip - 1) * limit },
            { $limit: limit }
        ])

        return res.status(200).json({
            data, count
        })
    } catch (error) {
        return res.status(500).json({ error })
    }
}
module.exports = { GetClient }