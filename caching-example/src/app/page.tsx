import { BirthdayList } from "./components/BirthdayList";
import { CachedUserData } from "./components/CachedUserData";
import { UserProfile } from "./components/UserProfile";
import { fetchMe } from "./lib/api";

export default async function Home() {
  const { data: user } = await fetchMe();

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <BirthdayList />
        <div>
          <UserProfile user={user} />

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Cached Component Example
            </h2>
            <CachedUserData />
          </div>
        </div>
      </div>
    </>
  );
}
