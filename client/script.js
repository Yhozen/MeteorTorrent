//
//
// var muteButton = document.getElementById("mute");
// var fullScreenButton = document.getElementById("full-screen");
//
// // Sliders
// var seekBar = document.getElementById("seek-bar");
// var volumeBar = document.getElementById("volume-bar");


Template.videoTemp.events({
	"click #play-pause": function(event, template){
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
	},
	"click #mute" : function () {
		var video = document.getElementById("video");
		var muteButton = document.getElementById("mute");
		if (video.volume != 0) {
			// Mute the video
			var video = document.getElementById("video");
			var volumeBar = document.getElementById("volume-bar");
			volumeBar.value = 0;
			video.volume = volumeBar.value;

			// Update the button text
			muteButton.innerHTML = "Unmute";
		} else {
			// Unmute the video
			var video = document.getElementById("video");
			var volumeBar = document.getElementById("volume-bar");
			volumeBar.value = 1;
			video.volume = volumeBar.value;

			// Update the button text
			muteButton.innerHTML = "Mute";
		}
	},
	"click #full-screen": function () {
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
	},
	"change #seek-bar" : function () {
		var video = document.getElementById("video");
		var seekBar = document.getElementById("seek-bar");
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	},
	"timeupdate #video" : function () {
		var video = document.getElementById("video");
		var seekBar = document.getElementById("seek-bar");
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	},
	"change #volume-bar": function () {
		var video = document.getElementById("video");
		var volumeBar = document.getElementById("volume-bar");
		video.volume = volumeBar.value;
	}
});

Template.videoTemp.events({
  "mousemove #video": function(event, template){
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
});

Template.videoTemp.onCreated(function () {
	var client = new WebTorrent();
	var torrentId = "magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d";
	var torrentDiv = "#video";

	client.add(torrentId, function (torrent) {
		// Torrents can contain many files. Let's use the first.
		var file = torrent.files[0]

		// Display the file by adding it to the DOM. Supports video, audio, image, etc. files
		file.renderTo(torrentDiv)
	});
});

// // Pause the video when the seek handle is being dragged
// seekBar.addEventListener("mousedown", function() {
// 	video.pause();
// });
//
// // // Play the video when the seek handle is dropped
// // seekBar.addEventListener("mouseup", function() {
// // 	video.play();
// // });
//
