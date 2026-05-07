const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem('@token')
const userStorage = JSON.parse(localStorage.getItem('@user'));
const user = userStorage ? userStorage : null;

const navArea =  document.getElementById('nav-area')!;
const postContainer =  document.getElementById('post-container')!;

const setupHeader = () =>{
  if (token && user) {
    navArea.innerHTML =/*html*/` <span class="mr-4 text-gray-600">Olá<strong>${user.name}</strong></span>
    <button id="btn-logout" class= "text-red-500 hover:text-red-600 hover:underline font-bold">Sair</button>`;

  } else {
    navArea.innerHTML =/*html*/` <a href="/login.html" class="bg-blue900 hover: bg-blue800 text-white px4 py-2 rounded">Login</a>
    <p></p> <h1></h1>`;
  }
};
setupHeader();