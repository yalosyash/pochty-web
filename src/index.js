document
  .addEventListener("submit", function (event) {
    visibleDivCopied("hidden");
    event.preventDefault();
    const input = document.getElementById("pochty");
    const output = document.getElementById("output");

    output.innerHTML = "";

    const lines = clearPochts(input.value);

    output.value = lines.join("\n");
  });

document.getElementById("copyButton").addEventListener("click", function () {
  navigator.clipboard
    .writeText(document.getElementById("output").value)
    .then(visibleDivCopied("visible"));
});
// document.

function visibleDivCopied(condition) {
  document.getElementById("copied").style.visibility = condition;
}
