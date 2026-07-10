import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/pages.css";
import "./styles/forms.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/ministries.css";
import "./styles/booking.css";
import "./styles/sermons.css";
import "./styles/sermon-detail.css";
import "./styles/media.css";
import "./styles/outreach.css";
import "./styles/contact.css";
import "./styles/success.css";
import "./styles/not-found.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);