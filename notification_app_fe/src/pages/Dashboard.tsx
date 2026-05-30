import { useEffect, useState } from "react";
import { getTopNotifications } from "../services/notificationService";
import type { AppNotification } from "../types/Notification";

function Dashboard() {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);

  useEffect(() => {
    async function loadNotifications() {
      const data = await getTopNotifications();

      console.log("Top Notifications:", data);

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      {notifications.map((notification) => (
        <div
          key={notification.ID}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{notification.Type}</h3>

          <p>{notification.Message}</p>

          <small>{notification.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;