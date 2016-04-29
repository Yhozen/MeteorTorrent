import React from "react";

export default class TorrentSingle extends React.Component {
  render() {
    let url = this.props.torrent.url.toString();
    let _id = "/video/" + this.props.torrent._id;
    let divStyle = {
        color: 'white',
        backgroundImage: 'url(' + { url } + ')'

    };

    return (
      <a href={ _id }>
      <div className="video-con col-md-6">
        <div className="inside" style={divStyle} >
        </div>
      </div>
      </a>
    )
  }
}
