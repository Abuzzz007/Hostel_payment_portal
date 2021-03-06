import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Sidebar.css";
import gectemblem from "../Assets/Images/gectemblem.jpg";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

function Sidebar(props) {
  const [toggleModal, setToggle] = useState(false);

  let sideboard_class = "sideboard";
  if (props.width <= 992 && props.collapse) {
    sideboard_class = "sideboard sideboard-collapsed";
  } else if (props.width <= 992) {
    sideboard_class = "sideboard sideboard-float";
  }

  if (props.width <= 768 && props.collapse) {
    sideboard_class = "sideboard sideboard-collapsed sideboard-hide";
  } else if (props.width <= 768) {
    sideboard_class = "sideboard sideboard-float";
  }

  let path = useLocation().pathname;
  let option_class = Array(3).fill("option");
  if (path === "/dashboard/profile") {
    option_class[0] += " active-menu";
  }
  if (path === "/dashboard/payment") {
    option_class[1] += " active-menu";
  }
  if (path === "/dashboard/notifications") {
    option_class[2] += " active-menu";
  }

  return (
    <React.Fragment>
      <div className={sideboard_class}>
        <div className="container">
          <div className="head" onClick={() => props.collapseToggle()}>
            <div className="emblemdiv">
              <img src={gectemblem} className="emblem" alt="emblem" />
            </div>
            <div className="text">&nbsp;GECT&nbsp;PAY</div>
          </div>
          <hr />
          <div
            className={option_class[0]}
            onClick={() => {
              props.changePage("profile");
            }}
          >
            <div className="col">
              <span className="fa fa-user fa-2x"></span>
              <span className="text">&nbsp;USER PROFILE</span>
            </div>
          </div>
          <div
            className={option_class[1]}
            onClick={() => {
              props.changePage("payment");
            }}
          >
            <div className="col">
              <span className="fa fa-credit-card-alt fa-2x"></span>
              <span className="text">&nbsp;PAY MY FEE</span>
            </div>
          </div>
          <div
            className={option_class[2]}
            onClick={() => {
              props.changePage("notifications");
            }}
          >
            <div className="col">
              <span className="fa fa-bell-o fa-2x"></span>
              <span className="text">&nbsp;NOTIFICATIONS</span>
            </div>
          </div>
          <div
            className="option logout"
            onClick={() => {
              setToggle(!toggleModal);
            }}
          >
            <div className="col">
              <span className="fa fa-power-off fa-2x"></span>
              <span className="text">&nbsp;&nbsp;LOGOUT</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="navbar"
        onClick={() => (props.collapse ? "" : props.collapseToggle(true))}
      >
        <div className="head head-h" onClick={() => props.collapseToggle()}>
          <div className="emblemdiv">
            <span className="fa fa-bars" aria-hidden="true"></span>
          </div>
          <div className="text">&nbsp;GECT&nbsp;PAY</div>
        </div>
      </div>
      <Modal
        isOpen={toggleModal}
        toggle={() => {
          setToggle(!toggleModal);
        }}
      >
        <ModalBody>Do you want to quit?</ModalBody>
        <ModalFooter>
          <Button
            type="button"
            value="submit"
            color="danger"
            className="btn-block"
            onClick={() => {
              window.location = "/login";
            }}
          >
            Yes
          </Button>{" "}
          <Button
            color="secondary"
            className="btn-block"
            onClick={() => {
              setToggle(!toggleModal);
            }}
          >
            No
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

export default Sidebar;
