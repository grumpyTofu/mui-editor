# mui-editor

> A rich text editor built on quill.js for Material-UI design framework

[![NPM](https://img.shields.io/npm/v/mui-editor.svg)](https://www.npmjs.com/package/mui-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install mui-editor @material-ui/core@4.11.0 @material-ui/icons react-quill@1.3.5
```
or
```bash
yarn add mui-editor @material-ui/core@4.11.0 @material-ui/icons react-quill@1.3.5
```

## Usage

```jsx
import React from 'react';

import Editor from 'mui-editor';

export default props => {
	return(
		<Editor transparent output={data => console.log(data)} />
	);
}

```

## License

MIT © [https://github.com/grumpyTofu](https://github.com/https://github.com/grumpyTofu)
