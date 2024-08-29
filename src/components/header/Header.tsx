import { Dispatch, FC, SetStateAction, useState } from "react";
import "./Header.css";
import SearchBar from "./search-bar/SearchBar";
import RegionFilter from "./region-filter/RegionFilter";
import { useNotifications } from "../../context/NotificationContext";

interface IProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
  selectedRegion: string;
}

const Header: FC<IProps> = ({
  setSearchQuery,
  setSelectedRegion,
  selectedRegion,
}) => {
  const { notificationCount, setFilterType } = useNotifications();
  const regions = ["US East", "US West", "EU Central"];

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region);
  };

  const getTitle = () => {
    if (notificationCount) {
      return "No new notifications";
    } else {
      return `There are ${notificationCount} notifications, Please check the details in Real-Time notifications section`;
    }
  };

  return (
    <header className="row header align-items-center">
      <div className="col-md-5">
        <h1 className="h4 m-0">Cloud Monitoring Dashboard</h1>
      </div>

      {/* Search Textbox */}
      <div className="col-md-3 text-align-right text-md-end align-items-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Filter Dropdown */}
      <div className="col-md-3 text-md-end">
        <RegionFilter
          regions={regions}
          selectedRegion={selectedRegion}
          onSelectRegion={handleSelectRegion}
        />
      </div>
      <div className="col-md-1 text-md-end">
        <div className="notification-icon">
          <i className="bi bi-bell-fill"></i>
          {notificationCount > 0 && (
            <span title={getTitle()} className="notification-count">
              {notificationCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
