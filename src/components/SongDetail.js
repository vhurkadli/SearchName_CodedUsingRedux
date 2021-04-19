import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a EMPL</div>;
  }
  return (
    <div>
      <h3>Details for Selected Empl:</h3>
      <p>
        Name:{song.title}
        <br />
        ID:{song.id}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
