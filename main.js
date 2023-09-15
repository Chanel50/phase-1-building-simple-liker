// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

/document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const likeButtons = document.querySelectorAll(".like-glyph");

  
  errorModal.classList.add("hidden");

  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          likeButton.classList.toggle("activated-heart");
          if (likeButton.innerHTML === "♡") {
            likeButton.innerHTML = "♥";
          } else {
            likeButton.innerHTML = "♡";
          }
        })
        .catch((error) => {
          errorModal.classList.remove("hidden");
          const errorMessage = document.getElementById("modal-message");
          errorMessage.innerText = error;
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });

  function mimicServerCall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.2) {
          reject("Random server error. Please try again.");
        } else {
          resolve("Success!");
        }
      }, 1000);
    });
  }
});
!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
