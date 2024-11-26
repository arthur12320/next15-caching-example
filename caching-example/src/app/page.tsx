import { Suspense } from "react";
import { BirthdayList, BirthdayListSkeleton } from "./components/BirthdayList";
import { CachedUserData } from "./components/CachedUserData";
import {
  LatestCarrousel,
  LatestCarrouselSkeleton,
} from "./components/LatestCarrousel";

export default async function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Suspense fallback={<BirthdayListSkeleton />}>
          <BirthdayList />
        </Suspense>

        <CachedUserData />
        <div>
          <Suspense fallback={<LatestCarrouselSkeleton />}>
            <LatestCarrousel />
          </Suspense>
        </div>
      </div>
    </>
  );
}
