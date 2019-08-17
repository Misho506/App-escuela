import React from "react";
import { connect } from 'react-redux';

import { setTeacherGroup } from '../../redux/actions/user';

class TeacherList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTeacher: null,
      selectedGroup: null,
      teachers: props.teachersConst,
    }
  }

  selectATeacher = (teacher) => {
    this.setState({ selectedTeacher: teacher })
  }

  selectAGroup = (group) => {
    this.setState({ selectedGroup: group })
  }

  assingGroup = (teacherName) => {
    const { setTeacherGroup } = this.props;
    const { selectedGroup } = this.state;
    setTeacherGroup(selectedGroup, teacherName);
  }

  render() {
    const { selectedTeacher, teachers } = this.state;
    return (
      <div className="d-flex justify-content-center">
        <ul className="list-group w-50 pt-5 mb-5">
          {teachers.map((option, index) => (
            <li key={index} className="list-group-item d-flex flex-row align-items-center" onClick={() => this.selectATeacher(option)}>
              <i className="fas fa-chalkboard-teacher" />
              <span className="px-3">
                {option.name}
              </span>
            </li>
          ))}
          {selectedTeacher &&
            <div className="card mt-5">
              <div className="card-body">
                <h5 className="card-title">{selectedTeacher.name}</h5>
                {selectedTeacher.group ?
                  <h6 className="card-subTitle">{selectedTeacher.group}</h6>
                  :
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <select className="custom-select" onChange={event => this.selectAGroup(event.target.value)}>
                      <option defaultValue hidden>Asignar Grupo</option>
                      <option value="Grupo 1">Grupo 1</option>
                      <option value="Grupo 2">Grupo 2</option>
                      <option value="Grupo 3">Grupo 3</option>
                    </select>
                    <i className="fas fa-check pl-3 text-success" onClick={() => this.assingGroup(selectedTeacher.name)} />
                  </div>
                }
                <ul className="card-text">Este profesor enseña:
                {selectedTeacher.subjects.map((option, index) => (
                  <li key={index} className="list-group-item d-flex flex-row align-items-center">
                    <span className="px-1">
                      {option}
                    </span>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          }
        </ul>
      </div>
    )
  }
}

export default connect(state => ({ teachersConst: state.userReducer.teachers }), { setTeacherGroup }) (TeacherList);
