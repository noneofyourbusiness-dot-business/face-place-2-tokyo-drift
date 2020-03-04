import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ImageAdder from '../imageAdder/ImageAdder.jsx';
import './PostMaker.css'


const PostMaker = () => {
  const [imageView, viewToggle] = useState(false)

  return (
    <div className="Post-Maker">

      <div className="Post-Add-Image">
        {imageView
        ?
          <ImageAdder/>
          :
          <button onClick={() => viewToggle(!imageView)}>Add Images</button>
        }
      </div>
    </div>
  );
};

function mapStateToProps(reduxState) {
  const { user_id } = reduxState;
  return {
    user_id
  }
}

export default connect(mapStateToProps)(PostMaker);