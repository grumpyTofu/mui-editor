import React from 'react';
import { Grid, Card } from '@material-ui/core';
import { LayoutEditor } from 'mui-editor';

const App = () => {
    return (
			<div className='App' >
				<Grid container justify='center' align='center' >
					<Grid item xs={10}>
						<Card className='card'>
							<LayoutEditor />
						</Card>
					</Grid>
				</Grid>
			</div>
    );
}

export default App;
