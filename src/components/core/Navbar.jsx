import logo from "./../page/logo.png";
export default function NavBar() {
  return (
    <>
      <div className="flex justify-center bg-gray-800 h-[70px] w-[100%] items-center">
        <span>
          <img className="h-[60px] w-[300px] items-center" src={logo} alt="" />
        </span>
      </div>
    </>
  );
}
