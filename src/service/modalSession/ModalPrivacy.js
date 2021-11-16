import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import { MODAL } from "./ModalService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalPrivacy() {
  return (
    <React.Fragment>
      <Dialog
        open={true}
        keepMounted
        // onClose={this.handleOk.bind(this)}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Privacy</DialogTitle>
        <DialogContent>
          <div>
            <ul>
              <li>
                <h6>We highly respect your privacy.</h6>
              </li>
              <li>
                <h6>
                  In our service, we do not change, replace, or move your files
                  or links.
                </h6>
              </li>
              <li>
                <h6>We don't share your link except you.</h6>
              </li>
              <li>
                <h6>This service is created by IT Meta JAR Company.</h6>
              </li>
            </ul>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              MODAL.hide();
            }}
          >
            OK
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default ModalPrivacy;
