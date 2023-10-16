import axios from "axios";
const BASE_URL = "https://65293b2d55b137ddc83e6b8e.mockapi.io/api/v1";

async function getNotes() {
  return axios
    .get(`${BASE_URL}/notes`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function getNoteById(id) {
  return axios
    .get(`${BASE_URL}/notes/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function postNote(note) {
  return axios
    .post(`${BASE_URL}/notes`, note)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function updateNote(id, text) {
  return axios
    .patch(
      `${BASE_URL}/notes/${id}`,
      {text}
    )
    .then((res) => {
      return res.data.text;
    })
    .catch((error) => {
      console.log(error);
    });
}

export { getNotes, getNoteById, postNote, updateNote };
