import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";

var WebtorrentMin = require("../../../public/js/webtorrent.min.js");


export default class VideoPlayer extends TrackerReact(React.Component) {
  constructor() {
     super();
     this.state = {
       subscription: {
         torrents: Meteor.subscribe('torrents')
       }
     }
   }
  componentWillUnmount() {
       this.state.subscription.torrents.stop();
   }
  torrent() {
    let id = FlowRouter.getParam("id");
    return Torrents.find(
        {"_id": "aDick6kvgWyvCFShs"},
        {sort: {createdAt: -1}} )
        .fetch();
    }

  render() {
    let torrentId = 'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d&dn=sintel.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel-1024-surround.mp4' //this.torrent().magnetURL;
    const torrentDiv = "#video";

    client = new WebtorrentMin();
    client.add(torrentId, function (torrent) {
      // Torrents can contain many files. Let's use the first.
      var file = torrent.files[0]

      // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
      file.renderTo(torrentDiv)
    });

    return (

        <div className="col-xs-12">
        <div id="video-container" >
        {/* Video */}
          <video id="video" controls>
            <p>
              Your browser doesn't support HTML5 video
            </p>
          </video>
          {/* Video Controls
          <div className="container-fluid animated" id="video-controls">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  <input type="range" className="slider" id="seek-bar" value="0"/>
                </div>
                <div className="col-xs-1">
                  <button type="button" id="play-pause" className="btn btn-xs play"><i className='fa fa-play fa-2x'></i></button>
                </div>
                <div class="col-xs-1">
                  <button type="button" className="btn btn-sm" id="mute"><i className='fa fa-volume-up fa-2x'></i></button>
                </div>
                <div class="col-xs-3">
                  <input type="range" className="slider" id="volume-bar" min="0" max="1" step="0.01" value="1"/>
                </div>
                <div className="col-xs-4"></div>
                <div className="col-xs-3">
                  <button type="button" id="full-screen"><i className="fa fa-arrows-alt fa-2x"></i></button>
                </div>
              </div>
            </div>

          </div>
          */}
          </div>
         </div>

    )
  }


 componentWillMount() {
    const script = document.createElement("script");

    script.src = "/js/webtorrent.min.js";
    script.async = true;

    document.body.appendChild(script);
  }

}
