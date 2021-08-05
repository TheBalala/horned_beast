import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import { Form } from 'react-bootstrap';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            horne: 0
        }
    }
    handlerBeast = (e) => {
        this.setState({
            horne: e.target.value
        })
    }
    render() {
        
        return (
            <main>

                <div className='formSelect'>
                    <Form.Select onChange={(e) => this.handlerBeast(e)} aria-label="Default select example">
                        <option value="0">Horne Beast Select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                        <option value="0">All</option>
                    </Form.Select>
                </div>

                <div className='mained'>
                    {
                        this.props.data.map(elemet => {
                            return (Number(this.state.horne) === elemet.horns &&
                                    <HornedBeasts
                                    title={elemet.title}
                                    imageUrl={elemet.image_url}
                                    description={elemet.description}
                                    showDataList={this.props.showDataList}
                            />) || 
                            (Number(this.state.horne) === 0 &&
                                    <HornedBeasts
                                    title={elemet.title}
                                    imageUrl={elemet.image_url}
                                    description={elemet.description}
                                    showDataList={this.props.showDataList}
                            /> )
                            
                        })
                        
                    }
                </div>
            </main>
        )
    }
}

export default Main
