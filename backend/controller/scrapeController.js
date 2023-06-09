const scrapeService = require('../services/scrapeServices');

exports.fetch = async (req, res, next) => {
    try {
        console.log("---req body---", req.body);
        const { data } = req.body;
        const response = await scrapeService.getData(data);
        res.json({ status: true, success: 'data fetched successfully' });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
}