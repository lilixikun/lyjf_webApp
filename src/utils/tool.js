/**
* 
* @desc   判断是否为手机号
* @param  {String|Number} str 
* @return {Boolean} 
*/
export function isPhoneNum(str) {
    return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str)
}

/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
export function parseQueryString(url) {
    url = !url ? window.location.href : url;
    if (url.indexOf('?') === -1) {
        return {};
    }
    var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
    if (search === '') {
        return {};
    }
    search = search.split('&');
    var query = {};
    for (var i = 0; i < search.length; i++) {
        var pair = search[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

/**
 * 
 * @desc   对象序列化
 * @param  {Object} obj 
 * @return {String}
 */
export function stringfyQueryString(obj) {
    if (!obj) return '';
    var pairs = [];

    for (var key in obj) {
        var value = obj[key];

        if (typeof (value) === "object") {
            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(value)))
            continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
}