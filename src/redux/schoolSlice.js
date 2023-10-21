import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createSchool = createAsyncThunk(
  "createSchool", // modify it to access the uploaded excel sheet
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6532b115d80bd20280f5ec6e.mockapi.io/api/v1/school",
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
export const showSchool = createAsyncThunk(
  "showSchool",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://6532b115d80bd20280f5ec6e.mockapi.io/api/v1/school",
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
export const deleteSchool = createAsyncThunk(
  "deleteSchool",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6532b115d80bd20280f5ec6e.mockapi.io/api/v1/school/${id}`,
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
export const editSchool = createAsyncThunk(
  "editSchool",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://6532b115d80bd20280f5ec6e.mockapi.io/api/v1/school/${data.id}`,
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

export const schoolSlice = createSlice({
  name: "schoolDetail",
  initialState: {
    schools: [],
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
    [createSchool.pending]: (state) => {
      state.loading = true;
    },
    [createSchool.fulfilled]: (state, action) => {
      state.loading = false;
      state.schools.push(action.payload);
    },
    [createSchool.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [showSchool.pending]: (state) => {
      state.loading = true;
    },
    [showSchool.fulfilled]: (state, action) => {
      state.loading = false;
      state.schools = action.payload;
    },
    [showSchool.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteSchool.pending]: (state) => {
      state.loading = true;
    },
    [deleteSchool.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.schools = state.schools.filter((ele) => ele.id !== id);
      }
    },
    [deleteSchool.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [editSchool.pending]: (state) => {
      state.loading = true;
    },
    [editSchool.fulfilled]: (state, action) => {
      state.loading = false;
      state.schools = state.schools.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [editSchool.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default schoolSlice.reducer;

export const { searchUser } = schoolSlice.actions;