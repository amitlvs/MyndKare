import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createExam = createAsyncThunk(
  "createExam", // modify it to access the uploaded excel sheet
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://653379eed80bd20280f685a1.mockapi.io/api/v1/exam",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


//read action
export const showExam = createAsyncThunk(
  "showExam",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://653379eed80bd20280f685a1.mockapi.io/api/v1/exam",
      { method: "GET" }
    );

    try {
      const result = await response.json();
      console.log(result)
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//delete action
export const deleteExam = createAsyncThunk(
  "deleteExam",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://653379eed80bd20280f685a1.mockapi.io/api/v1/exam/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//update action
export const editExam = createAsyncThunk(
  "editExam",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://653379eed80bd20280f685a1.mockapi.io/api/v1/exam/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const examSlice = createSlice({
  name: "examDetail",
  initialState: {
    exams: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },

  extraReducers: {
    [createExam.pending]: (state) => {
      state.loading = true;
    },
    [createExam.fulfilled]: (state, action) => {
      state.loading = false;
      state.exams.push(action.payload);
    },
    [createExam.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [showExam.pending]: (state) => {
      state.loading = true;
    },
    [showExam.fulfilled]: (state, action) => {
      state.loading = false;
      state.exams = action.payload;
    },
    [showExam.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteExam.pending]: (state) => {
      state.loading = true;
    },
    [deleteExam.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.exams = state.exams.filter((ele) => ele.id !== id);
      }
    },
    [deleteExam.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [editExam.pending]: (state) => {
      state.loading = true;
    },
    [editExam.fulfilled]: (state, action) => {
      state.loading = false;
      state.exams = state.exams.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [editExam.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default examSlice.reducer;

export const { searchUser } = examSlice.actions;