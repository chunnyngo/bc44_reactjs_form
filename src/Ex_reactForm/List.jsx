import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE, EDIT } from "./redux/constant/FormConstant";

class List extends Component {
  renderSV = () => {
    const { svArr } = this.props;
    return svArr.map((sv, index) => {
      return (
        <tr key={index}>
          <td>{sv.maSV}</td>
          <td>{sv.hoTen}</td>
          <td>{sv.sdt}</td>
          <td>{sv.email}</td>
          <td>
            <button
              className="btn btn-warning mr-1"
              onClick={() => {
                this.props.suasinhvien(sv);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoasinhvien(sv);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="mt-4">
        <table className="table table-dark">
          <thead>
            <tr>
              <th clas="col">Mã SV</th>
              <th clas="col">Họ Tên</th>
              <th clas="col">Số điện thoại</th>
              <th clas="col">Email</th>
              <th clas="col">Action</th>
            </tr>
          </thead>
          <tbody>{this.renderSV()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    svArr: state.FormReducer.svArr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoasinhvien: (sinhvien) => {
      const action = {
        type: DELETE,
        payload: sinhvien,
      };
      dispatch(action);
    },
    suasinhvien: (sinhvien) => {
      const action = {
        type: EDIT,
        payload: sinhvien,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
