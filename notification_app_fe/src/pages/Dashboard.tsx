import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Pagination,
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";

import { getTopNotifications } from "../services/notificationService";
import type { AppNotification } from "../types/Notification";

function Dashboard() {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadNotifications() {
      const data = await getTopNotifications();
      console.log("DATA:", data);
      setNotifications(data);
    }

    loadNotifications();
  }, []);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (notification) => notification.Type === filter
        );

  const itemsPerPage = 5;

  const paginatedNotifications = filteredNotifications.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Campus Notifications
      </Typography>

      <FilterBar
        selected={filter}
        onChange={(value) => {
          setFilter(value);
          setPage(1);
        }}
      />

      {paginatedNotifications.length > 0 ? (
        paginatedNotifications.map((notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
          />
        ))
      ) : (
        <Typography
          variant="h6"
          sx={{
            mt: 4,
            textAlign: "center",
          }}
        >
          No notifications found
        </Typography>
      )}

      {filteredNotifications.length > itemsPerPage && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Pagination
            count={Math.ceil(
              filteredNotifications.length / itemsPerPage
            )}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </div>
      )}
    </Container>
  );
}

export default Dashboard;