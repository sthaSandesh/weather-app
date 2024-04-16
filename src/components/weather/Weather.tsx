"use client";
import { Hero } from "@/components/hero/Hero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import React from "react";

// const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const API_KEY = "e45ddd08d55ff54f4c145fe0060e5cab";

export default function Weather() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>({});

  console.log(city);

  async function getWeather() {
    console.log("get weather");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Hero image="/view.jpg">
      <section>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="items-start flex">Weather</CardTitle>
            <CardDescription>
              Enter the name of the city to get the weather
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5 items-start">
                  <Label htmlFor="name">City Name</Label>
                  <Input
                    id="ctname"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => getWeather()}>
              Get
            </Button>
          </CardFooter>
        </Card>
      </section>
    </Hero>
  );
}
