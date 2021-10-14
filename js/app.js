document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleFormSave = function(event){
    console.log("save clicked");
    event.preventDefault();
    const newListItem = document.createElement('li');
    newListItem.textContent = "details will go here"
    const list = document.querySelector('#reading-list');
    list.appendChild(newListItem);
  }


  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSave);
})
