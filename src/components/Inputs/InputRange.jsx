import React, { useState } from 'react'
import Slider from '@mui/material/Slider'

const InputRange = ({state = [1, 25], changeState}) => {

	const [range, setRange] = useState(state)

	const handleChange = (event, newValue) => {
		setRange(newValue);
	}

	const onChangeCommitted = (event, newValue) => {
		changeState && changeState(newValue);
	}

	const valuetext = (value) => `${value}`

	return (
		<div className='inputBoxRange'>
			<Slider
				onChangeCommitted={onChangeCommitted}
				min={1}
				getAriaLabel={() => 'Temperature range'}
				value={range}
				onChange={handleChange}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
			/>
			<p className="inputBoxRange__num">{`${range[0]} - ${range[1]}`}</p>
		</div>
	)
}

export default InputRange