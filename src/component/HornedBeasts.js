import React, { Component } from 'react'

class HornedBeasts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }
    counterHandler=()=>{(
        this.setState({
            counter:this.state.counter +1
        })
    )}
    
    render() {
        return (
            
            <div>
                <h2>{this.props.title}</h2>
                <img className='img' src={this.props.imageUrl} alt={this.props.title} />
                <p className='para'>{this.props.description}</p>
                <i onClick={()=>this.counterHandler()} className='i'class="fas fa-heart"></i>
                <span>{this.state.counter}</span>
            </div>
            
        )
    }
}

export default HornedBeasts
