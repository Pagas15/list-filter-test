import React, { useState } from 'react'

const InputRadio = ({variants, activeKey = null, name, changeSelect}) => {
	const [active, setActive] = useState(activeKey || variants[0].key);
	
	const onChange = (e) => {
		const value = e.target.value;
		setActive(value)
		changeSelect && changeSelect(value)
	}

	const variantItems = variants.map(item => {
		const checked = active === item.key;
		const className = checked ? 'inputBoxRadio__item active' : 'inputBoxRadio__item';

		return (<label className={className} key={item.key}>
			<input 
				type="radio" 
				name={name} 
				value={item.key}
				checked={checked} 
				onChange={onChange}
			/>
			<span className="inputBoxRadio__block">
				{item.value}
			</span>
		</label>)
	})

	return (
		<div className='inputBoxRadio'>
			{variantItems && variantItems}
		</div>
	)
}

export default InputRadio