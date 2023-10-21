import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { createClass } from "../../redux/classSlice";

function CreateClass(props) {
  const { onClose, selectedValue, open } = props;
  const [classes, setClasses] = useState({});
  const dispatch = useDispatch();

  const getClassData = (e) => {
    setClasses({ ...classes, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createClass(classes));
    handleClose();
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
      <DialogTitle>Create School</DialogTitle>
      <DialogContent>
        <form >
          <div className="pt-4">
            <TextField
              fullWidth
              label="Title"
              name="title"
              onChange={getClassData}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
            />
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateClass;


