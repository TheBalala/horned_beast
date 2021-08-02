import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap/'

class HornedBeasts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    counterHandler = () => {
        (
            this.setState({
                counter: this.state.counter + 1
            })
        )
    }

    render() {
        return (

            <>
                {/* <h2>{this.props.title}</h2>
                <img className='img' src={this.props.imageUrl} alt={this.props.title} />
                <p className='para'>{this.props.description}</p>
                <i onClick={()=>this.counterHandler()} className='i'class="fas fa-heart"></i>
                <span>{this.state.counter}</span> */}
                <Card >
                    <Card.Img className='carded' variant="top" onClick={() => this.counterHandler()} src={this.props.imageUrl} width={200} height={280} />
                    <Card.Body>
                        <Card.Title className="Title">{this.props.title}</Card.Title>
                        <Card.Text style={{alignItems:'center'}}>
                            {this.props.description}
                        </Card.Text>
                        <i onClick={() => this.counterHandler()} className='i' class="fas fa-heart"></i>
                        <span>{this.state.counter}</span><br />
                        <Button variant="info">click me </Button>
                    </Card.Body>
                </Card>
            </>

        )
    }
}

export default HornedBeasts
