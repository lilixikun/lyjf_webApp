const baseUrl = "http://203.110.179.27:60409";
export default {
    hotel: {
        findHotelById: baseUrl + "/lyjfapp/api/v1/hotel/findHotelById",
        findHotelList: baseUrl + "/lyjfapp/api/v1/hotel/findByCondition",
        findRoomById: baseUrl + "/lyjfapp/api/v1/hotelOrder/findRoomsByRoomId",
        hotelOrder: baseUrl + "/lyjfapp/api/v1/hotelOrder/saveOrUpdate",
    }
}