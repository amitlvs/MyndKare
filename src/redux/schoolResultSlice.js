import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createSchoolResults = createAsyncThunk(
  "createSchoolResults", // modify it to access the uploaded excel sheet
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6532b115d80bd20280f5ec6e.mockapi.io/api/v1/schoolResult",
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
export const showSchoolResult = createAsyncThunk(
  "showSchoolResult",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://6532b115d80bd20280f5ec6e.mockapi.io/api/v1/schoolResult",
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
export const deleteSchoolResult = createAsyncThunk(
  "deleteSchoolResult",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6532b115d80bd20280f5ec6e.mockapi.io/api/v1/schoolResult/${id}`,
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
export const editSchoolResult = createAsyncThunk(
  "editSchoolResult",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://6532b115d80bd20280f5ec6e.mockapi.io/api/v1/schoolResult/${data.id}`,
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

export const schoolResultSlice = createSlice({
  name: "schoolResultDetail",
  initialState: {
    schoolResults: [],
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
    [createSchoolResults.pending]: (state) => {
      state.loading = true;
    },
    [createSchoolResults.fulfilled]: (state, action) => {
      state.loading = false;
      state.schoolResults.push(action.payload);
    },
    [createSchoolResults.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [showSchoolResult.pending]: (state) => {
      state.loading = true;
    },
    [showSchoolResult.fulfilled]: (state, action) => {
      state.loading = false;
      state.schoolResults = action.payload;
    },
    [showSchoolResult.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteSchoolResult.pending]: (state) => {
      state.loading = true;
    },
    [deleteSchoolResult.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.schoolResults = state.schoolResults.filter((ele) => ele.id !== id);
      }
    },
    [deleteSchoolResult.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [editSchoolResult.pending]: (state) => {
      state.loading = true;
    },
    [editSchoolResult.fulfilled]: (state, action) => {
      state.loading = false;
      state.schoolResults = state.schoolResults.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [editSchoolResult.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default schoolResultSlice.reducer;

export const { searchUser } = schoolResultSlice.actions;