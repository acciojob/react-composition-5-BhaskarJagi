
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs'

const App = () => {

  const tabs1 = [
    {
      title: "Apple",
      content: "An Apple a day keep the doctor away."
    },
    {
      title: "Orange",
      content: "Oranges are citrus fruits."
    },
    {
      title: "Mango",
      content: "Mango is a seasonal friut of summer."
    }
  ]

  const tabs2 = [
    {
      title: "Schooling",
      content: "Srinivasa Vidya Nilayam."
    },
    {
      title: "Diploma",
      content: "Government Polytechic College."
    },
    {
      title: "Under Graduation",
      content: "Anil Neerukonda Institute of Technology and Sciences."
    }
  ]
  return (
    <div>
        <Tabs tabs={tabs1} />
        <Tabs tabs={tabs2} />
    </div>
  )
}

export default App
