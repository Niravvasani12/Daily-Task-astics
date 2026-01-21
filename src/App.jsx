//? this is compulsory for used zTo ANTDesign

import "antd/dist/antd.css";
import "./App.css";
import { useState } from "react";

function App() {
  //* Fetch the Data or Data source
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    //* key show How many column are addeed in our table
    // ? 1. filterDropdown is used to Search the data of record
    // ? 2. DeletedOutlined is used to delete the data from record
    // ? 3. EditedOutlined is used to Edit the data from record
    // ? 4. const today = new Date().toISOString().split("T")[0]; is used TO sort data by its date

    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
      // FilterDropDown used for Searching The data in record
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type to Search "
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
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
        );
      },
      filterIcon: () => <SearchOutlined />,
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(value.toLowerCase()),
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type to Search "
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
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
        );
      },
      filterIcon: () => <SearchOutlined />,
      onFilter: (value, record) =>
        record.email.toLowerCase().includes(value.toLowerCase()),
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type to Search "
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
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
        );
      },
      filterIcon: () => <SearchOutlined />,
      onFilter: (value, record) =>
        record.address.toLowerCase().includes(value.toLowerCase()),
    },

    {
      key: "5",
      title: "Date By sorted",
      dataIndex: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      sortDirections: ["ascend", "descend"],
    },

    {
      key: "6",
      title: "Delete",
      render: (record) => {
        return (
          <DeleteOutlined
            onClick={() => onDeleteUser(record)}
            style={{ color: "red" }}
          />
        );
      },
    },
  ];

  const onDeleteUser = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this user/User data",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((user) => user.id !== record.id);
        });
      },
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          pagination={{
            pageSize: 5,
            showSizeChanger: true,
          }}
        />
      </header>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
