function Editor({ text, setText }) {
    function onChange(event) {
        const value = event.target.value
        setText(value)
    }

    return (
        <textarea id='editor' onChange={(event) => onChange(event)} value={text}></textarea>
    )
}

export default Editor