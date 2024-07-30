"use client";
import Link from "next/link";
import React, {Suspense} from "react";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
    <Suspense>
      <Link
        className={`m-4 hover:text-purple-400 font-semibold p-2 
        ${
          genre &&
          genre === param &&
          "underline underline-offset-8  decoration-purple-400 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
        </Suspense>
    </div>
  );
};

export default NavbarItem;
