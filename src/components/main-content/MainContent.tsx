import { FC } from "react";
import ServerStatus from "../server-status/ServerStatus";
import NetworkTraffic from "../network-traffic/NetworkTraffic";
import RealTimeNotifications from "../real-time-notifications/RealTimeNotifications";
import ResourceUsage from "../resource-usage/ResourceUsage";

interface IProps {
  searchQuery: string;
  selectedRegion: string;
}

const MainContent: FC<IProps> = ({ searchQuery, selectedRegion }) => {
  const networkTrafficData = {
    timestamps: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"], // Example timestamps
    inbound: [120, 130, 125, 150, 170, 160], // Example inbound data
    outbound: [80, 95, 110, 115, 130, 125], // Example outbound data
  };
  return (
    <div className="row main-content">
      <div className="col-md-12">
        <div className="row mb-5 h-450">
          <div className="col-md-6 height-100 d-flex flex-column">
            <ServerStatus
              searchQuery={searchQuery}
              selectedRegion={selectedRegion}
            />
          </div>
          <div className="col-md-6 height-100 d-flex flex-column">
            <RealTimeNotifications />
          </div>
        </div>
        <div className="row mb-3 h-450">
          <div className="col-md-6 min-height-100">
            <ResourceUsage />
          </div>
          <div className="col-md-6 min-height-100">
            <NetworkTraffic data={networkTrafficData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
