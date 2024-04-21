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

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Weather() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>({});

  async function getWeather() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
          "q=" +
          city +
          "&appid=" +
          API_KEY +
          "&units=metric"
      );
      const data = await response.json();
      if (data?.cod == "400") throw data;
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
          {Object.keys(weatherData).length !== 0 ? (
            <>
              <div className="font-bold text-xl text-muted-foreground flex flex-col items-center">
                {weatherData.name} Weather
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    weatherData.weather[0].icon +
                    ".png"
                  }
                  width="80px"
                  height="80px"
                  alt="weatherIcon"
                />
                <p>{weatherData.weather[0].main}</p>
              </div>
              <div className="flex px-8 py-4 gap-6 text-muted-foreground text-start">
                <div>
                  <h2>Current Temp :</h2>
                  <h2>Max Temp :</h2>
                  <h2>Min Temp :</h2>
                  <h2>Windspeed :</h2>
                </div>
                <div className="font-semibold">
                  <p> {weatherData.main.temp}&deg; c</p>
                  <p> {weatherData.main.temp_max}&deg; c</p>
                  <p> {weatherData.main.temp_min}&deg; c</p>
                  <p> {weatherData.wind.speed} km/hr</p>
                </div>
              </div>
            </>
          ) : null}
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
