import { createSlice } from "@reduxjs/toolkit";
import { checkPhoneDup, checkEmailDup } from "../actions/account";

// 기본 state
export const initialState = {
  checkPhoneDupLoading: false,
  checkPhoneDupDone: false,
  isPhoneDup: false,
  checkPhoneDupError: null,
    checkEmailDupLoading: false,
    checkEmailDupDone: false,
    isEmailDup: false,
    checkEmailDupError: null,
};

// toolkit 사용방법
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
      resetDupChecked(state) {
          state.isPhoneDup = false;
          state.checkPhoneDupDone = false;
          state.isEmailDup = false;
          state.checkEmailDupDone = false;
      },
  },
  extraReducers: (builder) =>
    builder
        //이메일 중복체크
        .addCase(checkEmailDup.pending, (state) => {
            state.checkEmailDupDone = false;
            state.checkEmailDupLoading = true;
            state.checkEmailDupError = null;
        })
        .addCase(checkEmailDup.fulfilled, (state, action) => {
            state.checkEmailDupLoading = false;
            state.isEmailDup = action.payload.isDup;
            state.checkEmailDupDone = true;
        })
        .addCase(checkEmailDup.rejected, (state: any, action) => {
            state.checkEmailDupLoading = false;
            state.checkEmailDupError = action.payload;
        })
        //휴대폰번호 중복체크
      .addCase(checkPhoneDup.pending, (state) => {
        state.checkPhoneDupDone = false;
        state.checkPhoneDupLoading = true;
        state.checkPhoneDupError = null;
      })
      .addCase(checkPhoneDup.fulfilled, (state, action) => {
        state.checkPhoneDupLoading = false;
        state.isPhoneDup = action.payload.isDup;
        state.checkPhoneDupDone = true;
      })
      .addCase(checkPhoneDup.rejected, (state: any, action) => {
        state.checkPhoneDupLoading = false;
        state.checkPhoneDupError = action.payload;
      }),
});

export default accountSlice;
