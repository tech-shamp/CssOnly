console.info("This Page will show some little posts")

const sec = document.querySelector("section")
const box = document.getElementById("post")

const data = {
  title: "How to hack wifi on kali linux",
  cont: "Lorem ipsum dolor sit, amet consectetur dipisicing elit. Necessitatibus autem ut officiis incidunt....",
}

for (let i = 0; i < 4; i++) {
  sec.innerHTML += `<div id="post"><h3>${data.title}</h3><p>${data.cont}</p><button>Read More</button></div>`
}
