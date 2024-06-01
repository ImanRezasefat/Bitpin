import React from "react";
import { TabProps } from "./tab.types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export const MyTab = ({ tabs }: TabProps) => {
  return (
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
        {tabs.map(({ name, Child }) => (
          <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
            {Child}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
