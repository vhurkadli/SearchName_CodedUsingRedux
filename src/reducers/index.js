import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song_1", id: 100 },
    { title: "Song_2", id: 202 },
    { title: "Song_3", id: 203 },
    { title: "Song_4", id: 204 },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTE") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  rsongs: songsReducer,
  selectedSong: selectedSongReducer,
});
