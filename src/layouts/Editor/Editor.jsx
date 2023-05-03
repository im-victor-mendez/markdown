import TopLayout from '../../components/TopLayout/TopLayout'
import './Editor.scss'

function Editor({ text, setText }) {
    function onChange(event) {
        const value = event.target.value
        setText(value)
    }

    return (
        <section id='editor-layout'>
            <TopLayout name={`Editor`} />
            <textarea id='editor' onChange={(event) => onChange(event)} value={text}></textarea>
        </section>
    )
}

export default Editor