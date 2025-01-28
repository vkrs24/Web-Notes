const create_note_btn = document.querySelector(".btn");
let input_text = document.querySelector(".input_text");
let del_img = document.querySelector(".img_trash");
let container = document.querySelector(".notes_container");

create_note_btn.addEventListener("click", () => {
  console.log("clicked");
  // Create a new p element for the note text
  let new_note = document.createElement("p");
  new_note.setAttribute("contenteditable", "true");
  new_note.classList.add("input_text");

  // Create a new img element for the delete button
  let delete_button = document.createElement("img");
  delete_button.src = "image/—Pngtree—trash glyph black icon_4750291.png"; // Copy the src from the original image
  delete_button.classList.add("delete-img"); // Add any class you want for styling

  // Append the note and delete button to the container
  container.appendChild(new_note).appendChild(delete_button);

  // Optionally, add event listener to delete the note when the delete button is clicked
  delete_button.addEventListener("click", () => {
    container.removeChild(new_note);
    container.removeChild(delete_button);
  });
});
