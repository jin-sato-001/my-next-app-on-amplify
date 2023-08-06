export default async function Home() {
  const date = new Date()

  const formattedDate = new Intl.DateTimeFormat(
    "ja",
    {
      dateStyle: "long",
      timeStyle: "long"
    }
  ).format(date)

  return (
    <>
      <h1>Static page</h1>
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
        <a href="/ssr">View a server-side rendered page.</a>
      </p>
    </>
  )
}
