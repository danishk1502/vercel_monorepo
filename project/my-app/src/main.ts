// main.ts
import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

// Render HTML
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="testApiBtn" type="button">Test API</button>
    </div>
    <p class="read-the-docs">
      Hey it is Danish Here
    </p>
  </div>
`;

// Setup counter button
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

// Setup Test API button
const testApiBtn = document.querySelector<HTMLButtonElement>("#testApiBtn");
testApiBtn?.addEventListener("click", async () => {
  try {
    // Call your serverless test API
    const res = await fetch("/api/test"); // Replace with deployed URL if needed
    const data = await res.json();

    // Show result
    console.log("Test API Response:", data);
    alert("Test API Response: " + JSON.stringify(data));
  } catch (err) {
    console.error("Error calling Test API:", err);
    alert("Error calling API. Check console.");
  }
});
