import React from "react";
import { FaFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { TbCurrencyRupee, TbWorld } from "react-icons/tb";

export default function Footer() {
  return (
    <div>
    <div className="flex justify-between max-w-full items-center bg-gray-300  min-h-full ">
      <div id="support" className="p-3 gap-2 text-lg flex flex-col">
        <span className="font-bold">Support</span>
        <a href="">Help center</a>
        <a href="">AirCover</a>
        <a href="">Ati-discrimination</a>
        <a href="">Disability support</a>
        <a href="">Cancellation options</a>
      </div>

      <div id="hosting" className="p-3  gap-2 text-lg flex flex-col">
        <span className="font-bold">Hosting</span>

        <a href="">Home stay your home</a>
        <a href="">AirCover for hosts</a>
        <a href="">Hosting resources</a>
        <a href="">comunity forum</a>
        <a href="">Hosting responsibly</a>
        <a href="">Find a co-host</a>
      </div>

      <div id="home-stay"className="p-3 gap-2 text-lg flex flex-col">
        <span className="font-bold">Home stay</span>

        <a href="">Newsrooms </a>
        <a href="">New features</a>
        <a href="">Careers</a>
        <a href="">Investors</a>
        <a href="">homestay.org emergency stays</a>
        <a href="">Find a co-host</a>
      </div>
    </div>
    <div id="connect" className="p-3 gap-2 text-lg flex justify-between max-w-full items-center bg-gray-300">
          {/* <div id="privacy" className=" flex gap-2">
            <a href="">@ 2025 home stay,.Inc.</a>
            <a href="">Privacy.</a>
            <a href="">Terms.</a>
            <a href="">Sitemap. Company details</a>
          </div> */}

        <div id="social-acc" className=" flex gap-3 text-lg  items-center">
          <a href="" className="flex gap-2 items-center">
          <TbWorld />
          <span>English(IN)</span>
          </a>
         <a href="" className="flex gap-2 items-center text-xl">
          <TbCurrencyRupee />
          <span>INR</span>
          </a>
         <a href="" className="flex gap-2 items-center text-xl">
          <FaFacebook/>
          </a>
         <a href="" className="flex gap-2 items-center text-xl">
          <FaSquareTwitter />
          </a>
         <a href="" className="flex gap-2 items-center text-xl">
          <FaSquareInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
