import { auth, signOut } from "@/auth";
import React from "react";

async function SettingsPage() {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
}

export default SettingsPage;
