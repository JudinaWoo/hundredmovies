import "./styles.css";

import Screen from "../Screen";

import Input from "../Input";

import {search} from "../dataProvider"


export default class SearchScreen {
  constructor() {
    this.resultList =
      document.getElementById("result") || document.createElement("ul");
    this.resultList.setAttribute("id","result");
    this.resultList.classList.add("results");
  }

  render() {

    this.content = document.createElement("div");

    const input = new Input({ onChange: this.search });

    this.content.appendChild(input.render());

    const screen = new Screen({ title: "Search", children: this.content });
    return screen.render();
  }
  search = (searchWord) => {
    if (searchWord.length <3) return;
    search(searchWord).then(this.displayResultList);
  }

  fetchOmdb = search => {
    if (search.length < 3) return;

    fetch(
      `http://www.omdbapi.com/?apikey=${apikey}&s=${search}`)
      .then((response) => response.json())
      .then(this.displayResultList);
  };

  displayResultList = (result) => {
    const listItems = this.resultList.getElementsByTagName ("li");
    listItems && [...listItems].map((li) => li.remove());
 
    const {Search: movies} = result;
  
      movies.forEach(({Title: title, Year: year }) => {
        const listItem = document.createElement("li");
        listItem.classList.add("result");
        const listItemText = document.createTextNode(title);
        listItem.appendChild(listItemText);

        this.resultList.appendChild(listItem);
      });

      this.content.appendChild(this.resultList);
    };
  }

