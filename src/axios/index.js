import Jsonp from 'jsonp';

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            Jsonp(options.url, {
                param: 'callback'
            }, function (err, response) {
                // to-do
                //debugger;
                if (response && response.status) {
                    if (response.status === 'success') {
                        resolve(response);
                    } else {
                        reject(response.message);
                    }
                }
            })
        });
    }
}