import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { scientists } from "../scientists";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import "./App.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      scientists: scientists,
      searchfield: "",
    };
  }
  componentDidMount() {
    this.setState({ scientists: scientists });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { scientists, searchfield } = this.state;
    const filteredScientists = scientists.filter((scientists) => {
      return scientists.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!scientists.length) {
      return <PuffLoader css={override} size={150} />;
    } else {
      return (
        <div className="tc">
          <div className="tc">
            <h1 className="f1">
              FAMOUS &nbsp; SCIENTISTS &nbsp; OF &nbsp; THE &nbsp; WORLD
            </h1>
            <SearchBox searchChange={this.onSearchChange} className="br-pill" />
          </div>
          <Scroll>
            <CardList scientists={filteredScientists} />
          </Scroll>
          <p className="pa3 f3">
            Made with{" "}
            <span role="img" aria-label="LOVE">
              ♥️
            </span>{" "}
            in{" "}
            <span role="img" aria-label="INDIA">
              🇮🇳
            </span>
          </p>
        </div>
      );
    }
  }
}

export default App;
