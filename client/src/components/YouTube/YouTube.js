import React from "react";
import API from "../../utils/API";

function YouTube(props){

    return (
      <div className="row">
        <div className="container">
          <div className="col-sm-12 col-md-12 col-lg-6 text-center">
            <div className="youtube-holder">
              <iframe className="youtube" width="100%" height="315" src={"https://www.youtube.com/embed/" + props.id} frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 text-center">
             <div className="jumbotron chat-mod text-center" id="performerImg">

            </div>
          </div>
        </div>
      </div>
    )
}





export default YouTube;
