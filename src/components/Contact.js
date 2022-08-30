import React from "react";
import contact from "../images/contact.jpg";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import email from "../images/email.png";

function Contact() {
  return (
    <div className="h-full mb-20">
      <div className="h-[26rem] relative overflow-hidden">
        <img alt="" className="w-full" src={contact} />
        <div className="absolute flex items-center justify-center inset-0">
          <div>
            <h1 className="text-5xl font-light tracking-wider leading-tight text-center">Join Our Team</h1>
            <div className="h-1 w-24 bg-black mt-4 mb-8 mx-auto"></div>
            <p className="w-96 text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et at fringilla id maecenas in scelerisque in. Pharetra, erat amet, vestibulum ullamcorper. Nunc feugiat lacus et eget urna ornare risus malesuada. Cursus morbi vel sed ipsum eget tincidunt ultrices.</p>
            <a href="" className="h-10 w-32 flex items-center justify-center mx-auto px-8 bg-gradient-to-r from-[#9FD685] to-[#F9DD03] mt-8">
              <h3 className="font-bold text-lg text-white uppercase">Apply</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 h-[30rem] mt-8 px-24">
        <div className="col-span-1">
          <h4 className="text-center font-semibold text-xl">Location</h4>
          <iframe className="mt-10" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.581184102276!2d108.11773281485698!3d-6.698678995156966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ed435e356f205%3A0x0!2zNsKwNDEnNTUuMiJTIDEwOMKwMDcnMTEuNyJF!5e0!3m2!1sen!2sid!4v1661795688850!5m2!1sen!2sid" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <h4 className="text-center font-semibold text-xl">Company</h4>
          <ul className="mt-8">
            <li>- Work</li>
            <li>- Service</li>
            <li>- Team</li>
            <li>- Contact</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-center font-semibold text-xl">Contact Us</h4>
          <div className="flex flex-col gap-4 pl-20 mt-8">
            <div className="flex gap-3">
              <img className="object-contain" src={facebook} />
              <a href="">Fikripik</a>
            </div>
            <div className="flex gap-3">
              <img className="object-contain" src={instagram} />
              <a href="">fikrifyanto</a>
            </div>
            <div className="flex gap-3">
              <img className="object-contain" src={email} />
              <a href="">fikrifyanto@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
