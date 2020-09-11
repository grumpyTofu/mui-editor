import React from 'react';
import { Grid, Card } from '@material-ui/core';
import MuiEditor from 'mui-editor';

const App = () => {
    return (
			<div className='App' >
				<Grid container justify='center' align='center' >
					<Grid item xs={10}>
						<Card className='card'>
							<MuiEditor config={testData} />
						</Card>
					</Grid>
				</Grid>
			</div>
    );
}

export default App;

const testData = {"sectionIdCount":11,"sections":[{"id":8,"contentType":"Title","props":{"text":"Title Text"},"pageOrder":0,"gridSize":{"xs":12,"sm":12,"md":12,"lg":12,"xl":12}},{"id":9,"contentType":"Text","props":{"html":"<p class=\"MuiTypography-root MuiTypography-p MuiTypography-gutterBottom\" style=\"text-align: center;\">Add some content here</p>"},"pageOrder":1,"gridSize":{"xs":12,"sm":12,"md":12,"lg":12,"xl":12}},{"id":10,"contentType":"Button","props":{"text":"Click Here","link":""},"pageOrder":2,"gridSize":{"xs":12,"sm":12,"md":12,"lg":12,"xl":12}}]};
