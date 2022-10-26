import debounce from 'lodash.debounce';
import React, { useState } from 'react'

const InputField = ({placeholder, changeValue, valueBase = ''}) => {
	const [value, setValue] = useState(valueBase);

	const debounceOnChange = debounce(() => {console.log('Test text');}, 1000)

	const onChange = (e) => {
		setValue(e.target.value)
		debounceOnChange()
	}


	return (
		<label className='inputBox'>
			<input type='text' placeholder={placeholder} onChange={onChange} value={value} />
		</label>
	)
}

export default InputField