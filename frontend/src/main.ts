import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import flaskLogo from "./flasklogo.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://flask.palletsprojects.com/en/stable/" target="_blank">
      <img src="${flaskLogo}" class="logo vanilla" alt="Flask logo" />
    </a>
    <h1>Vite + TypeScript + Flask</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="ping" type="button">Ping</button>
    </div>

    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const pingButton = document.querySelector<HTMLButtonElement>("#ping");
pingButton?.addEventListener("click", () => {
  fetch("/api/ping")
    .then((x) => x.text())
    .then((y) => {
      pingButton.innerHTML = y;
    });
});
