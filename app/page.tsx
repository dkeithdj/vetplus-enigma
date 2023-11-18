import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-gray-50">
      <nav className="flex h-28 bg-white shadow justify-between relative items-center px-8" >
        <img className="w-64" src="/logo.png" />
        <div className="flex space-x-8">
          <div className=" text-neutral-700 text-xl font-medium ">Contact Us</div>
          <div className=" text-neutral-700 text-xl font-medium ">About Us</div>
          <div className=" text-neutral-700 text-xl font-medium ">Services</div>
        </div>
      </nav>
      <header className="flex flex-col md:flex-row mx-auto justify-center my-12 space-x-16 items-center h-[75vh]">
        <img className="w-96" src="/header.svg" />
        <div className=" h-64 flex flex-col items-center">
          <div className="w-96 h-28  text-center text-black text-4xl font-medium font-['Poppins']">Your Pet’s Health,<br />Our Priority!</div>
          <div className="w-80 h-20  text-center text-neutral-700 text-xs font-normal font-['Poppins']">Your pet's health is our priority at Vet Plus. Offering top-notch veterinary clinic for a happy, healthy life. Guaranteed wellness from day one.</div>
          <div className="flex flex-col items-center">
            <div className="w-80 h-14  bg-cyan-500 rounded-2xl shadow flex items-center justify-center" >
              <div className="text-zinc-100 text-lg font-semibold ">Set Appointment Now</div>
            </div>
          </div>
        </div>
      </header>
      <section className="flex flex-col mx-auto h-[75vh] items-center">
        <div className="flex flex-col items-center"><div className="w-40 text-center text-neutral-700 text-3xl font-medium font-['Poppins']">Services</div>
          <div className="w-52 h-px border border-sky-900"></div></div>

        <div className="flex flex-col md:flex-row space-x-12 items-center justify-center py-8">
          {/* clinics card */}
          <div className="flex flex-col justify-center border shadow w-[500px] items-center  p-4 rounded-xl">
            <div>
              <div className="w-20 h-9 text-neutral-700 text-xl font-medium font-['Poppins']">Clinics</div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="p-10">
                <img className="w-52" src="/pill.png" />
              </div>
              <div>

                <div className="w-60 h-20 text-neutral-700 text-sm font-normal font-['Inter']">Comprehensive Pet Care: Discover a Range of Services at Our Vet Clinic – Where Every Tail Deserves Top-notch Attention!</div>
              </div>
            </div>
            <div>
              <div className="w-36 h-11 bg-cyan-500 rounded-lg shadow flex items-center justify-center" >
                <div className="w-20 h-4  text-center text-white text-sm font-medium font-['Inter']">Book Now</div>
              </div>
            </div>
          </div>

          {/* doctors card */}
          <div className="flex flex-col justify-center border shadow w-[500px] items-center  p-4 rounded-xl">
            <div>
              <div className="w-20 h-9 text-neutral-700 text-xl font-medium font-['Poppins']">Doctors</div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="p-10">
                <img className="w-40" src="/doctor.png" />
              </div>
              <div>

                <div className="w-60 text-neutral-700 text-sm font-normal font-['Inter']">Expert Veterinary Care: Our Doctors Provide Tailored Services for Your Pet's Health and Happiness!</div>
              </div>
            </div>
            <div>
              <div className="w-36 h-11 bg-cyan-500 rounded-lg shadow flex items-center justify-center" >
                <div className="w-20 h-4  text-center text-white text-sm font-medium font-['Inter']">Chat Now</div>
              </div>
            </div>
          </div></div>
      </section>

      <section className="h-[50vh]">

        <div className="flex flex-col items-center"><div className="w-40 text-center text-neutral-700 text-3xl font-medium font-['Poppins']">About Us</div>
          <div className="w-52 h-px border border-sky-900"></div></div>
        <div className="px-8">
          <div className="py-12 text-center text-black text-2xl font-normal font-['Poppins']">Welcome to VETplus, a decentralized Veterinary Appintment System where cutting-edge technology meets compassionate care. Our commitment to the well-being of your furry companions is reflected in every aspect of our practice, including our state-of-the-art appointment system powered by Internet Computer (ICP).</div>
        </div>
      </section>

      <footer>
        <div className="flex bg-sky-900 justify-between px-8 py-4">
          <img className="w-64 h-64" src="/vplus.png" />
          <div className="w-80 h-40 relative">
            <div className="w-56 h-10 left-0 top-0 absolute text-white text-xl font-medium font-['Poppins']">Contact Us</div>
            <div className="w-40 h-7 left-[42px] top-[52px] absolute text-white text-xl font-medium font-['Poppins']">Emails: </div>
            <div className="w-72 h-7 left-[42px] top-[80px] absolute text-center text-white text-base font-normal font-['Poppins']">denreikeith@gmail.com</div>
            <div className="w-72 h-7 left-[63px] top-[104px] absolute text-center text-white text-base font-normal font-['Poppins']">karlthegamer24@gmail.com</div>
            <div className="w-72 h-7 left-[58px] top-[128px] absolute text-center text-white text-base font-normal font-['Poppins']">nate.masato17@gmail.com</div>
          </div>
          <div className="w-14 h-36 flex-col justify-center items-center gap-3.5 inline-flex">
            {/* <div className="w-9 h-9 relative flex-col justify-start items-start flex" />
            <img className="w-12 h-9" src="https://via.placeholder.com/47x37" />
            <img className="w-14 h-9" src="https://via.placeholder.com/56x36" /> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
