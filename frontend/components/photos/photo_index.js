import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/photo_actions';

import PhotoIndexItem from './photo_index_item';
import Spinner from '../spinner';

class PhotoIndex extends Component {

  componentDidMount() {
    this.props.fetchPhotos();
  }

  photos() {
    const listItems = this.props.photos.map(photo => {
      return <PhotoIndexItem key={photo.id} photo={photo} />;
    });

    return (
      <ul>
        { listItems }
      </ul>
    );
  }

  render() {
    if (this.props.fetching) return <Spinner />;

    return (
      <div className="photo-index" ref={(self) => $(self).fadeIn('normal')}>
        { this.photos() }
      </div>
    );
  }
}

function mapStateToProps({ photos, fetching }) {
  return { photos, fetching };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhotos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
