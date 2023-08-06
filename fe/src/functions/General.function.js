import { message } from "antd"
import axios from "axios"


export const requestAPI = (method, url, data, params, isUpload = false) => {
    return new Promise(async (resolve, reject) => {
        try {
            let headers = method === 'post' ?
                (isUpload ?
                    {
                        'Authorization': `Bearer ${localStorage.arentToken}`,
                        "Content-Type": "multipart/form-data",
                    }
                    :
                    {
                        'Authorization': `Bearer ${localStorage.arentToken}`,
                        'Content-Type': 'application/json'
                    })
                : {
                    'Authorization': `Bearer ${localStorage.arentToken}`
                }
            let urlDomain = process.env.API_URL
            let res = await axios({
                method,
                url: urlDomain + url,
                headers,
                data,
                params
            })
            if (res?.data?.message) {
                message.info(res?.data?.message)
            }
            resolve(res.data)
        } catch (err) {
            let message = err?.response?.data?.message ?? err?.message
            reject(message)
        }
    })
}

