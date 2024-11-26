import { fetchMe } from "../lib/api";
import { UserProfile } from "./UserProfile";

async function getUserData() {
  const { data } = await fetchMe();
  return data;
}

export async function CachedUserData() {
  const user = await getUserData();

  return (
    <div className="mt-8 flex flex-col space-y-4 ">
      <div className="border-2 border-gray-600 margin-auto rounded-lg p-4 text-center">
        <h3 className="text-2xl font-bold mb-4">User Data</h3>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <img
          src={user.image}
          alt={user.name}
          className="w-20 h-20 rounded-full mt-2 mx-auto"
        />
      </div>
      <UserProfile user={user} />
    </div>
  );
}
