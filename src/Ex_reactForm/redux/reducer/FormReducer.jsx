import {
  HANDLEONBLUR,
  HANDLEONCHANGE,
  SUBMIT,
  DELETE,
  EDIT,
  UPDATE,
  SEARCH,
} from "../constant/FormConstant";

const initialState = {
  svArr: [],
  values: { maSV: "", hoTen: "", sdt: "", email: "" },
  errors: { maSV: "", hoTen: "", sdt: "", email: "" },
  editingSV: null,
};
export const FormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLEONCHANGE: {
      const { id, value } = payload.target;
      let error = "";
      // id
      if (id === "maSV") {
        const reg = /^[0-9]{1,5}$/;
        if (!reg.test(value)) {
          error = `Mã sinh viên phải là số và khoảng từ 1 - 5 chữ số`;
        } else {
          error = ``;
        }
      }
      // name
      if (id === "hoTen") {
        const nameRegex = /^[a-zA-Z ]+$/;
        if (nameRegex.test(value)) {
          error = ``;
        } else {
          error = `Họ tên sinh viên phải là chữ`;
        }
      }
      // number
      if (id === "sdt") {
        const reg = /^[0-9]{9,11}$/;
        if (!reg.test(value)) {
          error = `Số điện thoại phải là số và khoảng từ 9 - 11 chữ số`;
        } else {
          error = ``;
        }
      }
      if (id === "email") {
        const reg = /^[A-Za-z0-9]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!reg.test(value)) {
          error = `Email sinh viên phải đúng định dạng`;
        } else {
          error = ``;
        }
      }
      if (value.trim() === "") {
        error = `Trường này không được để trống`;
      }
      console.log(value);
      return {
        ...state,
        values: {
          ...state.values,
          [id]: value,
        },
        errors: {
          ...state.errors,
          [id]: error,
        },
      };
    }
    case HANDLEONBLUR: {
      const { id, value } = payload.target;
      let error = "";
      // id
      if (id === "maSV") {
        const reg = /^[0-9]{1,5}$/;
        if (!reg.test(value)) {
          error = `Mã sinh viên phải là số và khoảng từ 1 - 5 chữ số`;
        } else {
          error = ``;
        }
      }
      // name
      if (id === "hoTen") {
        const nameRegex = /^[a-zA-Z ]+$/;
        if (nameRegex.test(value)) {
          error = ``;
        } else {
          error = `Họ tên sinh viên phải là chữ`;
        }
      }
      // number
      if (id === "sdt") {
        const reg = /^[0-9]{9,11}$/;
        if (!reg.test(value)) {
          error = `Số điện thoại phải là số và khoảng từ 9 - 11 chữ số`;
        } else {
          error = ``;
        }
      }
      if (id === "email") {
        const reg = /^[A-Za-z0-9]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!reg.test(value)) {
          error = `Email sinh viên phải đúng định dạng`;
        } else {
          error = ``;
        }
      }
      if (value.trim() === "") {
        error = `Trường này không được để trống`;
      }
      return {
        ...state,
        values: {
          ...state.values,
          [id]: value,
        },
        errors: {
          ...state.errors,
          [id]: error,
        },
      };
    }
    case SUBMIT: {
      payload.preventDefault();
      const { values, errors } = state;
      let isValid = true;
      for (const key in values) {
        if (values[key] === "" || errors[key] !== "") {
          isValid = false;
        }
      }
      const index = state.svArr.findIndex((item) => {
        if (item.maSV === state.values.maSV) {
          return true;
        }
      });
      if (index !== -1) {
        console.log("Fail");
        isValid = false;
      }
      if (!isValid) {
        console.log("You must fill all the blanks");
        return { ...state };
      }
      console.log("Thêm thành công");
      const newStudent = [...state.svArr, state.values];
      state.svArr = newStudent;
      return { ...state };
    }
    case DELETE: {
      const index = state.svArr.findIndex((item) => {
        return item.maSV === payload.maSV;
      });
      if (index !== -1) {
        const newStudentList = [...state.svArr];
        newStudentList.splice(index, 1);
        return { ...state, svArr: newStudentList };
      }
    }
    case EDIT: {
      const index = state.svArr.find((item) => {
        return item.maSV === payload.maSV;
      });
      return { ...state, editingSV: index, values: index };
    }
    case UPDATE: {
      const index = state.svArr.findIndex((item) => {
        return item.maSV === state.editingSV.maSV;
      });
      const neweditingSV = [...state.svArr];
      neweditingSV[index] = state.values;
      return {
        ...state,
        svArr: neweditingSV,
        values: {
          maSV: "",
          hoTen: "",
          sdt: "",
          email: "",
        },
        editingSV: null,
      };
    }
    case SEARCH: {
      console.log(payload);
      // const query = document.getElementById("valueSearch").value;
      // console.log(query);
      var searchValue = [...state.svArr];
      searchValue = searchValue.filter((item) => {
        return item.hoTen === payload.hoTen;
      });

      return { ...state, svArr: searchValue };
    }

    default: {
      return { ...state };
    }
  }
};
