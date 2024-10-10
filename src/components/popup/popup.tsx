import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Loader from "../atoms/loader";

interface popupIprops {
  isOpen?: boolean;
  status?: string;
  onClose: () => void;
}

const Popup: React.FC<popupIprops> = ({ isOpen, status = '', onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-950 bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center relative">
        {/* Modal Header with Close Button */}
        <div className="flex justify-between items-center mb-4 border-b pb-4">
          <h2 className="text-xl font-semibold text-secondary">
            Minting Status
          </h2>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-900 text-xl"
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="flex flex-col justify-start items-center pt-10 pb-16">
          {!status.toLowerCase().includes("error") && (
            <h3 className="text-secondary mb-4">
              Please confirm transaction from your wallet.
            </h3>
          )}
          <Loader className="w-24 h-24 mb-4" />

          {/* Status Text */}
          <p className="text-lg font-medium">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
