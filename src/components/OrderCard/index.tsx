import React from "react";
type Order = {
  amount: string;
  remain: string;
  price: string;
  value: string;
};
interface OrderCardProps {
  order: Order;
}
export const OrderCard = ({ order }: OrderCardProps) => {
  console.log("dddd", order);
  const { amount, remain, price, value } = order;
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <p>
        <strong>Amount:</strong> {amount}
      </p>
      <p>
        <strong>Remaining:</strong> {remain}
      </p>
      <p>
        <strong>Price:</strong> {price}
      </p>
      <p>
        <strong>Value:</strong> {value}
      </p>
    </div>
  );
};
