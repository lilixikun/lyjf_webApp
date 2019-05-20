export default function (url, data) {
    console.log(url, data);

    return new Promise((res, rej) => {
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).
            then((response) => {
                if (response.ok) {
                    // console.log(RootNavigator);

                    return response.json();
                } else {
                    alert("服务器繁忙，请稍后再试！");
                }
            })
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
                // rej(error)
                alert("网络异常,稍后再试!");
                throw error;
            });
    })

}