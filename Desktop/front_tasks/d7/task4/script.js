/* <!-- Alert ASCII Code of any key pressed and detect whether it is alt key or ctrl key or shift key.-->*/

window.addEventListener('keydown', function(event) {
  
    
    var keyCode = event.keyCode;

    // Convert the ASCII code to a character
    var keyChar = String.fromCharCode(keyCode);

    
    var isAlt = event.altKey;
    var isCtrl = event.ctrlKey;
    var isShift = event.shiftKey;

    // Display the result in an alert
    alert('Key Code: ' + keyCode + '\n' +
          'Character: ' + keyChar + '\n' +
          'Alt Pressed: ' + isAlt + '\n' +
          'Ctrl Pressed: ' + isCtrl + '\n' +
          'Shift Pressed: ' + isShift);
          
});