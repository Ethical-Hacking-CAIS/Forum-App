// DOM ELEMENTS
const createPostForm = document.querySelector('.create--post');

// DELEGATION
if (createPostForm) {
  createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const postTitle = document.getElementById('title')
    const postSummary = document.getElementById('summary')
    const date = new Date()
    console.log(postTitle.value, postSummary.value, date)
    // await createPost(postTitle, postSummary, date);
    const closeBtn = document.getElementById('close-btn')
    closeBtn.click()
    postTitle.value = ""
    postSummary.value = ""
  })
}