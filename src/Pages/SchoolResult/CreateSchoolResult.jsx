import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { createSchoolResults } from "../../redux/schoolResultSlice";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormGroup } from "@mui/material";
import { showSchool } from "../../redux/schoolSlice";

function CreateSchoolResult(props) {
  const { onClose, selectedValue, open } = props;
  const { schools } = useSelector((state) => state.schoolDetail);
  const [inputs, setInputs] = useState({
    school: "",
    result_publish: false,
  });
  const dispatch = useDispatch();

  const getSchoolResultData = (e) => {
    console.log(e.target.checked);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSchoolResults(inputs));
    handleClose();
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
      <DialogTitle>Create Schoolresult</DialogTitle>
      <DialogContent>
        <form>
          <div className="pt-4">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small-label">School ID</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={inputs.school}
                name="school"
                label="School ID"
                onChange={getSchoolResultData}
              >
                {schools.map((data) => (
                  <MenuItem key={data.id} value={data.name}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="pt-4">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() =>
                      setInputs((prev) => ({
                        ...prev,
                        result_publish: !inputs.result_publish,
                      }))
                    }
                  />
                }
                label="Publish result"
              />
            </FormGroup>
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

export default CreateSchoolResult;
