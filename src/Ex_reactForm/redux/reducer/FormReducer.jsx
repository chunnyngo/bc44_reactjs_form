import { DELETE, EDIT, THEM_SINH_VIEN } from "../constant/FormConstant";

const initialState = {
  svArr: [],
};
export const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEM_SINH_VIEN: {
      const clonesvArr = [...state.svArr];
      let index = clonesvArr.findIndex(
        (item) => item.maSV === action.payload.maSV
      );
      if (index === -1) {
        let newSV = { ...action.payload };
        clonesvArr.push(newSV);
        alert("Finish!!");
      } else {
        alert("Fail !!");
      }
      return { ...state, svArr: clonesvArr };
    }
    case DELETE: {
      const clonesvArr = [...state.svArr];
      let index = state.svArr.findIndex(
        (item) => item.maSV === action.payload.maSV
      );
      if (index !== -1) {
        clonesvArr.splice(index, 1);
      }
      return { svArr: clonesvArr };
    }
    case EDIT: {
      const foundSV = state.svArr.find((item) => {
        return item.maSV === action.payload.maSV;
      });
      return { ...state, values: foundSV, editingSV: foundSV };
    }
    default: {
      return { ...state };
    }
  }
};
