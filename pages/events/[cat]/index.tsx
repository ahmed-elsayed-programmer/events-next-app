import CatEvent from '@/src/components/events/catEvent';
import Image from 'next/image';
import Link from 'next/link';

const EventsCatPage = ({ data, PageName }: any) => <CatEvent data={data} PageName={PageName} />

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import('@/data/data.json');
  const allPaths = events_categories.map((ev: any) => {
    return {
      params: {
        cat: ev.id
      }
    }
  })


  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const id = context?.params.cat
  const { allEvents } = await import('@/data/data.json');
  const data = allEvents.filter((ev: any) => ev.city == id)

  return { props: { data, PageName: id } };
}