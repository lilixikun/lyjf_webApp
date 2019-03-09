const baseUrl = "http://203.110.179.27:60409";
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
    }
}