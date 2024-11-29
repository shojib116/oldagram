const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
  }
]

function renderPost(postObj) {
  const {name, username, location, avatar, post, comment, likes} = postObj;

  return `
    <div class="post-container">
      <div class="post-header">
        <img src="${avatar}" alt="avatar of ${name}" class="avatar">
        <div class="user-info">
          <p class="full-name">${name}</p>
          <p class="location">${location}</p>
        </div>
      </div>
      <div class="post">
        <img src="${post}" data-username="${username}" alt="a post from ${name}"/>
      </div>
      <div class="post-footer">
        <div class="interaction-icons">
          <img class="icon like-btn" data-username="${username}" src="images/icon-heart.png" alt="like icon">
          <img class="icon" src="images/icon-comment.png" alt="comment icon">
          <img class="icon" src="images/icon-dm.png" alt="direct message icon">
        </div>
        <p class="like-count">${likes} likes</p>
        <p class="post-text"><span class="user-name">${username}</span> ${comment}</p>
      </div>
    </div>`
}

function renderPosts(posts) {
    const length = posts.length;
    let postsEl = ""
    for (let i = 0; i < length; i++) {
      postsEl += renderPost(posts[i]);
    }

    document.querySelector("main").innerHTML = postsEl;

    const postEls = document.querySelectorAll(".post");

    postEls.forEach((post) => {
      post.addEventListener("dblclick", (event) => {
        increaseLikes(posts, event.target.dataset.username)
      })
    })

    const likeBtns = document.querySelectorAll(".like-btn");

    likeBtns.forEach((post) => {
      post.addEventListener("click", (event) => {
        increaseLikes(posts, event.target.dataset.username);
      })
    })
}

renderPosts(posts);

function increaseLikes(posts, username) {
  const updatedPosts = posts.map(post => {
    if (post.username === username) {
      post.likes++;
      return post;
    } 
    return post;
  })

  renderPosts(updatedPosts)
}

