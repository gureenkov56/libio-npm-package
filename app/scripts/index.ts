import { Libio } from "./libio.js";

const libioEl = document.querySelector('.libios');


const libio = new Libio(libioEl, {
    showErrorsInConsole: true,
});
libio.create();
