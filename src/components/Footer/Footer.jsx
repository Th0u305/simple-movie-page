import { useState } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { useContext } from "react";


const Footer2 = () => {
  const {myRef} = useContext(AuthContext)
  
  return (
    <div className=" bg-white  mt-12 lg:mt-28 shadow" ref={myRef}>
    <footer class="footer footer-center  rounded p-6">
  <nav class="grid grid-flow-col gap-4 text-base-content/90">
    <a href="/about" class="link link-hover text-xl">About</a>
    <a href="/contact" class="link link-hover text-xl">Contact</a>
    <a href="/ecoTips" class="link link-hover text-xl">Eco-Tips</a>
    <a href="#" class="link link-hover text-xl">Policy</a>
  </nav>
  <nav>
    <div class="flex gap-4">
      <a href="#" class="link link-animated" aria-label="Facebook Link">
        <span class="icon-[tabler--brand-facebook] size-6"></span>
      </a>
      <a href="#" class="link link-animated" aria-label="X Link">
        <span class="icon-[tabler--brand-x] size-6"></span>
      </a>
      <a href="#" class="link link-animated" aria-label="Linkedin Link">
        <span class="icon-[tabler--brand-linkedin] size-6"></span>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © 2024 - All right reserved by FlyonUI</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer2;
