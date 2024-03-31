const API_URL = "";

// POST
export async function createUser(user) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your user");
  }
}

// GET
export async function getUSer() {
  const res = await fetch(`${API_URL}`);

  if (!res.ok) throw Error("Failed getting ");

  const { data } = await res.json();
  return data;
}

// Delete
export async function deleteBook(id) {
  fetch(`${API_URL} ` + id, {
    method: "DELETE",
  });
}

// Update
export async function updateUser(id, updated) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updated),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed updating the user");
  }
}
