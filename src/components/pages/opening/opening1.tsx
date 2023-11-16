import React from "react";
import { MdSchedule } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Opening1() {
  return (
    <main className="bg-[url('https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ')] h-screen bg-cover bg-no-repeat relative">
      <div className="bg-black/30 h-screen absolute inset-0 flex justify-end">
        <section className="w-full text-center container">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam officia
          modi id facere nam asperiores exercitationem delectus eligendi nostrum
          pariatur animi fugiat molestias quaerat ea veniam, accusantium,
          dolorum aliquid. Repudiandae.
        </section>
        <section className="text-white h-screen w-3/12 bg-black/50 backdrop-blur-sm flex flex-col justify-between  flex-shrink-0">
          <div className="divide-y">
            <div className="text-center p-5 text-xl uppercase bg-sky-500 ">
              Invitation
            </div>

            <div className="flex items-center justify-center flex-col p-8 gap-1">
              <i className="text-8xl text-yellow-400">
                <MdSchedule />
              </i>
              <p className="text-xl font-semibold text-center">
                12 Oktober 2023 <br /> 10:00 - 12:00
              </p>
            </div>
            <div className="flex items-center justify-center flex-col p-8 gap-1">
              <i className="text-8xl text-yellow-400">
                <FaMapMarkedAlt />
              </i>
              <p className="text-xl font-semibold text-center">
                Nama lokasi <br /> Kota
              </p>
            </div>
          </div>
          <button className="text-center p-5 text-xl uppercase bg-yellow-400">
            Hadir
          </button>
        </section>
      </div>
    </main>
  );
}
