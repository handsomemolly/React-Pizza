import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzas: [],
    selected: {},
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((res) => res.json())
      .then((pizzas) => this.setState({ pizzas: pizzas }));
  }

  selectedPizza = (pizza) => {
    this.setState({ selected: pizza });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm onePizza={this.state.selected} />
        <PizzaList
          selectedPizza={this.selectedPizza}
          pizzas={this.state.pizzas}
        />
      </Fragment>
    );
  }
}

export default App;
