import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getAllEvents } from "@/lib/actions/event.actions";
import Link from "next/link";

export default async function Home({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const searchText = searchParams?.query || "";
  const category = searchParams?.category || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-animated-gradient bg-contain py-5 md:py-10 flex items-center justify-center min-h-screen">
        <div className="flex flex-col justify-center items-center gap-8 text-center">
          <h1 className="h1-bold">Host, Connect, Celebrate:</h1>
          <h1 className="h2-bold">Your Events, Our Platform!</h1>
          
        <Button size="lg" asChild className="button w-full sm:w-fit">
          <Link href="#events">Explore Now</Link>
        </Button>
        </div>
      </section>


      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Scroll through multiple events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
