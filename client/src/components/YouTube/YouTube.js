import React from "react";
import API from "../../utils/API";



function YouTube({children}){

    return (
            <div className="youtube-holder">

            {children}
            {/* <iframe className="youtube" width="100%" height="315" src={"https://www.youtube.com/embed/" + props.video_id} frameborder="0" allowfullscreen></iframe> */}

        </div>

    )
}




export default YouTube;
