import { Suspense } from "react";
import TimerClient from "./TimerClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <TimerClient />
    </Suspense>
  );
}