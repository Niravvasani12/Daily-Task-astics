//* Here We Can Add User table Like Its Buttoh, form , search , sort

import { observer } from "mobx-react-lite";
import userStore from "../store/userStore";
import {
  // EditOutlined For Edit User Data
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Table, Modal, Input } from "antd";

const UserTable = observer(() => {
  const { user, loading, adduser, deleteUser } = userStore;

  const onDelete = (record) => {
    Modal.confirm({
      title: "Are You Sure to DElete This Data ?",
      okType: "danger",
      onOk: () => deleteUser(record.id),
    });
  };

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
        
      </>
      <Button onClick ={()=> confirm()} type="primary">Search Here</Button>
      <Button onClick={()=>clearFilters() danger> Reset </Button>
    ),
  });
});
