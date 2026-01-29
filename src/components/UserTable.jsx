//* Here We Can Add User table Like Its Buttoh, form , search , sort

import { observer } from "mobx-react-lite";
import userStore from "../store/userStore";
import {
  // EditOutlined For Edit User Data
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Table, Modal, Input, Spin } from "antd";

const UserTable = observer(() => {
  const { users, loading, deleteUser } = userStore;

  //* delete

  const onDelete = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this user/User data",
      okType: "danger",
      onOk: () => deleteUser(record.id),
    });
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
        />

        <Button onClick={() => confirm()} type="primary">
          Search Here
        </Button>
        <Button onClick={() => clearFilters()} type="danger">
          {" "}
          Reset{" "}
        </Button>
      </>
    ),
    filterIcon: () => <SearchOutlined />,
    onFilter: (value, record) =>
      record[dataIndex].toLowerCase().includes(value.toLowerCase()),
  });

  const columns = [
    { title: "UserID", dataIndex: "userId" },
    { title: "ID", dataIndex: "id", ...getSearch("id") },
    { title: "Title", dataIndex: "title", ...getSearch("title") },
    { title: "Completed", dataIndex: "completed", ...getSearch("completed") },
    {
      title: "Delete",
      render: (_, record) => (
        <DeleteOutlined
          style={{ color: "red" }}
          onClick={() => onDelete(record)}
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
      {/* <Button onClick={addUser} type="primary">
        Add User
      </Button> */}
    </>
  );
});

export default UserTable;
