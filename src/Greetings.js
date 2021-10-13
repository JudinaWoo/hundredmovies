export default class Greetings {
  constructor(firstname) {
    this.firstname = firstname;
  }
  write = () => {
    return `Hello $ {this.firstname}!`;
  };
}
