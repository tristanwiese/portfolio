import "./bio.css"

import React from "react";

import LogoImage from "./components/bio-logo-image";

function Bio() {
    let html = (
        <div className="bio-main">
            <div className="bio-left-wing">
                <LogoImage path='logos/flutter.png' alt='flutter-logo' title='Flutter' />
                <LogoImage path='logos/css.png' alt='flutter-logo' title='CSS' />
                <LogoImage path='logos/java.png' alt='flutter-logo' title='Java' />
                <LogoImage path='logos/js.png' alt='flutter-logo' title='Java Script' />
            </div>
            <div className="cv-container">
                <img src="cv.png" className="cv" alt="tristan-cv"></img>
            </div>
            <div className="bio-right-wing">
                <LogoImage path='logos/php.png' alt='flutter-logo' title='PHP' />
                <LogoImage path='logos/html.png' alt='flutter-logo' title='HTML' />
                <LogoImage path='logos/kotlin.png' alt='flutter-logo' title='Kotlin' />
                <LogoImage path='logos/dart2.png' alt='flutter-logo' title='Dart' />
            </div>
        </div>
    );
    return html;
}

export default Bio