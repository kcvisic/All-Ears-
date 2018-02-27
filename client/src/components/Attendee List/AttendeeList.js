import React, { Component
} from "react";


const ListOfAttendees = ({children}) => (
    <ul className="list-group">
        {children}
    </ul>
)

export default ListOfAttendees;
