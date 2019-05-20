const baseUrl = "https://app.wedotting.com"
//http://appuat.wedotting.com
//http://203.110.179.27:60409
export default {
    hotel: {
        findHotelById: baseUrl + "/lyjfapp/api/v1/hotel/findHotelById",
        findHotelList: baseUrl + "/lyjfapp/api/v1/hotel/findByCondition",
        findRoomById: baseUrl + "/lyjfapp/api/v1/hotelOrder/findRoomsByRoomId",
        hotelOrder: baseUrl + "/lyjfapp/api/v1/hotelOrder/saveOrUpdate",
    },
    travel: {
        findByCondition: baseUrl + "/lyjfapp/api/v1/travel/findByCondition", //列表查询
        orderDetail: baseUrl + "/lyjfapp/api/v1/travel/orderDetail", //订单详情
        detail: baseUrl + "/lyjfapp/api/v1/travel/detail", //定制游详情
        orderAdd: baseUrl + "/lyjfapp/api/v1/travel/orderAdd", //预定定制游
    },
    shop: {
        shopList: baseUrl + "/lyjfapp/api/v1/goods/findOnStockByCondition",  //查询在售商品
        goodsDetail: baseUrl + "/lyjfapp/api/v1/goods/findDetailByGoodsId", //商品详情
        deleteCart: baseUrl + "/lyjfapp/api/v1/cart/deleteCart", //删除购物车
        addCart: baseUrl + "/lyjfapp/api/v1/cart/addItemCart",//加入购物车
        updateCart: baseUrl + "/lyjfapp/api/v1/cart/updateCart", //更新购物车
        clearCart: baseUrl + "/lyjfapp/api/v1/cart/clearCart",   //清空购物车
        listMyCart: baseUrl + "/lyjfapp/api/v1/cart/listMyCart",  //我的购物车
        addOrder: baseUrl + "/lyjfapp/api/v1/shop/addOrder"
    },
    // restaurant: {
    //     getDataList:baseUrl+ "/lyjfapp/api/v1/restaurant/listRestaurantByConditionForApp",
    //     getDetail:baseUrl+ "/lyjfapp/api/v1/restaurant/findRestaurantByIdForApp"
    // },

    video: {
        videoList: baseUrl + "/lyjfapp/api/v1/video/homeImage/list"
    },
    //榜单
    ranklist: {
        destinationList: baseUrl + "/lyjfapp/api/v1/ranklist/findAllDestinationList",  //目的地列表
        getRankList: baseUrl + "/lyjfapp/api/v1/ranklist/findByCondition",  //根据目的地查询绑定
        findRankDetail: baseUrl + "/lyjfapp/api/v1/ranklistDetail/findById" //查询绑定详情 
    }
}