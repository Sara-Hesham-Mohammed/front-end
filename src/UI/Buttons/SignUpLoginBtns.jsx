import React, { useState } from 'react';
import DummySignUpForm from "../DummySignUpForm"; // Import the sign-up form
import Modal from '../Modal';



const SignUpLoginBtns = () => {
  // State to control the visibility of the modal
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  // Function to handle the SignUp button click
  const handleSignUpClick = () => {
    setShowSignUpForm(true); // Show the modal when clicked
  };

  // Function to toggle the visibility of the modal
  const toggleModal = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div>
      <button
        type="button"
        className="inline-block rounded bg-primary-500 px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        onClick={handleSignUpClick} // Trigger modal visibility
      >
        SignUp
      </button>
      <button
        type="button"
        className="inline-block rounded bg-primary-100 px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      >
        Login
      </button>

      {/* Conditionally render the modal with the sign-up form */}
      <Modal isVisible={showSignUpForm} toggleVisibility={toggleModal}>
        <DummySignUpForm></DummySignUpForm>
      </Modal>
    </div>
  );
};

export default SignUpLoginBtns;
