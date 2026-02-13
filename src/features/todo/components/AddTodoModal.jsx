import { observer } from "mobx-react-lite";
import { Modal, Input, Switch, Button } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import todoStore from "../store/todoStore";

const AddTodoModal = observer(() => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [completed, setCompleted] = useState(false);
  const resetEditForm = () => {
    setTitle("");
    setPassword("");
    setCompleted();
  };

  return (
    <>
      {/*  Add botton  */}
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginBottom: 16 }}
        onClick={() => todoStore.openAddModal()}
      >
        Add Todo
      </Button>

      <Modal
        title="Add New Todo"
        open={todoStore.addModalOpen}
        onOk={() => {
          if (!title || !password) return;
          todoStore.addTodo(title, password, completed);
          resetEditForm();
          setTitle("");
          setPassword("");
          setCompleted(false);
          todoStore.closeAddModal();
        }}
        onCancel={() => {
          //WHen close the add menu then reset the data
          resetEditForm();
          todoStore.closeAddModal();
        }}
      >
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: 10 }}
        />

        <div style={{ marginTop: 10 }}>
          Completed:{" "}
          <Switch checked={completed} onChange={(val) => setCompleted(val)} />
        </div>
      </Modal>
    </>
  );
});

export default AddTodoModal;
