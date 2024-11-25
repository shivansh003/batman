import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="outer-box bg-gray-800 text-white">
        <div className="container h-screen bg-black align-middle flex justify-center items-center flex-col">
          <h1 className="font-semibold text-7xl text-center p-8 leading-tight">
            Transforming <span className="text-[#C9A03A]">Hospitality</span>{" "}
            <br></br> With <span className="text-[#C9A03A]">Cutting-Edge</span>{" "}
            Tech Solutions
          </h1>
          <p className="pb-8">
            Empower Your Business With Suite Elite's Innovative IT Solutions
            Designed for Hotels and Restaurants
          </p>
          <button className="bg-white text-black rounded-sm pl-8 pt-2 pr-8 pb-2">
            Give it a try
          </button>
          
        </div>
        <div className="flex h-screen bg-gray-800 px-10 py-10">
          <Image
            src="/m.jpg"
            alt="this s photo"
            width={400}
            height={400}
            className="object-cover basis-1/2 rounded-sm mx-10 my-10"
          />
          <div className="px-4 py-4 mx-4 my-4 basis-1/2 ">
            <h1 className="text-6xl pt-4">
              <span className="text-[#C9A03A]">About</span> Suite Elite
            </h1>
            <p className="text-left pt-5">
              Brief Overview of Suite Elite,focusing on your mission to
              streamline operations and enhance customers experience in the
              Hospitality sector through technology.
            </p>
          </div>
        </div>
    
            <h1 className="text-6xl font-semibold text-center">Our Solutions</h1>
            <div className="flex h-screen px-10 py-10 ">
                <div className="basis-1/2 bg-black px-10 py-10  my-5 rounded-md">
                <Image 
                src={"/m.jpg"}
                alt="ygyghfg"
                width={400}
                height={400}
                />
                <h1 className="pt-5 text-xl font-semibold"><span className="text-[#C9A03A]">Cusine Elite</span></h1>
                <p className="pt-5">Brief Overview of Suite Elite,focusing on your mission to
              streamline operations and enhance customers experience in the
              Hospitality sector through technology.</p></div>
                <div className="basis-1/2 bg-black px-10 py-10 mx-5 my-5 rounded-md">
                <Image 
                src={"/m.jpg"}
                alt="ygyghfg"
                width={500}
                height={500}
                />
                <h1 className="pt-5 text-xl font-semibold"><span className="text-[#C9A03A]">Cusine Elite</span></h1>
                <p className="pt-5">Brief Overview of Suite Elite,focusing on your mission to
              streamline operations and enhance customers experience in the
              Hospitality sector through technology.</p></div></div>
            </div>

            <div className="bg-gray-900  pt-5 px-10">
        
        <h1 className="text-6xl text-white font-semibold text-center pt-5 pb-5">
          Customers Testimonials
        </h1>
        <div className="container flex text-white justify-center mt-4 px-10 mx-auto">
          <div className="bg-black basis-1/3 px-4 pt-4 py-4 mx-2 rounded-xl ml-5 mr-5">
            <div className="quote flex justify-center pt-5 pb-5 ">
              <Image
                src="/right.png"
                alt="Description of the image"
                width={50}
                height={50}
              />
            </div>

            <div className="star flex flex-row justify-center pt-5 pb-5">
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
            </div>
            <p className="pt-5 pb-5 text-center">
              Brief overview of Suite Elite, focusing on your mission to
              streamline operations and enhance customers experience in the
              hospitality sector through technology.{" "}
            </p>
            <p className="text-center text-orange-400 pb-10">
              ~Shivanshu bahuguna
            </p>
            <div className="relative">
              <Image
                src="/reading.png"
                alt="Description of the image"
                width={100}
                height={100}
                className="absolute -top-5 left-40 border-solid bg-white rounded-full"
              />
            </div>
          </div>
          <div className="bg-black basis-1/3 px-4 pt-4 py-4 rounded-xl mx-2 ml-5 mr-5">
            <div className="quote flex justify-center pt-5 pb-5">
              <Image
                src="/right.png"
                alt="Description of the image"
                width={50}
                height={50}
              />
            </div>

            <div className="star flex flex-row justify-center pt-5 pb-5">
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
            </div>
            <p className="pt-5 pb-5 text-center">
              Brief overview of Suite Elite, focusing on your mission to
              streamline operations and enhance customers experience in the
              hospitality sector through technology.{" "}
            </p>
            <p className="text-center text-orange-400 pb-10">~Shivanshu bahuguna</p>
            <div className="relative">
            <Image
                src="/reading.png"
                alt="Description of the image"
                width={100}
                height={100}
                className="absolute -top-5 left-40 border-solid bg-white rounded-full"
              />
              </div>
          </div>

          <div className="bg-black basis-1/3 px-4 pt-4 py-4 rounded-xl mx-2 ml-5 mr-5">
            <div className="quote flex justify-center pt-5 pb-5">
              <Image
                src="/right.png"
                alt="Description of the image"
                width={50}
                height={50}
              />
            </div>

            <div className="star flex flex-row justify-center pt-5 pb-5">
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
              <Image
                src="/star.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
            </div>
            <p className="pt-5 pb-5 text-center">
              Brief overview of Suite Elite, focusing on your mission to
              streamline operations and enhance customers experience in the
              hospitality sector through technology.
            </p>
            <p className="text-center text-orange-400 pb-10">
              ~Shivanshu bahuguna
            </p>
            <div className="relative">
            <Image
                src="/reading.png"
                alt="Description of the image"
                width={100}
                height={100}
                className="absolute -top-5 left-40 border-solid bg-white rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-32 flex-col align-middle">
          <h1 className="text-6xl font-semibold text-white">FAQs</h1>
          <div className="bg-black text-white pb-5 mb-5 pl-5 pr-5 w-3/5 rounded-xl"><h1>What is Embargo?</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p></div>
          <div className="bg-black text-white pb-5 mb-5 pl-5 pr-5"><h1>What is Embargo?</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p></div>
          <div className="bg-black text-white pb-5 mb-5 pl-5 pr-5"><h1>What is Embargo?</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p></div>
          <div className="bg-black text-white pl-5 pr-5"><h1>What is Embargo?</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p></div>
        </div>
      </div>

    </>
  );
}
