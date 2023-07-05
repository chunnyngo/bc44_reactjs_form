import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import {
  viewOnBlur,
  viewOnChange,
  viewSubmit,
  viewUpdate,
} from "./redux/action/FormAction";
class Ex_reactForm extends Component {
  render() {
    let { values, errors, edit } = this.props;
    let { maSV, hoTen, sdt, email } = values;
    return (
      <div className="container mt-3 text-left">
        <form
          onSubmit={(event) => {
            this.props.handleSubmit(event);
          }}
        >
          <h3 className="bg-dark text-white p-3 text-center">
            Thông Tin Sinh Viên{" "}
          </h3>
          <div className="row">
            <div className="col-6 mt-1">
              <label htmlFor="">Mã SV</label>
              <input
                type="number"
                className="form-control"
                name="maSV"
                id="maSV"
                value={maSV}
                onChange={(event) => {
                  this.props.handleOnChange(event);
                }}
                onBlur={(event) => {
                  this.props.handleOnBlur(event);
                }}
              />
              <p className="text-danger">{errors.maSV}</p>
            </div>
            <div className="col-6 mt-1">
              <label htmlFor="">Họ Tên</label>
              <input
                type="text"
                className="form-control"
                name="hoTen"
                id="hoTen"
                value={hoTen}
                onChange={(event) => {
                  this.props.handleOnChange(event);
                }}
                onBlur={(event) => {
                  this.props.handleOnBlur(event);
                }}
              />
              <p className="text-danger">{errors.hoTen}</p>
            </div>
            <div className="col-6 mt-1">
              <label htmlFor="">Số điện thoại</label>
              <input
                type="number"
                pattern="^[0-9\-\+]{9,15}$"
                className="form-control"
                name="sdt"
                id="sdt"
                value={sdt}
                onChange={(event) => {
                  this.props.handleOnChange(event);
                }}
                onBlur={(event) => {
                  this.props.handleOnBlur(event);
                }}
              />
              <p className="text-danger">{errors.sdt}</p>
            </div>
            <div className="col-6 mt-1">
              <label htmlFor="">Email</label>
              <input
                type="email"
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                className="form-control"
                name="email"
                id="email"
                value={email}
                onChange={(event) => {
                  this.props.handleOnChange(event);
                }}
                onBlur={(event) => {
                  this.props.handleOnBlur(event);
                }}
              />
              <p className="text-danger">{errors.email}</p>
            </div>
          </div>
          <div>
            {edit ? (
              <button
                type="button"
                className="btn btn-primary mt-4 mb-4"
                onClick={(event) => {
                  this.props.handleUpdate(event);
                }}
              >
                Cập nhật
              </button>
            ) : (
              <button className="btn btn-success mt-4 mb-4">
                Thêm sinh viên
              </button>
            )}
          </div>
        </form>
        <div className="mx-0 px-0">
          <List />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.FormReducer.values,
    errors: state.FormReducer.errors,
    edit: state.FormReducer.editingSV,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleOnChange: (event) => {
      dispatch(viewOnChange(event));
    },
    handleOnBlur: (event) => {
      dispatch(viewOnBlur(event));
    },
    handleSubmit: (event) => {
      dispatch(viewSubmit(event));
    },
    handleUpdate: () => {
      dispatch(viewUpdate());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ex_reactForm);
