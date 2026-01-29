import { observer } from "mobx-react-lite";
import userStore from "../store/userStore";
import {
  DeleteOutlined,
  SearchOutlined,
  EditOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Table, Modal, Input, Spin, Switch } from "antd";
import { useState } from "react";

const UserTable = observer(() => {
  const { users, loading, deleteUser, editUser, toggleCompleted, addUser } =
    userStore;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [editCompleted, setEditCompleted] = useState(false);

  const [addOpen, setAddOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCompleted, setNewCompleted] = useState(false);

  //  Delete
  const onDelete = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this Todo?",
      okType: "danger",
      onOk: () => deleteUser(record.id),
    });
  };

  //  Edit
  const onEdit = (record) => {
    setEditId(record.id);
    setEditTitle(record.title);
    setEditCompleted(record.completed);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    editUser(editId, editTitle, editCompleted);
    setIsModalOpen(false);
  };

  //  Add New
  const handleAdd = () => {
    if (!newTitle.trim()) return;
    addUser(newTitle, newCompleted);
    setAddOpen(false);
    setNewTitle("");
    setNewCompleted(false);
  };

  //  Search
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
          placeholder="Search..."
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
          danger
          onClick={() => {
            clearFilters();
            confirm();
          }}
          style={{ width: "100%" }}
        >
          Reset
        </Button>
      </>
    ),
    filterIcon: () => <SearchOutlined />,
    onFilter: (value, record) => {
      const recordValue = record[dataIndex];
      return String(recordValue).toLowerCase().includes(value.toLowerCase());
    },
  });

  //  Table Columns
  const columns = [
    { title: "User ID", dataIndex: "userId" },
    { title: "ID", dataIndex: "id", ...getSearch("id") },
    { title: "Title", dataIndex: "title" },
    {
      title: "Completed",
      dataIndex: "completed",
      filters: [
        { text: "Completed", value: true },
        { text: "Not Completed", value: false },
      ],
      onFilter: (value, record) => record.completed === value,
      render: (_, record) =>
        record.completed ? (
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
      title: "Edit",
      render: (_, record) => (
        <EditOutlined
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => onEdit(record)}
        />
      ),
    },
    {
      title: "Delete",
      render: (_, record) => (
        <DeleteOutlined
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(record)}
        />
      ),
    },
  ];

  //  Loader
  if (loading) return <Spin size="large" />;

  return (
    <>
      {/* Add Button */}
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginBottom: 16 }}
        onClick={() => setAddOpen(true)}
      >
        Add Todo
      </Button>

      {/*  Table */}
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        pagination={{ showSizeChanger: true }}
      />

      {/*  Edit Modal */}
      <Modal
        title="Edit Todo"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={() => setIsModalOpen(false)}
      >
        <Input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Edit Title"
        />

        <div style={{ marginTop: 10 }}>
          Completed:{" "}
          <Switch
            checked={editCompleted}
            onChange={(val) => setEditCompleted(val)}
          />
        </div>
      </Modal>

      {/*  Add Modal */}
      <Modal
        title="Add New Todo"
        open={addOpen}
        onOk={handleAdd}
        onCancel={() => setAddOpen(false)}
      >
        <Input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter Title"
        />

        <div style={{ marginTop: 10 }}>
          Completed:{" "}
          <Switch
            checked={newCompleted}
            onChange={(val) => setNewCompleted(val)}
          />
        </div>
      </Modal>
    </>
  );
});

export default UserTable;
