import { createClient } from 'contentful';


export const client = createClient({
  space: process.env.SPACE,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.TOKEN
})

