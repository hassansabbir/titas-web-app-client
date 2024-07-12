import { useState } from "react";
import { Modal } from "antd";

const EditProfileModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <p onClick={showModal}>Edit Profile</p>
      <Modal
        width={"100%"}
        title="Edit Your Profile"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        keyboard
      >
        <div>
          <h1>ksdlosg</h1>
          <h1>ksdlosg</h1>
          <h1>ksdlosg</h1>
        </div>
      </Modal>
    </>
  );
};

export default EditProfileModal;
