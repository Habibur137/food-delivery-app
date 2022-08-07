import { Nav } from "../components/exportComponent";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <main>{children}</main>
    </>
  );
};

export default Layout;
