import Header from '../components/Header'
import Trending from '../components/Trending'
import Latest from '../components/Latest'
import Popular from '../components/Popular'
import TopRated from '../components/TopRated'

export default function Home() {
  return (
    <div>
      <Header />
      <section className="container mx-auto px-4 xl:px-0">
        <Trending />
        <Latest />
        <Popular />
        <TopRated />
      </section>
    </div>
  );
}
