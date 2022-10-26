import React from 'react'

const InputWrap = ({title, children}) => {
	return (
		<div className='inputBoxWrapper'>
			<div className="inputBoxWrapper__title">{title}</div>
			{children}
		</div>
	)
}

export default InputWrap