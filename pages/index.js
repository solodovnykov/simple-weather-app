import Head from "next/head";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SW App</title>
        <meta
          name="description"
          content="Simple weather application created with next.js"
        />
      </Head>
      <div className="home">
        <div className="container">
          <SearchBox placeholder="Search for a city..." />
        </div>
      </div>
    </div>
  );
}
