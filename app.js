const commentInput = document.getElementById("comment-input");
const submitButton = document.getElementById("submit-comment");
const commentOutput = document.getElementById("formatted-output");

submitButton.addEventListener("click", startFormatting);

function startFormatting() {
  let comment = commentInput.value;
  console.log(comment);

  let date = comment.substr(comment.indexOf("[") + 1, comment.indexOf("]") - 1);
  let username = comment.substr(comment.indexOf("From") + 5, comment.indexOf(":") - 16);
  let message = comment.substr(comment.indexOf(":") + 2, comment.lenght);
  //message.replace(/\r?\n/g, "<br>"); doesn't work

  let formattedComment = "<strong>" + username + "</strong><br>" + date + "<br>\n" + message + "<br><br><br>";

  commentOutput.textContent = formattedComment;
}
