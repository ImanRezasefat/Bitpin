"use client";
import { Card } from "@/components/Card";
import { get } from "@/network";
import React, { useEffect, useRef, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { PaginateComponent } from "@/components/Pagination";

const Markets = () => {
  const [tabs, setTabs] = useState([]);
  const [allMarkets, setAllMarkets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // This logic of touch swipe should be extracted to a hook or sth
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      setSelectedTabIndex(isLeftSwipe ? 1 : 0);
    }
  };

  const getMarkets = async () => {
    const marketsRes = await get("/mkt/markets/");
    setAllMarkets(marketsRes.results);
  };
  //set pagination
  useEffect(() => {
    const startIndex = (currentPage - 1) * 10;
    const itemsPerPage = 10;
    setTabs([
      {
        name: "IRT",
        markets: allMarkets
          .filter((market) => market.currency2.code === "IRT")
          .slice(startIndex, startIndex + itemsPerPage),
        totalItems: allMarkets.filter(
          (market) => market.currency2.code === "IRT"
        ).length,
      },
      {
        name: "USDT",
        markets: allMarkets
          .filter((market) => market.currency2.code === "USDT")
          .slice(startIndex, startIndex + itemsPerPage),
        totalItems: allMarkets.filter(
          (market) => market.currency2.code === "IRT"
        ).length,
      },
    ]);
  }, [currentPage, allMarkets]);
  useEffect(() => {
    getMarkets();
  }, []);
  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <div className="flex h-screen w-full justify-center pt-24 px-4">
        <div className="w-full max-w-md">
          <TabGroup key={selectedTabIndex} defaultIndex={selectedTabIndex}>
            <TabList className="flex gap-4" onClick={() => setCurrentPage(1)}>
              {tabs.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {tabs.map(({ name, markets, totalItems }) => (
                <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                  <ul>
                    {markets.map((market) => (
                      <div className="mt-2" key={market.id}>
                        <Card market={market} />
                      </div>
                    ))}

                    <PaginateComponent
                      totalItems={totalItems}
                      itemsPerPage={10}
                      returnCurrentPage={(page) => setCurrentPage(page)}
                    />
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
