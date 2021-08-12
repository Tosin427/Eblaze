import React from 'react'
import '../layout.css'

const BreadCrumb = ({children, icon}) => {
    return <div className="bread-crumb">
                {icon ? icon : <i className="fa fa-user"></i>} {children}
            </div>
}

export default BreadCrumb;