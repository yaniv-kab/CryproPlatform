import { COIN_LIST_REQUEST, COIN_LIST_SUCCESS, COIN_LIST_FAIL  } from "../constants/coinsConstant";
import coins from "../data/Coins";

export const getCoins = () => (dispacth) => {
    try {
        dispacth({type: COIN_LIST_REQUEST})
        const data = [...coins]
        dispacth({
            type:COIN_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispacth({
            type:COIN_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
}
