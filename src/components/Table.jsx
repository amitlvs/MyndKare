
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export function Table(props) {
  const {
    rows,
    columns,
    checkboxSelection,
    initialState,
    disableSelectionOnClick,
    pageSizeOptions,
    height,
    width,
  } = props;
  return (
    <div style={{ height: height, width: width }}>
      <DataGrid
        rows={rows}
        height={height}
        width={width}
        columns={columns}
        getRowHeight={() => "auto"}
        initialState={initialState}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick={disableSelectionOnClick}
      />
    </div>
  );
}