import React from "react";
import "../../assets/styles/partials/dashboardOptions.scss"

const DashboardOption = ({ icon, label, goTo }) => (
  <div className="d-flex flex-column align-items-center justify-content-center py-4 w-auto col-md-6 col-lg-4 col-xs-12" onClick={goTo}>
    <i className={`icon ${icon}`}></i>
    <span className="text-large label">{label}</span>
  </div>
);

export default DashboardOption;