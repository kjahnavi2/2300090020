# Notification System Design

## Overview

The Campus Notification System is designed to display important notifications for students related to:

- Placements
- Results
- Events

The application fetches notifications from the provided API, prioritizes them, and displays them through a responsive React frontend.

---

## Architecture

Frontend:
- React
- TypeScript
- Material UI

Backend:
- External Notification API
- JWT Authentication

Logging:
- Custom reusable logging middleware

---

## Notification Flow

1. User opens application.
2. Frontend authenticates using access token.
3. Notifications are fetched from API.
4. Notifications are sorted by priority:
   - Placement
   - Result
   - Event
5. Latest notifications are displayed first.
6. User can filter notifications by type.
7. User can navigate notifications using pagination.

---

## Priority Logic

Priority Order:

1. Placement
2. Result
3. Event

Within the same category, notifications are sorted by timestamp in descending order.

---

## Filtering

Supported Filters:

- All
- Placement
- Result
- Event

---

## Pagination

Pagination is implemented on the frontend.

Notifications per page: 5

Benefits:
- Better user experience
- Faster rendering
- Improved readability

---

## Logging Middleware

Reusable logging utility:

Log(stack, level, package, message)

Used for:
- API requests
- API failures
- UI events
- Error tracking

---

## Future Improvements

- Real-time notifications using WebSockets
- Search functionality
- Notification read/unread tracking
- Push notifications
- Dark/Light theme switching
