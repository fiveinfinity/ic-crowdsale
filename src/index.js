import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Root } from './components/root';

const render = Root => {
	ReactDOM.render(
		<AppContainer>
			<Root />
		</AppContainer>,
		document.getElementById('root')
	)
};

render(Root);

if (module.hot) {
	module.hot.accept('./components/root', () => { render(Root) })
};

