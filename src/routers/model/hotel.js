import api from '../../api';
import { http } from '../../utils';

//酒店列表
export const findHotelList = (data) => http(api.hotel.findHotelList, data); 