import * as React from "react";

interface CardProps {
  name: string;
  email: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ name, email, id }) => (
  <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img alt="robots" src={`https://robohash.org/${id}?200x200&set=set2`} />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);
export default Card;
