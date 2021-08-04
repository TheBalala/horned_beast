import React, { Component } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'

class SelectedBeast extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showed} onHide={this.props.closeData}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.horneData.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Card bg='light'>
                        <Card.Img className='carded' variant="top" src={this.props.horneData.imageUrl} width={200} height={280} />
                        <Card.Body>
                            <Card.Text style={{ alignItems: 'center' }}>
                                {this.props.horneData.description}
                            </Card.Text>
                        </Card.Body>
                    </Card></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeData}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SelectedBeast
