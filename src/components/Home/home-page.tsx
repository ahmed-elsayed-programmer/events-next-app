import Image from "next/image";
import Link from "next/link";

export default function HomePage({ data }: any) {
  return (
    <div className="home_body">
      {data.map((ev: any) => (
        <Link key={ev.id} href={`/events/${ev.id}`} className="card">
          <div className="image">
            <Image width={600} height={400} src={ev.image} alt={ev.title} />
          </div>
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>)
      )}
    </div>)
}