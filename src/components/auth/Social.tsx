"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function Social() {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <>
      <div className="flex items-center w-full gap-2">
        <Button
          onClick={() => onClick("google")}
          size="lg"
          className="w-full"
          variant="outline"
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center w-full gap-2">
        <Button
          onClick={() => onClick("github")}
          size="lg"
          className="w-full"
          variant="outline"
        >
          <GitHubLogoIcon className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
}

export default Social;
