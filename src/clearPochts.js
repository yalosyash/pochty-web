function clearPochts(txt) {
  const txt2 = txt
    .split("\n")
    .map((line) => line.split(",").map((word) => word.trim()))
    .flat(2);

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

  const lines = txt2
    .map((line) => line.trim())
    .filter((i) => i)
    .map((line) =>
      line
        .split(",")
        .map((pocht) => pocht.trim())
        .filter((i) => i)
        .map((line) => line.match(emailRegex))
    )
    .flat(2)
    .filter((i) => i)
    .map((line) => decodeURIComponent(line).trim());

  return lines;
}
