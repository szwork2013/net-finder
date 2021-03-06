import React,{ Component, PropTypes }from 'react';
import { connect } from 'react-redux';
import FileList from './FileList';
import {
  fetchFileList, selectFileType,
  fetchFileListIfNeeded, selectFileTypeAndUpdate
 } from '../../actions/getFile';

import {
  deleteFile
} from '../../actions/deleteFile';

import {
  uploadFile
} from '../../actions/uploadFile';


import { fileTypeHash } from '../../lib/fileType';

class AllFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(fetchFileListIfNeeded());
  }

  render(){
    const { dispatch, allFile} = this.props;
    return (
      <FileList
        files={allFile}
        onRefresh={() => dispatch(fetchFileList())}
        onDelete={(ids) => dispatch(deleteFile(ids))}
        onUpload={(files) => dispatch(uploadFile(files))}
      />
    )
  }
}

function select(state) {
  return state;
}

export default connect(select)(AllFile);
