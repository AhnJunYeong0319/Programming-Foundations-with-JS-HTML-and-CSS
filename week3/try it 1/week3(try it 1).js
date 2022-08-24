function changer() {
    alert('Error!')
  }
  
  function usingConfirm {
    var text = "What to choose?"
    if (confirm(text) == true) {
      text = "You pressed OK!"
    }
    else {
      text = "Are you sure you want to cancel?"
    }
  }