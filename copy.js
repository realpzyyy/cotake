document.querySelectorAll("[data-copy]").forEach(function (button) {
  var label = button.textContent;
  button.addEventListener("click", function () {
    var text = button.getAttribute("data-copy");
    var done = function () {
      button.textContent = button.getAttribute("data-done");
      setTimeout(function () { button.textContent = label; }, 1600);
    };
    try {
      navigator.clipboard.writeText(text).then(done, function () { window.prompt("", text); });
    } catch (e) {
      window.prompt("", text);
    }
  });
});
