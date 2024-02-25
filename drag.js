const draggables = document.querySelectorAll(".card-content");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((card) => {
  card.addEventListener("dragstart", () => {
    card.classList.add("is-dragging");
    saveTasks();
  });
  card.addEventListener("dragend", () => {
    card.classList.remove("is-dragging");
    saveTasks();
  });
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
      saveTasks();
    } else {
      zone.insertBefore(curTask, bottomTask);
      saveTasks();
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((card) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = card;
      saveTasks();
    }
  });
  saveTasks();
  return closestTask;
};
