import { CardProps } from "./card.types";

export const Card = ({ market }: CardProps) => {
  console.log("DDDD", market);
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">{market.title}</h2>
      <p className="text-gray-600">{market.title_fa}</p>
      <p className="mt-2 text-gray-500">Code: {market.code}</p>
      {/* <p className="mt-2 text-gray-500">Color: #{coin.color}</p>
      <p className="mt-2 text-gray-500">
        Withdraw Commission: {coin.withdraw_commission}
      </p> */}
    </div>
  );
};
