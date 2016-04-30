import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";

var WebtorrentMin = require("../../../public/js/webtorrent.min.js");


export default class VideoPlayer extends TrackerReact(React.Component) {
  // Torrent stuff
  constructor() {
     super();
     this.state = {
       subscription: {
         torrents:  Meteor.subscribe("torrents")
         }
   }
 }
  componentWillUnmount() {
       this.state.subscription.torrents.stop();

       var video = document.getElementById("video");
       video.removeEventListener('timeupdate', this.updateProgress);

   }

  torrent() {
    let id = FlowRouter.getParam("id");
    let result = Torrents.find({_id:id}).fetch()[0];
    return result;
    }
  //Render the video player with
  render() {
    if (this.torrent() != undefined) {
      let torrentId = this.torrent().magnetURL;
      const torrentDiv = "#video";

      client = new WebtorrentMin();
      client.add(torrentId, function (torrent) {
        // Torrents can contain many files. Let's use the first.
        var file = torrent.files[0]

        // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
        file.renderTo(torrentDiv)
      });
    }
    return (

        <div className="col-xs-12">
        <div id="video-container" >
        {/* Video */}
          <video id="video" autoplay onMouseMove={this.hideControls}>
            <p>
              Your browser does not support HTML5 video
            </p>
          </video>
          {/* Video Controls*/}
          <div className="container-fluid animated" id="video-controls">
            <div className="container-fluid">
              <div className="row">
                  <div className="col-xs-12">
                    <input type="range" className="slider" id="seek-bar" onChange={this.seekBar} value="0"/>
                  </div>
                  <div className="col-xs-1">
                    <button type="button" id="play-pause" onClick={this.playPause} className="btn btn-xs play"><i className='fa fa-play fa-2x'></i></button>
                  </div>
                  <div className="col-xs-1">
                    <button type="button" className="btn btn-sm" onClick={this.mute} id="mute"><i className='fa fa-volume-up fa-2x'></i></button>
                  </div>
                  <div className="col-xs-3">
                    <input type="range" className="slider" id="volume-bar" onChange={this.volumeBar} min="0" max="1" step="0.01" value="1"/>
                  </div>

                  <div className="col-xs-3 col-xs-offset-4">
                    <button type="button" onClick={this.fullScreen} id="full-screen"><i className="fa fa-arrows-alt fa-2x"></i></button>
                  </div>
              </div>
            </div>
          </div>

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
  componentDidMount(){
    var video = document.getElementById("video");
    video.addEventListener('timeupdate', this.updateProgress);
  }
  updateProgress() {
    if (document.getElementById("video") != undefined) {
      var video = document.getElementById("video");
      var seekBar = document.getElementById("seek-bar");
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;

      // Update the slider value
      seekBar.value = value;
    }
  }

  hideControls() {
    if (document.getElementById("video") != undefined) {
      var timer;
      var stoppedElement= document.getElementById("video-controls");  // store element for faster access
  		var videoContainer = document.getElementById("video-container");

  		if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
  	    function mouseStopped(){
  				if (stoppedElement.parentElement.querySelector(':hover') === stoppedElement) {
  					stoppedElement.classList.remove("fadeOutDown");                              // the actual function that is called
  				} else {
  					stoppedElement.classList.add("fadeOutDown");
  					videoContainer.classList.add("no-cursor");
  				}
  	    }
  			stoppedElement.classList.remove("fadeOutDown");
  			videoContainer.classList.remove("no-cursor");
  	    clearTimeout(timer);
  	    timer=setTimeout(mouseStopped,2500);
  	 }
  	 stoppedElement.classList.remove("fadeOutDown");
  	 videoContainer.classList.remove("no-cursor");
    }
  }

  playPause() {
    if (document.getElementById("video") != undefined) {
      var video = document.getElementById("video");
      // Buttons
      var playButton = document.getElementById("play-pause");
      if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
      } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = "<i class='fa fa-play fa-2x'></i>";
      }
    }
  }
  seekBar() {
    if (document.getElementById("video") != undefined) {
      var video = document.getElementById("video");
      var seekBar = document.getElementById("seek-bar");
      // Calculate the new time
      var time = video.duration * (seekBar.value / 100);

      // Update the video time
      video.currentTime = time;
    }
  }

  mute(){
    if (document.getElementById("video") != undefined) {
      var video = document.getElementById("video");
      var muteButton = document.getElementById("mute");
      if (video.volume != 0) {
        // Mute the video
        var video = document.getElementById("video");
        var volumeBar = document.getElementById("volume-bar");
        volumeBar.value = 0;
        video.volume = volumeBar.value;

        // Update the button text
        muteButton.innerHTML = "<i class='fa fa-volume-off fa-2x'></i>";
      } else {
        // Unmute the video
        var video = document.getElementById("video");
        var volumeBar = document.getElementById("volume-bar");
        volumeBar.value = 1;
        video.volume = volumeBar.value;

        // Update the button text
        muteButton.innerHTML = "<i class='fa fa-volume-up fa-2x'></i>";
      }
    }
  }

  volumeBar() {
    if (document.getElementById("video") != undefined) {
      var video = document.getElementById("video");
      var volumeBar = document.getElementById("volume-bar");
      video.volume = volumeBar.value;
      if ((video.volume != 0) && (video.volume < 0.8)){
        var muteButton = document.getElementById("mute");

        muteButton.innerHTML = "<i class='fa fa-volume-down fa-2x'></i>";
      } else if (video.volume > 0.8) {
        var muteButton = document.getElementById("mute");

        muteButton.innerHTML = "<i class='fa fa-volume-up fa-2x'></i>";
      } else {
        var muteButton = document.getElementById("mute");

        muteButton.innerHTML = "<i class='fa fa-volume-off fa-2x'></i>";
      }
    }
  }

  fullScreen() {
    if (document.getElementById("video") != undefined) {
      var video = document.getElementById("video");
      var fullScreenButton = document.getElementById("full-screen");
      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
        if (video.exitFullscreen) {
          video.exitFullscreen();
        } else if (video.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (video.mozCancelFullScreen) {
          video.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          video.msExitFullscreen();
        }
        fullScreenButton.innerHTML= "<i class='fa fa-arrows-alt fa-2x'></i>";

      } else {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen(); // Chrome and Safari
        }
        fullScreenButton.innerHTML= "<i class='fa fa-compress fa-2x'></i>";
      }
    }
  }

}
