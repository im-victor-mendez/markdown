import './Preview.scss'
import DOMPurify from "dompurify"
import { marked } from "marked"
import TopLayout from '../../components/TopLayout/TopLayout'

function Preview({ text }) {
    const markedText = marked.parse(text)
    marked.setOptions({ breaks: true })

  return (
    <section id='preview-layout'>
      <TopLayout name={`Preview`} />
      <div id='preview' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(markedText) }}></div>
    </section>
  )
}

export default Preview