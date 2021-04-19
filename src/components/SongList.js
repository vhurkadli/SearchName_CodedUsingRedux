import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  // vin = () => {
  //   console.log("vinayak shivappa hurakadli");
  // };
  renderList() {
    return this.props.vsongs.map((ss) => {
      return (
        <div className="item" key={ss.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(ss);
              }}
              // onClick={this.vin}
            >
              Select
            </button>
          </div>
          <div className="content">{ss.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { vsongs: state.rsongs };
};
export default connect(mapStateToProps, { selectSong })(SongList);
