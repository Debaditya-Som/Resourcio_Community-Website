import './loadingScreen.css'
import logo_new from '../../Images/RC.png'

const LoadingScreen = () => {
    return (
        <>
            <div className='loading_screen'></div>
            <img src={logo_new} className='loading_image' alt="logo"/>
        </>
    )
}

export default LoadingScreen