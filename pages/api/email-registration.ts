// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

function buildPath() {
  return path.join(process.cwd() , 'data' , 'data.json')
}

function extractData (filePath:string) {
  console.log('open file :' , filePath);
  
  const jsonData = fs.readFileSync(filePath)
  const data = JSON.parse(jsonData.toString())

  return data ;
}

type Data = {
  message: string ,
  status ? : number 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: 'Events data not found',
    });
  }

  if (method === 'POST') {
    const { email, eventId } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });
    }

    const newAllEvents = allEvents.map((ev:any) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({ message: 'This email has already been registered' });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: newAllEvents }));

    res.status(201).json({
      message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
    });
  }
}