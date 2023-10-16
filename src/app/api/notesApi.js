import axios from "axios";

async function getNotes() {
  return axios
    .get("https://65293b2d55b137ddc83e6b8e.mockapi.io/api/v1/notes")
    .then((res) => {
        return res.data;
      }
    )
    .catch((error) => {
      console.log(error);
    });
}

async function postNote(note) {
  return axios
    .post("https://65293b2d55b137ddc83e6b8e.mockapi.io/api/v1/notes", note)
    .then((res) => {
        return res.data;
      }
    )
    .catch((error) => {
      console.log(error);
    });
}

export { getNotes, postNote };
