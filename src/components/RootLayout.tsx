import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation.tsx";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
