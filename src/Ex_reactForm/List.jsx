import React, { Component } from "react";
import { connect } from "react-redux";
import { viewSearch, viewDelete, viewEdit } from "./redux/action/FormAction";
class List extends Component {
  renderSV = () => {
    const { svArr, xoasinhvien, suasinhvien } = this.props;
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
                suasinhvien(sv);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                xoasinhvien(sv);
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
        <div className="col-6">
          <div className="row">
            <div className="col-10 p-2">
              <input
                type="text"
                id="valueSearch"
                name="valueSearch"
                className="form-control"
                placeholder="Nhập họ tên sinh viên cần tìm"
                onChange={(event) => {
                  this.props.handleSearch(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

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
      dispatch(viewDelete(sinhvien));
    },
    suasinhvien: (sinhvien) => {
      dispatch(viewEdit(sinhvien));
    },

    handleSearch: (sinhvien) => {
      dispatch(viewSearch(sinhvien));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
