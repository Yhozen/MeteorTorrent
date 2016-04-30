import React from 'react';
import TrackerReact from "meteor/ultimatejs:tracker-react";

import TorrentSingle from "./TorrentSingle.jsx";



export default class App extends TrackerReact(React.Component) {
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
  torrents() {
    return Torrents.find(
      {},
      {sort: {createdAt: -1}} )
      .fetch();
    }
  render() {
    return (
      <div>
        <h1> Welcome to a WIP version of MeteorTorrent </h1>
        <ul className="resolutions">
        {this.torrents().map((torrent)=> {
          return <TorrentSingle key={torrent._id} torrent={torrent} />
        })}
        </ul>
      </div>
    )
  }
}
