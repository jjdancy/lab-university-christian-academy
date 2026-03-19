"use client";

import {MouseEvent, ReactNode} from "react";
import {useScheduleTourModal} from "@/components/ScheduleTourModalProvider";
import {SCHEDULE_TOUR_URL} from "@/lib/constants";

export default function ScheduleTourTrigger({
  children,
  className,
  as = "button",
}: {
  children: ReactNode;
  className?: string;
  as?: "button" | "link";
}) {
  const {openModal} = useScheduleTourModal();

  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    openModal();
  };

  if (as === "link") {
    return (
      <a href={SCHEDULE_TOUR_URL} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
