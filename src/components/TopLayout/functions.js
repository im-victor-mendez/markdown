export const topLayoutDirectory = {
    "Editor": resize,
    "Preview": hide
}
  
function resize(id, setFullScreen, fullScreen, originalSize) {
    setFullScreen(!fullScreen)
    
    const layout = document.getElementById(id)
    const height = 'calc(100vh - 5rem)'
  
    if (!fullScreen) layout.style.height = height
    else layout.style.height = `${originalSize.height}px`
}
  
function hide(id, setFullScreen, fullScreen) {
    setFullScreen(!fullScreen)
    const layout = document.getElementById(id)
    if (!fullScreen) layout.style.display = 'none'
    else layout.style.display = 'flex'
}
  
export function getSize(id) {
    const layout = document.getElementById(id)
    const height = layout.offsetHeight
    return { height }
}