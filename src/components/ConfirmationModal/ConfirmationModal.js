import React from "react";
import { closeModal } from "@redq/reuse-modal";
import Button from "components/Button/Button";

export const ConfirmationModal = ({ header, cta }) => {
  return (
    <div>
      <p>
        Are you sure you want to delete <strong>{header}</strong>
      </p>
      <div
        style={{
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            margin: "5px",
            height: "25px",
            padding: "0 10px",
          }}
          onClick={closeModal}
          title={`Cancel`}
        />
        <Button
          style={{
            background: "#e90b0bbf",
            margin: "5px",
            height: "25px",
            padding: "0 10px",
          }}
          onClick={() => {
            cta();
            closeModal();
          }}
          title={`Delete`}
        />
      </div>
    </div>
  );
};
