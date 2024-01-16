import './appBarButtons.css';

function AppBarButton({text, path}){

    function clickHandler(){
        window.location.href = path;
    }

    let pathname = '.' + window.location.pathname;
    let opacity = pathname === path ? 1 : 0

    let html = (
        <div className='app-bar-button-main'>
            <div className='app-bar-buttons-relative'>
                <div className='app-bar-button-container'>
                    <button className='app-bar-button prevent-select' onClick={clickHandler}>
                        {text}
                    </button>
                </div>
                <div className='button-shadow'></div>
            </div>
            <img src='logo192.png' className='active-page-app-bar-marker' alt='current-page-marker'
                style= {{opacity: opacity}}>
            </img>
        </div>
    );
    return html;
}

export default AppBarButton;