import { observer } from "mobx-react-lite";
import { Table, Spin, Modal, message } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import todoStore from "../store/todoStore";

const TodoTable = observer(() => {
  if (todoStore.loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <Spin size="large" />
      </div>
    );
  }

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Title", dataIndex: "title" },
    { title: "Password", render: () => "••••••" },
    {
      title: "Completed",
      render: (_, record) =>
        record.completed ? (
          <CheckCircleOutlined
            style={{ color: "green", fontSize: 18, cursor: "pointer" }}
            onClick={() => todoStore.toggleCompleted(record.id)}
          />
        ) : (
          <CloseCircleOutlined
            style={{ color: "red", fontSize: 18, cursor: "pointer" }}
            onClick={() => todoStore.toggleCompleted(record.id)}
          />
        ),
    },

    {
      title: "Edit",
      render: (_, record) => (
        <EditOutlined
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => todoStore.openEditModal(record)}
        />
      ),
    },

    {
      //** Delete The Data for confirmation
      title: "Delete",
      render: (_, record) => (
        <DeleteOutlined
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            Modal.confirm({
              title: "Are you sure?",
              content: "permanently deleted.",
              okText: "Yes, Delete",
              okType: "danger",
              cancelText: "Cancel",
              onOk() {
                todoStore.deleteTodo(record.id);
                message.success(" MSG Deleted successfullY My bro");
              },
            });
          }}
        />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={todoStore.filteredTodos}
      rowKey="id"
      pagination={{ showSizeChanger: true }}
    />
  );
});

export default TodoTable;
