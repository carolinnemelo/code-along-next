

export default async function Home() {
  const iceCreams = await [];

  return (
    <>
      <h1>Ice cream land</h1>
      {!iceCreams.length && (
        <p>Ohh, you have no Ice Cream. We need to fix that, asap!</p>
      )}
    </>
  );
}
