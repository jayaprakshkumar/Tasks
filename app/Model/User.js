
import {fetchGet, fetchPost} from '../Services/ApiService'

export const getUserList = (token, resolve, reject) => {
    try {
        //Check token against existing user
        fetchGet('user/list', null, {
            success: (res) => { resolve(res); },
            fail: (res) => {  reject(res); },
            error: (err) =>{ reject({message:"Unable to connect server"})  }
        }, { 'DTAuthToken': token })
    } catch (e) {
        reject({message:"System error"});
    }
};


