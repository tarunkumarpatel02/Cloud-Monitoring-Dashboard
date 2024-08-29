import { FC, useState } from "react";
import "./ServerStatus.css";
import ServerDetailsModal from "./ServerDetailsModal";
import ComponentHeader from "../shared/component-header/ComponentHeader";
import Card from "../common/Card";

interface ServerStatus {
  id: number;
  name: string;
  status: string;
  region: string;
  details: string;
}

interface IProps {
  searchQuery: string;
  selectedRegion: string;
}

const ServerStatus: FC<IProps> = ({ searchQuery, selectedRegion }) => {
  const [selectedServer, setSelectedServer] = useState<ServerStatus | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  const servers: ServerStatus[] = [
    {
      id: 1,
      name: "Server 1",
      status: "Active",
      region: "US East",
      details: "Details about Server 1",
    },
    {
      id: 2,
      name: "Server 2",
      status: "Down",
      region: "US West",
      details: "Details about Server 2",
    },
    {
      id: 3,
      name: "Server 3",
      status: "Maintenance",
      region: "EU Central",
      details: "Details about Server 3",
    },
    {
      id: 4,
      name: "Server 4",
      status: "Maintenance",
      region: "EU Central",
      details: "Details about Server 4",
    },
    {
      id: 5,
      name: "Server 5",
      status: "Active",
      region: "EU Central",
      details: "Details about Server 5",
    },
    // Add more servers as needed
  ];

  // Normalize the search query to lowercase for case-insensitive comparison
  const normalizedQuery = searchQuery.toLowerCase();

  // Filter servers based on all properties and region
  const filteredServers = servers.filter(
    (server) =>
      (server.name.toLowerCase().includes(normalizedQuery) ||
        server.status.toLowerCase().includes(normalizedQuery) ||
        server.region.toLowerCase().includes(normalizedQuery) ||
        server.details.toLowerCase().includes(normalizedQuery)) &&
      (selectedRegion === "" || server.region === selectedRegion)
  );

  const openModal = (server: ServerStatus) => {
    setSelectedServer(server);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedServer(null);
    setModalOpen(false);
  };

  const cardContent = (
    <div className="server-status-container">
      {filteredServers.length > 0 ? (
        filteredServers.map((server) => (
          <div
            key={server.id}
            className={`server-status-item ${server.status.toLowerCase()}`}
          >
            <span>{server.name}</span>
            <span>Status: {server.status}</span>
            <span>Region: {server.region}</span>
            <button className="show-more-btn" onClick={() => openModal(server)}>
              Show More
            </button>
          </div>
        ))
      ) : (
        <div>No servers found</div>
      )}
      {selectedServer && (
        <ServerDetailsModal
          server={selectedServer}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );

  return (
    <div className="server-status-container-root">
      <Card headerName="Servers Status" content={cardContent} />
    </div>
  );
};

export default ServerStatus;
