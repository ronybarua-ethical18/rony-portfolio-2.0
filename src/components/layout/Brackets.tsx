import React from "react";

/** Architectural corner brackets that light up on card hover. */
export default function Brackets() {
  return (
    <>
      <span className="p-bracket tl" aria-hidden />
      <span className="p-bracket tr" aria-hidden />
      <span className="p-bracket bl" aria-hidden />
      <span className="p-bracket br" aria-hidden />
    </>
  );
}
