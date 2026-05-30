import type { AppNotification } from "../types/Notification";

const API_URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

console.log("API_URL:", API_URL);
console.log("TOKEN:", TOKEN);

const priorityMap: Record<string, number> = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export async function getTopNotifications(): Promise<AppNotification[]> {
  try {
    const response = await fetch(`${API_URL}/notifications`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log("Response Status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      return [];
    }

    const data = await response.json();

    console.log("API Response:", data);

    const notifications: AppNotification[] =
      data.notifications || [];

    return notifications
      .sort((a, b) => {
        const priorityDiff =
          priorityMap[b.Type] - priorityMap[a.Type];

        if (priorityDiff !== 0) {
          return priorityDiff;
        }

        return (
          new Date(b.Timestamp).getTime() -
          new Date(a.Timestamp).getTime()
        );
      })
      .slice(0, 10);
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}