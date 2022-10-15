import React from 'react'

const Alert = (props) => {
  // return (
  //   <div>
  //         <div className="alert alert-primary" role="alert">
  //               {props.message}
  //           </div>
  //   </div>
  // )
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                     <strong>{props.alert.msg}</strong>
                  </div>
        )

}

export default Alert
