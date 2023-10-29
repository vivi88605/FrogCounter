let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saveEl.innerHTML+=`<span>${count}🐸 </span>`
    count=0
    countEl.textContent=0
}
