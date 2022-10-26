import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./usersReducers";


export const rootReducer = combineReducers({
	user: userReducer
})