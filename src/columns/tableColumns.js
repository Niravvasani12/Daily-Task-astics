import { Input, Button } from "antd";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";

export const getColumns = (onDeleteUser) => [
  {
    key: "1",
    title: "ID",
    dataIndex: "id",
  },
  {
    key: "2",
    title: "Name",
    dataIndex: "name",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <>
        <Input
          autoFocus
          placeholder="Type to Search"
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()}
          onBlur={() => confirm()}
        />
        <Button onClick={() => confirm()} type="primary">
          Search
        </Button>
        <Button onClick={() => clearFilters()} type="danger">
          Reset
        </Button>
      </>
    ),
    filterIcon: () => <SearchOutlined />,
    onFilter: (value, record) =>
      record.name.toLowerCase().includes(value.toLowerCase()),
  },
  {
    key: "3",
    title: "Email",
    dataIndex: "email",
    onFilter: (value, record) =>
      record.email.toLowerCase().includes(value.toLowerCase()),
  },
  {
    key: "4",
    title: "Address",
    dataIndex: "address",
    onFilter: (value, record) =>
      record.address.toLowerCase().includes(value.toLowerCase()),
  },
  {
    key: "5",
    title: "Date By sorted",
    dataIndex: "date",
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
  {
    key: "6",
    title: "Delete",
    render: (record) => (
      <DeleteOutlined
        style={{ color: "red" }}
        onClick={() => onDeleteUser(record)}
      />
    ),
  },
];
