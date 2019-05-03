

export const server = {
    AppKey: 'vZKBi8WkhbdlXGBsbN0GA9qsRl0H1XtTEdhfttwf639td0M173hsSYz7gQxtGPxc',
    url: 'Api Url Here',
};

export const apiCallback = {
    success: null,
    fail: null,
    error: null,
};

export const apiHeader = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'DTAppKey': server.AppKey
};



export const fetchApi = (path, data, method, callback, header) => {

    callback = { ...apiCallback, ...callback };
    header = { ...apiHeader, ...header };
    //console.log('network start', server.url + path, header, data);
    try{
        return fetch(server.url + path, {
            method: method,
            headers: header,
            body: data?JSON.stringify(data):null
        })
        .then((response) => { return response.json(); })
        .then((responseJson) => {
            if (!responseJson.status) {
                //throw new Error(responseJson.msg);
                if (callback.fail) callback.fail(responseJson);
            } else {
                if (callback.success) callback.success(responseJson);
            }
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
            if (callback.error) callback.error(error.me);
        });
    }catch(e){
        callback.error(e.message);
    }
}

export const fetchGet = (path, data, callback, header) => {
    return fetchApi(path, data, 'GET', callback, header);
}
export const fetchPost = (path, data, callback, header) => {
    return fetchApi(path, data, 'POST', callback, header);
}
export const fetchPut = (path, data, callback, header) => {
    return fetchApi(path, data, 'PUT', callback, header);
}
export const fetchDelete = (path, data, callback, header) => {
    return fetchApi(path, data, 'DELETE', callback, header);
}