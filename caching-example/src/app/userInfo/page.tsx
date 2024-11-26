import { Suspense } from "react";
import { fetchFullMe } from "../lib/api";

async function getUserData() {
  const { data } = await fetchFullMe();
  return data;
}

async function GetVolatileUserData() {
  const user = await getUserData();
  return (
    <>
      <h3 className="text-2xl font-bold mb-4">User Data</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Idade:</strong> {user.age}
      </p>
      <img
        src={user.image}
        alt={user.name}
        className="w-20 h-20 rounded-full mt-2 mx-auto"
      />
      <p>
        <strong>Centro de Custo de Origem:</strong> {user.costCenterOrigin}
      </p>
      <p>
        <strong>Aniversário:</strong> {user.birthday}
      </p>
      <p>
        <strong>Matricula:</strong> {user.badge}
      </p>
      <p>
        <strong>Apelido:</strong> {user.nickname}
      </p>
      <p>
        <strong>slack:</strong> {user.slackId}
      </p>
      <p>
        <strong>Celular:</strong> {user.cellphone}
      </p>
    </>
  );
}

export default async function UserInfo() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="mt-8 flex flex-col space-y-4 ">
        <div className="border-2 border-gray-600 margin-auto rounded-lg p-4 text-center">
          <Suspense fallback={<div>Carregando...</div>}>
            <GetVolatileUserData />
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
}
