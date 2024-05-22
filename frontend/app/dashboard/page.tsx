"use client";
import React from "react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Cozy and Warm Rooms at Heart of Munich",
    price: "10 Sol per night",
    rating: "4.5",
    ratingsCount: 400,
    imageUrl: "/assets/Munich.webp", // Add your image paths here
  },
  // Add more properties as needed
  {
    id: 2,
    title: "Modern Apartment in Berlin",
    price: "12 Sol per night",
    rating: "4.7",
    ratingsCount: 320,
    imageUrl: "/assets/Berlin.webp",
  },
  {
    id: 3,
    title: "Luxury Villa in Hamburg",
    price: "20 Sol per night",
    rating: "4.9",
    ratingsCount: 150,
    imageUrl: "/assets/Frankfurt.webp",
  },
  {
    id: 4,
    title: "Charming House in Frankfurt",
    price: "8 Sol per night",
    rating: "4.3",
    ratingsCount: 290,
    imageUrl: "/assets/Hamburg.webp",
  },
  {
    id: 5,
    title: "Cozy and Warm Rooms at Heart of Munich",
    price: "10 Sol per night",
    rating: "4.5",
    ratingsCount: 400,
    imageUrl: "/assets/Munich.webp",
  },
  {
    id: 6,
    title: "Modern Apartment in Berlin",
    price: "12 Sol per night",
    rating: "4.7",
    ratingsCount: 320,
    imageUrl: "/assets/Munich.webp",
  },
  {
    id: 7,
    title: "Luxury Villa in Hamburg",
    price: "20 Sol per night",
    rating: "4.9",
    ratingsCount: 150,
    imageUrl: "/assets/Munich.webp",
  },
  {
    id: 8,
    title: "Charming House in Frankfurt",
    price: "8 Sol per night",
    rating: "4.3",
    ratingsCount: 290,
    imageUrl: "/assets/Munich.webp",
  },
];

export default function Explore() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Explore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="border rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={property.imageUrl}
                alt={property.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.price}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{property.rating} ★</span>
                <span className="ml-2 text-gray-600">
                  ({property.ratingsCount} Ratings)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
