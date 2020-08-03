import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import Editor from 'mui-editor';
import 'mui-editor/dist/index.css';

const App = () => {
    return (
			<div className='App' >
				<Grid container justify='center' align='center' >
					<Grid item xs={10}>
						<Card className='card'>
							<CardContent>
								<Editor transparent data="<p>testing</p>" output={data => console.log(data)} />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
    );
}

export default App;
