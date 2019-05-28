import Types from '../actions/actionTypes'

export default function onAction(state = {}, action) {
    switch (action.type) {
        case Types.OPEN_ACCOUNT:
            return {
                ...state,
                money: 1
            }
        default:
            return state;
    }
}