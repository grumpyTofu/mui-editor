# mui-editor

> A library with a minimal layout editor built on Material-UI and a rich text editor built on quill.js for Material-UI design framework

[![NPM](https://img.shields.io/npm/v/mui-editor.svg)](https://www.npmjs.com/package/mui-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install mui-editor @material-ui/core@4.11.0 @material-ui/icons react-quill@1.3.5
```
or
```bash
yarn add mui-editor @material-ui/core@4.11.0 @material-ui/icons react-quill@1.3.5
```

## Layout Editor Usage

```jsx
import React, { useState, useEffect } from 'react';
import MuiEditor from 'mui-editor';

export default props => {

	const [dataFromDB, setDataFromDB] = useState([]);
	useEffect(() => {
		fetch('/api/endpoint/goes/here').then(res => res.json()).then(res => {
			setDataFromDB(res.editorConfig); // Output data will contain the following: (html, editorConfig)
		}).catch(error => {
			console.error(error);
		}); })

	return(
		<MuiEditor
			output={data => console.log(data)}
			data={dataFromDB}
		/>
	);
}

```

## Text Editor Usage

```jsx
import React from 'react';
import { MuiTextEditor } from 'mui-editor';

export default props => {
	return(
		<MuiTextEditor transparent output={data => console.log(data)} />
	);
}

```

## License

MIT © [https://github.com/grumpyTofu](https://github.com/https://github.com/grumpyTofu)
