let my_form = document.getElementById("my-form");
let expanse_list = document.getElementById("expenses-list");
my_form.addEventListener("submit", save_expanse);

function showExpanse(obj) {
  let li = document.createElement("li");

  // DELETE BUTTON
  let del_button = document.createElement("input");
  del_button.type = "button";
  del_button.value = "delete";
  del_button.className = "del-btn";
  del_button.appendChild(document.createTextNode("delete"));

  let user_details =
    obj.amount + " - " + obj.description + " - " + obj.category;
  li.appendChild(document.createTextNode(user_details));
  li.appendChild(del_button);

  expanse_list.appendChild(li);
  let id = obj.id;

  del_button.onclick = () => {
    console.log("del clicked");
    axios
      .post(`http://localhost:5000/del-expense/${id}`)
      .then(expanse_list.removeChild(li))
      .catch((err) => console.log(err));
  };
}

async function getAllExpanses() {
  try {
    let response = await axios.get("http://localhost:5000/expenses");
    response.data.forEach((entry) => showExpanse(entry));
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getAllExpanses();
});

function save_expanse(e) {
  e.preventDefault();
  const expanse = {};
  expanse.amount = document.getElementById("expense-amount").value;
  expanse.description = document.getElementById("desc").value;
  expanse.category = document.getElementById("category").value;

  axios
    .post("http://localhost:5000/add-expense", expanse)
    .then((response) => {
      expanse.id = response.data.id;
      showExpanse(expanse);
    })
    .catch((err) => console.log(err));
}

