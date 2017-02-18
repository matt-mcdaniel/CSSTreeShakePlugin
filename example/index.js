import React from 'react';
import {render} from 'react-dom';

import './styles.scss';

const Root = (props) => {
	return (
		<div className="postcard">
			Hello from San Diego!
		</div>
	)
};

render(<Root />, document.getElementById('root'));