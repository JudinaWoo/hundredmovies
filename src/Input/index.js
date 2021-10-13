import "./styles.css";

export default class Input {
  constructor(props) {
    this.props = props;
  }
  render() {
    const wrapper = document.createElement("div");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("search");

    const clear = document.createElement("button");
    clear.classList.add("clear");
    const clearText = document.createTextNode("❌");
    clear.appendChild(clearText);
    wrapper.appendChild(input);
    wrapper.appendChild(clear);

    return wrapper;
  }
}
