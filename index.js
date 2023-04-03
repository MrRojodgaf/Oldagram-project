import {posts} from '/data.js' 

const page = document.getElementById("page")

document.addEventListener('dblclick', function(e){
    if(e.target.dataset.like){
        likeBtn(e.target.dataset.like)
    }
})


function likeBtn(postId){
    const likedPost = posts.filter((profile)=>{
        return postId == profile.id
            })[0]
        likedPost.isLiked ? likedPost.likes-- : likedPost.likes++ 
        likedPost.isLiked = !likedPost.isLiked
        renderPage()
}

function renderPage() {
    let render = ""
    posts.map((profile)=>{
        let like = ''
        const {isLiked, avatar, name, location, post, id, likes, username, comment} = profile
        if (isLiked){
         like = 'liked'
        }
        render +=`<div>
                    <div class="post-header">
                        <img class="avatar" src=${avatar}>
                        <div>
                            <h2 class="name">${name}</h2>
                            <h3 class="location">${location}</h3>
                        </div>
                        <img class="verified" src="https://www.pngitem.com/pimgs/m/302-3024199_instagram-verified-symbol-png-instagram-verified-logo-png.png">
                    </div>
                    <img class="post" src='${post}' data-like="${id}">
                    <div class="react-icons">
                        <i class="fa-solid fa-heart ${like}" data-like="${id}"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <p class="likes">${likes} likes</p>
                    <div class="comment">
                    <p class="username-post"><span>${username}</span>${comment}</p>
                    </div>
                </div>
                `
    })
    page.innerHTML = render
}

renderPage()







