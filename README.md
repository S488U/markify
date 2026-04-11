# Markify

Markify is a markdown notes workspace built with Next.js. It lets users sign up, sign in, create notes, edit markdown in a split editor, preview the rendered output instantly, switch between light and dark themes, and store notes in MongoDB.

This project is structured like a small product, but the scope is intentionally focused: one landing page, one authenticated dashboard, and a simple note workflow.

## What The Project Does

- Landing page that explains the actual product
- User authentication with signup, login, logout, and cookie-based session handling
- Protected `/dashboard` route for authenticated users only
- Sidebar note explorer with create, select, update, and delete
- Live markdown editor and reading preview
- Light and dark theme toggle
- Notes stored in MongoDB through Next.js API routes

## Tech Stack

- Next.js 16.2.3
- React 19
- TypeScript
- Tailwind CSS 4
- MongoDB with Mongoose
- JWT authentication using cookies
- `react-markdown` for rendering markdown
- `next-themes` for theme switching

## Project Workflow

### User Flow

1. A new user opens the landing page.
2. The user creates an account from `/signup`.
3. The user signs in from `/signin`.
4. After login, the user is redirected to `/dashboard`.
5. Inside the dashboard, the user can:
   - create a note
   - select a note from the sidebar
   - edit markdown in the editor
   - see the rendered preview immediately
   - delete notes
   - switch between light and dark mode
6. Notes are saved to the database through the note API routes.

### Developer Flow

1. Start the app locally.
2. Connect it to a MongoDB database with environment variables.
3. Sign up a user and log in.
4. Open `/dashboard` and test the note lifecycle:
   - create
   - edit
   - autosave
   - delete
   - logout

## Route Overview

### Public Routes

- `/` - landing page
- `/signup` - account creation
- `/signin` - login page

### Protected Route

- `/dashboard` - markdown notes workspace

The dashboard page checks authentication on the server and redirects unauthenticated users to `/signin`.

## API Overview

### Authentication

- `POST /api/auth/signup`
  - creates a new user
- `POST /api/auth/login`
  - validates credentials
  - creates a JWT
  - stores the token in an HTTP-only cookie
- `POST /api/auth/logout`
  - removes the auth cookie
- `GET /api/dashboard/getUser`
  - returns the current authenticated user payload

### Notes

- `GET /api/notes`
  - fetch all notes for the current user
- `POST /api/notes/create`
  - create a new note
- `PUT /api/notes/[id]`
  - update a note title and content
- `DELETE /api/notes/[id]`
  - delete a note

## Folder Structure

```text
src/
  app/
    api/
      auth/
      dashboard/
      notes/
    dashboard/
      page.tsx
    signin/
      page.tsx
    signup/
      page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    dashboard/
      DashboardHeader.tsx
      EditorPane.tsx
      EmptyWorkspace.tsx
      NotesSidebar.tsx
      PreviewPane.tsx
      ResizeHandle.tsx
      StatusBar.tsx
      icons.tsx
      note-utils.ts
      types.ts
    AppShell.tsx
    CTA.tsx
    Demo.tsx
    Features.tsx
    Footer.tsx
    Hero.tsx
    LogoutButton.tsx
    MarkifyLogo.tsx
    Navbar.tsx
    NotesDashboard.tsx
    ThemeProvider.tsx
    ui/
      Button.tsx
      Form.tsx
  hooks/
    useNotesWorkspace.ts
    useResizablePanels.ts
  lib/
    auth.ts
    db.ts
  model/
    Note.ts
    User.ts
```

## Important Files

- [src/app/page.tsx](src/app/page.tsx)
  - landing page assembly
- [src/app/dashboard/page.tsx](src/app/dashboard/page.tsx)
  - protected dashboard route
- [src/components/NotesDashboard.tsx](src/components/NotesDashboard.tsx)
  - dashboard composition root
- [src/hooks/useNotesWorkspace.ts](src/hooks/useNotesWorkspace.ts)
  - note loading, autosave, create, delete, select, logout
- [src/hooks/useResizablePanels.ts](src/hooks/useResizablePanels.ts)
  - custom resize behavior for sidebar and editor panes
- [src/lib/auth.ts](src/lib/auth.ts)
  - cookie + JWT auth helper
- [src/lib/db.ts](src/lib/db.ts)
  - MongoDB connection helper

## Environment Variables

Create a `.env.local` file in the project root and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_TOKEN=your_jwt_secret
```

## Installation

```bash
npm install
```

## Run The Project

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - build the app for production
- `npm run start` - run the production server
- `npm run lint` - run ESLint

## Current Architecture Notes

- The app uses cookie-based JWT authentication instead of an auth library.
- Notes are separated by `userId`.
- The dashboard UI is modularized into smaller components and hooks.
- Pane resizing is implemented with custom mouse event handling.
- Theme switching is controlled by `next-themes`.

## Known Implementation Notes

- The MongoDB connection helper logs successful connection messages to the console.
- The dashboard is the main functional part of the product. The landing page is descriptive and routes users into the dashboard flow.

## Suggested Future Improvements

- Replace absolute auth form URLs with relative URLs
- Add note search or filtering in the sidebar
- Add note timestamps in the explorer
- Add keyboard shortcuts for new note and save actions
- Add copy button and language label for fenced code blocks
- Add tests for API routes and dashboard flows
- Improve mobile behavior for the dashboard workspace

## What Makes This Project Useful For Review

This README is intended to help:

- a class reviewer understand the product quickly
- a teammate set up the project locally
- a future maintainer understand where logic lives
- a presenter explain the workflow and architecture during demo

## Demo Checklist

If you are presenting the project, this is the easiest order:

1. Open the landing page
2. Explain the product purpose
3. Sign up or sign in
4. Open the dashboard
5. Create a new note
6. Write markdown
7. Show live preview
8. Toggle theme
9. Delete a note
10. Log out
