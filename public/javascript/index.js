// DOM ELEMENTS
const createPostForm = document.querySelector('.create--post');
const createUserForm = document.querySelector('.create--user');
const loginUserForm = document.querySelector('.login--user');
const logoutBtn = document.getElementById('logout')

// DELEGATION
if (logoutBtn) {
  logoutBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    try {
      await fetch('/api/users/logout')
    } catch (error) {
      console.log(error)
    } finally {
      location.replace("/login");
    }
  })
}
if (createUserForm) {
  createUserForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    try {
      await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        })
      })
    } catch (error) {
      console.log(error)
    } finally {
      email.value = ""
      password.value = ""

      location.replace("/");
    }
  })
}

if (loginUserForm) {
  loginUserForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        })
      })

      email.value = ""
      password.value = ""
      if (response.status==200){
        location.replace("/");
      }
     
    } 
    catch (error) {
      console.log(error)
    } 
  })
}

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