import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createClass = createAsyncThunk(
  "createClass", // modify it to access the uploaded excel sheet
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6532ced6d80bd20280f61298.mockapi.io/api/v1/class",
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
export const showClass = createAsyncThunk(
  "showClass",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://6532ced6d80bd20280f61298.mockapi.io/api/v1/class",
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
export const deleteClass = createAsyncThunk(
  "deleteClass",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6532ced6d80bd20280f61298.mockapi.io/api/v1/class/${id}`,
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
export const editClass = createAsyncThunk(
  "editClass",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://6532ced6d80bd20280f61298.mockapi.io/api/v1/class/${data.id}`,
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

export const classSlice = createSlice({
  name: "classDetail",
  initialState: {
    classes: [],
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
    [createClass.pending]: (state) => {
      state.loading = true;
    },
    [createClass.fulfilled]: (state, action) => {
      state.loading = false;
      state.classes.push(action.payload);
    },
    [createClass.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [showClass.pending]: (state) => {
      state.loading = true;
    },
    [showClass.fulfilled]: (state, action) => {
      state.loading = false;
      state.classes = action.payload;
    },
    [showClass.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteClass.pending]: (state) => {
      state.loading = true;
    },
    [deleteClass.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.classes = state.classes.filter((ele) => ele.id !== id);
      }
    },
    [deleteClass.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [editClass.pending]: (state) => {
      state.loading = true;
    },
    [editClass.fulfilled]: (state, action) => {
      state.loading = false;
      state.classes = state.classes.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [editClass.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default classSlice.reducer;

export const { searchUser } = classSlice.actions;