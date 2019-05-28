import Types from './actionTypes';

const defaultState = {
    isLogin: false,
    userName: "",
    userId: "",
    beCode: ""
}

export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.LOGIN_IN_INIT:

            break;

        default:
            return state;
    }
}