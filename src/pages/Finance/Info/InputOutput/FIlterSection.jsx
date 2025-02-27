import { useState } from 'react';
import { Tabs } from "@chakra-ui/react"


const FilterSection = () => {
    const [activeTab, setActiveTab] = useState('kirim');

    return (
      <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
         <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"tab-1"}>
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Export</button>
        <select className="px-4 py-2 border rounded">
          <option>Kassa</option>
        </select>
        <input type="date" className="px-4 py-2 border rounded" />
        <select className="px-4 py-2 border rounded">
          <option>Plastik</option>
        </select>
      </div>
    );
};

export default FilterSection;
