import React, { useState } from "react";
import db from "../../assets/db.json";

function Brand() {
  const brandCategory = [
    "Apple",
    "Samsung",
    "OPPO",
    "Huawei",
    "Microsoft Surface",
    "Infinix",
    "HP Pavilion",
    "Impression of Acqua Di Gio",
    "Royal_Mirage",
    "Fog Scent Xpressio",
    "Al Munakh",
    "Lord - Al-Rehab",
    "L'Oreal Paris",
    "Hemani Tea",
    "Dermive",
    "ROREC White Rice",
    "Fair & Clear",
    "Saaf & Khaas",
    "Bake Parlor Big",
    "Baking Food Items",
    "fauji",
    "Dry Rose",
    "Boho Decor",
    "Flying Wooden",
    "LED Lights",
    "luxury palace",
    "Golden",
    "Furniture Bed Set",
    "Ratttan Outdoor",
    "Kitchen Shelf",
    "Multi Purpose",
    "AmnaMart",
    "Professional Wear",
    "Soft Cotton",
    "Top Sweater",
    "RED MICKY MOUSE..",
    "Digital Printed",
    "Ghazi Fabric",
    "IELGY",
    "IELGY fashion",
    "Synthetic Leather",
    "Sandals Flip Flops",
    "Maasai Sandals",
    "Arrivals Genuine",
    "Vintage Apparel",
    "FREE FIRE",
    "The Warehouse",
    "Sneakers",
    "Rubber",
    "Naviforce",
    "SKMEI 9117",
    "Strap Skeleton",
    "Stainless",
    "Eastern Watches",
    "Luxury Digital",
    "Watch Pearls",
    "Bracelet",
    "LouisWill",
    "Copenhagen Luxe",
    "Steal Frame",
  ];
  return (
    <div className="brands__list-item">
      {brandCategory.map((value, i) => (
        <div key={i}>
          <input type="checkbox" />
          <label>{value}</label>
          <span>(0/1)</span>
        </div>
      ))}
    </div>
  );
}
export default Brand;
