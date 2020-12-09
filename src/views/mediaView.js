//component for the media view
//accessed through the OrganizationMainPage component

import React, { Fragment, useState} from "react";
import { render } from "react-dom";

//import the css module
import styles from "../css_modules/generalStyles.module.css";

const MediaView = () => {
    const randomTestText = useState("Images Available");
    const [isClicked, setisClicked] = useState(false);

    return (
        <div className={styles.generalStyle}>
            <h1>This is the media view</h1>
            <p>
                stuff to do:
                <ul>connect to aws and display the media files</ul>
                <ul>allow selection of media files</ul>
                <ul>allow uploading of media</ul>
            </p>
            <button onClick={() => displayMedia()}>Display Available Media</button>
            {
                isClicked == true &&
                <div className={styles.leftColumnStyle}>
                <h1>
                    {randomTestText}
                </h1>
                {/* Display the image in the images folder */}
                <img src = "../images/egg.gif"/>
                </div>
            }
        </div>
    );



        //Eventually this will upload media from Database. For now it just 
        //makes some text appear as a trial
    function displayMedia(){
        setisClicked(true);
    }

}

export default MediaView;