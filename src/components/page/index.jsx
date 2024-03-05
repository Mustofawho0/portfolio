import gambar from "./../page/poto.png";
import "./landing.css";
export default function LandingPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-600 to-black flex">
        <div>
          <span>
            <img className="ml-20 h-[600px]" src={gambar} alt="gambar" />
          </span>
        </div>
        <div className="h-[500px] ml-40 pt-20">
          <p className="text-3xl font-sans pt-5 ml-10 text-white tracking-wide">
            I'm a Web Development
          </p>
          <p className="text-7xl font-sans pt-5 ml-10 text-white tracking-wide">
            Nurul Musthofa
          </p>
          <hr className="pt-5 ml-10 text-white w-[530px] mt-5" />
          <div className="ml-10">
            <span className="text-2xl font-sans text-white tracking-wide">
              <p>Date of Birth : 25 Juni 1999</p>
              <p>Address : Ciledug, Tangerang</p>
              <p>
                Email : <u>mustofawho12@gmail.com</u>
              </p>
              <p>
                Phone Number : <u>+62 89632308534</u>
              </p>
              <div className="pt-10 ml-5">
                <button className="text-2xl flex justify-center items-center h-[50px] w-[300px] text-white rounded-lg transition ease-in-out delay-150 bg-gradient-to-r from-blue-600 to-red-300 hover:-translate-y-1 hover:scale-110 duration-500">
                  Download CV
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-400 to-black h-[400vh]">
        <div className="text-white font-sans mx-80">
          <span>
            <h1 className="text-7xl pt-20 text-center">Experiences</h1>
            <p className="text-xl pt-10 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              optio esse sapiente, corporis debitis nesciunt, nisi ad vitae
              expedita iste recusandae eveniet labore quos sit repellendus!
              Delectus recusandae numquam vero.
            </p>
          </span>
          <hr className="w-[890px] mt-24 flex justify-between" />
          <div className="mt-10 pl-10">
            <span>September, 2016 – May, 2017</span>
            <span className="pl-28 text-2xl text-orange-400 font-bold">
              Junior Developer
            </span>
            <p className="pl-80 text-justify pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              totam tempore aliquam magni repellendus deleniti cumque odit animi
              odio nam modi, quisquam, doloribus, neque non architecto! Beatae
              repellendus asperiores debitis?
            </p>
            <p className="pl-80 text-justify pt-10 font-bold ">
              Jakarta, Indonesia
            </p>
          </div>
          <hr className="w-[890px] mt-24 flex justify-between" />
          <div className="mt-10 pl-10">
            <span>May, 2018 – Jun, 2019</span>
            <span className="pl-40 text-2xl text-orange-400 font-bold">
              Senior Developer
            </span>
            <p className="pl-80 text-justify pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              totam tempore aliquam magni repellendus deleniti cumque odit animi
              odio nam modi, quisquam, doloribus, neque non architecto! Beatae
              repellendus asperiores debitis?
            </p>
            <p className="pl-80 text-justify pt-10 font-bold ">
              Jakarta, Indonesia
            </p>
          </div>
          <hr className="w-[890px] mt-24 flex justify-between" />
          <div className="mt-10 pl-10">
            <span>Jun, 2019 – Current</span>
            <span className="pl-44 text-2xl ml-1 text-orange-400 font-bold">
              Senior Developer
            </span>
            <p className="pl-80 text-justify pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              totam tempore aliquam magni repellendus deleniti cumque odit animi
              odio nam modi, quisquam, doloribus, neque non architecto! Beatae
              repellendus asperiores debitis?
            </p>
            <p className="pl-80 text-justify pt-10 font-bold ">
              Jakarta, Indonesia
            </p>
          </div>
          <div className="pt-36 text-center text-3xl tracking-wide">
            <button className="font-sans text-2xl h-[50px] w-[300px] text-white rounded-lg transition ease-in-out delay-150 bg-gradient-to-r from-blue-600 to-red-300 hover:-translate-y-1 hover:scale-110 duration-500">
              CONTACT ME
            </button>
          </div>
          <div className="text-center pt-40">
            <h1 className="text-7xl tracking-wide font-sans">Portfolio</h1>
            <p className="pt-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              odit exercitationem excepturi? Perferendis natus sit quis
              doloribus, culpa adipisci id nisi magni impedit enim omnis
              suscipit, maxime repellat libero! Alias!
            </p>
            <div className="gap-4 flex bg-fixed pt-16 ">
              <div className="bg-white rounded-lg">
                <img
                  className="h-[300px] w-[350px]"
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/8c593f782d1654b09c0aa7b3/jhjh688.jpg"
                  alt=""
                />
                <p className="text-gray-600 text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
                  Website Design
                </p>
              </div>
              <div className="bg-white rounded-lg">
                <img
                  className="h-[300px] w-[350px]"
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/a24ad1604ec15337995a6352/g4.jpg"
                  alt=""
                />
                <p className="text-gray-600 text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
                  Mobile Application
                </p>
              </div>
              <div className="bg-white rounded-lg">
                <img
                  className="h-[300px] w-[350px]"
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/69a33e68ad385dc2a232048f/gfgggggggggg.jpg"
                  alt=""
                />
                <p className="text-gray-600 text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
                  Corporate Design
                </p>
              </div>
            </div>
            <div className="gap-4 flex bg-fixed pt-5">
              <div className="bg-white rounded-lg">
                <img
                  className="h-[300px] w-[350px]"
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/e2e39f17cead5a36875282db/fgfg.jpg"
                  alt=""
                />
                <p className="text-gray-600 text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
                  Mobile Application
                </p>
              </div>
              <div className="bg-white rounded-lg">
                <img
                  className="h-[300px] w-[350px]"
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/270c391596735803b0eb88f9/PSD_01.jpg"
                  alt=""
                />
                <p className="text-gray-600 text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
                  Responsive Design
                </p>
              </div>
              <div className="bg-white rounded-lg">
                <img
                  className="h-[300px] w-[350px]"
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/75434504afed529795968963/fff.jpg"
                  alt=""
                />
                <p className="text-gray-600 text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
                  Digital Product
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-400 to-black h-[290vh]">
        <div className="pt-32 text-white ml-80 pl-20">
          <div>
            <h1 className="text-4xl font-sans font-bold tracking-wide">
              About Me
            </h1>
          </div>
          <div className="pt-10">
            <p className="text-justify pr-96 mr-20 text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur impedit reiciendis qui esse ipsam asperiores ad
              distinctio rerum recusandae numquam voluptatem nisi minima, quam
              doloremque eius quo non temporibus nesciunt! <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              adipisci odio facere sunt necessitatibus, at minima incidunt,
              saepe, vitae atque porro esse autem quisquam sint fugiat velit
              dolorem vero perferendis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officiis unde accusamus doloribus laborum earum,
              dolorem assumenda animi quos perspiciatis aliquam. Libero impedit
              asperiores aspernatur id fugit ratione minus expedita quas?
            </p>
          </div>
        </div>
        <div className="text-center gap-52 flex justify-center text-white pt-10 font-bold font-sans text-xl">
          <div>
            <button className="text-white bg-orange-400 h-[150px] w-[150px] rounded-full text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
              97%
            </button>
            <p className="text-white text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
              HTML5 & CSS
            </p>
          </div>
          <div>
            <button className="text-white bg-orange-400 h-[150px] w-[150px] rounded-full text-4xl ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
              75%
            </button>
            <p className="text-white text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
              WEB DESIGN
            </p>
          </div>
        </div>
        <div className="text-center gap-52 flex justify-center text-white pt-10 font-bold font-sans text-xl">
          <div>
            <button className="text-white bg-orange-400 h-[150px] w-[150px] rounded-full text-4xl ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
              80%
            </button>
            <p className="text-white text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
              JAVASCRIPT
            </p>
          </div>
          <div>
            <button className="text-white bg-orange-400 h-[150px] w-[150px] rounded-full text-4xl ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
              55%
            </button>
            <p className="text-white text-2xl font-sans h-[70px] flex items-center justify-center font-bold">
              PHP
            </p>
          </div>
        </div>
        <div className="text-center pt-44">
          <div className="flex justify-center">
            <img
              className="text-white bg-gray-400 h-[200px] w-[200px] rounded-full text-4xl border-8"
              src={gambar}
              alt=""
            />
          </div>
          <p className="text-white text-5xl font-sans h-[70px] flex items-center justify-center font-bold pt-20">
            Build your website <br />
            in record time
          </p>
          <p className="text-white pt-20">
            Sample Lorem ipsum dolor sit amet consectetur adipisicing elit.
            tempora facere quasi impedit officiis! <br />
            Dolorum nam, non et dolor sed debitis esse voluptates. Blanditiis,
            distinctio?
          </p>
        </div>
        <div className="pt-10 pl-64 ml-40">
          <p className="text-white pb-5">Email </p>
          <input
            className="w-[700px] text-xl bg-transparent border-b-2 text-white"
            placeholder="Enter a valid email address"
          />
          <br />
          <button className="text-white h-[50px] w-[700px] mt-5 rounded-lg text-2xl font-sans hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-red-300 hover:scale-110 duration-500">
            Submit
          </button>
        </div>
      </div>
      <div className="bg-gray-600 h-[70px]">
        <footer className="text-white text-center text-xl pt-5">
          © 2024 Purwadhika Digital Technology School All Rights Reserved Owned
          by Nurul Musthofa
        </footer>
      </div>
    </>
  );
}
