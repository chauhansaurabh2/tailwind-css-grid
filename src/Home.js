import React from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
const Home = () => {
  return (
    <div
      class="min-h-screen bg-gray-200 grid grid-cols-12 gap-4"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <nav class="col-span-full border-black border-solid border-4">
        <ul class="flex">
          <li>Head Item1</li>
          <li>Head Item2</li>
          <li>Head Item3</li>
          <li>Head Item4</li>
        </ul>
      </nav>
      <aside class="col-span-2 border-black border-solid border-4">
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
        </ul>
      </aside>
      <main class="w-100  col-span-10 border-black border-solid border-4">
        <div class="grid grid-cols-12 gap4">
          <div class="col-span-4 mobile:col-span-full tablet:col-span-6 border-yellow-300 border-2">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="name" />
              <FormHelperText>Name</FormHelperText>
            </FormControl>
          </div>
          <div class="col-span-4 mobile:col-span-full tablet:col-span-6  border-red-700 border-2">
            <FormControl id="address" class="col-span-4">
              <FormLabel>Email address</FormLabel>
              <Input type="address" />
              <FormHelperText>Address</FormHelperText>
            </FormControl>
          </div>
          <div class="col-span-4 mobile:col-span-full tablet:col-span-6 border-green-100 border-2">
            <FormControl id="email" class="col-span-4">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
