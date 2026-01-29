//* Here We Can Add User table Like Its Buttoh, form , search , sort

import { observer } from "mobx-react-lite";
import userStore from "../store/userStore";
import {
  // EditOutlined For Edit User Data
  DeleteOutlined,
  SearchOutlined,
  EditOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Button, Table, Modal, Input, Spin } from "antd";
import { useState } from "react";

const UserTable = observer(() => {
  const { users, loading, deleteUser, editUser, toggleCompleted } = userStore;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editId, setEditId] = useState(null);
  //* delete

  const onDelete = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this user/User data",
      okType: "danger",
      onOk: () => deleteUser(record.id),
    });
  };

  //* Edit

  const onEdit = (record) => {
    setEditId(record.id);
    setEditTitle(record.title);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    editUser(editId, editTitle);

    setIsModalOpen(false);
  };
  // * Search

  const getSearch = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <>
        <Input
          autoFocus
          placeholder="search"
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()}
          onBlur={() => confirm()}
          style={{ marginBottom: 8, display: "block" }}
        />

        <Button
          type="primary"
          onClick={() => confirm()}
          style={{ width: "100%", marginBottom: 8 }}
        >
          Search
        </Button>

        <Button
          onClick={() => {
            clearFilters();
            confirm();
          }}
          danger
          style={{ width: "100%" }}
        >
          Reset
        </Button>
      </>
    ),
    filterIcon: () => <SearchOutlined />,
    onFilter: (value, record) => {
      const recordValue = record[dataIndex];

      if (typeof recordValue === "number") {
        return recordValue === Number(value);
      }

      return String(recordValue).toLowerCase().includes(value.toLowerCase());
    },
  });

  const columns = [
    { title: "UserID", dataIndex: "userId" },
    { title: "ID", dataIndex: "id", ...getSearch("id") },
    { title: "Title", dataIndex: "title" },
    {
      title: "Completed",
      dataIndex: "completed",
      filters: [
        { text: "Completed", value: "true" },
        { text: "Not Completed", value: "false" },
      ],
      onFilter: (value, record) => record.completed === value,
      render: (_, record) =>
        record.completed === "true" ? (
          <CheckCircleOutlined
            style={{ color: "green", fontSize: 18, cursor: "pointer" }}
            onClick={() => toggleCompleted(record.id)}
          />
        ) : (
          <CloseCircleOutlined
            style={{ color: "red", fontSize: 18, cursor: "pointer" }}
            onClick={() => toggleCompleted(record.id)}
          />
        ),
    },
    {
      title: "Delete",
      render: (_, record) => (
        <DeleteOutlined
          style={{ color: "red" }}
          onClick={() => onDelete(record)}
        />
      ),
    },
    {
      title: "Edit",
      render: (_, record) => (
        <EditOutlined
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => onEdit(record)}
        />
      ),
    },
  ];

  //* Loader Show

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={users}
        rowKey={"id"}
        pagination={{ showSizeChanger: true }}
      />

      <Modal
        title="Edit Todo"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={() => setIsModalOpen(false)}
      >
        <Input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Edit title"
        />
      </Modal>
    </>
  );
});

export default UserTable;
