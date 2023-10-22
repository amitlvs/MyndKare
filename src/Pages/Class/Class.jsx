import React, { useEffect } from "react";
import { Table } from "../../components/Table";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteClass, showClass } from "../../redux/classSlice";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { read, utils, writeFile } from "xlsx";
import UpdateClass from "./UpdateClass";
import CreateClass from "./CreateClass";

const tableOptions = {
  height: "auto",
  width: "100%",
  initialState: {
    pagination: {
      paginationModel: {
        pageSize: 10,
      },
    },
  },
  pageSizeOptions: [5, 10, 25],
  checkboxSelection: false,
  disableSelectionOnClick: true,
};

const styles = {
  containerQuestion: {
    padding: "20px 50px 50px 50px",
  },
};

function Class() {
  const [createOpen, setCreateOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [editFormValues, setEditFormValues] = React.useState([]);
  const dispatch = useDispatch();
  const { classes, loading } = useSelector((state) => state.classDetail);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            <Tooltip title="View details">
              <IconButton onClick={() => { }}>
                <Preview />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit details">
              <IconButton
                onClick={(e) => {
                  handleEdit(params.row);
                }}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete details">
              <IconButton
                onClick={() => {
                  console.log("delete--------", params, params.row.id);
                  dispatch(deleteClass(params.row.id));
                }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(showClass());
  }, []);

  const handleCreateOpen = () => {
    setCreateOpen(true);
  };

  const exportToExcel = async () => {
    const worksheet = utils.json_to_sheet(classes);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    writeFile(workbook, "data.xlsx");
  };

  const handleEdit = (value) => {
    setCreateOpen(false);
    setEditOpen(true);
    setEditFormValues(value);
    console.log(value);
  };

  const handleClose = (value) => {
    setEditOpen(false);
    setCreateOpen(false);
    setSelectedValue(value);
  };

  if (loading) {
    return (
      <Box
        className="mb-40 mt-40 flex items-center justify-center"
        sx={{ display: "flex" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {classes && (
        <div style={styles.containerQuestion}>
          <Typography
            className="text-sky-600 text-4xl pb-2 pl-2"
            variant="h4"
            gutterBottom
          >
            Classes
          </Typography>

          <div className="pb-4">
            <Button
              className="mx-2"
              onClick={handleCreateOpen}
              variant="contained"
            >
              Create Classes
            </Button>
          </div>

          <CreateClass
            selectedValue={selectedValue}
            open={createOpen}
            onClose={handleClose}
          />

          <UpdateClass
            selectedValue={editFormValues}
            open={editOpen}
            onClose={handleClose}
          />

          <Table
            height={tableOptions.height}
            width={tableOptions.width}
            rows={classes}
            columns={columns}
            initialState={tableOptions.initialState}
            pageSizeOptions={tableOptions.pageSizeOptions}
            checkboxSelection={tableOptions.checkboxSelection}
            disableSelectionOnClick={tableOptions.disableSelectionOnClick}
          />
          <div className="flex justify-end">
            <Button
              className="my-2"
              onClick={exportToExcel}
              variant="contained"
            >
              Download <DownloadRoundedIcon />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Class;
