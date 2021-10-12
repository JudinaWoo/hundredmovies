export default class Greetings {
  constructor(name) {
    this.name = name;
  }
  write = () => {
    return `Hello $ {this.firstname}`;
  };
}
