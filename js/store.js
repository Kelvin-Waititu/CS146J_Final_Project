import { nextId } from "./utils.js";

const STORAGE_KEY = "studyflow-beta-state-v2";

export const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const state = {
  tasks: [],
  sessions: [],
  focusMinutes: []
};

export async function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const savedData = saved ? JSON.parse(saved) : null;
  const data = savedData?.tasks?.length ? savedData : await fetchMockData();

  Object.assign(state, data);

  if (!savedData?.tasks?.length) {
    saveState();
  }
}

export function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function addTask(task) {
  state.tasks.push({
    id: nextId(state.tasks),
    ...task
  });
  saveState();
}

export function toggleTask(id) {
  state.tasks = state.tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          status: task.status === "completed" ? "open" : "completed"
        }
      : task
  );
  saveState();
}

export function sortedTasks() {
  return [...state.tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}

async function fetchMockData() {
  try {
    const response = await fetch("../data/mock-data.json");
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.warn("Using built-in mock data fallback.", error);
  }

  return {
    tasks: [
      {
        id: 1,
        title: "Sprint 1 beta prototype",
        course: "CS 146J",
        type: "Project",
        dueDate: "2026-05-26",
        priority: "High",
        hours: 5,
        status: "open"
      },
      {
        id: 2,
        title: "Linear algebra problem set",
        course: "MATH 51",
        type: "Assignment",
        dueDate: "2026-05-28",
        priority: "Medium",
        hours: 3,
        status: "open"
      },
      {
        id: 3,
        title: "Biology midterm review",
        course: "BIO 82",
        type: "Exam",
        dueDate: "2026-05-29",
        priority: "High",
        hours: 4,
        status: "open"
      },
      {
        id: 4,
        title: "Reading response draft",
        course: "PWR 2",
        type: "Reading",
        dueDate: "2026-05-30",
        priority: "Low",
        hours: 1.5,
        status: "completed"
      },
      {
        id: 5,
        title: "Chemistry lab reflection",
        course: "CHEM 31",
        type: "Assignment",
        dueDate: "2026-06-01",
        priority: "Medium",
        hours: 2,
        status: "open"
      }
    ],
    sessions: [
      { id: 1, day: "Monday", time: "09:00", subject: "CS 146J", duration: 75 },
      { id: 2, day: "Tuesday", time: "13:00", subject: "BIO 82", duration: 50 },
      { id: 3, day: "Wednesday", time: "10:30", subject: "MATH 51", duration: 50 },
      { id: 4, day: "Thursday", time: "15:00", subject: "BIO 82", duration: 75 },
      { id: 5, day: "Friday", time: "11:00", subject: "CHEM 31", duration: 25 }
    ],
    focusMinutes: [
      { day: "Mon", minutes: 80 },
      { day: "Tue", minutes: 110 },
      { day: "Wed", minutes: 45 },
      { day: "Thu", minutes: 95 },
      { day: "Fri", minutes: 50 },
      { day: "Sat", minutes: 30 },
      { day: "Sun", minutes: 65 }
    ]
  };
}
