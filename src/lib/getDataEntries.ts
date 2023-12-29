import client from "./contentful";

export async function getInfo(id: string) {
  const response = await client
    .getEntries({ content_type: "card", "fields.url": id })
    .then((response) => {
      if (response.items.length > 0) {
        return response.items[0];
      } else {
        return null;
      }
    })
    .catch(console.error);

  return response;
}
