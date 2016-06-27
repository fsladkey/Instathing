import { FETCH_PHOTOS, ADD_PHOTO, ADD_PHOTOS, DELETE_PHOTO, EDIT_PHOTO } from '../constants/action_types';

const initialState = [
  { id: 1, username: "ulysses", image_url: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12338477_998245480236888_518154446_n.jpg?ig_cache_key=MTE0ODI4NjYwMTcwNzk2NTgyNw%3D%3D.2", comments: [], likers: [] },
  { id: 2, username: "cat_bride", image_url: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s320x320/e35/13320244_1751108521831835_1236396872_n.jpg?ig_cache_key=MTI2NDAxNzE5NjkzODYxMjgwMw%3D%3D.2", comments: [], likers: [] },
  { id: 3, username: "bailey", image_url: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/13259548_289634291370219_2101930375_n.jpg?ig_cache_key=MTI2MjIzODk1MzIzOTY2Mjk3Nw%3D%3D.2", comments: [], likers: [] },
  { id: 4, username: "chester", image_url: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12976535_826825864090704_1034327565_n.jpg?ig_cache_key=MTIzMjIxODU1OTczMjY5OTMyNg%3D%3D.2", comments: [], likers: [] },
  { id: 5, username: "pepper", image_url: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12826279_111679212561002_1102993857_n.jpg?ig_cache_key=MTIwNTE3NDE5MjE0OTAyNTA2Mw%3D%3D.2", comments: [], likers: [] }
];

export default function todos(state = initialState, action) {
  switch (action.type) {

    case FETCH_PHOTOS:
      return state;

    case ADD_PHOTO:
      return [ action.photo, ...state ];

    case ADD_PHOTOS:
      return action.payload.photos;

    case DELETE_PHOTO:
      return state.filter(photo => photo.id !== action.photo.id );

    case EDIT_PHOTO:
      return state.map(photo =>
        photo.id === action.photo.id ?
          action.photo : photo
      );

    default:
      return state;
  }
}
