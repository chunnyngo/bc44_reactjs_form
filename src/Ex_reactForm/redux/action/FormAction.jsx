import {
  HANDLEONBLUR,
  HANDLEONCHANGE,
  SUBMIT,
  DELETE,
  EDIT,
  UPDATE,
  SEARCH,
  ADDSTUDENT,
} from "../constant/FormConstant";
export let viewOnChange = (data) => {
  return {
    type: HANDLEONCHANGE,
    payload: data,
  };
};
export let viewAddStudent = (data) => {
  return {
    type: ADDSTUDENT,
    payload: data,
  };
};
export let viewDelete = (data) => {
  return {
    type: DELETE,
    payload: data,
  };
};
export let viewSubmit = (data) => {
  return {
    type: SUBMIT,
    payload: data,
  };
};
export let viewOnBlur = (data) => {
  return {
    type: HANDLEONBLUR,
    payload: data,
  };
};
export let viewUpdate = (data) => {
  return {
    type: UPDATE,
    payload: data,
  };
};
export let viewEdit = (data) => {
  return {
    type: EDIT,
    payload: data,
  };
};
export let viewSearch = (data) => {
  return {
    type: SEARCH,
    payload: data,
  };
};
