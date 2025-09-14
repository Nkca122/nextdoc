import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
