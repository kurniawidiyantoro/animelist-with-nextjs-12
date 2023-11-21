import Image from "next/image";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
      <Navbar dark>
        <div className=" container d-flex flex-column align-items-center">
          <NavbarBrand className="ms-0 mb-1 " href="/">
            <Image src="/logo.png" color="warning" width={400} height={100} />
          </NavbarBrand>
       
            <NavItem className="list-unstyled d-flex  ms-auto gap-3 mb-0 text-white">
              <NavLink href="/">
                <strong>Home</strong>
              </NavLink>
              <NavLink href="/popular">
                <strong>Popular</strong>
              </NavLink>
            </NavItem>
          
            <hr className="border border-3 border-warning w-100
             text-center" />
        </div>
      </Navbar>
  
  );
};

export default Navigation;
