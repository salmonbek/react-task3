import React from "react";
import Header from "../components/header";
import Main from "../components/main";
import Kompani from "../components/kompani";
import Sertifikat from "../components/sertifikat";
import Product from "../components/product";
import Information from "../components/information";
import Komanda from "../components/komanda";
import Navosti from "../components/navosti";
import Footer from "../components/footer";
import { Btn } from "../constants";

function AppLayout() {
  return (
    <>
      <Header />
      <Main />
      <Kompani />
      <Sertifikat />
      <Product />
      <Information />
      <Komanda />
      <Navosti />
      <Footer />
      <Btn />
    </>
  );
}

export default AppLayout;
