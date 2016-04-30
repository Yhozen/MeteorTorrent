import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";

import VideoPlayer from "./VideoPlayer.jsx";

export default class VideoSinglePage extends TrackerReact(React.Component) {
  // Torrent stuff
  constructor() {
     super();
     this.state = {
       subscription: {
         torrents:  Meteor.subscribe("torrents")
         }
   }
 }
 torrent() {
   let id = FlowRouter.getParam("id");
   let result = Torrents.find({_id:id}).fetch();
   return result;
   }
  componentWillUnmount() {
        this.state.subscription.torrents.stop();
  }
  render() {
    return (
      <div>
      <h1 className="text-center">
        {this.torrent().map((torrent)=> {
          return torrent.name
        })}
      </h1>

      {this.torrent().map((torrent)=> {
        return <VideoPlayer key={torrent._id} torrent={torrent} />
      })}
      </div>
    )
  }
}
//
