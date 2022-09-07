/* for the frequency slider */
var frequencySlider = document.getElementById("frequency-slider");
var frequencyText = document.getElementById("frequency-text");
frequencyText.innerHTML = frequencySlider.value / 100;
frequencySlider.oninput = function() {frequencyText.innerHTML = this.value / 100;}


/*for the ionosphere height slider */
var heightSlider = document.getElementById("height-slider");
var ionosphere = document.getElementById("ionosphere");
var height = 200;
heightSlider.oninput = function() {
    height = this.value;
    ionosphere.style.top = ((3000/height)+4) + "vh";
    // redraw lines?
}






















/* START DRAGGABLE IONOSPHERE v1
dragElement(document.getElementById("drag-me"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos2 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos2 - e.clientY;
    pos2 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
 END DRAGGABLE IONOSPHERE v1 */

 /* todo: stop ionosphere from being moved too far */
