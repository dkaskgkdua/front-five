import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../util/api";

const DOMAIN = process.env.NEXT_PUBLIC_API_URL;

export const checkEmailDup = createAsyncThunk(
  "account/checkEmailDup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(
        DOMAIN + "/api/v1/accounts/checkEmailDup",
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkPhoneDup = createAsyncThunk(
  "account/checkPhoneDup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(
        DOMAIN + "/api/v1/accounts/checkPhoneDup",
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getInfo = createAsyncThunk(
  "account/getInfo",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.get(DOMAIN + "/api/v1/admin/test");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
