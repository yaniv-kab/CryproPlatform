import {COIN_LIST_REQUEST, COIN_LIST_SUCCESS, COIN_LIST_FAIL} from '../constants/coinsConstant'

export const coinListReducer = (state = { coins : [] }, action) => {
    switch(action.type){
        case COIN_LIST_REQUEST:
            return { coins: [] }
        case COIN_LIST_SUCCESS:
            return { coins:action.payload}
        case COIN_LIST_FAIL:
            return { error:action.payload}
        default:
            return state
    }

}

