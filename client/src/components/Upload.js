import React, { Component } from 'react'
import requireAuth from '../middlewares/requireAuth';
import { uploadFile } from '../actions/index';
import { connect } from 'react-redux';


class Upload extends Component {
  state = { file: null }
  onChange = e => {
    this.setState({ file: e.target.files[0] });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.uploadFile(this.state.file);
  }

  render() {
    return (
      <div className="container">
        <div className="file-field input-field" style={style}>
          <div className="btn">
            <span>File</span>
            <input type="file" name="file" onChange={this.onChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" value={(this.state.file && this.state.file.name) || ''} disabled />
          </div>
        </div>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-flat teal white-text right">Upload</button>
      </div>
    )
  }
}

const style = {
  container: {
    marginTop: '100px'
  }
}

export default connect(null, { uploadFile })(Upload);