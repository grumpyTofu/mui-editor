/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import React from 'react';
// { createRef, useRef } from 'react';

import { Tooltip, IconButton, Grid } from '@material-ui/core';
// import { StarIcon } from '@primer/octicons-react';
import SaveIcon from '@material-ui/icons/Save';
import styles from './toolbar.module.css';


// Todo: fix insertStart function - 'error quill is not found'
const insertStar = () => {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, "★");
    this.quill.setSelection(cursorPosition + 1);
}

const toolbarHandlers = [
    { name: 'insertStar', function: insertStar }
];

export const getHandlers = () => {
    let handlers = {};
    for(const handler of toolbarHandlers) {
      handlers[handler.name] = handler.function;
    }
    return handlers;
}

export default props => {
	const modern = props.modern || false;
	return (
		<div id="toolbar">
      <Grid container>
        <Grid item xs={12} sm={modern ? 12 : 11} className={styles.toolbarButtons}>
          <span className="ql-formats">
              <select className="ql-header" defaultValue="" onChange={e => e.persist()}>
                  <option value="1" />
                  <option value="2" />
                  <option value="3" />
                  <option value="4" />
                  <option value="5" />
                  <option value="6" />
                  <option value="" />
              </select>
          </span>
          <span className="ql-formats">
              <Tooltip title="Bold" arrow><button className="ql-bold" /></Tooltip>
              <Tooltip title="Italic" arrow><button className="ql-italic" /></Tooltip>
              <Tooltip title="Underline" arrow><button className="ql-underline" /></Tooltip>
              <Tooltip title="Strike-through" arrow><button className="ql-strike" /></Tooltip>
          </span>
          <span className="ql-formats">
              <Tooltip title="Subscript" arrow><button className="ql-script" value="sub"/></Tooltip>
              <Tooltip title="Superscript" arrow><button className="ql-script" value="super" /></Tooltip>
          </span>
          <span className="ql-formats">
              <Tooltip title="Quote" arrow><button className="ql-blockquote" /></Tooltip>
              <Tooltip title="Code" arrow><button className="ql-code-block" /></Tooltip>
          </span>
          <span className="ql-formats">
							{/* Todo: Add support for ordered lists in saveData function */}
              {/* <Tooltip title="Ordered list" arrow><button className="ql-list" value="ordered"/></Tooltip> */}
              <Tooltip title="Bullet List" arrow><button className="ql-list" value="bullet"/></Tooltip>
              <Tooltip title="Neg. Indent" arrow><button className="ql-indent" value="-1"/></Tooltip>
              <Tooltip title="Indent" arrow><button className="ql-indent" value="+1"/></Tooltip>
              <select className="ql-align" defaultValue="" onChange={e => e.persist()}>
                  <option value="" />
                  <option value="center" />
                  <option value="right" />
                  <option value="justify" />
              </select>
          </span>
          <span className="ql-formats">
              <Tooltip title="Link" arrow><button className="ql-link" /></Tooltip>
              <Tooltip title="Image" arrow><button className="ql-image" /></Tooltip>
          </span>
          {/* <span className="ql-formats">
              <Tooltip title="Star" arrow><button className="ql-insertStar"><StarIcon /></button></Tooltip>
          </span> */}
          <span className="ql-formats">
              <Tooltip title="Bold" arrow><button className="ql-clean" /></Tooltip>
          </span>
        </Grid>
				{!modern &&
					<Grid item xs={12} sm={1} className={styles.saveButton}>
						<span className="ql-formats">
								<Tooltip title="Save" arrow><IconButton className={styles.iconButton} onClick={() => props.saveData()}><SaveIcon /></IconButton></Tooltip>
						</span>
					</Grid>
				}
      </Grid>
    </div>
	);
}
