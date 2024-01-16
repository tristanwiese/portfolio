import "./pageNotFound.css"

function PageNotFound(){
    let html = (

    <div className='centre-main'>
        <div className="error-column">
            <div className="error">
                EROR 404
            </div>
            <div className="error-text">
                Page Not Found
            </div>
        </div>
    </div>

    );
    return html;
}

export default PageNotFound