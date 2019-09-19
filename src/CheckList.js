import React from 'react';
import './App.css';

function CheckList(props) {
	const checkListStyle = {
		fontStyle: 'italic',
		color: 'blue',
		textDecoration: 'line-through'
	};
	return (
		<div className='style'>
			<input type='checkbox' onChange={() => props.Destination(props.item.id)} />
			<p style={props.item.done ? checkListStyle : null}>{props.item.destination}</p>
		</div>
	);
}

export default CheckList;
