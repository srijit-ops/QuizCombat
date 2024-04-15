import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";


function CustomModal({
  open,
  onCloseModal,
  title,
  // name,
  children,
  ...props
//   img,
//   tech,
//   detail,
//   github,
//   liveUrl,
}) {

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      styles={{
        modal: {
          borderRadius: 10,
          background: "#151517",
        },
      }}
    >
      <div className={`bg-white dark:bg-[#151517] sm:p-6 p-3`}>
        <p className="text-gray-300 tracking-wider text-lg font-semibold mb-6">{title}</p>
        {children}
      </div>
    </Modal>
  );
}

export default CustomModal;
