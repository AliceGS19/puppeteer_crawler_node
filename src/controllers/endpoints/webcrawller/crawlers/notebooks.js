const { webcrawller } = require('../../../../crawlers')

module.exports = async (req, res, next) => {
    try {
        const { brand } = req.query;
        let result;
        
        if (!brand) {
          result = await webcrawller.notebooks()
        }
      
        result = await webcrawller.notebooks(brand)

        return res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}