import {posts} from '/data.js' 

const page = document.getElementById("page")

document.addEventListener('dblclick', function(e){
    if(e.target.dataset.like){
        likeBtn(e.target.dataset.like)
    }
})


function likeBtn(postId){
    const likedPost = posts.filter(function(post){
              return postId == post.id
              })[0]
    if (likedPost.isLiked){
        likedPost.likes--
    }
    else {
        likedPost.likes++ 
    }
    likedPost.isLiked = !likedPost.isLiked               
    renderPage()
}

function renderPage() {
    let render = ''
    posts.forEach(function(post){
      let like = ''
      if (post.isLiked){
          like = 'liked'
      }
      render +=`<div class="post-header">
                    <img class="avatar" src=${post.avatar}>
                    <div>
                    <h2 class="name">${post.name}</h2>
                    <h3 class="location">${post.location}</h3>
                    </div>
                    <img class="verified" src="https://www.pngitem.com/pimgs/m/302-3024199_instagram-verified-symbol-png-instagram-verified-logo-png.png">
                </div>
                <img class="post" src='${post.post}' data-like="${post.id}">
                <div class="react-icons">
                    <i class="fa-solid fa-heart ${like}" data-like="${post.id}"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
                <p class="likes">${post.likes} likes</p>
                <p class="username-post"><span>${post.username}</span>${post.comment}</p> 
                `
    })
    page.innerHTML = render 
    }

renderPage()







