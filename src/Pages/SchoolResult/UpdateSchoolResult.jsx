import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Padding } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { editSchoolResult } from "../../redux/schoolResultSlice";
import { FormGroup } from "@mui/material";

function UpdateSchoolResult(props) {
  const { onClose, selectedValue, open } = props;
  let ok = {key:selectedValue.id,value:selectedValue.school}
  const [inputs, setInputs] = useState({
    school: ok,
    result_publish: selectedValue.result_publish,
  });
  const { schools } = useSelector((state) => state.schoolDetail);
  console.log(schools)
  const dispatch = useDispatch();
  
  console.log(ok)
  console.log(selectedValue)
  useEffect(() => {
    if (selectedValue) {
      setInputs(selectedValue);
    }
  }, [selectedValue])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editSchoolResult(inputs));
    handleClose();
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  const updatedSchoolResult = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
      <DialogTitle>Edit Studentresult</DialogTitle>
      <DialogContent>
      <form>
          <div className="pt-4">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small-label">School ID</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                name="school"
                value={inputs && inputs.school}
                
                label="School ID"
                onChange={updatedSchoolResult}
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
                  checked= {inputs && inputs.result_publish }
                    onChange={updatedSchoolResult}
                  />
                }
                label="Publish result"
              />
            </FormGroup>
          </div>
        </form>

        {/* <form >
          <div className="pt-4">
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={updateSchoolResult.result_publish && updateSchoolResult.result_publish}
              id="outlined-size-small"
              size="small"
              multiline
              maxRows={4}
              onChange={updatedSchoolResult}
            />
          </div>
        </form> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateSchoolResult;

