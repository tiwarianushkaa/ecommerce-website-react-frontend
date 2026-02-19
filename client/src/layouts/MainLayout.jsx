import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-[#f8f7f5]
      via-white
      to-[#ececec]
      dark:from-[#020617]
      dark:via-[#0f172a]
      dark:to-black
      text-gray-900 dark:text-gray-100
    ">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <Outlet />
      </main>

    </div>
  );
}