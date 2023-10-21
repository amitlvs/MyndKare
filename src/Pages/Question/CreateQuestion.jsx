import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Padding } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { createQuestion } from "../../redux/questionSlice";
import { useNavigate } from "react-router-dom";

function CreateQuestion(props) {
  const { onClose, selectedValue, open } = props;
  const [questions, setQuestions] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getQuestionData = (e) => {
    setQuestions({ ...questions, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuestion(questions));
    handleClose();
  }

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
      <DialogTitle>Create Question</DialogTitle>
      <DialogContent>
        <form >
          <div className="pt-4">
            <TextField
              fullWidth
              label="Question"
              name="question"
              onChange={getQuestionData}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
            />
          </div>
          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Option 1"
              name="option1"
              onChange={getQuestionData}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
            />

            <TextField
              style={{ width: "50%" }}
              label="Option 2"
              name="option2"
              onChange={getQuestionData}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
            />
          </div>
          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Option 3"
              name="option3"
              onChange={getQuestionData}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
            />

            <TextField
              style={{ width: "50%" }}
              label="Option 4"
              name="option4"
              onChange={getQuestionData}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
            />
          </div>
          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Option 5"
              name="option5"
              onChange={getQuestionData}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
            />

            <TextField
              style={{ width: "50%" }}
              label="Comp"
              name="comp"
              onChange={getQuestionData}
              id="outlined-size-small"
              size="small"
            />
          </div>
          <div className="pt-4">
            <TextField
              style={styles.equalFields}
              label="Answer"
              name="answer"
              onChange={getQuestionData}
              id="outlined-size-small"
              size="small"
            />

            <TextField
              style={{ width: "50%" }}
              label="Exam"
              name="exam"
              onChange={getQuestionData}
              id="outlined-size-small"
              size="small"
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

export default CreateQuestion


