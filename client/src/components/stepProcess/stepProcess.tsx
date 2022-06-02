import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import React from "react";

const steps = [
    {
        status: "created"
      },
      {
        status: "pendingApproval"
      },
      {
        status: "cancelled"
      },
      {
        status: "approved"
      },
      {
        status: "pending"
      },
      {
        status: "complete"
      }
];

export default function Astep () {
  const transfer = {
    status: "approved" // change transfer status to progress bar
  };

  const getStepPosition = (transferStatus) => {
    return steps.findIndex(({ status }) => status === transferStatus) + 1;
  };

  return (
    <>
      <div style={{ margin: 50 }}>
        <ProgressBar
          width={200}
          percent={100 * (getStepPosition(transfer.status) / steps.length)}
        
        >
          {steps.map((step, index, arr) => {
            return (
              <Step
                position={100 * (index / arr.length)}
                transition="scale"
                children={({ accomplished }) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      color: "white",
                      backgroundColor: accomplished ? "#53C4CD" : "#53C4CD"
                    }}
                  >
                  </div>
                )}
              />
            );
          })}
        </ProgressBar>
      </div>
    </>
  );
}
