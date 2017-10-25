import React, {Component} from 'react';
import Button from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style.scss';




export default class App extends Component {
	render() {
		return <main>
				<h1>
					Hello World!!
				</h1>
				<MuiThemeProvider>
					<Button>
						Push me
					</Button>
				</MuiThemeProvider>
		</main>
	}
}