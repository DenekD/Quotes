import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import classes from "./Modal.module.css";

const Modal = () => {
  const isModalOpen = useSelector((state) => state.ui.isModalOpen);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(uiActions.closeModal());
  };

  return (
    <CSSTransition
      in={isModalOpen}
      timeout={400}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: classes.slideEnter,
        enterActive: classes.slideEnterActive,
        exit: classes.slideExit,
        exitActive: classes.slideExitActive,
      }}
    >
      <div className={classes.modal}>
        <div className={classes.overlay} onClick={clickHandler}></div>
        <div className={classes.card}>
          <div className={classes.modalHeader}>
            <p>jakis tekst</p>
            <button className={classes.modalBtn} onClick={clickHandler}>
              <div className={classes.cross1}>
                <div className={classes.cross2}></div>
              </div>
            </button>
          </div>
          <div className={classes.modalContent}>
            <p>
              Aby w pełni skorzystać z tej strony załóz konto albo skorzystaj z{" "}
            </p>
            <br></br>
            <p>email: test@test.com</p>
            <p>password: password123</p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
