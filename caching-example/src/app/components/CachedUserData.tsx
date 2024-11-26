import { fetchMe } from "../lib/api";

async function getUserData() {
  const { data } = await fetchMe();
  return data;
}

export async function CachedUserData() {
  const user = await getUserData();

  return (
    <div className=" p-4 rounded-lg text-base">
      <h3 className="text-xl font-semibold mb-2">Cached User Data</h3>
      <p className="text-base">
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <img
        src={user.image}
        alt={user.name}
        className="w-20 h-20 rounded-full mt-2"
      />
    </div>
  );
}
