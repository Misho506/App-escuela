  import React from "react";
  import NewNotice from "../partials/NewNotice";
  import { connect } from 'react-redux';

  import { setNotice } from '../../redux/actions/user';

  class NoticeList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        newNotice: false,
        noticeList: props.noticeList,
        title: "",
        description: "",
      }
    }

    submitNotice = () => {
      const { setNotice } = this.props;
      const { title, description, newNotice } = this.state;

      setNotice({ title, description })
      this.handleChange("description", "");
      this.handleChange("title", "");
      this.handleChange('newNotice', false);
    }

    handleChange = (field, value) => {
      this.setState({ [field]: value })
    }

    render() {
      const { noticeList, newNotice, title, description } = this.state;
      return (
        <div className="d-flex justify-content-center">
          <ul className="list-group w-50 pt-5 mb-5">
            <div className="d-flex justify-content-end">
              <button className="w-50 btn btn-success" onClick={() => this.setState({ newNotice: !newNotice })} >Nueva Circular</button>
            </div>
            {newNotice ?
              <div>
                <NewNotice handleChange={(field, value) => this.handleChange(field, value)} title={title} description={description} />
                <div className="d-flex justify-content-end">
                  <button className="w-50 btn btn-success mt-3" onClick={this.submitNotice} >Finalizar</button>
                </div>
              </div>
              :
              noticeList.map((notice, index) => (
                <div key={index} className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">{notice.title}</h5>
                    <span>{notice.description}</span>
                  </div>
                </div>
              ))
            }
          </ul>
        </div>
      )
    }
  }

  export default connect(state => ({ noticeList: state.userReducer.noticeList }), { setNotice })(NoticeList);
