import { FC } from "react";
import "./ServerDetailsModal.css";

interface ServerDetailsModalProps {
  server: {
    name: string;
    status: string;
    region: string;
    details: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ServerDetailsModal: FC<ServerDetailsModalProps> = ({
  server,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="server-details-modal-overlay">
      <div className="server-details-modal-content">
        <h2>{server.name} Details</h2>
        <p>
          <strong>Status:</strong> {server.status}
        </p>
        <p>
          <strong>Region:</strong> {server.region}
        </p>
        <p>
          <strong>Details:</strong> {server.details}
        </p>
        <button type="button" className="btn btn-danger" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ServerDetailsModal;
