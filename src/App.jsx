import './App.scss'
import { useState } from "react"
import Editor from "./layouts/Editor/Editor"
import Preview from "./layouts/Preview/Preview"
import { defaultText } from "./constants/texts"

function App() {
  const [text, setText] = useState(defaultText)

  return (
    <main id="App">
      <Editor text={text} setText={setText} />
      <Preview text={text} />
    </main>
  )
}

export default App
