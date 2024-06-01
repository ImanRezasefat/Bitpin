"use client";
import { Card } from "@/components/Card";
import { get } from "@/network";
import React, { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const Markets = () => {
  const [tabs, setTabs] = useState([]);
  const getMarkets = async () => {
    const marketsRes = await get("/mkt/markets/");

    setTabs([
      {
        name: "IRT",
        markets: marketsRes.results.filter(
          (market) => market.currency2.code === "IRT"
        ),
      },
      {
        name: "USDT",
        markets: marketsRes.results.filter(
          (market) => market.currency2.code === "USDT"
        ),
      },
    ]);
  };
  useEffect(() => {
    getMarkets();
  }, []);
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
              {tabs.map(({ name, markets }) => (
                <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                  <ul>
                    {markets.map((market) => (
                      <div className="mt-2" key={market.id}>
                        <Card market={market} />
                      </div>
                    ))}
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

export default Markets;
