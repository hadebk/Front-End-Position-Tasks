import React, { Component } from 'react';
import './Form_style.css'

const $ = window.$

// this comp add new service to state in App.js

class  Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'',
            link:'',
            summary:''
        };
      }

    componentDidMount(){
        // change color of lable of text area
        $('.textarea-box textarea').focus(()=>{
            $('.textarea-label').css('color','#72b026')
        })
        $('.textarea-box textarea').blur(()=>{
            $('.textarea-label').css('color','#3c3c41')
        })

    }

    handelChange_title = (e) => {
        this.setState({
            title : e.target.value 
        })
    }

    handelChange_link = (e) => {
        this.setState({
            link : e.target.value 
        })
    }

    handelChange_summary = (e) => {
        this.setState({
            summary : e.target.value 
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.addService(this.state);
        this.setState( {
            title:'',
            link:'',
            summary:''
        })
    }
  
  render(){ 
    return (
      <div className="container form-box">
            <form onSubmit={this.handelSubmit}>
            <div className="row">
                <div className="left col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div class="form-group first-input">
                        <label for="title" class="inp">
                            <input onChange={this.handelChange_title} value={this.state.title}
                            type="text" id="title" placeholder="&nbsp;" autocomplete="off"/>
                            <span class="label">Title</span>
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="link" class="inp">
                            <input onChange={this.handelChange_link} value={this.state.link}
                            type="text" id="link" placeholder="&nbsp;" autocomplete="off"/>
                            <span class="label">Link</span>
                        </label>
                    </div>
                </div>
                <div class="form-group textarea-box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <label className="textarea-label" for="summary">Summary</label>
                    <textarea onChange={this.handelChange_summary} value={this.state.summary}
                    type="text" class="form-control" id="summary" cols="40" rows="2"/>
                </div>
                <div className="add-btn-box col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <button className="add-btn" type="submit"><div className="add-btn-inner">ADD</div></button>
                </div>
            </div>
            </form>
      </div>
    );
  }
}

export default Form;