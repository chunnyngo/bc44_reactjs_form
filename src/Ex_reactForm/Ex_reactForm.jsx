import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import { THEM_SINH_VIEN } from "./redux/constant/FormConstant";
class Ex_reactForm extends Component {
  state = {
    values: { maSV: "", hoTen: "", sdt: "", email: "" },
    errors: { maSV: "", hoTen: "", sdt: "", email: "" },
    valid: false,
  };
  handleOnchange = (e) => {
    // lay gia tri moi lan input thay doi boi nguoi dung
    let tagInput = e.target;
    let { name, value, pattern, type } = tagInput;
    // kiem tra rong
    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = "you must fill in the blank !";
    }
    //kiem tra dinh dang
    if (type === "email") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = "Syntax error !";
      }
    }
    if (type === "number") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = "Syntax error !";
      }
    }

    //---
    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMessage };
    this.setState({ ...this.state, values: values, errors: errors }, () => {
      this.checkValid();
    });
  };
  handleOnblur = (e) => {
    // lay gia tri moi lan input thay doi boi nguoi dung
    let tagInput = e.target;
    let { name, value } = tagInput;
    // kiem tra rong
    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = "you must fill in the blank !";
    }

    //---
    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMessage };
    this.setState({ ...this.state, values: values, errors: errors }, () => {
      this.checkValid();
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.valid) {
      this.props.themsinhvien(this.state.values);
    } else {
      alert("Fail !!");
    }
  };
  //kiem tra valid
  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
      this.setState({
        ...this.state,
        valid: valid,
      });
    }
  };
  render() {
    let { values, errors, svArr } = this.state;
    let { maSV, hoTen, sdt, email } = values;
    return (
      <div className="container mt-3 text-left">
        <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleOnchange}
                onBlur={this.handleOnblur}
              />
              <p className="text-danger">{this.state.errors.maSV}</p>
            </div>
            <div className="col-6 mt-1">
              <label htmlFor="">Họ Tên</label>
              <input
                type="text"
                className="form-control"
                name="hoTen"
                id="hoTen"
                value={hoTen}
                onChange={this.handleOnchange}
                onBlur={this.handleOnblur}
              />
              <p className="text-danger">{this.state.errors.hoTen}</p>
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
                onChange={this.handleOnchange}
                onBlur={this.handleOnblur}
              />
              <p className="text-danger">{this.state.errors.sdt}</p>
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
                onChange={this.handleOnchange}
                onBlur={this.handleOnblur}
              />
              <p className="text-danger">{this.state.errors.email}</p>
            </div>
          </div>
          <div>
            <button className="btn btn-success co-4 mt-2" type="submit">
              Thêm sinh viên
            </button>
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
    svArr: state.FormReducer.svArr,
    values: state.FormReducer.values,
    errors: state.FormReducer.errors,
    valid: state.FormReducer.valid,
    editingSV: state.FormReducer.editingSV,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    themsinhvien: (sinhvien) => {
      const action = {
        type: THEM_SINH_VIEN,
        payload: sinhvien,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ex_reactForm);
