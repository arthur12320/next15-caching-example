import { notFound } from "next/navigation";
import { fetchUserById } from "../../lib/api";
import { Suspense } from "react";

async function getUser(id: number) {
  try {
    const { data } = await fetchUserById(id);
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "User not found") {
      return null;
    }
    throw error;
  }
}

async function UserPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const userId = parseInt(id, 10);
  const user = await getUser(userId);

  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6  rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <Suspense fallback={<div>Carregando...</div>}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
            <ul className="space-y-2">
              <li>
                <strong>ID:</strong> {user.id}
              </li>
              <li>
                <strong>Email:</strong> {user.email}
              </li>
              <li>
                <strong>Age:</strong> {user.age}
              </li>
              <li>
                <strong>Cost Center Origin:</strong> {user.costCenterOrigin}
              </li>
              <li>
                <strong>Birthday:</strong> {user.birthday}
              </li>
              <li>
                <strong>Badge:</strong> {user.badge}
              </li>
              <li>
                <strong>Nickname:</strong> {user.nickname}
              </li>
              <li>
                <strong>Slack ID:</strong> {user.slackId}
              </li>
              <li>
                <strong>Cellphone:</strong> {user.cellphone}
              </li>
            </ul>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default async function userWrapper({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6  rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <Suspense fallback={<div>Carregando...</div>}>
        <UserPage params={params} />
      </Suspense>
    </div>
  );
}
