import "antd/dist/antd.css";
import "./App.css";
import { Select } from "antd";

function SelectExample() {
  const fruits = [
    { label: "Mango", value: "Mango" },
    { label: "Banana", value: "Banana" },
    { label: "Orange", value: "Orange" },
    { label: "Cherry", value: "Cherry" },
    { label: "Pineapple", value: "Pineapple" },
    { label: "Guava", value: "Guava" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p color="Black">Which are Your Favourite Fruits</p>

        <Select
          mode="multiple"
          allowClear
          maxTagCount={10}
          placeholder="Select Fruit"
          style={{ width: "50%" }}
          options={fruits}
        />
      </header>
    </div>
  );
}

export default SelectExample;
