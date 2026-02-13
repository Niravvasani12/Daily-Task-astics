import { observer } from "mobx-react-lite";
import { Modal, Input, Switch } from "antd";
import { useState, useEffect, useRef } from "react";
import todoStore from "../store/todoStore";

const EditTodoModal = observer(() => {
  const todo = todoStore.editingTodo;
  const editModalOpen = todoStore.editModalOpen;

  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [completed, setCompleted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputRef = useRef(null);

  // Set values when editing todo changes
  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setPassword(todo.password);
      setCompleted(todo.completed);
    }
  }, [todo]);

  useEffect(() => {
    if (editModalOpen) {
      setPasswordVisible(false);

      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [editModalOpen]);

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
      <Input
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input.Password
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        visibilityToggle={{
          visible: passwordVisible,
          onVisibleChange: (visible) => setPasswordVisible(visible),
        }}
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
