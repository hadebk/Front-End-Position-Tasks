import React, { Component } from 'react';
import Services from './Components/Services_/Services';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header'

class  App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services:[
        {id:1,title:'Industrial Automation',link:'https://www.webkeyz.com/',summary:'It is the use of various control systems for operating equipment such as machinery, processes in factories, boilers and heat treating ovens, switching on telephone networks, steering and stabtilization of ships, aircraft and other applications and vehicles with minimal or reduced human intervention, with some processes have been completely automated.'},
        {id:2,title:'Digital Transformation',link:'https://www.webkeyz.com/',summary:'It is the use of various control systems for operating equipment such as machinery, processes in factories, boilers and heat treating ovens, switching on telephone networks, steering and stabtilization of ships, aircraft and other applications and vehicles with minimal or reduced human intervention, with some processes have been completely automated.'},
        {id:3,title:'outsourcing',link:'https://www.webkeyz.com/',summary:'It is the use of various control systems for operating equipment such as machinery, processes in factories, boilers and heat treating ovens, switching on telephone networks, steering and stabtilization of ships, aircraft and other applications and vehicles with minimal or reduced human intervention, with some processes have been completely automated.'}
      ]
    };
  }

  deleteService = (id) => {
    const services = this.state.services.filter(service => {
      return service.id !== id
    })
    this.setState({
      services
    })
  }

  addService = (service) => {
    service.id = Math.random()*100
    let newService = [...this.state.services, service]
    this.setState({
      services : newService
    })
  }

  render(){ 
    return (
      <div className="App">
       <Header/>
       <Form addService={this.addService}/>
       <Services services={this.state.services} deleteService={this.deleteService}/>
      </div>
    );
  }
}

export default App;