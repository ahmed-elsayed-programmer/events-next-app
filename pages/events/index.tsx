import EventsPage from '@/src/components/events/events-page';
import Image from 'next/image';
import Link from 'next/link';

const Page = ({ data }: any) => {
  return <EventsPage data={data} />
}

export default Page;


export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      data: events_categories
    }
  }
}
