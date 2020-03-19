function inSelectorAny(task, selectors) {
  return selectors.some(s => !!task.querySelector(s));
}

function styleTimeDivider() {
  console.debug("todoist-owl-style: fire");
  const tasks = document.querySelectorAll(".task_item_details");
  tasks.forEach(task => {
    if (
      inSelectorAny(task, [
        '* img[alt="⏲"]',
        '* img[alt="🌅"]',
        '* img[alt="🏢"]',
        '* img[alt="🍙"]',
        '* img[alt="🏠"]'
      ])
    ) {
      task.classList.add("time-divider");
    }
    if (inSelectorAny(task, ['* img[alt="📆"]'])) {
      task.classList.add("calendar-task");
    }
  });
}

function main() {
  // クエリだけ変わったとき用
  new MutationObserver(styleTimeDivider).observe(
    document.querySelector("#content"),
    { childList: true }
  );

  // その他の変更検知
  function setObserver() {
    new MutationObserver(styleTimeDivider).observe(
      document.querySelector("#editor"),
      { childList: true }
    );
  }
  window.onhashchange = setObserver;
  setObserver();

  styleTimeDivider();
}

setTimeout(main, 2000);
