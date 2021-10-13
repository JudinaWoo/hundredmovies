import "./styles.css";

export default class Input {
  constructor(props) {
    this.props = props;
  }
  render() {
    this.wrapper = document.createElement("div");

    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.classList.add("search");

    document.addEventListener("keyup", event => {
      this.input.value = this.input.value.trim();
      const hasValue = this.input.value.length > 0;

      hasValue ? this.dispayClearButton() : this.hideClearButton();
    });

    this.wrapper.appendChild(this.input);

    return this.wrapper;
  }
  handleClearClick = () => {
    this.input.value = "";
    this.hideClearButton();
  };

  dispayClearButton() {
    if (document.getElementsByTagName("clear") === null) {
      this.clear = document.createElement("button");
      this.clear.setAttribute("id", "clear");
      this.clear.classList.add("clear");
      const clearText = document.createTextNode("❌");
      this.clear.appendChild(clearText);

      this.wrapper.appendChild(this.clear);
      this.clear.addEventListener("click", this.handleClearClick);
    }
  }

  hideClearButton() {
    this.clear.addEventListener("click", this.handleClearClick);
    this.clear?.remove();
  }
}
