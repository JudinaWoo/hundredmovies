import "./styles.css";

export default class Layout {
  constructor(props) {
    this.props = props;
  }

  render() {
    const { left, right } = this.props;

    const wrapper = document.createElement("div");

    const leftColumn = document.createElement("div");
    leftColumn.classList.add("column", "left-column");

    left && leftColumn.appendChild(left);

    const rightColumn = document.createElement("div");
    rightColumn.classList.add("column", "right-column");

    right && rightColumn.appendChild(right);

    wrapper.appendChild(leftColumn);
    wrapper.appendChild(rightColumn);

    return wrapper;
  }
}
