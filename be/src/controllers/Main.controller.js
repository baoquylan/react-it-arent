const { ResponseData } = require('../util/ResponseData.util')
const moment = require('moment')


const session = ['Morning', 'Lunch', 'Dinner', 'Snack']

const getMenu = async (req, res, next) => {
    try {
        const { section } = req.query
        if (section == 10) {
            res.status(200).json(new ResponseData(true, [], 'All data was loaded'));
            return
        }
        let list = []
        let today = moment()
        let time = today.add('days', section).format('MM.DD')
        for (let index = 0; index < 8; index++) {
            let sessionIdx = getRandomIntInclusive(0, 3)
            list.push({ imgIdx: index, description: `${time} ${session[sessionIdx]}` })
        }
        res.status(200).json(new ResponseData(true, list, ''));
    } catch (ex) {
        res.status(400).json(new ResponseData(false, null, ex.message));
    }
}

const getDiary = async (req, res, next) => {
    try {
        const { section } = req.query
        if (section == 10) {
            res.status(200).json(new ResponseData(true, [], 'All data was loaded'));
            return
        }
        let today = moment()
        let date = today.add('days', section)
        let time = date.format('HH:mm')
        let dateStr = date.format('YYYY.MM.DD')
        let list = []
        for (let index = 0; index < 8; index++) {
            list.push({
                time, dateStr, description: `
            私の日記の記録が一部表示されます。
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`})
        }
        res.status(200).json(new ResponseData(true, list, ''));
    } catch (ex) {
        res.status(400).json(new ResponseData(false, null, ex.message));
    }
}

const getColumn = async (req, res, next) => {
    try {
        const { section } = req.query
        if (section == 10) {
            res.status(200).json(new ResponseData(true, [], 'All data was loaded'));
            return
        }
        let today = moment()
        let date = today.add('days', section)
        let dateStr = date.format('YYYY.MM.DD HH:mm')
        let list = []
        for (let index = 0; index < 8; index++) {
            list.push({
                imgIdx: index, description: `魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…`,
                tag: [`#魚料理`, `#和食`, `#DHA`],
                date:dateStr
            })
        }
        res.status(200).json(new ResponseData(true, list, ''));
    } catch (ex) {
        res.status(400).json(new ResponseData(false, null, ex.message));
    }
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
module.exports = {
    getMenu,
    getDiary,
    getColumn
}