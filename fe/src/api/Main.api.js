import { requestAPI } from "../functions/General.function"
import moment from 'moment'


export const getMenuAPI = async (section) => {
    return new Promise(async (resolve, reject) => {
        if(process.env.NODE){
            try {
                let resMenu = await requestAPI('get', '/api/main/menu', null, { section })
                resolve(resMenu.data)
            } catch (ex) {
                reject(ex)
            }
        }else{
            try {
                let resMenu = getMenu(section)
                resolve(resMenu)
            } catch (ex) {
                reject(ex)
            }
        }


    })

}

export const getDiaryAPI = async (section) => {
    return new Promise(async (resolve, reject) => {
        if(process.env.NODE){
            try {
                let resDiary = await requestAPI('get', '/api/main/diary', null, { section })
                resolve(resDiary.data)
            } catch (ex) {
                reject(ex)
            }
        }else{
            try {
                let resDiary = getDiary(section)
                resolve(resDiary)
            } catch (ex) {
                reject(ex)
            }
        }


    })

}

export const getColumnAPI = async (section) => {
    return new Promise(async (resolve, reject) => {
        if(process.env.NODE){
            try {
                let resCol = await requestAPI('get', '/api/main/column', null, { section })
                resolve(resCol.data)
            } catch (ex) {
                reject(ex)
            }
        }else{
            try {
                let resCol = getColumn(section)
                resolve(resCol)
            } catch (ex) {
                reject(ex)
            }
        }


    })

}
const session = ['Morning', 'Lunch', 'Dinner', 'Snack']
const getMenu = async (section) => {
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
    return list
}

const getDiary = async (section) => {
    if (section == 10) {
        throw new Error('All data was loaded')
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
    return list
}

const getColumn = async (section) => {
    if (section == 10) {
        throw new Error('All data was loaded')
     }
     let today = moment()
     let date = today.add('days', section)
     let dateStr = date.format('YYYY.MM.DD HH:mm')
     let list = []
     for (let index = 0; index < 8; index++) {
         list.push({
             imgIdx: index, description: `魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…`,
             tag: [`#魚料理`, `#和食`, `#DHA`],
             date: dateStr
         })
     }
     return list
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}