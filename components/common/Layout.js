import Navbar from "../rare/navbar/Navbar"

const Layout = ({ children }) => {
    return (
      <div className="content">
        <Navbar />
        { children }
      </div>
    );
  }
   
  export default Layout;