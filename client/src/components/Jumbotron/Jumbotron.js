import React from "react";


const Jumbotron = ({children}) =>(
      <div className="container jumbotron create-chat">
        <h1 className="display-3">All Ears</h1>
        <p>All Ears is an interactive website designed For music lovers.
            Visitors to our website have an opportunity to experience acoustic chat rooms which are specifically designed to encourage fruitful discussions content sharing.</p>
          <div>
         <button type="button" className="btn btn-primary btn-lg buttonShowModal" data-toggle="modal" data-target="#myModal">New Groove Room</button>
         {children}
       </div>

      </div>
)

export default Jumbotron;
