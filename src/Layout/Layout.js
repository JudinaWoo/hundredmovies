export default class Layout {
  constructor(parent) {
    this.parent = parent;
  }

  render = () => {
    console.log("layout#render");
    const { left, right } = this.props;
    const wrapper = document.createElement("div");

    const leftColumn = document.createElement("div");
    leftColumn.classList.add("left-column");
    left && leftColumn.appendChild(left);

    const rightColumn = document.createElement("div");
    rightColumn.classList.add("right-column");
    right && rightColumn.appendChild(right);

    this.parent.appendChild();
  };
}
