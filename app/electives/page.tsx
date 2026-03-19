"use client";

import {useEffect} from "react";

/** Server redirects omit #hash — client navigate so /electives still lands on Electives section */
export default function ElectivesRedirectPage() {
  useEffect(() => {
    window.location.replace(
      `${window.location.origin}/academics#electives`,
    );
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-sm text-white/60">
      Opening Academics — Electives…
    </div>
  );
}
