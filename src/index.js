const pochty = document.getElementById("pochty");
const submit = document.getElementById("submit");
const output = document.getElementById("output");
const copyButton = document.getElementById("copyButton");
const downloadButton = document.getElementById("downloadButton");
const notice = document.getElementById("notice");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  output.classList.remove("outputRed");

  output.innerHTML = "";
  const lines = clearPochts(pochty.value);
  output.value = lines.join("\n");
});

copyButton.addEventListener("click", function (event) {
  event.preventDefault();

  navigator.clipboard.writeText(output.value);
  notice.style.display = "block";
  setTimeout(() => (notice.style.display = "none"), 1000);
});

downloadButton.addEventListener("click", function (event) {
  event.preventDefault();

  const text = output.value;
  if (!text) {
    output.classList.add("outputRed");
    return;
  }
  output.classList.remove("outputRed");

  const blob = new Blob([text], { type: "text/plain" });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;

  a.download = "pochty_clear.txt";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
