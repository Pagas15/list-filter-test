import { typeActionRedux } from "../../until/const";

const initialState = {
	listUsers: [],
	listIdUsers: [],
	islouding: false,
	settings: {
		sortBy: 'name',
		filters: {
			gender: 'male',
			age: [1, 25],
			name: ''
		},
		result: 50,
		page: 1,
	}
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case typeActionRedux.CHANGE_SORT_BY: 
			return {
				...state, 
				settings: {
					...state.settings,
					sortBy: action.payload
				}
			}
		case typeActionRedux.CHANGE_FILTER_GENDER: 
			return {
				...state, 
				settings: {
					...state.settings,
					filters: {
						...state.settings.filters,
						gender: action.payload
					}
				}
			}
		case typeActionRedux.CHANGE_FILTER_AGE: 
			return {
				...state, 
				settings: {
					...state.settings,
					filters: {
						...state.settings.filters,
						age: action.payload
					}
				}
			}
		case typeActionRedux.PUSH_LIST:
			const newList = [];
			const newKeys = [];

			action.list.forEach(item => {
				if(!(state.listIdUsers.find(key => key === item.value))){
					newList.push(item)
					newKeys.push(item.value)
				}
			})

			const stateNew1 = {
				...state,
				listUsers: [...state.listUsers, ...newList],
				listIdUsers: [...state.listIdUsers, ...newKeys]
			}

			return stateNew1;
		case typeActionRedux.CHANGE_SETTING: 
			const stateNew2 = {...state};
			stateNew2.listUsers = [];
			stateNew2.listIdUsers = [];
			return stateNew2;
		default:
			return state;
	}
}

export const getUsersCreator = () => (dispatch) => {

}