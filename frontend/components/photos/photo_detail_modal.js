import React from 'react';
import Modal from '../modal';
import Comments from '../comments/comments';
import CommentForm from '../comments/comment_form';
import PhotoAuthorHeader from './photo_author_header';

function stopProp(e) {
  e.stopPropagation();
}

export default function PhotoDetailComments(props) {
  if (!props.photo) return <div />;
  return (
    <Modal>
      <div className="modal-content flex-row" onClick={stopProp}>
        <img src={props.photo.image_url} />
        <div className="photo-modal-sidebar">
          <PhotoAuthorHeader photo={props.photo} />
          <Comments photo={props.photo} />
          <CommentForm photo={props.photo}/>
        </div>
      </div>
    </Modal>
  );
}
