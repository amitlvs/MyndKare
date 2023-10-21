import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createExam } from "../../redux/examSlice";

function CreateExam(props) {
  const { onClose, selectedValue, open } = props;
  const [exams, setExams] = useState({});
  const dispatch = useDispatch();

  const getExamData = (e) => {
    setExams({ ...exams, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createExam(exams));
    handleClose();
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const styles = {
    equalFields: {
      width: "50%",
      paddingRight: "15px",
    },
  };

  return (
    <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
      <DialogTitle>Create Exam</DialogTitle>
      <DialogContent>
        <form>
          <div className="pt-4">
            <TextField
              fullWidth
              label="Title"
              name="title"
              onChange={getExamData}
              id="outlined-size-small"
              size="small"
            />
          </div>

          <div className="pt-4 flex items-center justify-center" >
          <FormControl size="small" sx={{ display: "inline-flex", width: "100%", paddingRight:"20px"}}>
            <InputLabel id="demo-select-small-label">Timer</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              name="timer"
              value={exams.timer}
              label="Timer"
              onChange={getExamData}
            >
              <MenuItem value="">
              </MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
            </FormControl>

            <FormControl sx={{ display: "inline-flex", width: "100%" }} size="small">
            <InputLabel id="demo-select-small-label">Timer Visible</InputLabel>
            <Select
      
              labelId="demo-select-small-label"
              id="demo-select-small"
              name="timer_visible"
              value={exams.timer_visible}
              label="Timer Visible"
              onChange={getExamData}
            >
              <MenuItem value="">
              </MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
            </FormControl>
          </div>

          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Duration"
              name="duration"
              type="number"
              onChange={getExamData}
              id="outlined-number"
              size="small"
            />

            <TextField
              style={{ width: "50%" }}
              label="Questions"
              name="question"
              onChange={getExamData}
              id="outlined-number"
              size="small"
              type="number"
            />
          </div>
          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Serial"
              name="serial"
              onChange={getExamData}
              id="outlined-number"
              size="small"
              type="number"
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

export default CreateExam;
