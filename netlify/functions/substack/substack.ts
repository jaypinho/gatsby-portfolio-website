import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  
  let data = '';
  await fetch('https://networked.substack.com/api/v1/archive?sort=new&search=&offset=0&limit=3')
      .then((res) => res.text())
      .then((text) => data = text);

  return {
      statusCode: 200,
      body: data
  };

}
