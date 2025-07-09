function summarise() {
  const input = document.getElementById('blogInput').value.trim();
  const output = document.getElementById('summaryOutput');

  if (!input) {
    alert("Please paste some blog content.");
    return;
  }

  const sentences = input.match(/[^.!?]+[.!?]+/g);

  if (!sentences || sentences.length === 0) {
    output.textContent = "Could not extract meaningful sentences.";
    return;
  }

  const summary = sentences.slice(0, 2).join(' ').trim();

  output.textContent = summary;
}
