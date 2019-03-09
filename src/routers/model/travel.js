import api from '../../api';
import { http } from '../../utils';

//查询定制游列表
export const getTravelList = (data) => http(api.travel.findByCondition, data);