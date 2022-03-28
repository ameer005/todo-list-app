"use strict";

const containerEntries = document.querySelector(".entries");

const btnAdd = document.querySelector(".btn--add");

let userInput = document.querySelector(".input-field");

// MAIN LOGIC

// adding to do entry
btnAdd.addEventListener("click", function () {
  const html = `
  <div class="content">
  <div class="list">${userInput.value}</div>
  <div class="del-edit">
    <button class="btn btn--delete">delete</button>
    <button class="btn btn--edit">edit</button>
  </div>
</div>
    `;
  containerEntries.insertAdjacentHTML("afterbegin", html);

  userInput.value = "";
});

// deleting and editing
containerEntries.addEventListener("click", function (e) {
  if (e.target.matches(".btn")) {
    // selecting all the important clsses
    const btn = e.target;
    const delEd = btn.parentNode;
    const content = delEd.parentNode;
    const entries = content.parentNode;
    // console.log(btn.textContent);

    // deleting entry
    if (btn.textContent === "delete") {
      entries.removeChild(content);
    }

    // editing entry
    else if (btn.textContent === "edit") {
      const textVal = delEd.previousElementSibling;

      // Creating input field
      const input = document.createElement("input");
      input.classList.add("text");
      input.type = "text";
      input.style.width = "80%";
      input.style.height = "3.2rem";
      input.style.fontSize = "1.6rem";
      input.style.textAlign = "left";

      // adding present value to the new input field so we can edit
      input.value = textVal.textContent;

      // inserting input field just before the existing entry and deleting exiting entry
      content.insertBefore(input, textVal);
      content.removeChild(textVal);

      // changing button text to save from edit
      btn.textContent = "save";
    }

    // saving edited entry
    else if (btn.textContent === "save") {
      const input = content.firstElementChild;
      const div = document.createElement("div");
      div.classList.add("list");
      div.textContent = input.value;

      content.insertBefore(div, input);
      content.removeChild(input);
      btn.textContent = "edit";
    }
  }
});
