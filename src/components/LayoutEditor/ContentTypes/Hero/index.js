import React from 'react';
import { image } from './defaultImage';

export default props => {
	return (
		<img src={props.img || image} width='100%' height='auto' style={{ maxHeight: '100%' }} />
	);
}
