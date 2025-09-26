import React from "react";
import { useGlobalContext } from "../lib/context";

export default function LanguageIcon({ language, containerRef, cardIcon }) {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <div
      className="techstack-language-icon btn-transparent"
      style={{
        color: language.color,
        margin: `${cardIcon && "var(--spacing-smaller)"}`,
      }}
      onMouseOver={(e) =>
        openSubmenu(
          e,
          { name: language.name, desc: language.desc },
          containerRef
        )
      }
      onMouseLeave={closeSubmenu}
    >
      {language.icon}
    </div>
  );
}
