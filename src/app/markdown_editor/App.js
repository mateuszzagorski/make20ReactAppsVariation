import React, { useState } from "react";
import marked from "marked";
import ReactMarkdown from "react-markdown";

import "./markdown_editor.scss";

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState(`
  # usage (more info here: https://github.com/remarkjs/react-markdown)

  # h1
  ## h2
  ### h3 
  #### h4
  ##### h5
  ###### h6
  
  - list
  * list
  
  > blockquote

  ** bold **

table:

| **a** | **b** |
| - | - |
| text | text |
  
  `);

    function handleTextAreaChange(e) {
        setMarkdown(e.target.value);
    }

    return (
        <div className="markdown_editor-app-container">
            <div className="markdown_editor-application">
                <textarea onChange={handleTextAreaChange} value={markdown} />

                {/* <div className="preview" dangerouslySetInnerHTML={{ __html:marked(markdown) }}></div> */}
                <ReactMarkdown className="preview" source={markdown} />
            </div>
        </div>
    );
}
