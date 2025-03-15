document.getElementById("submit").addEventListener("click", function (event) {
  visibleDivCopied("hidden");
  event.preventDefault();
  const input = document.getElementById("pochty");
  const output = document.getElementById("output");

  output.innerHTML = "";

  const lines = clearPochts(input.value);

  output.value = lines.join("\n");
});

document
  .getElementById("copyButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    navigator.clipboard
      .writeText(document.getElementById("output").value)
      .then(visibleDivCopied("visible"));
  });

function visibleDivCopied(condition) {
  document.getElementById("notice").style.visibility = condition;
}
