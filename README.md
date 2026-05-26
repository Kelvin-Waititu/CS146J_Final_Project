# StudyFlow Sprint 1 Prototype

StudyFlow is a smart study planner for organizing academic tasks, generating study sessions, and visualizing productivity.

## Sprint 1 scope

- Multi-page frontend: dashboard, tasks, planner, and analytics.
- Mock data loaded with `fetch()` from `data/mock-data.json`.
- Task creation, completion toggles, deletion, filtering, and local persistence with `localStorage`.
- Generated weekly study plan plus manual study session creation.
- Productivity analytics built with plain HTML, CSS, and JavaScript.
- Responsive layouts, keyboard navigation support, visible focus states, semantic sections, labels, and ARIA attributes.

## Run locally

From this project folder:

```bash
python3 -m http.server 8001
```

Then open:

```text
http://127.0.0.1:8001/pages/index.html
```

Use a local server instead of opening the HTML file directly because the app fetches mock JSON.

## Project structure

- `pages/` contains all HTML pages.
- `css/` contains the CSS entrypoint and split style modules.
- `js/` contains the JavaScript entrypoint and split behavior modules.
- `data/` contains Sprint 1 mock JSON.

## Demo path

1. Start on the dashboard and explain the core vision: one place for deadlines, study planning, and progress.
2. Add a quick task and show the priority queue and metrics updating.
3. Open Tasks, filter open/completed tasks, complete a task, and delete a test task.
4. Open Planner, regenerate the schedule, and add a manual study session.
5. Open Analytics and explain the focus chart, completion donut, course workload, and risk insight.

## Sprint 2 plan

- Replace mock JSON/localStorage with a custom REST API.
- Store tasks, study sessions, and focus logs in a database.
- Add form POST requests to the backend and handle HTTP errors in the UI.
- Improve scheduler logic using deadlines, estimated hours, and available study windows.
- Add final deployment instructions and polish based on TA/peer feedback.
