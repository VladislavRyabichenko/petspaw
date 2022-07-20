export const postFavourite = async (id) => {
  let url = "https://api.thecatapi.com/v1";
  let response = await fetch(url.concat("/favourites"), {
    method: "POST",
    withCredentials: true,
    headers: {
      "content-Type": "application/json",
      "x-api-key": "1a47e138-6a44-4723-933c-0e7fd2675591",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("set", data);
      return data;
    })
    .catch((error) => {
      console.log("err");
    });
  return await response;
};

export const fetchFavourites = async () => {
  let url = "https://api.thecatapi.com/v1";
  let response = await fetch(url.concat("/favourites"), {
    method: "GET",
    withCredentials: true,
    headers: {
      "content-Type": "application/json",
      "x-api-key": "1a47e138-6a44-4723-933c-0e7fd2675591",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log("err");
    });
  return await response;
};

export const deleteFavourite = async (id) => {
  let response = await fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
    method: "DELETE",
    withCredentials: true,
    headers: {
      // "content-Type": "application/json",
      "x-api-key": "1a47e138-6a44-4723-933c-0e7fd2675591",
    },
    body: JSON.stringify({
      vote_id: id,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("set", data);
      return data;
    })
    .catch((error) => {
      console.log("err");
    });
  return await response;
};
