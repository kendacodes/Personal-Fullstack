var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown =document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-alt");
var reply = document.getElementsByClassName("fa-reply")
var yum = document.getElementsByClassName("fa-utensils")

Array.from(thumbUp).forEach(function(element) {
  element.addEventListener('click', function(){
    const id = this.parentNode.parentNode.getAttribute('id')
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
    fetch('messages/upvote', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        '_id' : id,
        'thumbUp': thumbUp
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});
Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const id = this.parentNode.parentNode.getAttribute('id')
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[11].innerText)
    fetch('messages/downvote', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        '_id': id,
        'thumbDown':thumbDown
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(yum).forEach(function(element) {
  element.addEventListener('click', function(){
    const id = this.parentNode.parentNode.getAttribute('id')
    const yum = parseFloat(this.parentNode.parentNode.childNodes[15].innerText)
    fetch('messages/yum', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        '_id': id,
        'yum':yum
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const id = this.parentNode.parentNode.getAttribute('id')
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        '_id': id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
