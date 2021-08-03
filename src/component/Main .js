import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'


class Main extends Component {
    render() {
        return (
            <main>
                {
                     this.props.data.map(elemet => {
                       return <HornedBeasts
                            title={elemet.title}
                            imageUrl={elemet.image_url}
                            description={elemet.description}
                            showDataList={this.props.showDataList}
                        />
                    })
                }
            </main>
        )
    }
}

export default Main
