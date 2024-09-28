const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

async function parallel_fetches(urls) {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((res) => res.json()));
  return data;
}

parallel_fetches(urls)
  .then((contents) => console.log("Downloaded contents: ", contents))
  .catch((error) => console.error(error));
