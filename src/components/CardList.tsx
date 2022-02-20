import * as React from "react";
import Card from "./Card";
import { IRobot } from "./App";

const CardList = ({ robots }: { robots: Array<IRobot> }) => (
  <>
    {robots.map((user, i) => (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    ))}
  </>

  // {/* {/* <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} /> */}
);

export default CardList;
