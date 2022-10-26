export const path = {
	MAIN: "/",
	CARD: "/card"
};

export const settingsApis = {
	seed: '8ad7dc7f67b389d0',
	result: 50,
	page: 1,
	version: '1.4'
}

export const apiServer = `https://randomuser.me/api/?seed=${settingsApis.seed}`

export const MAX_GET_USERS = 500;

export const typeActionRedux = {
	PUSH_LIST: 'PUSH_LIST',
	CHANGE_SETTING: 'CHANGE_SETTING',
	CHANGE_SORT_BY: 'CHANGE_SORT_BY',
	CHANGE_FILTER_GENDER: 'CHANGE_FILTER_GENDER',
	CHANGE_FILTER_AGE: 'CHANGE_FILTER_AGE',
	CHANGE_FILTER_NAME: 'CHANGE_FILTER_NAME',
}

export const VARIABLE_GENDERS = [{key: 'male', value: 'Male'}, {key: 'female', value: 'Female'}];
export const VARIABLE_SORT_BY = [{key: 'name', value: 'Name'}, {key: 'date', value: 'Date of birth'}, {key: 'city', value: 'City'}, {key: 'custom', value: 'Custom sort'}]
