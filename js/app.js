import { setupAssistant } from "./assistant.js";
import { renderAnalytics } from "./analytics.js";
import { renderDashboard } from "./dashboard.js";
import { setupNavigation } from "./navigation.js";
import { renderPlanner } from "./planner.js";
import { loadState } from "./store.js";
import { renderTaskManager } from "./tasks.js";

document.addEventListener("DOMContentLoaded", async () => {
  setupNavigation();
  await loadState();
  setupAssistant();
  routePage();
});

function routePage() {
  const page = document.body.dataset.page;

  if (page === "dashboard") {
    renderDashboard();
  }

  if (page === "tasks") {
    renderTaskManager();
  }

  if (page === "planner") {
    renderPlanner();
  }

  if (page === "analytics") {
    renderAnalytics();
  }
}
