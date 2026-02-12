import "antd/dist/antd.css";
import "./App.css";
// import UserTable from "./components/UserTable";
import TodoTable from "./features/todo/components/TodoTable";
import TodoFilters from "./features/todo/components/TodoFilters";
import AddTodoModal from "./features/todo/components/AddTodoModal";
import EditTodoModal from "./features/todo/components/EditTodoModal";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Todo App(Store data in Local storage)</h1>

      <TodoFilters />
      <AddTodoModal />
      <TodoTable />
      <EditTodoModal />
    </div>
    // <div className="App">
    //   <UserTable />
    // </div>
  );
}

export default App;
