import React from 'react'
import './styles.css'

const AppHeader = (props) => {
    return (
        <div className="text-center">
            <img src={props.image} alt="App Logo" className="img-fluid"/>
            <h1>Welcome to Minimalists</h1>
            <p className="lead">A simple todo list app</p>
        </div>
    )
}

export default AppHeader
