import NavBar from "../components/NavBar";

import img1 from "../assets/img/coloreful-shirts.jpg";
import img2 from "../assets/img/clothing-store1.jpg";
import img4 from "../assets/img/clothing-store3.jpg";
import img5 from "../assets/img/clothing-store4.jpg";
import img6 from "../assets/img/coloreful-tshirts2.jpg";
import logo from "../assets/img/logo.png";

function Home() {
  return (
    <>
      <NavBar />
      <div className="sec1 flex items-center justify-between px-15 bg-[url('./assets/img/coloreful-shirts.jpg')] bg-cover bg-center h-[90vh] w-full">
        <div className="sec1.1 flex flex-col gap-8">
          <img src={logo} className="w-[45vw]"></img>
          <a
            href="#"
            className="flex p-3 rounded-md text-3xl font-bold gap-2 items-center text-white bg-red-600 max-w-max"
          >
            Find our store <i className="fas fa-location-dot"></i>
          </a>
        </div>
        <div className="sec1.2 break-words text-white">
          <div class="relative flex items-center justify-center">
            <div class=" bg-black absolute inset-0 opacity-50 blur-md"></div>
            <p class="relative text-white text-2xl max-w-[40ch] break-words text-right">
              Fashion isn’t just about clothes—it’s about how you feel. At Omuk
              Brand, we create pieces that bring comfort, style, and
              self-expression together. No overcomplications, just good design
              that fits you.
            </p>
          </div>
        </div>
      </div>
      <div className="sec2 flex justify-between mt-20 mx-15">
        <div className="w-[50vw] h-[32vw] bg-center bg-cover shadow bg-[url('./assets/img/coloreful-tshirts2.jpg')]"></div>
        <div>
          <h1 className="text-4xl font-bold underline">
            Crafted for Comfort & Style
          </h1>
          <p className="text-2xl leading-relaxed max-w-[35ch] break-words pt-15">
            Our clothes are designed with the perfect balance of <b>comfort</b>{" "}
            and fashion. From breathable everyday essentials to bold statement
            pieces, every item is made with care to ensure you <b>look good</b>{" "}
            and feel even better.
          </p>
        </div>
      </div>
      <div className="sec3 flex justify-between mt-20 mx-15">
        <div>
          <h1 className="text-4xl font-bold underline">
            Timeless Quality, Built to Last
          </h1>
          <p className="text-2xl leading-relaxed max-w-[35ch] break-words pt-15">
            We believe great fashion isn’t disposable. That’s why we use{" "}
            <b>premium fabrics</b> and expert craftsmanship to create pieces
            that stand the test of time. Whether you’re dressing up or keeping
            it casual, you’ll find something that fits your lifestyle.
          </p>
        </div>
        <div className="w-[50vw] h-[32vw] shadow bg-center bg-cover  bg-[url('./assets/img/clothing-store2.jpg')]"></div>
      </div>
      <div className="sec3 flex justify-between mt-20 mx-15">
        <div className="w-[50vw] h-[32vw] bg-center bg-cover shadow bg-[url('./assets/img/clothing-store1.jpg')]"></div>
        <div>
          <h1 className="text-4xl font-bold underline max-w-[20ch]">
            Visit Our Store & Explore More
          </h1>
          <p className="text-2xl leading-relaxed max-w-[35ch] break-words pt-15">
            Nothing beats seeing and <b>feeling</b> your next favorite outfit in
            person. Our store is designed for a relaxed, <b>hassle-free</b>{" "}
            shopping experience, where you can try on styles, get personalized
            recommendations, and <b>enjoy</b> the true essence of fashion.
          </p>
        </div>
      </div>
      <div className="sec4 flex flex-col items-center p-15 mt-20 bg-center h-[90vh] w-full bg-cover bg-[url('./assets/img/clothing-store4-b.png')]">
        <img src={logo} className="w-[45vw] "></img>
        <p className="relative text-white text-2xl font-bold text-center mt-20">
          Visit our store today
        </p>
        <button className=" relative flex mt-5 p-3 rounded-md text-3xl font-bold gap-2 items-center text-white bg-red-600">
          Find our store<i className="fas fa-location-dot"></i>
        </button>
      </div>
      <div className="end-sec flex justify-between text-white p-15 mt-20 bg-black">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl underline">Visit Our Store & Explore More</h1>
          <p className="text-2xl max-w-[40ch]">
            We’re ready to help you discover your next favorite outfit. Drop by,
            browse our collection, and experience the quality for yourself.
          </p>
          <p className="text-2xl">
            📞 Contact Us: [Phone Number]<br></br>
            📅 Store Hours: [Opening Hours]
          </p>
        </div>
        <div className="social gap-10 flex flex-col">
          <h1 className="text-3xl underline">Connect with us on Socials</h1>
          <div className="gap-5 flex flex-col ">
            <a className=" text-2xl object-center " href="#">
              <i className="fab fa-facebook">Facebook</i>
            </a>
            <a className=" text-2xl object-center " href="#">
              <i className="fab fa-instagram">Instagram</i>
            </a>
            <a className=" text-2xl object-center " href="#">
              <i className="fab fa-whatsapp">whatsapp</i>
            </a>
            <a className=" text-2xl object-center " href="https://youtube.com">
              <i className="fab fa-youtube">youtube</i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
