import React from "react";
export default function AvailabilityBadge({ status }) {
  let cls = "badge ";
  if (status === "Available Today") cls += "badge-available";
  else if (status === "Fully Booked") cls += "badge-booked";
  else if (status === "On Leave") cls += "badge-leave";
  else cls += "";
  return (
    <span className={cls}>
      {status}
    </span>
  );
}
