// src/pages/all-content.json.js
 
import { getCollection } from 'astro:content';
 
export const GET = async () => {
  const posts = await getCollection('posts');
 
  const search = posts
    .filter((item) => item.data.draft !== true)
    .map((data) => {
      const {
        slug,
        data: { base, title, date },
      } = data;
 
      return {
        date: date,
        title: title,
        base: base,
        path: `/${base}/${slug}`,
      };
    })
    .sort((a, b) => b.date - a.date);
 
  return new Response(JSON.stringify({ search }));
};
