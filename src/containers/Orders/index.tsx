"use client";
import { OrderCard } from "@/components/OrderCard";
import { useEveryThreeMinutes } from "@/hooks/useEveryThreeMinutes";
import { get } from "@/network";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React, { useEffect, useState } from "react";

interface OrdersProps {
  id: string;
}
export const Orders = ({ id }: OrdersProps) => {
  const [sellOrders, setSellOrders] = useState([]);
  const [buyOrders, setBuyOrders] = useState([]);
  const [tabs, setTabs] = useState<any>([]);

  useEveryThreeMinutes(async () => {
    await getOrdersData();
  });
  const getOrdersData = async () => {
    const sellOrders = await get(`mth/actives/${id}/?type=sell`);
    const buyOrders = await get(`mth/actives/${id}/?type=buy`);
    setSellOrders(sellOrders);
    setBuyOrders(buyOrders);
  };
  useEffect(() => {
    if (sellOrders.length === 0 && buyOrders.length === 0) getOrdersData();
    setTabs([
      {
        name: "Sell",
        orders: sellOrders.slice(0, 10),
      },
      {
        name: "Buy",
        orders: buyOrders.slice(0, 10),
      },
    ]);
  }, [sellOrders, buyOrders]);

  const sumAllRemainsAndValues = (
    orders: Array<{
      value: number;
      remain: number;
      price: string;
      amount: string;
    }>
  ) => {
    let totalRemain = 0;
    let totalValue = 0;

    orders.forEach((order) => {
      totalRemain += parseFloat(order.remain);
      totalValue += parseFloat(order.value);
    });

    return { totalRemain, totalValue };
  };
  const calculateWeightedAveragePrice = (
    items: Array<{
      value: number;
      remain: number;
      price: string;
      amount: string;
    }>
  ) => {
    const totalWeights = items.reduce(
      (sum, item) => sum + parseFloat(item.amount),
      0
    );
    const weightedSumOfPrices = items.reduce(
      (sum, item) => sum + parseFloat(item.amount) * parseFloat(item.price),
      0
    );
    const weightedAveragePrice =
      totalWeights > 0 ? weightedSumOfPrices / totalWeights : 0;
    return weightedAveragePrice;
  };
  return (
    <div>
      <div className="flex h-screen w-full justify-center pt-24 px-4">
        <div className="w-full max-w-md">
          <TabGroup>
            <TabList className="flex gap-4">
              {tabs.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {tabs.map(({ name, orders }) => (
                <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                  <ul>
                    {orders.map((order: any, index) => (
                      <div className="mt-2" key={index}>
                        <OrderCard order={order} />
                      </div>
                    ))}
                    <div className="mt-3 text-white">
                      <div>
                        Value: {sumAllRemainsAndValues(orders).totalValue}
                      </div>
                      <div>
                        Remain: {sumAllRemainsAndValues(orders).totalRemain}
                      </div>
                      <div>
                        Average : {calculateWeightedAveragePrice(orders)}
                      </div>
                    </div>
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};
