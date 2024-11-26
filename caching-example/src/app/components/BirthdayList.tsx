import { fetchBirthdays, User } from "../lib/api";

async function getBirthdays() {
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
    <div className="mt-8 flex flex-col space-y-4 ">
      <div className=" border-2 border-gray-600 margin-auto rounded-lg p-4 text-center">
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
    </div>
  );
}

export function BirthdayListSkeleton() {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      <div className="border-2 border-gray-300 margin-auto rounded-lg p-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-400">
          Today Birthdays
        </h2>
        <ul className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <li key={index} className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse" />
                <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
