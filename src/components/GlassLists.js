import React, { Component } from "react";

export default class GlassLists extends Component {
  constructor(props) {
    super(props);
    this.glasses = this.props.glasses;
    this.state = { name: "" };
  }

  render() {
    return (
      <div className="flex items-center justify-center bg-white p-8 gap-5 flex-wrap rounded">
        {this.glasses.glasses.map((glass) => {
          return (
            <div
              className={
                "w-[100px] border-2  p-2 rounded overflow-hidden cursor-pointer transition-all duration-550 ease-in-out " +
                (glass.name === this.state.name
                  ? "border-blue-300 shadow-lg shadow-blue-500/50"
                  : "border-gray-300 shadow-lg shadow-gray-500/50")
              }
              key={glass.id}
              onClick={() => {
                this.props.handleEvent(glass.name, glass.desc, glass.url);
                this.setState({ name: glass.name });
              }}
            >
              <img
                src={glass.url}
                alt="img-glasses"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    );
  }
}
