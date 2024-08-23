import logo from "../assets/react.svg";

const Navbar = () => {
 return (
  <nav className="mb-20 flex items-center justify-between py-6">
   <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-10" src={logo} alt="logo"></img>
   </div>
   <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <ul className="flex justify-between">
     <li>About Me </li>
     <li>Portfolio</li>
     <li>Contact</li>
     <li>Resume</li>
    </ul>
   </div>
  </nav>
 );
};

export default Navbar;
