import "./styles.css";

import Screen from "../Screen";

import Input from "../Input";

const apikey = "f17611b7";

export default class SearchScreen {
  constructor() {}

  render() {

    this.content = document.createElement("div");

    const input = new Input({ onChange: this.fetchOmdb });

    this.content.appendChild(input.render());

    const screen = new Screen({ title: "Search", children: this.content });
    return screen.render();
  }

  fetchOmdb = search => {
    if (search.length < 3) return;

    fetch(
      `http://www.omdbapi.com/?apikey=${apikey}&s=${search}`)
      .then((response) => response.json())
      .then(this.displayResultList);
  };

  displayResultList = (result) => {
    const list = document.createElement('ul');
    
    console.log(movies);
    const {Search: movies} = result;
  
      movies.forEach(({Title: title, Year: year }) => {
        const listItem = document.createElement("li");
        const listItemText = document.createTextNode(title);
        listItem.appendChild(listItemText);

        list.appendChild(listItem);
      });

      this.content.appendChild(list);
    };
  }

