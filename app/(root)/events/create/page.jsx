"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import EventForm from "@/components/shared/EventForm";
import { useSession } from "next-auth/react";

const CreateEvent = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); // Adjust this path to your actual login page
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session?.user?.id) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <>
      <section className="bg-primary-50 bg-animated-gradient bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={session.user.id} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
