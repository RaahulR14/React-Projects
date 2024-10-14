import React from "react";
import { useParams } from "react-router-dom";

function Admin(){
    const {aId} = useParams()
    return(
        <div>Admin: {aId}</div>
    )
}

export default Admin