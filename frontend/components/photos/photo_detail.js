import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeModal } from '../../actions/modal_actions';
import PhotoDetailModal from './photo_detail_modal';

class PhotoDetail extends React.Component {

  componentWillMount() {
    this.props.changeModal(<PhotoDetailModal photo={ this.findPhoto(this.props) }/>);
  }

  componentWillReceiveProps(newProps) {
    this.props.changeModal(<PhotoDetailModal photo={ this.findPhoto(newProps) }/>);
  }

  findPhoto(props) {
    if (!props.photos) return null;

    return props.photos.find(photo => {
      return photo.id === parseInt(props.params.photoId);
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapStateToProps({ shownUser }) {
  return { photos: shownUser.user.photos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);
