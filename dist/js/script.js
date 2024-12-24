document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const todoListContainer = document.createElement("div");
  const formSection = document.querySelector("form .w-full");
  const alertSuccess = document.getElementById("alert-success");

  // Tambahkan container untuk daftar todo
  formSection.appendChild(todoListContainer);

  // Fungsi untuk menampilkan alert
  const showAlert = (message) => {
    alertSuccess.querySelector("span").textContent = message;
    alertSuccess.classList.remove("hidden");
    setTimeout(() => {
      alertSuccess.classList.add("hidden");
    }, 2000);
  };

  // Fungsi untuk menyimpan data ke localStorage
  const saveToLocalStorage = () => {
    const tasks = Array.from(todoListContainer.children).map((taskItem) => ({
      text: taskItem.querySelector("span").textContent,
      isChecked:
        taskItem.querySelector("span").style.textDecoration === "line-through",
    }));
    localStorage.setItem("todoList", JSON.stringify(tasks));
  };

  // Fungsi untuk memuat data dari localStorage
  const loadFromLocalStorage = () => {
    const savedTasks = JSON.parse(localStorage.getItem("todoList")) || [];
    savedTasks.forEach(({ text, isChecked }) => createTask(text, isChecked));
  };

  // Fungsi untuk membuat task baru
  const createTask = (taskText, isChecked = false) => {
    // Membuat elemen task
    const taskItem = document.createElement("div");
    taskItem.className =
      "relative w-full mb-2 bg-slate-200 text-dark p-3 rounded-md flex justify-between items-center";

    // Konten task
    const taskContent = document.createElement("span");
    taskContent.className = "flex-1";
    taskContent.textContent = taskText;

    // Jika isChecked true, beri garis pada teks
    if (isChecked) {
      taskContent.style.textDecoration = "line-through";
    }

    // Tombol Edit
    const editButton = document.createElement("img");
    editButton.src = "dist/img/pencil.png";
    editButton.width = 20;
    editButton.alt = "Edit";
    editButton.className =
      "absolute right-10 top-1/2 transform -translate-y-1/2";
    editButton.addEventListener("click", () => editTask(taskContent));

    // Tombol Delete
    const deleteButton = document.createElement("img");
    deleteButton.src = "dist/img/trash-close.png";
    deleteButton.width = 20;
    deleteButton.alt = "Delete";
    deleteButton.className =
      "absolute right-2 top-1/2 transform -translate-y-1/2 trash-icon";

    // Hover event untuk ikon Delete
    deleteButton.addEventListener("mouseover", () => {
      deleteButton.src = "dist/img/trash-open.png";
    });
    deleteButton.addEventListener("mouseout", () => {
      deleteButton.src = "dist/img/trash-close.png";
    });

    deleteButton.addEventListener("click", () => deleteTask(taskItem));

    // Menambahkan elemen ke dalam taskItem
    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    todoListContainer.appendChild(taskItem);
    // Simpan ke localStorage
    saveToLocalStorage();
  };

  // Fungsi untuk menambahkan task baru
  const addTask = () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
    createTask(taskText);
    todoInput.value = ""; 
    showAlert("Todo List Added Successfully!"); 
  };

  // Fungsi untuk mengedit task
  const editTask = (taskContent) => {
    if (taskContent.style.textDecoration === "line-through") {
      taskContent.style.textDecoration = "";
    } else {
      taskContent.style.textDecoration = "line-through";
    }
    saveToLocalStorage();
  };

  // Fungsi untuk menghapus task
  const deleteTask = (taskItem) => {
    todoListContainer.removeChild(taskItem);
    saveToLocalStorage();
  };

  // Event listener untuk menambahkan task ketika menekan enter
  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  });

  // Event listener untuk menambahkan task melalui klik ikon
  document
    .querySelector('img[alt="add-todo"]')
    .addEventListener("click", addTask);

  loadFromLocalStorage();
});
