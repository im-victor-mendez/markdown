import './Preview.scss'
import DOMPurify from "dompurify"
import { marked } from "marked"
import TopLayout from '../../components/TopLayout/TopLayout'

function Preview({ text }) {
    const markedText = marked.parse(text)
    const textSanitized = DOMPurify.sanitize(markedText)
    marked.setOptions({ breaks: true })

  return (
    <section id='preview-layout'>
      <div id='preview' dangerouslySetInnerHTML={{ __html: textSanitized }}></div>
      <TopLayout id='editor-layout' name={`Preview`} />
    </section>
  )
}

export default Preview