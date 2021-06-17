const input = document.getElementById("commentInput");
const submit = document.getElementById("submit");

function checkInput(){
  // 3항 연산자 사용해도 괜찮을지?
  input.value.length ? registerComment(input.value) : alert("댓글을 입력하세요!");
}

function registerComment(value){
  // 여기서 let과 const
  // childNode 할 떄 다른 nodeName은?
  let commentLists = document.getElementById("commentLists");
  let newCommentList = document.createElement('li');
  const newComment = `<span class="name">we-dohyeon</span><span>${value}</span><span class="delete">x</span>`;
  let nodeNum = commentLists.childNodes.length - 3;

  newCommentList.innerHTML = newComment;
  commentLists.appendChild(newCommentList);
  input.value = "";

  makeDeleteEvent(nodeNum);
}

function makeDeleteEvent(nodeNum){
  const deleteBtn = document.getElementsByClassName('delete')[nodeNum];
  deleteBtn.addEventListener('click', deleteComment);
}

function deleteComment(e){
  // DOM 사라지면 이벤트도 삭제를 해줘야하나?
  e.target.removeEventListener('click', deleteComment);
  e.path[1].remove();
}

init = () => {
  // input.addEventListener("keyup", checkInput);
  submit.addEventListener("click", checkInput);
}

init();