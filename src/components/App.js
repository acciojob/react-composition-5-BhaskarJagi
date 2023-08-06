
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs'

const App = () => {

  const tabs1 = [
    {
      title: 'Tab 1',
      content: 'Content of Tab 1'
    },
    {
      title: 'Tab 2',
      content: 'Content of Tab 2'
    },
    {
      title: 'Tab 3',
      content: 'Content of Tab 3'
    },
  ];

  const tabs2 = [
    {
      title: 'Tab A',
      content: 'Content of Tab A'
    },
    {
      title: 'Tab B',
      content: 'Content of Tab B'
    },
    {
      title: 'Tab C',
      content: 'Content of Tab C'
    },
  ];
  return (
    <div>
        <Tabs tabs={tabs1} />
        <Tabs tabs={tabs2} />
    </div>
  )
}

export default App
