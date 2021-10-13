export default class Screen {
  constructor(props) {
    this.props = props;
  }

  render() {
    const { title, children } = this.props;

    const titleNode = document.createElement("h3");
    const titleText = document.createTextNode(title || "");
    titleNode.appendChild(titleText);

    const childrenNodes = document.createElement("div");
    children && childrenNodes.appendChild(children);

    const screen = document.createElement("div");
    screen.appendChild(titleNode);
    screen.appendChild(childrenNodes);

    return screen;
  }
}
