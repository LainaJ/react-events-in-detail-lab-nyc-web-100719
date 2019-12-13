// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component {

    handleClick = (e) => {
      let xYCoord = [e.clientX, e.clientY]
      this.props.onReceiveCoordinates(xYCoord)
    }


    render () {
        return (
            <div>
                <button onClick={this.handleClick}>Coordinates Button</button>
            </div>
        )
    }






}


export default CoordinatesButton