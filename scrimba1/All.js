import React from "react"
import Topic from "./Holder/Topic"
import Details from "./Holder/Details"
import Ending from "./Holder/Ending"
export default function All(){
    return(
        <div className="zussamen">
           <Topic />
           <Details />
           <Ending />
        </div>
    )
}