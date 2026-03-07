# NAVIGO - A Smart QR-Based Wayfinding Platform

NAVIGO is a **static** HTML/CSS/JavaScript web app for campus wayfinding and a simple gamified **QR check-in** flow.
Users can browse campus locations, check in by scanning a QR code to earn points, unlock badges, and request vouchers.
The app also includes a lightweight community review system (posts, reactions, comments) with a reporting panel for admins.

## Live demo

- Vercel: https://navigo-lake.vercel.app/
- QR short link: https://bit.ly/4kUvIgo

---

## Features

### 1) Auth modes

- **Guest mode** ("Skip login"): can browse locations, but **cannot** check in / use vouchers / open admin.
- **Local login/register**: credentials are stored in `localStorage` under `users`.
- **Admin account (hardcoded)**:
  - username: `navigo`
  - password: `10diembtl`
  - Admin tab is shown only when logged in as `navigo`.

> Note: This is a demo-style auth system (client-side). Do not use it for real security.

### 2) Wayfinding (locations)

- Locations are rendered from the `locations` array in `app.js`.
- Clicking a location shows an image popup.

### 3) QR check-in (camera + manual input)

- QR scan UI uses **html5-qrcode** (loaded via CDN in `index.html`).
- Check-in is available only for logged-in users (not Guest).
- Supported scanned input formats:
  - A raw QR code text like `QR_B6`
  - A location id like `b6`
  - A URL containing query params, e.g. `...?qr=QR_B6` or `...?location=b6`

**Important behavior when opening the website from a QR link:**

- If the site is opened with `?qr=...` or `?location=...`, the app shows a **location info popup**.
- It **does not auto check-in**.
- To check in from the landing popup, the user must enter the correct **PIN** (which equals the location’s `qrCode`, e.g. `QR_B6`) and confirm.

### 4) Points, cycles, badges, vouchers

- Each successful check-in gives **+1 point**.
- A “cycle” is completed when the user checks in all locations (`TOTAL_LOCATIONS = 45`), then cycle increments and the per-cycle check-in list resets.
- Badges and vouchers are configurable and stored in `localStorage`, with defaults in code:
  - `defaultBadges` (e.g. 20/30/40/50/100 points)
  - `defaultVouchers` (unlocks by points)
- Voucher usage flow:
  - user requests “Use now” → a pending usage entry is created
  - admin can confirm/reject in Admin tab
  - confirmed usages show as “Used” for that user

### 5) Reviews, comments, reactions, reports (stored locally)

- Users can create reviews with category, location name, rating, text, and optional image (stored as base64 data URL).
- Reactions: ❤️ 😂 😮
- Comments: text + optional image
- Reporting system:
  - users can report a review or a comment
  - admin can see pending reports and either delete the content or dismiss the report

### 6) Notifications

- Notifications are stored in `localStorage` and shown in a notification panel.
- Admin receives notifications for reports and voucher usage requests.
- Regular users receive notifications for reactions/comments on their reviews (based on a local per-browser `userSessionId`).

---

## Tech stack

- Plain **HTML / CSS / JavaScript** (no bundler)
- QR scanning: `html5-qrcode` via CDN:
  - `https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js`

All data persistence is handled via `localStorage`.

---

## Project structure

Top-level files/folders (main parts):

- `index.html` — UI layout (tabs, modals, QR scanner modal, review/report modals)
- `style.css` — all styling, including QR modal overrides
- `app.js` — all logic:
  - locations config
  - auth (guest/login/register/admin)
  - check-in + points/badges/vouchers
  - reviews/comments/reactions/reports
  - notifications
- `images/` — location images (paths referenced in `app.js`)
- `QR_WEB.png`, `QR gốc/` — QR assets

---

## Run locally

### Option A: open directly

1. Clone:
   ```bash
   git clone https://github.com/Jenny3306/NAVIGO.git
   cd NAVIGO
   ```
2. Open `index.html` in your browser.

### Option B (recommended): run a local static server

Example:

```bash
npx serve .
```

Or use VS Code **Live Server**.

> QR camera access requires HTTPS or `localhost` in most browsers. Using a local server helps.

---

## Configure / add locations

Locations are defined at the top of `app.js`:

- `id` (unique, used for check-in list)
- `name` (display)
- `qrCode` (PIN / QR code text, e.g. `QR_B6`)
- `image` (file path, usually under `images/`)

When adding a new location:

1. Add the image file under `images/` (or subfolders).
2. Add a new object in the `locations` array.
3. Make sure the `image` path matches the actual file.
4. Update `TOTAL_LOCATIONS` if you change the number of locations (currently `45`).

---

## Admin notes (demo)

Admin is enabled when logging in with:

- username: `navigo`
- password: `10diembtl`

Admin can:

- reset check-in progress
- reset all user progress (current user only)
- manage pending voucher usage requests
- handle pending reports (delete content / dismiss)
- add new vouchers and badges (stored in `localStorage`)

---

## Data storage (localStorage keys)

This app uses browser storage heavily. Common keys include:

- `users` (registered users map)
- `currentUser`, `guestMode`, `isAdmin`
- `userData` (per-username progress)
- `badges`, `vouchers`, `usedVouchers`
- `reviews`, `comments`, `reactions`, `reports`
- `notifications`
- `userSessionId` (anonymous identity for reactions/comments notifications)

---

## License

No license file yet. Add a `LICENSE` if you want to specify usage terms (MIT, Apache-2.0, etc.).