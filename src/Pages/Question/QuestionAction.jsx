import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion } from "../../redux/questionSlice";
const QuestionAction = ({ params }) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Tooltip title="View details">
        <IconButton onClick={() => {}}>
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit details">
        <IconButton onClick={() => {
        }}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete details">
        <IconButton
          onClick={() => {
            console.log("delete--------",params,params.row.id)
            dispatch(deleteQuestion(params.row.id))
          }}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default QuestionAction;
