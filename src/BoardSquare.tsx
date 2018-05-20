import * as classNames from "classnames";
import * as React from "react";

import './BoardSquare.css';

interface Props {
  index: number;
  isActive: boolean;
  isDark: boolean;
  onPress(index: number): void;
}

class BoardSquare extends React.Component<Props> {
  public onClick = () => {
    this.props.onPress(this.props.index);
  };

  public render() {
    return (
      <div
        className={classNames("board-square", {
          "board-square--active": this.props.isActive,
          "board-square--dark": this.props.isDark
        })}
        onClick={this.onClick}
      />
    );
  }
}

export default BoardSquare;
