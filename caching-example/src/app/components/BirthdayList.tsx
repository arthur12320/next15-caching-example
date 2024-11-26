import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { fetchBirthdays, User } from "../lib/api";

async function getBirthdays() {
  "use cache";
  cacheLife("minutes");
  const { data } = await fetchBirthdays();
  const sortedData = data.map((user: User) => ({
    ...user,
    name: user.name.toUpperCase(),
  }));

  return sortedData;
}

export async function BirthdayList() {
  const birthdays = await getBirthdays();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Today Birthdays</h2>
      <ul className="space-y-4">
        {birthdays.map((user: User) => (
          <li key={user.email} className="flex items-center space-x-4">
            <img
              src={user.image}
              alt={user.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
