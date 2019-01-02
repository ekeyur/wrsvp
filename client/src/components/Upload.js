import React, { Component } from 'react'
import requireAuth from '../middlewares/requireAuth';


class Upload extends Component {

 state = { file : null }

  onChange = e => {
    this.setState({file : e.target.files[0]});
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.file);
  }

  render() {
    return (
      <div className="container">
        <form action="/api/upload" encType="multipart/form-data">
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" name="list" onChange={this.onChange}/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" value={this.state.file && this.state.file.name || ''} disabled/>
            </div>
          </div>
          <button type="submit" className="btn btn-flat teal white-text right">Upload</button>
        </form>
      </div>
    )
  }
}

const style = {
  container: {
    marginTop: '100px'
  }
}

export default requireAuth(Upload);