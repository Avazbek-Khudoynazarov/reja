console.log("frontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `<li
  style="background: orange"
        class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text"> ${item.reja}</span>
        <div>
        <button 
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1">
        Edit
        </button>
        <button 
        data-id="${item._id}" 
        class="delete-me btn btn-danger btn-sm">
        Delete
        </button>
        </div>
        </li>
    `;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("please, try again");
    });
});

document.addEventListener("click", function (e) {
  // delete oper
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("are you sure do you wanna delete?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("please try again!");
        });
    }
  }
  // edit oper
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "0'zgartirishingizni kiriting!",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("iltimos qaytadan harakat qling!");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((respose) => {
    alert(respose.data.state);
    document.location.reload();
  });
});
