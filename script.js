//your JS code here. If required.
const p = document.getElementById("status")
const btn = document.getElementById("enterBtn")
const body = document.querySelector("body")
function changeText(){
	p.remove()
    const h1 = document.createElement("h1")
	h1.id = "status"
    h1.innerText = "Entered Metaverse"
    body.replaceChild(h1, body.children[0])
}
btn.addEventListener("click", changeText)