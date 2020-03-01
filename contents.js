function styleTimeDivider() {
  const tasks = document.querySelectorAll(".task_item_details");
  tasks.forEach(task => {
    if (task.querySelector('* img[alt="⏲"]')) {
      task.classList.add("time-divider");
    }
  });
}

window.onhashchange = styleTimeDivider;

(new MutationObserver(styleTimeDivider)).observe(
  document.getElementById("editor"),
  { childList: true }
);
