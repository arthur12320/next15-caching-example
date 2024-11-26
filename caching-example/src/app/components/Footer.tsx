"use cache";
import { getVersion } from "../lib/api";

export default async function Footer() {
  const version = await getVersion();
  return (
    <footer className="p-4 text-center ">
      <p>page version: {version.version}</p>
      <p>page request time: {version.requestTime}</p>
    </footer>
  );
}
