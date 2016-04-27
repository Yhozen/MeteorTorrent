import React from "react";

export class TorrentComp extends React.Component {

  render(){
    return (
      <a href="/video/{{_id}}">
      <div class="video-con col-md-6">
        <div class="inside" style="background-image: url('{{url}}')">
        </div>
      </div>
      </a>
    )
  }
}
