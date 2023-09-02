import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    // your server-side functionality

    let data = '';
    await fetch('https://networked.substack.com/api/v1/archive?sort=new&search=&offset=0&limit=3')
        .then((res) => res.text())
        .then((text) => data = text);

    return {
        statusCode: 200,
        body: data
    };

};

export { handler };
