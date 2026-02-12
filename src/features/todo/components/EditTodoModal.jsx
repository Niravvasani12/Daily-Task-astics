import { observer } from "mobx-react-lite";
import { Modal, Input, Switch } from "antd";
import { useState, useEffect } from "react";
import todoStore from "../store/todoStore";

const EditTodoModal = observer(() => {
  const todo = todoStore.editingTodo;

  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setPassword(todo.password);
      setCompleted(todo.completed);
    }
  }, [todo]);

  return (
    <Modal
      title="Edit Todo"
      open={todoStore.editModalOpen}
      onOk={() => {
        if (!todo) return;
        todoStore.editTodo(todo.id, title, password, completed);
        todoStore.closeEditModal();
      }}
      onCancel={() => todoStore.closeEditModal()}
    >
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />

      <Input.Password
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginTop: 10 }}
      />

      <div style={{ marginTop: 10 }}>
        Completed:{" "}
        <Switch checked={completed} onChange={(val) => setCompleted(val)} />
      </div>
    </Modal>
  );
});

export default EditTodoModal;
