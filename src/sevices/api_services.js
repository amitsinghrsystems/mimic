import axios from 'axios'


function handleError(error, reject) {
    return reject(error)
}

const handleResponse = (response, resolve) => {
    return resolve(response)
}

const axiosMethod = (method, url, body , options) => {
    const config = {}
    if (options) {
        config.headers = { ...options }
      //  config.body = body
    }
    if (method == 'post' || method == 'put') {
        return axios[method](url, body, config)
    } else {
        return axios[method](url, config)
    }
}

export const _fetch = (method, url, body, options) => {
    return new Promise((resolve, reject) => {
        return axiosMethod(method, url, body, options)
          //  .then((e) => e.text())
            .then(function (response) {
                handleResponse(response, resolve)
                return;
            })
            .catch(function (error) {
                handleError(error, reject)
                return;
            });
    });
}

