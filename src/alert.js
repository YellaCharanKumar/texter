// import React, { useState } from 'react'
import React from 'react'

export default function Alert(props){
    
    return(
        props.message&&<div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success</strong> {props.message}
        {/*  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */ }
      </div>
    );
}
