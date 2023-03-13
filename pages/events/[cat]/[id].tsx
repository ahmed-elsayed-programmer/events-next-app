import SingleEvent from '@/src/components/events/single-event';
import Image from 'next/image';

const Page = ({ data }: any) => <SingleEvent data={data} />

export default Page;

export async function getStaticProps(context: any) {
  console.log(context);
  const { allEvents } = await import('/data/data.json')
  const id = context.params.id;
  const data = allEvents.find((ev: any) => ev.id === id)

  return {
    props: { data: data }
  }

}

export async function getStaticPaths() {
  const data = await import('/data/data.json')
  const { allEvents } = data;
  const allPaths = allEvents.map((path: any) => {
    return {
      params: {
        cat: path.city,
        id: path.id
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}