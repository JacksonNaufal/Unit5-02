 document.getElementById('myhi').addEventListener('click',myhi)
 document.getElementById('background2').addEventListener('click',background2)
 document.getElementById('cyantext').addEventListener('click',cyantext)

function myhi () {
  document.getElementById('picture').src =
  'Ocelots.png'
  document.getElementById('background').style.backgroundColor = 'red'
}
// Picture is the id, which links to Line 16 on the Index.html, which then sees the Ocelots.png, which is the image link, the "background" reads the id for the body on my HTML, which then it tells it for the style, to switch the background color to "red"

function background2 () {
  document.getElementById('background2').style.backgroundColor = 'orange'
}
// Background 2 is the id of the button, on the HTML and the document.getElementById, is grabbing the id from the HTML and its telling to to change it to blue.

function cyantext () {
  document.getElementById('cyantext').style.color = 'blue'
}
// para is the id of the button, on the HTML and the document.getElementById, is grabbing the id from the HTML and its telling to to change it to blue.
