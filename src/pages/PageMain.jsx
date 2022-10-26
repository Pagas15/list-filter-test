import React from 'react'
import Filter from '../components/Filter'
import ListUsers from '../components/ListUsers'

const PageMain = () => {
	return (
		<div className='wrapper pageMain'>
			<Filter />
			<ListUsers />
		</div>
	)
}

export default PageMain