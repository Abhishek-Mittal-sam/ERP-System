import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns, orderRows } from "./../../datatableSource";

import "./orderdatatable.scss";
import { Link } from "react-router-dom";

const Orderdatatable = () => {
  const [data, setData] = useState(orderRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className=""></div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="orderdatatable">
      <div className="orderdatatableTitle">
        <span>Latest Orders </span>
        <Link to="/orders/orderId/new" style={{ textDecoration: "none" }}>
          <span className="link">Add New</span>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={orderColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};
export default Orderdatatable;
