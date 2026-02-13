import { observer } from "mobx-react-lite";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import todoStore from "../store/todoStore";
import "./TodoFilters.css";
const TodoFilters = observer(() => {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
      <Input
        autoFocus
        placeholder="Search Title Name"
        prefix={<SearchOutlined />}
        value={todoStore.searchText}
        onChange={(e) => todoStore.setSearchText(e.target.value)}
      />

      <Button
        className={`b1 ${todoStore.filterStatus === null ? "active" : ""}`}
        onClick={() => todoStore.setFilterStatus(null)}
      >
        All
      </Button>
      <Button
        className={`b2 ${todoStore.filterStatus === true ? "active" : ""}`}
        onClick={() => todoStore.setFilterStatus(true)}
      >
        Completed
      </Button>

      <Button
        className={`b3 ${todoStore.filterStatus === false ? "active" : ""}`}
        onClick={() => todoStore.setFilterStatus(false)}
      >
        Not Completed
      </Button>
    </div>
  );
});

export default TodoFilters;
