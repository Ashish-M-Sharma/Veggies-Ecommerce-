import { useEffect, useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { Route } from "lucide-react";
import HomeSection from "./components/HomeSection";
import { IoMdClose } from "react-icons/io";
import WishList from "./components/WishList";
import Footer from "./components/Footer";
import Cartt from "./components/Cartt";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <>
      {/* Newsletter starts */}
      {show && (
        <div className=" fixed z-100 bg-zinc-600/75 w-full h-screen flex justify-center items-center ">
          <div className="relative border-1  bg-white border-zinc-200 flex p-4 m-auto rounded-md">
            <img
              src="https://maraviyainfotech.com/wrapbootstrap/masterkart-html/masterkart-html/assets/img/bg/newsletter.png"
              alt=""
              className="hidden md:block md:w-[250px] "
            />

            <span className=" absolute cursor-pointer text-red-600 flex justify-end w-full pr-10 ">
              <IoMdClose onClick={() => setShow(false)} />
            </span>
            <div className=" flex flex-col justify-center items-center gap-3 p-2">
              <p className="text-center text-lg">Newsletter.</p>
              <p className="text-md text-center leading-[28px]">
                Subscribe the shop to get <br /> in touch and get the future
                update
              </p>
              <input
                type="email"
                placeholder="Email"
                className="w-52 h-10 border-1 border-zinc-200 mx-7 p-2 rounded-lg focus:decoration-none"
              />
              <button className="w-32 bg-black text-white p-2 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Newsletter Ends */}

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<HomeSection />} />
          <Route path="/Cartt" element={<Cartt />} />

          <Route path="/WishList" element={<WishList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
