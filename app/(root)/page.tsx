import SearchForm from "../components/SearchForm";

export default async function Home({searchParams}:
   {searchParams: Promise<{query?: string}>
  }) {
    const query = (await searchParams).query;
  return(
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup <br/>Connect With Enterpreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit your startup to the YC-Registry and get access to a community of enterpreneurs and investors.
        </p>
      <SearchForm query={query}/>
      </section>
    </>
  )
}

