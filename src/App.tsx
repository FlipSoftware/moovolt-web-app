import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { History } from "./pages/History";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { NavHeader } from "./components/NavHeader";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div className="grid min-h-screen w-99.2vw md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="grid content-wrapper">
          <NavHeader />
          {/* <Dashboard /> */}
          {/* <Login /> */}
          <History />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
