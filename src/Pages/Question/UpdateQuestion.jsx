import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { editQuestion } from "../../redux/questionSlice";

function UpdateQuestion(props) {
  const { onClose, selectedValue, open } = props;
  const [updateQuestion, setUpdateQuestion] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedValue) {
      setUpdateQuestion(selectedValue);
    }
  }, [selectedValue])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editQuestion(updateQuestion));
    handleClose();
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  const updatedQuestion = (e) => {
    setUpdateQuestion({ ...updateQuestion, [e.target.name]: e.target.value })
  }

  const styles = {
    equalFields: {
      width: "50%",
      paddingRight: "15px",
    },
  };

  return (
    <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
      <DialogTitle>Edit Student</DialogTitle>
      <DialogContent>
        <form >
          <div className="pt-4">
            <TextField
              fullWidth
              label="Question"
              name="question"
              value={updateQuestion && updateQuestion.question}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
              onChange={updatedQuestion}
            />
          </div>
          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Option 1"
              name="option1"
              value={updateQuestion && updateQuestion.option1}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
              onChange={updatedQuestion}
            />

            <TextField
              style={{ width: "50%" }}
              label="Option 2"
              name="option2"
              value={updateQuestion && updateQuestion.option2}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
              onChange={updatedQuestion}
            />
          </div>
          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Option 3"
              name="option3"
              value={updateQuestion && updateQuestion.option3}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
              onChange={updatedQuestion}
            />

            <TextField
              style={{ width: "50%" }}
              label="Option 4"
              name="option4"
              value={updateQuestion && updateQuestion.option4}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
              onChange={updatedQuestion}
            />
          </div>
          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Option 5"
              name="option5"
              value={updateQuestion && updateQuestion.option5}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
              onChange={updatedQuestion}
            />

            <TextField
              style={{ width: "50%" }}
              label="Comp"
              name="comp"
              value={updateQuestion && updateQuestion.comp}
              id="outlined-size-small"
              size="small"
              onChange={updatedQuestion}
            />
          </div>
          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Answer"
              name="answer"
              value={updateQuestion && updateQuestion.answer}
              id="outlined-size-small"
              size="small"
              onChange={updatedQuestion}
            />

            <TextField
              style={{ width: "50%" }}
              label="Exam"
              name="exam"
              value={updateQuestion && updateQuestion.exam}
              id="outlined-size-small"
              size="small"
              onChange={updatedQuestion}
            />
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateQuestion

