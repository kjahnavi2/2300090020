import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

import type { AppNotification } from "../types/Notification";

interface Props {
  notification: AppNotification;
}

function NotificationCard({ notification }: Props) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Chip
          label={notification.Type}
          color={
            notification.Type === "Placement"
              ? "success"
              : notification.Type === "Result"
              ? "primary"
              : "warning"
          }
          sx={{ mb: 2 }}
        />

        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;