import React from "react";

export default class TorrentSingle extends React.Component {
  render() {
    let url = this.props.torrent.url.toString();
    url = "url(" + url + ")"
    let _id = "/video/" + this.props.torrent._id;
    let divStyle = {

        backgroundImage: url

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
