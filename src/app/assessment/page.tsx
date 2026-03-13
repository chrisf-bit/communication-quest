"use client";

import { useRouter } from "next/navigation";
import { AssessmentFlow } from "@/components/assessment/AssessmentFlow";

export default function AssessmentPage() {
  const router = useRouter();

  return (
    <AssessmentFlow
      onComplete={() => {
        router.push("/workout");
      }}
    />
  );
}
