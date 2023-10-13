async function getNotes() {
  const res = await fetch(
    "https://65293b2d55b137ddc83e6b8e.mockapi.io/api/v1/notes",
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((notes) => {
      console.log(notes);
    })
    .catch((error) => {
      console.log(error);
    });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export { getNotes };
