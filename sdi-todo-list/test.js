// Get references to the input, button, and list elements
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

// Function to add an item to the list
function addItemToList() {
  // Get the value from the input field
  const newItem = itemInput.value;

  if (newItem.trim() !== '') {
    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = newItem;

    // Create a remove button for the list item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
      // Remove the corresponding list item when the remove button is clicked
      listItem.remove();
    });

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the new list item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    itemInput.value = '';
  }
}

// Add event listener to the button
addItemButton.addEventListener('click', addItemToList);
