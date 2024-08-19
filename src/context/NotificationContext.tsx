import { createContext, useState, useContext, ReactNode } from "react";

export interface INotification {
  id: number;
  type: "Critical" | "Warning" | "Info";
  message: string;
  timestamp: string;
}

interface INotificationContextType {
  notifications: INotification[];
  addNotification: (notification: INotification) => void;
  dismissNotification: (id: number) => void;
  filterType: "All" | "Critical" | "Warning" | "Info";
  setFilterType: (type: "All" | "Critical" | "Warning" | "Info") => void;
  notificationCount: number;
}

const NotificationContext = createContext<INotificationContextType | undefined>(
  undefined
);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [filterType, setFilterType] = useState<
    "All" | "Critical" | "Warning" | "Info"
  >("All");

  const addNotification = (notification: INotification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  const dismissNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const notificationCount = notifications.length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        dismissNotification,
        filterType,
        setFilterType,
        notificationCount,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
