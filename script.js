const alertText = document.querySelector(".alert");
const form = document.querySelector(".todo-input");
const todoInput = document.querySelector("#input");
const container = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");

const editBtn = document.querySelector(".check");
const userTheme = localStorage.getItem("theme");
const sunBtn = document.getElementById("sun");
const moonBtn = document.getElementById("moon");
const clearBtn = document.querySelector(".clearBtn");
const remaining = document.querySelector(".remaining");
const all = document.querySelector(".all");
const completed = document.querySelector(".completed");
const completedArray = [];
const activeArray = [];

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
const iconToggle = () => {
  moonBtn.classList.toggle("hidden");
  sunBtn.classList.toggle("hidden");
};

const themeCheck = () => {
  if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
    moonBtn.classList.add("hidden");
    return;
  }
  sunBtn.classList.add("hidden");
};
const themeswtich = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  iconToggle();
};
moonBtn.addEventListener("click", () => {
  themeswtich();
});
sunBtn.addEventListener("click", () => {
  themeswtich();
});
themeCheck();

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
if (localStorage.getItem("tasks")) {
  tasks.map((task) => {
    createTask(task);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value;
  if (inputValue == "") {
    return;
  }
  const task = {
    id: new Date().getTime(),
    name: inputValue,
    iscompleted: false,
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  createTask(task);
  form.reset();
  todoInput.focus();
});
list.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("deletBtn")
    // e.target.parentElement.classList.contains("deleteBtn") ||
    // e.target.parentElement.parentElement.classList.contains("deleteBtn")
  ) {
    const taskid = e.target.closest("li").id;
    removetask(taskid);
  }
});

function toggleDone(e, task) {
  if (!e.target.matches(".check")) return;
  const el = e.target;
  const index = el.item;
  console.log(index);
  tasks[index].task.iscompleted = !tasks[index].task.iscompleted;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  countTask();
}

list.addEventListener("click", toggleDone);
function createTask(task) {
  const item = document.createElement("li");
  item.setAttribute("id", task.id);
  if (task.iscompleted) {
    item.classList.add("complete");
  }
  item.innerHTML = `<article
            class="list-none bg-white dark:bg-very_Dark_Desaturated_Blue w-full rounded-t-lg font-[18px] h-[50px] mt-[5px] border-b-[1px] border-y-light_Grayish_Blue items-center text-dark_Grayish_Blue flex dark:border-y-dark_Grayish_Blue"
          >
            <span
             
              name=${task.iscompleted ? "checked" : ""}
              id=${task.id}
              class=" check  border-2 w-6 h-6 rounded-full mx-5  text-center dark:border-dark_Grayish_Blue justify-center dark:text-dark_Grayish_Blue onclick ="print()"
            >
             
            </span>
            <div class="text-dark_Grayish_Blue todo-item">
              <p class="title ${!task.iscompleted ? "contenteditable" : ""}">${
    task.name
  }</p>
            </div>
            <button class="
             text-dark_Grayish_Blue ml-auto mr-[20px] w-[18px] item-center text-center justify-center">
            <i class=" deletBtn fa fa-thin fa-xmark"></i>
            </button>
          </article>`;

  list.appendChild(item);

  container.classList.remove("hidden");
  countTask();
}
function countTask() {
  all.textContent = tasks.length;
  const completeTaskArray = tasks.filter((task) => {
    task.iscompleted === true;
  });

  completed.textContent = completeTaskArray.length;
  remaining.textContent = tasks.length - completeTaskArray.length;
}
function removetask(taskid) {
  tasks = tasks.filter((task) => task.id !== parseInt(taskid));

  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById(taskid).remove();
  countTask();
}

function print() {
  console.log("me");
  Array.from(document.getElementsByClassName("check")).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetElement = e.target;

      if (targetElement.matches(".check") || btn.style.background === "none") {
        btn.setAttribute(
          "style",
          "background: linear-gradient(to bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%));",
          "color: hsl(234 39% 85% / var(--tw-text-opacity));"
        );
        btn.innerHTML = ` <small><i class=" text-white fa fa-check" aria-hidden="true"></i></small>`;
        btn.nextSibling.nextSibling.setAttribute(
          "style",
          "text-decoration: line-through; color gray"
        );
        tasks.iscompleted === true;
        completedArray.push(btn.nextSibling.nextSibling.textContent);
        console.log(completedArray);
      } else {
        btn.setAttribute("style", "background: none");
        btn.nextSibling.nextSibling.setAttribute(
          "style",
          "text-decoration: none; color: hsl(235 19% 35% / var(--tw-text-opacity));"
        );
        btn.innerHTML = "";
        tasks.iscompleted === false;
        completedArray.pop(btn.nextSibling.nextSibling.textContent);
        // activeArray.push(btn.nextSibling.nextSibling.textContent);
        console.log(activeArray);
      }
    });
  });
}
print();
