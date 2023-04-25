//your JS code here. If required.
const p = document.getElementById("status")
const btn = document.getElementById("enterBtn")
const body = document.querySelector("body")
function changeText(){
	p.remove()
    const h3 = document.createElement("h3")
	h3.id = "status"
    h3.innerText = "Entered Metaverse"
    body.replaceChild(h3, body.children[0])
}
btn.addEventListener("click", changeText)