import { Table } from "antd";
import { getColumns } from "../columns/tableColumns";

function UserTable({ dataSource, onDeleteUser }) {
  return (
    <Table
      columns={getColumns(onDeleteUser)}
      dataSource={dataSource}
      rowKey="id"
    />
  );
}

export default UserTable;
