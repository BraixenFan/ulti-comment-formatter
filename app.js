const commentInput = document.getElementById("comment-input");
const submitButton = document.getElementById("submit-comment");
const commentOutput = document.getElementById("formatted-output");

submitButton.addEventListener("click", startFormatting);

function startFormatting() {
  let comment = commentInput.value;

  commentOutput.textContent = comment;
}
