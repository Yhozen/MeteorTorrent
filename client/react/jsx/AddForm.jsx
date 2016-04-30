import React from 'react';



export default class AddForm extends React.Component {
  submit(e) {
    e.preventDefault();
    // Get value from form element
    var text = e.target.text.value;
    var name = e.target.name.value;
    var url = e.target.url.value;
    text = text.toString();
    name = name.toString();
    url = url.toString();

    // Insert a task into the collection
    Meteor.call("addTorrent", text, name, url)
    // Clear form
    e.target.text.value = "";
    e.target.name.value = "";
    e.target.url.value = "";
  }
  render() {
    return (
      <div>
        <h2> Add a new video</h2>
        <div className="well well-lg">
          <p> In order to add a torrent you need to host it in other WebTorrent page (for example <a href="http://instant.io">instant.io</a>  ) but in the final version you will be able to host it right here</p>
          <form onSubmit={this.submit.bind(this)}>
            <div className="form-group">
            <label >Torrent Name</label>
              <input type="text" name="name" className="form-control" placeholder="Write name here" />
            </div>
            <div className="form-group">
            <label >MagnetURI </label>
              <input type="text" name="text" className="form-control" placeholder="Write MagnetURI" />
            </div>
            <div className="form-group">
            <label >Cover image (as url)</label>
              <input type="text" name="url" className="form-control" placeholder="Write url of the image" />
            </div>
              <button type="submit" className="btn btn-primary btn-raised btn-lg" >Submit </button>
          </form>
        </div>
      </div>
    )
  }
}
