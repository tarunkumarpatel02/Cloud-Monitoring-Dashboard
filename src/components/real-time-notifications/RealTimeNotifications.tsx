import { FC, useEffect } from "react";
import "./RealTimeNotifications.css";
import {
  INotification,
  useNotifications,
} from "../../context/NotificationContext";
import ComponentHeader from "../shared/component-header/ComponentHeader";
import Card from "../common/Card";

const RealTimeNotifications: FC = () => {
  const {
    notifications,
    dismissNotification,
    filterType,
    setFilterType,
    addNotification,
  } = useNotifications();

  useEffect(() => {
    const interval = setInterval(() => {
      const types: Array<INotification["type"]> = [
        "Critical",
        "Warning",
        "Info",
      ];
      const messages = [
        "CPU usage exceeds 80%",
        "Server 2 is down",
        "Scheduled maintenance in 10 minutes",
      ];

      const newNotification: INotification = {
        id: Date.now(),
        type: types[Math.floor(Math.random() * types.length)],
        message: messages[Math.floor(Math.random() * messages.length)],
        timestamp: new Date().toLocaleTimeString(),
      };

      addNotification(newNotification);
    }, 15000); // Generates a new notification every 15 seconds

    return () => clearInterval(interval);
  }, [addNotification]);

  const filteredNotifications =
    filterType === "All"
      ? notifications
      : notifications.filter(
          (notification) => notification.type === filterType
        );

  const filterDropdownJsx = (
    <select
      onChange={(e) =>
        setFilterType(e.target.value as "All" | "Critical" | "Warning" | "Info")
      }
    >
      <option value="All">All</option>
      <option value="Critical">Critical</option>
      <option value="Warning">Warning</option>
      <option value="Info">Info</option>
    </select>
  );

  const cardContent = (
    <ul className="notification-list">
      {filteredNotifications.length > 0 ? (
        filteredNotifications.map((notification) => (
          <li
            key={notification.id}
            className={`notification-item ${notification.type.toLowerCase()}`}
          >
            <div className="notification-content">
              <div>
                <strong>{notification.type}</strong>: {notification.message}
                <div className="timestamp">{notification.timestamp}</div>
              </div>
              <button
                className="dismiss-button"
                onClick={() => dismissNotification(notification.id)}
              >
                Dismiss
              </button>
            </div>
          </li>
        ))
      ) : (
        <div className="align-self-center">No notifications</div>
      )}
    </ul>
  );

  return (
    <div className="notification-container-root">
      <Card
        headerName="Real-Time Notifications"
        content={cardContent}
        jsxToShow={filterDropdownJsx}
        className="notification-list"
      />
    </div>
  );
};

export default RealTimeNotifications;
