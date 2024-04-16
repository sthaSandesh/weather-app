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

export default function Weather() {
  const [city, setCity] = useState<string>("");
  console.log(city);

  async function getWeather() {
    console.log("get weather");
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
