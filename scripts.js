const image = document.getElementById("profile-image")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const emailEnter = document.getElementById("email-enter")

let emails = []
const emailsFromLocalStorage = JSON.parse(localStorage.getItem("emails"))

checkEmails()

function checkEmails() {
  if (emailsFromLocalStorage) {
    emails = emailsFromLocalStorage
    console.log(true)
  } else {
    console.log(false)
  }
}
const imageDisplay = window.getComputedStyle(image)
submit.addEventListener("click", setEmail)
clear.addEventListener("click", clearEmails)

function setEmail() {
  emails.push(emailEnter.value)
  emailEnter.value = ""
  localStorage.setItem("emails", JSON.stringify(emails))
  checkEmails()
}

function clearEmails() {
  if (confirm("Are you sure you want to delete all emails? You won't receive updates anymore.")) {
    localStorage.clear()
    emails = []
    checkEmails()
  }
}