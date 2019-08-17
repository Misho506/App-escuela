import React from "react";
import DashboardOption from "../partials/DashboardOption";

const options = [
  {
    icon: "fas fa-users",
    label: "Profesores",
    goTo: "/teacherList",
  },
  {
    icon: "fas fa-users",
    label: "Estudiantes",
    goTo: "/dashboard",
  },
  {
    icon: "fas fa-envelope-open-text",
    label: "Circulares Institucionales",
    goTo: "/noticeList",
  },
  {
    icon: "fas fa-clock",
    label: "Asistencia de los profesores",
    goTo: "/dashboard",
  },
  {
    icon: "fas fa-ban",
    label: "Boletas de Estudiantes",
    goTo: "/dashboard",
  },
  {
    icon: "fas fa-chart-bar",
    label: "Reporte de notas de los Estudiantes",
    goTo: "/dashboard",
  },
]

class WelcomePage extends React.Component {
  
  redirect = (page) => {
    this.props.history.push(page);
  }

  render() {
    return (
      <div>
        <div className="row">
          {options.map((option, index) => (
            <DashboardOption key={index} icon={option.icon} label={option.label} goTo={() => this.redirect(option.goTo)}/>
          ))}
        </div>
      </div>
    )
  }
}

export default WelcomePage;
