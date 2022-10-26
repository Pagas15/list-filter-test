import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { typeActionRedux, VARIABLE_GENDERS, VARIABLE_SORT_BY } from '../until/const';
import { InputField, InputRadio, InputRange, InputSelect, InputWrap } from './Inputs';

const Filter = () => {
	const { sortBy, filters: { gender, age } } = useSelector((someState) => someState.user.settings)
	const dispatch = useDispatch();

	const changeState = (type, key) => {
		dispatch({type: type, payload: key})
	}

	const changeName = (name) => {
		changeState(typeActionRedux.CHANGE_FILTER_NAME, name)
	}
	const changeSelectAge = (key) => {
		changeState(typeActionRedux.CHANGE_FILTER_AGE, key)
	}
	const changeSelectGender = (key) => {
		changeState(typeActionRedux.CHANGE_FILTER_GENDER, key)
	}
	const changeSelectSort = (key) => {
		changeState(typeActionRedux.CHANGE_SORT_BY, key)
	}

	return (
		<div className='filter'>
			<p className="blockTitle">Filter</p>
			<div className="filter__block">
				<InputWrap title='Name' >
					<InputField placeholder='Search by name' changeValue={changeName} />
				</InputWrap>
				<InputWrap title='Age'>
					<InputRange state={age} changeState={changeSelectAge} />
				</InputWrap>
				<InputWrap title='Gender'>
					<InputRadio name="gender" activeKey={gender} variants={VARIABLE_GENDERS} changeSelect={changeSelectGender} />
				</InputWrap>
				<InputWrap title='Sort By'>
					<InputSelect activeKey={sortBy} variants={VARIABLE_SORT_BY} changeSelect={changeSelectSort} />
				</InputWrap>
			</div>
		</div>
	)
}

export default Filter