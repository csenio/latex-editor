import React, { useState } from "react";

import LatexEditor from "./editor";
import "./katex.css";

import { EditorState } from "draft-js";

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className="App">
      <LatexEditor editorState={editorState} setEditorState={setEditorState} />
    </div>
  );
}

export default App;
