import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import dataOfHorne from './data.json'

class Main extends Component {
    render() {
        return (
            <main>
                {
                     dataOfHorne.map(elemet => {
                       return <HornedBeasts
                            title={elemet.title}
                            imageUrl={elemet.image_url}
                            description={elemet.description}
                        />
                    })
                }
            </main>
        )
    }
}

export default Main
