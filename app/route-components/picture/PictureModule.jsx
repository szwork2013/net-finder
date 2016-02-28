import React,{ Component, PropTypes }from 'react';
import { connect } from 'react-redux';
import styles from './PictureModule.scss';
import ScrollArea from 'react-scrollbar';

const showFileMode = {
  GRAPH:'GRAPH',
  LIST:'LIST'
}

class PictureModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFileMode: showFileMode.GRAPH
    };
  }

  changeShowFileMode(showFileMode) {
    var self = this;
    return () => {
      self.setState({
        showFileMode : showFileMode,
      })
    }
  }

  render() {

    let isGraph = this.state.showFileMode === showFileMode.GRAPH? 'selected': '';
    let isList = this.state.showFileMode === showFileMode.LIST? 'selected': '';

    return (
      <div className="picture-module">
        <div className="header">
          <ul className="left-menu">
            <li className={isGraph} onClick={this.changeShowFileMode(showFileMode.GRAPH)} >时光轴</li>
            <li className={isList} onClick={this.changeShowFileMode(showFileMode.LIST)}>最近上传</li>
          </ul>
          <ul className="right-menu">
            <li><i className="iconfont icon">&#xe606;</i></li>
            <li ><i className="iconfont icon">&#xe605;</i></li>
            <li><i className="iconfont icon">&#xe607;</i></li>
          </ul>
        </div>

        <ScrollArea className="content" speed={0.8} horizontal={false} >
          <div className="timeline-wrap">
            <div className="timeline-top">
              <span className="date">2016年02月25日</span>
            </div>
            <ul className="timeline-content">
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
            </ul>
          </div>

          <div className="timeline-wrap">
            <div className="timeline-top">
              <span className="date">2016年02月24日</span>
            </div>
            <ul className="timeline-content">
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
            </ul>
          </div>
          <div className="timeline-wrap">
            <div className="timeline-top">
              <span className="date">2016年02月23日</span>
            </div>
            <ul className="timeline-content">
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
              <li className="file-item">
                <div className="mask"></div><img src="http://localhost:3000/files/1.jpg"/>
              </li>
            </ul>
          </div>
        </ScrollArea>
      </div>
    )
  }
}


function select(state) {
  return state;
}

export default connect(select)(PictureModule);