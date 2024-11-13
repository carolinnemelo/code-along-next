function createIceCreamServices() {
  return {
    async getAll() {
      return []; // if you put one inside the array, there will be a length and the message won't appear 
    },
  }; //short hand code, func declaration inline
}
const iceCreamService = createIceCreamServices();

export default async function Home() {
  const iceCreams = await iceCreamService.getAll();

  return (
    <>
      <h1>Ice cream land</h1>
      {!iceCreams.length && (
        <p>Ohh, you have no Ice Cream. We need to fix that, asap!</p>
      )}
    </>
  );
}
