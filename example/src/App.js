import React from 'react';

import { Grid, Card, CardContent, CardActions, Button } from '@material-ui/core';

import Editor from 'mui-editor';
import 'mui-editor/dist/index.css';

const App = () => {
    return (
			<div className='App' >
				<Grid container justify='center' align='center' >
					<Grid item xs={10}>
						<Card>
							<CardContent>
								<Editor transparent/>
							</CardContent>
							<CardActions>
								<Button onClick={() => alert('clicked')}>Submit</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</div>
    );
}

export default App;
