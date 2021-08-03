import React, { Component } from 'react'
import Header from './component/Header'
import Main from './component/Main '
import Footer from './component/Footer '
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import dataOfHorne from './component/data.json'
import SelectedBeast from './component/SelectedBeast';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       horneData:dataOfHorne,
       show:false,
       horneList:{},
    }
  }
  showData=(data)=>{
    this.setState({
      show:true,
      horneList:data,
    })
  }
  closeData=()=>{
    this.setState({
      show:false
    })
  }
  
  render() {
    return (
      <div>
        <Header />
        <Main showDataList={this.showData} data={this.state.horneData}/>
        <SelectedBeast closeData={this.closeData} showed={this.state.show} horneData={this.state.horneList}/>
        <Footer />
      </div>
    )
  }
}

export default App

