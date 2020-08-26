import React from 'react';
import { Grid, Card } from '@material-ui/core';
import MuiEditor from 'mui-editor';

const testData = [{"id":0,"contentType":"Hero","props":{"image":null},"pageOrder":0},{"id":1,"contentType":"Title","props":{"text":null},"pageOrder":1},{"id":2,"contentType":"Text","props":{"html":null},"pageOrder":2},{"id":4,"contentType":"Collection Item","props":{"primary":null,"secondary":null,"link":null},"pageOrder":3},{"id":3,"contentType":"Button","props":{"text":null,"link":null},"pageOrder":4}];

const App = () => {
    return (
			<div className='App' >
				<Grid container justify='center' align='center' >
					<Grid item xs={10}>
						<Card className='card'>
							<MuiEditor data={testData}/>
						</Card>
					</Grid>
				</Grid>
			</div>
    );
}

export default App;
