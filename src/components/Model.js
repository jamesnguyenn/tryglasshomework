import React, { Component } from "react";
import "animate.css";
export default class Model extends Component {
  constructor(props) {
    super(props);
    this.glassRef = React.createRef();
    this.title = React.createRef();
    this.desc = React.createRef();
  }
  componentDidUpdate() {
    this.glassRef.current.classList.add(
      "animate__rotateInDownLeft",
      "translate-x-[-25%]",
      "left-[25%]"
    );
    this.title.current.classList.add("animate__fadeInDown");
    this.desc.current.classList.add("animate__fadeInUp");
  }

  render() {
    const { name, desc, url } = this.props.glassItem;
    const handleRemoveClass = () => {
      this.title.current.classList.remove("animate__fadeInDown");
      this.desc.current.classList.remove("animate__fadeInUp");
      this.glassRef.current.classList.remove(
        "animate__rotateInDownLeft",
        "translate-x-[-25%]",
        "left-[25%]"
      );
    };
    return (
      <>
        {this.props.glassItem.name && (
          <>
            <div className="animate__animated animate__fadeIn absolute bottom-0 left-0 w-full h-1/4 bg-[#000000a5] px-4 py-2 flex flex-col items-start justify-center ">
              <h2
                ref={this.title}
                className="animate__animated text-sm font-bold animate__faster"
                onAnimationEnd={handleRemoveClass}
              >
                {name}
              </h2>
              <p
                ref={this.desc}
                className="animate__animated text-xs font-light animate__faster"
              >
                {desc}
              </p>
            </div>
            <div
              ref={this.glassRef}
              className="absolute top-[26%] translate-y[-26%] w-[50%] animate__animated animate__faster"
            >
              <img
                src={url}
                alt="glass-model"
                className="w-full h-full object-cover"
              />
            </div>
          </>
        )}
      </>
    );
  }
}
