import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { createSection } from "../../redux/sectionSlice";

function CreateSection(props) {
  const { onClose, selectedValue, open } = props;
  const [sections, setSections] = useState({});
  const dispatch = useDispatch();

  const getSectionData = (e) => {
    setSections({ ...sections, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSection(sections));
    handleClose();
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
      <DialogTitle>Create Section</DialogTitle>
      <DialogContent>
        <form >
          <div className="pt-4">
            <TextField
              fullWidth
              label="Title"
              name="title"
              onChange={getSectionData}
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

export default CreateSection;


