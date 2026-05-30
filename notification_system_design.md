# Stage 1

## Notification Prioritization Strategy

# Stage 1

## Notification Prioritization Strategy

The notification system receives three types of notifications:

* Placement
* Result
* Event

To ensure that users see the most important notifications first, a priority-based ranking system is used.

### Priority Order

| Notification Type | Priority |
| ----------------- | -------- |
| Placement         | 3        |
| Result            | 2        |
| Event             | 1        |

### Sorting Logic

Notifications are sorted using the following rules:

1. Higher priority notifications appear before lower priority notifications.
2. If two notifications have the same priority, the newer notification is displayed first.
3. Only the top 10 notifications are shown to the user.

### Algorithm

1. Fetch notifications from the Notification API.
2. Assign a priority score based on notification type.
3. Sort notifications by:

   * Priority (Descending)
   * Timestamp (Descending)
4. Select the first 10 notifications.
5. Display the notifications to the user.

### Benefits

* Important placement updates are never missed.
* Academic results receive higher visibility than general events.
* Recent updates are prioritized over older notifications.
* The solution remains scalable as the number of notifications grows.
