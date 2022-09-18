// DOM ELEMENTS
const createPostForm = document.querySelector('.create--post');

// DELEGATION
if (createPostForm) {
  createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const title = document.getElementById('title')
    const summary = document.getElementById('summary')
    const date = new Date()

    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title.value,
          summary: summary.value,
          date: date.toISOString().substring(0, 10)
        })
      })
    } catch (error) {
      console.log(error)
    } finally {
      const closeBtn = document.getElementById('close-btn')
      closeBtn.click()
      title.value = ""
      summary.value = ""

      location.reload();
    }
  })
}