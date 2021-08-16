import { CSSTransition } from "react-transition-group";
import classes from "./Notification.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Notification = (props) => {
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(uiActions.closeNotification());
  };

  let specialClasses = "";

  if (notification.status === "error") {
    specialClasses = classes.error;
  }
  if (notification.status === "success") {
    specialClasses = classes.success;
  }
  if (notification.status === "info") {
    specialClasses = classes.info;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <CSSTransition
      in={notification.isNotificationOpen}
      timeout={700}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: classes.slideEnter,
        enterActive: classes.slideEnterActive,
        exit: classes.slideExit,
        exitActive: classes.slideExitActive,
      }}
    >
      <section className={cssClasses} onClick={clickHandler}>
        <span></span>
        <span>i</span>
        <div className={classes.content}>
          <h2>{notification.title}</h2>
          <p>{notification.message}</p>
        </div>

        <div className={classes.cross1}>
          <div className={classes.cross2}></div>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Notification;
