import React from "react";
import { MainCarousel } from "../../components/MainCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { menShirts } from "../../data/men/men_shirt";
import { mensJeans } from './../../data/men/men_jeans';
import { womenDress } from './../../data/women/women_dress';
import { womenJeans } from './../../data/women/women_jeans';
import { mensShoes } from "../../data/men/men_shoes";

const Homepage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data = {menShirts} sectionName="Men's Shirts"/>
        <HomeSectionCarousel data = {mensShoes} sectionName="Men's Shoes"/>
        <HomeSectionCarousel data = {mensJeans} sectionName="Men's Jeans"/>
        <HomeSectionCarousel data = {womenDress} sectionName="Women's Dress"/>
        <HomeSectionCarousel data = {womenJeans} sectionName="Women's Jeans"/>
      </div>
    </div>
  );
};

export default Homepage;
