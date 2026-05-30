# Campus Notification Dashboard

## Overview

A React + TypeScript based notification dashboard developed for the AffordMed Frontend Assessment.

The application fetches notifications from the provided API, prioritizes them based on business rules, and displays them through a responsive Material UI interface.

## API Testing

The following APIs were successfully tested using Postman during development:

* Registration API
* Authentication API
* Notifications API
* Logging API

The frontend application consumes the authenticated Notifications API and displays the data dynamically through the dashboard interface.


## Features

* Fetch notifications from API
* JWT-based authentication
* Notification prioritization
* Filter notifications by type
* Client-side pagination
* Responsive UI
* Material UI components
* Logging middleware integration

## Priority Order

Notifications are displayed according to the following priority:

1. Placement
2. Result
3. Event

Within each category, notifications are sorted by latest timestamp.

## Filters

Users can filter notifications by:

* All
* Placement
* Result
* Event

## Pagination

* 5 notifications per page
* Dynamic page navigation

## Tech Stack

* React
* TypeScript
* Vite
* Material UI
* REST APIs
* Git & GitHub

## Project Structure

2300090020/

├── logging_middleware/

│ └── logger.ts

├── notification_system_design.md

├── notification_app_fe/

│ ├── src/

│ ├── public/

│ ├── package.json

│ └── ...

└── .gitignore

## Installation

```bash
cd notification_app_fe
npm install
npm run dev
```

Application runs at:

```text
http://localhost:5173
```

## Author

Kamireddy Jahnavi Reddy

Roll Number: 2300090020
