import './appBar.css'
import AppBarButton from './appBarButtons';

function AppBar(){
    
    let html = (
        <div className="app-bar-container centre-text">
            <div className='star'></div>
            <div className='leading-container'>

            </div>
            <div className='app-bar-centre-container'>
                <div className="app-bar-title">
                    Tristan Wiese Portfolio
                </div>
                <div className='row app-bar-button-row'>
                    <AppBarButton text="Who am I" path='./bio'/>
                    <AppBarButton text="Portfolio" path='./portfolio'/>
                    <AppBarButton text="Current Project" path='./project'/>
                    <AppBarButton text="Learning" path='./'/>
                </div>
                <div className='app_bar_extend_arrow'>
                    <i className="material-icons" id='arrow'>expand_more</i>
                </div>
            </div>
            <div className='trailing-logo-container centre-text'>
                <img src='logo192.png' alt='app-bar-trailing-logo' className='trailing-logo'></img>
            </div>
        </div>
    );

    return html;
}

export default AppBar

