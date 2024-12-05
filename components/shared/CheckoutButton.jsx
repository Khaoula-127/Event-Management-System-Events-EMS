"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Checkout from "./Checkout";
import { Button } from "../ui/button";

const CheckoutButton = ({ event }) => {
  const { data: session } = useSession();

  let userId = null;
  if (session && session.user) {
    userId = session.user.id || null;
  }

  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available.
        </p>
      ) : (
        <>
          {userId ? (
            <Checkout event={event} userId={userId} />
          ) : (
            <Button className="button rounded-full" size="lg">
              <Link href="/">Get Tickets</Link>
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
