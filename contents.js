function inSelectorAny(task, selectors) {
  return selectors.some(s => !!task.querySelector(s));
}

function styleTimeDivider() {
  const tasks = document.querySelectorAll(".task_item_details");
  tasks.forEach(task => {
    if (inSelectorAny(task, [
      '* img[alt="⏲"]',
      '* img[alt="🌅"]',
      '* img[alt="🏢"]',
      '* img[alt="🍙"]',
      '* img[alt="🏠"]'
    ])) {
      task.classList.add("time-divider");
    }
  });
}

window.onhashchange = styleTimeDivider;

(new MutationObserver(styleTimeDivider)).observe(
  document.getElementById("editor"),
  { childList: true }
);
