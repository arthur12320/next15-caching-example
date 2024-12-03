import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { fetchLatestUserIds, fetchUserById, User } from "../lib/api";

async function getLatestUsers() {
  try {
    const { data: latestUserIds } = await fetchLatestUserIds(3); // Fetch 5 latest user IDs

    const userPromises = latestUserIds.map(async (id: number) => {
      const { data: user } = await fetchUserById(id);
      return {
        ...user,
        name: user.name.toUpperCase(),
      };
    });

    const users = await Promise.all(userPromises);

    // Sort users by addedDate in descending order
    return users.sort(
      (a, b) =>
        new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
    );
  } catch (error) {
    console.error("Error fetching latest users:", error);
    return [];
  }
}

export async function LatestCarrousel() {
  "use cache";
  cacheLife("days");
  const birthdays = await getLatestUsers();

  return (
    <div className="mt-8 flex flex-col space-y-4 overflow-hidden">
      <div className=" border-2 border-gray-600 margin-auto rounded-lg p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Latest Additions</h2>
        <div className="w-full inline-flex flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start space-x-4 [&_li]:ml-4 [&_img]:max-w-none animate-infinite-scroll">
            {birthdays.map((user: User) => (
              <li
                key={user.email}
                className="flex items-center space-x-4 border border-gray-300 rounded-lg p-4 min-w-[200px] hover:ease-in-out hover:scale-105 hover:border-2 hover:border-white-500 hover:shadow-md"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full "
                />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start space-x-4 [&_li]:ml-4 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {birthdays.map((user: User) => (
              <li
                key={user.email}
                className="flex items-center space-x-4 border border-gray-300 rounded-lg p-4 min-w-[200px] hover:ease-in-out hover:scale-105 hover:border-2 hover:border-w-500 hover:shadow-md"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full "
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
    </div>
  );
}

export function LatestCarrouselSkeleton() {
  return (
    <div className="mt-8 flex flex-col space-y-4 overflow-hidden">
      <div className="border-2 border-gray-300 margin-auto rounded-lg p-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-400">
          Latest Additions
        </h2>
        <div className="w-full inline-flex flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start space-x-4 [&_li]:ml-4 [&_img]:max-w-none animate-infinite-scroll">
            {[...Array(3)].map((_, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 border border-gray-300 rounded-lg p-4 min-w-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse" />
                  <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse" />
                </div>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start space-x-4 [&_li]:ml-4 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {[...Array(3)].map((_, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 border border-gray-300 rounded-lg p-4 min-w-[200px]"
              >
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
    </div>
  );
}
