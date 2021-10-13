import "./styles.css";

import Screen from "../Screen";

import Input from "../Input";

export default class SearchScreen extends Screen {
  constructor() {
    const content = document.createElement("div");
    const input = new Input();

    content.appendChild(input.render());

    super({ title: "Search", children: content });
  }
}
