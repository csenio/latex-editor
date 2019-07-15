# KaTeX editor

1.

`yarn add draft-js draft-js-katex-plugin draft-js-plugins-editor katex @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome`

2. include

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css"
  integrity="sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j"
  crossorigin="anonymous"
/>
<script
  defer
  src="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.js"
  integrity="sha384-9Nhn55MVVN0/4OFx7EE5kpFBPsEMZxKTCnA+4fqDmg12eCTqGi6+BB2LjY8brQxJ"
  crossorigin="anonymous"
></script>
<script
  defer
  src="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/contrib/auto-render.min.js"
  integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI"
  crossorigin="anonymous"
  onload="renderMathInElement(document.body);"
></script>
```

in your `public/index.html` (see example in this project)

3.

```js
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
```
