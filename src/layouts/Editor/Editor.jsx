import './Editor.scss'

function Editor({ text, setText }) {
    function onChange(event) {
        const value = event.target.value
        setText(value)
    }

    return (
        <section id='editor-layout'>
            <div className='top-layout'>
                <h1>Editor</h1>
                <button className='top-button'>Resize</button>
            </div>
            <textarea id='editor' onChange={(event) => onChange(event)} value={text}></textarea>
        </section>
    )
}

export default Editor