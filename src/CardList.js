import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((user, index) => {
				return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email} />;
			})}
			{/* <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
			<Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
		</div>
	);
};

export default CardList;
