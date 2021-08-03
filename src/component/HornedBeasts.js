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
    ShowList=()=>{
        let data ={
            imageUrl: this.props.imageUrl,
            title:this.props.title,
            description: this.props.description
        }
        this.props.showDataList(data)
    }

    render() {
        return (

            <>
                <Card bg='light'>
                    <Card.Img className='carded' variant="top" onClick={() => this.counterHandler()} src={this.props.imageUrl} width={200} height={280} />
                    <Card.Body>
                        <Card.Title className="Title">{this.props.title}</Card.Title>
                        <Card.Text style={{ alignItems: 'center' }}>
                            {this.props.description}
                        </Card.Text>
                        <i onClick={() => this.counterHandler()} className='i' class="fas fa-heart"></i>
                        <span>{this.state.counter}</span><br />
                        <Button onClick={this.ShowList} variant="dark">click me </Button>
                    </Card.Body>
                </Card>
            </>

        )
    }
}

export default HornedBeasts
