import React from 'react'
import './Services_style.css'

// this comp show the services in page
// recive state and delete fun as props from App.s

const Services = ({services,deleteService}) => {
    const servicesList = services.length ? (
        services.map(service => {
            return(
                <div className="item_ col-lg-4 col-md-6 col-sm-12 col-xs-12"key={service.id}>
                    <i class="fa fa-times-circle" onClick={() => {deleteService(service.id)}}></i>
                    <div className="title"><h4>{service.title}</h4></div>
                    <p>{service.summary}</p>
                    <a href={service.link}>Read more</a>
                </div>
            )
        })
    ) : (
        <div className="message"><h3>No Services!</h3></div>
    )
    
    return(
        <div className="services-box container">
            <div className="row">
                {servicesList}
            </div>
        </div>      
    )
} 

export default Services