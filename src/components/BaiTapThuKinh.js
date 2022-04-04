import React, { Component } from "react";

import GlassLists from "./GlassLists";
import data from "../data/data.json";
import Model from "./Model";

class BaiTapThuKinh extends Component {
  constructor(props) {
    super(props);
    this.state = { glasses: data, glassItem: {} };
  }
  handleChooseGlassItem = (name, desc, url) => {
    this.setState({ ...this.state, glassItem: { name, desc, url } });
  };
  render() {
    return (
      <div className="flex flex-col gap-10 justify-center items-center text-white w-full h-full">
        <div className="flex justify-center items-center text-white w-[300px] relative overflow-hidden">
          <img
            src="/assets/images/model.jpg"
            alt="modal-img"
            className="w-full h-full object-cover"
          />
          <Model glassItem={this.state.glassItem} />
        </div>
        <GlassLists
          glasses={this.state}
          handleEvent={this.handleChooseGlassItem}
        />
      </div>
    );
  }
}

export default BaiTapThuKinh;
