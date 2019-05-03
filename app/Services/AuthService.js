import { AsyncStorage } from "react-native";
import { fetchGet, fetchPost } from "./ApiService";

export const TOKEN_KEY = "wtdt-auth-user";




//Stroe API token
export const onSignIn = (val) => {
    AsyncStorage.setItem(TOKEN_KEY, val);
}

//Remove API token
export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

//Check Token exist
export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(TOKEN_KEY).then(token => {
            if (token !== null) {
                resolve(token);
            } else {
                resolve(false);
            }
        }).catch(err => reject(err));
    });
};


export const loadUser = (resolve, reject) => {
    console.log("Check token");
    isSignedIn().then((token) => {
        console.log(token);
        if (!token) {
            resolve(false);
        } else {
            loadUserData(token, resolve, reject);
        }
    }).catch((err) => {
        reject(err);
    });
};

const loadUserData = (token, resolve, reject) => {

    try {
        //Check token against existing user
        fetchGet('user', null, {
            success: (res) => { resolve(res.user); },
            fail: (res) => { resolve(false); },
            error: (err) =>{ reject({message:"Unable to connect server"})  }
        }, { 'DTApiToken': token })
    } catch (e) {
        reject({message:"Unable to connect server"});
    }
};


export const checkUserLogin = (credentials, resolve, reject) => {
    try {
        //Check token against existing user
        fetchPost('logincheck', credentials, {
            success: (res) => { resolve(res.user); },
            fail: (res) => { reject(res); },
            error: (err) =>{ reject({message:"Unable to connect server"})  }
        })
    } catch (e) {
        reject({message:"Unable to connect server"});
    }
};