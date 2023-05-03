import { useEffect, useState } from 'react'
import './TopLayout.scss'
import { getSize, topLayoutDirectory } from './functions'

function TopLayout({ id, name }) {
  const [originalSize, setOriginalSize] = useState()
  const [fullScreen, setFullScreen] = useState(false)

  useEffect(() => {
    setOriginalSize(getSize(id))
  }, [])

  const onClick = () => topLayoutDirectory[name](id, setFullScreen, fullScreen, originalSize)
  
  return (
    <div className='top-layout'>
        <h1>{name}</h1>
        <button className='top-button material-symbols-outlined' onClick={onClick}>Fullscreen_Exit</button>
    </div>
  )
}
export default TopLayout