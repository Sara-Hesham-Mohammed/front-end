// Modal component to display the form in a modal
const Modal = ({ isVisible, toggleVisibility, children }) => {
    if (!isVisible) return null; // Don't render the modal if it's not visible
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg relative">
          <button onClick={toggleVisibility} className="absolute top-2 right-2 text-gray-500 font-bold text-lg">
            X
          </button>
          {children}
        </div>
      </div>
    );
  };

  export default Modal;