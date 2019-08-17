import React from "react";
import { connect } from 'react-redux';

import "../../assets/styles/main.scss";
const NewNotice = ({ title, description, handleChange }) => (
  <div className="d-flex flex-column justify-content-center">
    <h4>Nueva circular</h4>
    <input className="mb-3 p-1 rounded border" onChange={event => handleChange("title", event.target.value)} value={title} placeholder="Titulo de la circular" />
    <textarea className="p-1 rounded border notice-description" onChange={event => handleChange("description", event.target.value)} value={description} placeholder="Descripción de la circular" />
  </div>
)

export default NewNotice;
