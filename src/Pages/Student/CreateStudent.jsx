import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function CreateStudent() {
    const styles = {
        equalFields: {
            width: "50%",
            paddingRight: "15px",
        },
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submiting....");
        handleClose();
    }

    const handleClose = () => {
        console.log("close....");

    };

    return (
        <>
            <Dialog fullWidth maxWidth="md" open={open}>
                <DialogTitle>Create Student</DialogTitle>
                <DialogContent>
                    <form >
                        <div className="pt-4">
                            <TextField
                                fullWidth
                                label="Question"
                                name="question"
                                // onChange={getQuestionData}
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
                                // onChange={getQuestionData}
                                id="outlined-size-small"
                                size="small"
                                multiline
                                maxRows={4}
                            />

                            <TextField
                                style={{ width: "50%" }}
                                label="Option 2"
                                name="option2"
                                // onChange={getQuestionData}
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
                                // onChange={getQuestionData}
                                id="outlined-size-small"
                                size="small"
                                multiline
                                maxRows={4}
                            />

                            <TextField
                                style={{ width: "50%" }}
                                label="Option 4"
                                name="option4"
                                // onChange={getQuestionData}
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
                                // onChange={getQuestionData}
                                id="outlined-size-small"
                                size="small"
                                multiline
                                maxRows={4}
                            />

                            <TextField
                                style={{ width: "50%" }}
                                label="Comp"
                                name="comp"
                                // onChange={getQuestionData}
                                id="outlined-size-small"
                                size="small"
                            />
                        </div>
                        <div className="pt-4">
                            <TextField
                                style={styles.equalFields}
                                label="Answer"
                                name="answer"
                                // onChange={getQuestionData}
                                id="outlined-size-small"
                                size="small"
                            />

                            <TextField
                                style={{ width: "50%" }}
                                label="Exam"
                                name="exam"
                                // onChange={getQuestionData}
                                id="outlined-size-small"
                                size="small"
                            />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button>Cancel</Button>
                    <Button>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CreateStudent;