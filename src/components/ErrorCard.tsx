import React from "react";
import CardWrapper from "./auth/CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login!"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
}

export default ErrorCard;
