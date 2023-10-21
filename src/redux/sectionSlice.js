import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createSection = createAsyncThunk(
  "createSection", // modify it to access the uploaded excel sheet
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6532ced6d80bd20280f61298.mockapi.io/api/v1/section",
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
export const showSection = createAsyncThunk(
  "showSection",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://6532ced6d80bd20280f61298.mockapi.io/api/v1/section",
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
export const deleteSection = createAsyncThunk(
  "deleteSection",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6532ced6d80bd20280f61298.mockapi.io/api/v1/section/${id}`,
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
export const editSection = createAsyncThunk(
  "editSection",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://6532ced6d80bd20280f61298.mockapi.io/api/v1/section/${data.id}`,
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

export const sectionSlice = createSlice({
  name: "sectionDetail",
  initialState: {
    sections: [],
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
    [createSection.pending]: (state) => {
      state.loading = true;
    },
    [createSection.fulfilled]: (state, action) => {
      state.loading = false;
      state.sections.push(action.payload);
    },
    [createSection.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [showSection.pending]: (state) => {
      state.loading = true;
    },
    [showSection.fulfilled]: (state, action) => {
      state.loading = false;
      state.sections = action.payload;
    },
    [showSection.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteSection.pending]: (state) => {
      state.loading = true;
    },
    [deleteSection.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.sections = state.sections.filter((ele) => ele.id !== id);
      }
    },
    [deleteSection.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [editSection.pending]: (state) => {
      state.loading = true;
    },
    [editSection.fulfilled]: (state, action) => {
      state.loading = false;
      state.sections = state.sections.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [editSection.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default sectionSlice.reducer;

export const { searchUser } = sectionSlice.actions;