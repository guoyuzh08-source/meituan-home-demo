import ReactDOM from "react-dom/client";
import React from 'react';
import App from "./App.jsx";
import { NoCodeProvider } from "./contexts/NoCodeContext.jsx";
import "./index.css";

// 750px 画框缩放适配
function scaleRoot() {
  const DESIGN_W = 750;
  const vw = window.innerWidth;
  const scale = vw < DESIGN_W ? vw / DESIGN_W : 1;
  const root = document.getElementById('root');
  if (root) {
    root.style.transform = `scale(${scale})`;
    root.style.marginBottom = scale < 1
      ? `${(scale - 1) * 1624}px`
      : '0';
  }
}
scaleRoot();
window.addEventListener('resize', scaleRoot);

// 创建根节点并渲染应用
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoCodeProvider>
      <App />
    </NoCodeProvider>
  </React.StrictMode>
);
