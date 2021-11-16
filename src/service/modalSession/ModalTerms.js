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

function ModalTerms() {
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
        <DialogTitle id="alert-dialog-title">Terms</DialogTitle>
        <DialogContent>
          <div>
            <ul>
              <li>
                <h5>Free User</h5>
                <ol>
                  <li>
                    <h6>Users can create URLs for free.</h6>
                  </li>
                  <li>
                    <h6>
                      The URL that is created consists of 5 unique characters
                      that are easy to remember.
                    </h6>
                  </li>
                  <li>
                    <h6>
                      URL is only active up to 3 Months. After 3 months it will
                      be automatically deleted by the system.
                    </h6>
                  </li>
                </ol>
              </li>
              <li>
                <h5>Premium User(Coming Soon)</h5>
                <ol>
                  <li>
                    <h6>Users can create URLs at affordable prices.</h6>
                  </li>
                  <li>
                    <h6>Users can create URLs as they wish.</h6>
                  </li>
                  <li>
                    <h6>
                      There is no limit to the number of URL characters created.
                    </h6>
                  </li>
                  <li>
                    <h6>Can generate QR Code.</h6>
                  </li>
                  <li>
                    <h6>
                      Users can view statistics of URLs that have been created.
                      such as the number of clickers and the location of the
                      clickers.
                    </h6>
                  </li>
                  <li>
                    <h6>
                      URL is only active up to 6/12 Months. After 6/12 months it
                      will be automatically deleted by the system.
                    </h6>
                  </li>
                </ol>
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

export default ModalTerms;
