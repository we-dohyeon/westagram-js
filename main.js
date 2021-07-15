"use strict";

const input = document.getElementById("commentInput");
const submit = document.getElementById("submit");

function checkInput() {
  if (!input.value.length) {
    alert("댓글을 입력하세요!");
  } else {
    registerComment(input.value);
  }
}

function registerComment(value) {
  const commentLists = document.getElementById("commentLists");
  const newCommentList = document.createElement("li");
  const newComment = `<span class="name">we-dohyeon</span><span>${value}</span><span class="delete">x</span>`;

  newCommentList.innerHTML = newComment;
  makeDeleteEvent(newCommentList);
  commentLists.appendChild(newCommentList);

  input.value = "";
}

function makeDeleteEvent(newCommentList) {
  const deleteBtn = newCommentList.querySelector(".delete");
  deleteBtn.addEventListener("click", () =>
    deleteComment(deleteBtn, newCommentList)
  );
}

function deleteComment(deleteBtn, newCommentList) {
  deleteBtn.removeEventListener("click", deleteComment);
  newCommentList.remove();
}

const init = () => {
  submit.addEventListener("click", checkInput);
};

init();
