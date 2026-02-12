import { observer } from "mobx-react-lite";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import todoStore from "../store/todoStore";

const TodoFilters = observer(() => {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
      <Input
        placeholder="Search Title Name a"
        prefix={<SearchOutlined />}
        value={todoStore.searchText}
        onChange={(e) => todoStore.setSearchText(e.target.value)}
      />

      <Button onClick={() => todoStore.setFilterStatus(null)}>All</Button>
      <Button onClick={() => todoStore.setFilterStatus(true)}>Completed</Button>
      <Button onClick={() => todoStore.setFilterStatus(true)}>
        Not Completed
      </Button>
    </div>
  );
});

export default TodoFilters;
