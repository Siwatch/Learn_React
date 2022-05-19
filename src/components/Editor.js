import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className='text-center'>
          <h4>Editor</h4>
          <textarea className='container__editor form-control m-2'
          type="text"
           value={this.props.text}
           onChange={this.props.onChange}/>
      </div>
    )
  }
}
