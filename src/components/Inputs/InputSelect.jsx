import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const VARIABLE_SORT_BY = [{key: 'name', value: 'Name'}, {key: 'date', value: 'Date of birth'}, {key: 'city', value: 'City'}, {key: 'custom', value: 'Custom sort'}]


const InputSelect = ({ activeKey = null, changeSelect}) => {
  const [personName, setPersonName] = useState(activeKey || VARIABLE_SORT_BY[0].key);

  const handleChange = (event) => {
    const {target: { value }} = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
    changeSelect && changeSelect(value)
  };

	return (
		<div className='inputBoxSelect'>
			<FormControl sx={{ width: '100%' }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={personName}
          onChange={handleChange}
        >
					{VARIABLE_SORT_BY.map((item) => (
            <MenuItem
              key={item.key}
              value={item.key}
            >
              {item.value}
            </MenuItem>
          ))}
        </Select>
			</FormControl>
		</div>
	)
}

export default InputSelect