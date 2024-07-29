"use client";

import CardWrapper from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ErrorCard from "../ErrorCard";
import { verification } from "@/actions/verification";
import ErrorHandler from "../ErrorHandler";
import SuccessHandler from "../SuccessHandler";

export const VerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }
    verification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch((error) => setError("Something went wrong"));
  }, [token, success, error]);

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);
  return (
    <CardWrapper
      headerLabel="Confirm your verification!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <SuccessHandler message={success} />

        {!success && <ErrorHandler message={error} />}
      </div>
    </CardWrapper>
  );
};
