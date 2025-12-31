import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// import "antd/dist/antd.css";
// import "./App.css";
// import { Button, Table, Modal, Input } from "antd";
// import { useState } from "react";
// import {
//   EditOutlined,
//   DeleteOutlined,
//   SearchOutlined,
// } from "@ant-design/icons";

// function App() {
//   const [dataSource, setDataSource] = useState([
//     {
//       id: 1,
//       name: "Nirav",
//       email: "niravvasani12@gmail.com",
//       address: "Surat Gujarat",
//       date: "2025-01-10",
//     },
//     {
//       id: 2,
//       name: "Kamal bhai",
//       email: "kamal123@gmail.com",
//       address: "jaipur Rajasthan",
//       date: "2025-01-15",
//     },
//     {
//       id: 3,
//       name: "Nikunj Bhai",
//       email: "Nikunj123@gmail.com",
//       address: "Ahemdabad Gujarat",
//       date: "2025-01-12",
//     },
//     {
//       id: 4,
//       name: "Kiran",
//       email: "kiran123@gmail.com",
//       address: "Amreli Gujarat",
//       date: "2025-01-08", // ✅ ADDED
//     },
//   ]);

//   const columns = [
//     {
//       key: "1",
//       title: "ID",
//       dataIndex: "id",
//     },
//     {
//       key: "2",
//       title: "Name",
//       dataIndex: "name",
//       filterDropdown: ({
//         setSelectedKeys,
//         selectedKeys,
//         confirm,
//         clearFilters,
//       }) => {
//         return (
//           <>
//             <Input
//               autoFocus
//               placeholder="Type to Search "
//               value={selectedKeys[0]}
//               onChange={(e) => {
//                 setSelectedKeys(e.target.value ? [e.target.value] : []);
//                 confirm({ closeDropdown: false });
//               }}
//               onPressEnter={() => confirm()}
//               onBlur={() => confirm()}
//             />
//             <Button onClick={() => confirm()} type="primary">
//               Search
//             </Button>
//             <Button onClick={() => clearFilters()} type="danger">
//               Reset
//             </Button>
//           </>
//         );
//       },
//       filterIcon: () => <SearchOutlined />,
//       onFilter: (value, record) =>
//         record.name.toLowerCase().includes(value.toLowerCase()),
//     },
//     {
//       key: "3",
//       title: "Email",
//       dataIndex: "email",
//       filterDropdown: ({
//         setSelectedKeys,
//         selectedKeys,
//         confirm,
//         clearFilters,
//       }) => {
//         return (
//           <>
//             <Input
//               autoFocus
//               placeholder="Type to Search "
//               value={selectedKeys[0]}
//               onChange={(e) => {
//                 setSelectedKeys(e.target.value ? [e.target.value] : []);
//                 confirm({ closeDropdown: false });
//               }}
//               onPressEnter={() => confirm()}
//               onBlur={() => confirm()}
//             />
//             <Button onClick={() => confirm()} type="primary">
//               Search
//             </Button>
//             <Button onClick={() => clearFilters()} type="danger">
//               Reset
//             </Button>
//           </>
//         );
//       },
//       filterIcon: () => <SearchOutlined />,
//       onFilter: (value, record) =>
//         record.email.toLowerCase().includes(value.toLowerCase()),
//     },
//     {
//       key: "4",
//       title: "Address",
//       dataIndex: "address",
//       filterDropdown: ({
//         setSelectedKeys,
//         selectedKeys,
//         confirm,
//         clearFilters,
//       }) => {
//         return (
//           <>
//             <Input
//               autoFocus
//               placeholder="Type to Search "
//               value={selectedKeys[0]}
//               onChange={(e) => {
//                 setSelectedKeys(e.target.value ? [e.target.value] : []);
//                 confirm({ closeDropdown: false });
//               }}
//               onPressEnter={() => confirm()}
//               onBlur={() => confirm()}
//             />
//             <Button onClick={() => confirm()} type="primary">
//               Search
//             </Button>
//             <Button onClick={() => clearFilters()} type="danger">
//               Reset
//             </Button>
//           </>
//         );
//       },
//       filterIcon: () => <SearchOutlined />,
//       onFilter: (value, record) =>
//         record.address.toLowerCase().includes(value.toLowerCase()),
//     },

//     {
//       key: "5",
//       title: "Date By sorted",
//       dataIndex: "date",
//       sorter: (a, b) => new Date(a.date) - new Date(b.date),
//       sortDirections: ["ascend", "descend"],
//     },

//     {
//       key: "6",
//       title: "Delete",
//       render: (record) => {
//         return (
//           <DeleteOutlined
//             onClick={() => onDeleteUser(record)}
//             style={{ color: "red" }}
//           />
//         );
//       },
//     },
//   ];

//   const onAddUser = () => {
//     const randNumber = Math.floor(Math.random() * 100);

//     const randomLetter = Array.from({ length: 5 }, () =>
//       String.fromCharCode(65 + Math.floor(Math.random() * 26))
//     ).join("");

//     const today = new Date().toISOString().split("T")[0];

//     const newUser = {
//       id: randNumber,
//       name: randomLetter,
//       email: randomLetter + randNumber + "@gmail.com",
//       address: randomLetter + randNumber,
//       date: today,
//     };

//     setDataSource((pre) => {
//       return [...pre, newUser];
//     });
//   };

//   const onDeleteUser = (record) => {
//     Modal.confirm({
//       title: "Are you sure, you want to delete this user/User data",
//       okText: "Yes",
//       okType: "danger",
//       onOk: () => {
//         setDataSource((pre) => {
//           return pre.filter((user) => user.id !== record.id);
//         });
//       },
//     });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button onClick={onAddUser}>Add New User From Here</Button>
//         <Table columns={columns} dataSource={dataSource} />
//       </header>
//     </div>
//   );
// }

// export default App;
