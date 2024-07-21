"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

function Social() {
  return (
    <div className="flex items-center w-full gap-2">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
}

export default Social;
