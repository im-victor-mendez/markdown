import './TopLayout.scss'
function TopLayout({ name }) {
  return (
    <div className='top-layout'>
        <h1>{name}</h1>
        <button className='top-button material-symbols-outlined'>Fullscreen_Exit</button>
    </div>
  )
}
export default TopLayout