import React from 'react';

interface Card2Props {
  title: string;
  description: string;
  price: string;

  onBuy:()=>void;
}

const Card2: React.FC<Card2Props> = ({ title, description, price ,onBuy }) => {
  return (
    <div className="card bg-gray-700   text-white w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn hover:bg-blue-500" onClick={onBuy}>Buy for {price}</button>
        </div>
      </div>
    </div>
  );
};

export default Card2;

