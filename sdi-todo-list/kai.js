console.log('My code is running');
//let add_box = document.querySelector("#add_box");
//document.querySelector("#my_title").innerHTML = "The best job ever";
//const divList = document.querySelector(".Listholder");
//const addBox = document.querySelector("add_box");
//<input type="text" placeholder="add a todo" id="add_box">

let title = document.querySelector("#my_title");
title.innerHTML = "this is alot to learn"
title.style.background = "green";
// Get references to the input, button, and list elements
let itemInput = document.getElementById('itemInput');
let addItemButton = document.getElementById('addItemButton');
let itemList = document.getElementById('itemList');











// Function to add an item to the list
function addItemToList() {
  // Get the value from the input field
  const newItem = itemInput.value;

  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.textContent = newItem;

  // Append the new list item to the list
  itemList.appendChild(listItem);

  // Clear the input field
  itemInput.value = '';
}

// Add event listener to the button
addItemButton.addEventListener('click', addItemToList);






//
//<button id="button" type="button">Add Todo</button>
//<button id="button2" type="button2">remove Todo</button>
//<script> const btn = document.getElementById('button');
  //  btn.addEventListener("click", function(e) {
  //      const todo = prompt(" what do you want to add?");
    //    document.body.innerHTML = "<li>welcome, " + todo + "</li>";
        
  //  });
//</script>
//<script> const btn2 = document.getElementById('button2');
//btn2.addEventListener("click", function(e) {
  //  const todo = prompt(" what do you want to remove?");
    //document.body.innerHTML = "<li>welcome, " + todo + "</li>";
    
//});