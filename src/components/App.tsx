import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";
import "../App.css";

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppState {
  robots: Array<IRobot>;
  search: string;
}

const App: React.FC<IAppState> = () => {
  const [robots, setRobots] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect((): void => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  //change robots according to search field
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />;
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
