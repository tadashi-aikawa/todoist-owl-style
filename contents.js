function inSelectorAny(task, selectors) {
  return selectors.some(s => !!task.querySelector(s));
}

function styleTimeDivider(mutationRecords) {
  console.debug("todoist-owl-style: fire");
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

function setObserver() {
  (new MutationObserver(styleTimeDivider)).observe(
    document.querySelector("#editor"),
    { childList: true }
  );
}

window.onhashchange = setObserver;
setObserver();
