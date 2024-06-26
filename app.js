const commentInput = document.getElementById("comment-input");
//const submitButton = document.getElementById("submit-comment");
const submitMultipleButton = document.getElementById("submit-comment-multiple");
const commentOutput = document.getElementById("formatted-output");
const copyButton = document.getElementById("copy-clipboard-button");

//submitButton.addEventListener("click", startFormatting);
submitMultipleButton.addEventListener("click", loopFormatting);
copyButton.addEventListener("click", copyToClipboard);

function startFormatting() {
  let comment = commentInput.value;
  console.log(comment);

  let date = comment.substr(comment.indexOf("[") + 1, comment.indexOf("]") - 1);
  let username = comment.substr(comment.indexOf("From") + date.length - 3, comment.indexOf(":") - comment.indexOf("From") - 5);
  let message = comment.substr(comment.indexOf(":") + 2, comment.length - username.length - date.length);
  //message.replace(/\r?\n/g, "<br>"); doesn't work

  let formattedComment = "<strong>" + username + "</strong><br>" + date + "<br>\n" + message + "<br><br><br>";

  commentOutput.textContent = formattedComment;
}

function loopFormatting() {
  let comments = commentInput.value;
  comments = comments.split("[");
  commentOutput.textContent = "";

  console.log(comments)

  comments.forEach((comment, index) => {
    if (index == 0) return;

    let date = comment.substr(comment.indexOf("[") + 1, comment.indexOf("]"));
    let username = comment.substr(comment.indexOf("From") + 5, comment.indexOf(":") - comment.indexOf("From") - 5);
    let message = comment.substr(comment.indexOf(":") + 2, comment.length - username.length - date.length);
    message = message.replaceAll(/\r?\n/g, "<br> \n")

    let formattedComment = "<strong>" + username + "</strong><br>" + date + "<br>\n" + message + "\n";
    commentOutput.textContent = commentOutput.textContent + formattedComment;
  })
}

function copyToClipboard() {
  if (commentOutput.textContent == "Here is where the output will display") {
    copyButton.textContent = "Nothing to copy!";
  } else {
    navigator.clipboard.writeText(commentOutput.textContent);
    copyButton.textContent = "Successfully copied!";
  }
  setTimeout(() => { copyButton.textContent = "Copy to Clipboard" }, 2000)
}