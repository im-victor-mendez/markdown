import TopLayout from '../../components/TopLayout/TopLayout'
import './Editor.scss'

function Editor({ text, setText }) {
    function onChange(event) {
        const value = event.target.value
        setText(value)
    }

    return (
        <section id='editor-layout'>
            <textarea id='editor' onChange={(event) => onChange(event)} value={text}></textarea>
            <TopLayout id={'editor'} name={`Editor`} />
        </section>
    )
}

export default Editor