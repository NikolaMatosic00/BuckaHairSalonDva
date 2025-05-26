// src/app/api/reviews/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = 'ChIJTzph2xgQW0cRtdyHXj8V9NQ'; // Zameni sa stvarnim Place ID
  const apiKey = process.env.GOOGLE_API_KEY; // Čuva se u .env.local
//AIzaSyAjMVjHj85z1NeQi2jqrW2JlprT61b7U9A
  try {
      console.log("==============================================================");
      console.log("==============================================================");
      console.log("==============================================================");
      console.log("==============================================================");
      
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );
    const data = await response.json();

       console.log("==============================================================");
      console.log("==============================================================");
      console.log("==============================================================");
        console.log(data)
         console.log("==============================================================");
      console.log("==============================================================");
      console.log("==============================================================");


    if (data.result && data.result.reviews) {
      const reviews = data.result.reviews.map((review) => ({
        id: review.time,
        text: review.text,
        author: review.author_name,
        rating: review.rating,
      }));
      return NextResponse.json(reviews);
    }
    return NextResponse.json([]);
  } catch (error) {
    console.error('Greška pri povlačenju recenzija:', error);
    return NextResponse.json([], { status: 500 });
  }
}