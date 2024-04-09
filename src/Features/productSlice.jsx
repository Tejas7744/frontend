import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/product");
    return response?.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.status = "pending";
    });

    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default productSlice.reducer;
// ================================================================

// using gpt code by add builder to improve this code functionality

// ================Gpt=code============================

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   items: [],
//   status: null,
// };

// export const productsFetch = createAsyncThunk(
//   "products/productsFetch",
//   async () => {
//     const response = await axios.get("http://localhost:5000/products");
//     return response?.data;
//   }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(productsFetch.pending, (state, action) => {
//         state.status = "pending";
//       })
//       .addCase(productsFetch.fulfilled, (state, action) => {
//         state.status = "success";
//         state.items = action.payload;
//       })
//       .addCase(productsFetch.rejected, (state, action) => {
//         state.status = "rejected";
//       });
//   },
// });

// export default productSlice.reducer;
