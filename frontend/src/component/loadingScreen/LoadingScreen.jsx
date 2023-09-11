import './loadingScreen.css'
import logo from '../../Images/LOGO.webp'

const LoadingScreen = () => {
    return (
        <>
            <div className='loading_screen'></div>
            <img src={logo} className='loading_image' alt="logo"/>
        </>
    )
}

export default LoadingScreen