import React, { Component } from "react"

class Header extends Component {
    render() {
        const headerStyle = {
            padding: "20px 0",
            lineHeight: "2em"
        }
        return (
            <header style={headerStyle}>
                <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
                    To Do List
                </h1>
            </header>
        )
    }
}

export default Header