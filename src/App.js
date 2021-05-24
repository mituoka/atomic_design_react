import "./styles.css";
import { Router } from "./router/Ruter";

export default function App() {
  const user = {
    name: "光岡",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "mitutumi02102@gmail.com",
    phone: "090-1422-6721",
    company: {
      name: "株式会社テスト"
    },
    website: "https//google.com"
  };
  return <Router />;
}
