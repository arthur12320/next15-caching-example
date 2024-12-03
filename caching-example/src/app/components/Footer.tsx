"use cache";
import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { getVersion } from "../lib/api";

export default async function Footer() {
  cacheLife("max");
  const version = await getVersion();
  return (
    <footer className="p-4 text-center ">
      <p>page version: {version.version}</p>
      <p>page request time: {version.requestTime}</p>
    </footer>
  );
}
