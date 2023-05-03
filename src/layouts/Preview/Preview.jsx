import DOMPurify from "dompurify"
import { marked } from "marked"

function Preview({ text }) {
    const markedText = marked.parse(text)
    marked.setOptions({ breaks: true })

  return (
    <section id='preview'
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(markedText) }}
    >
    </section>
  )
}

export default Preview