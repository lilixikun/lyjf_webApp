export default function (url, data) {

    return new Promise((res, rej) => {
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).
            then((response) => response.json())
            .then((responseJson) => {
                if (responseJson) {
                    switch (responseJson.code) {
                        case 0:
                            res(responseJson)
                        //未登陆
                        case 2:
                            // goTo(goLogin);
                            break;
                        default:
                            //Toast.fail(data.message, 2);
                            return ({ code: 10000 });
                    }
                }
                res({ code: 10000 })
            })
            .catch((error) => {
                console.error("--------------------" + error);
                throw error;
            });
    })

}