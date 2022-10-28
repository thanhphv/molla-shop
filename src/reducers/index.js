import { combineReducers } from "redux";
import carts from './carts'
import register from './register'
import user from './user'
import checkout from './checkout'
import sortName from "./sortName";
import sortPrice from './sortPrice'

const myReducers = combineReducers({
    carts,
    register,
    user,
    checkout,
    sortName,
    sortPrice
})

export default myReducers