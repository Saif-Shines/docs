import React from "react";
import Link from "@docusaurus/Link";

export function SimpleCode({ children, className = "" }) {
  return <code className={className + " simple_code"}>{children}</code>;
}

export function CardTileWithImage({ url, imageSrc, title, description }) {
  return (
    <article className="col col--4 margin-bottom--lg">
      <Link className="card padding--lg cardContainer" href={url}>
        <h3>
          <img alt={title} src={imageSrc}></img>
          <p>{title}</p>
        </h3>
        <p>{description}</p>
      </Link>
    </article>
  );
}

export default function Subtitle({ children }) {
  return <div className="subtitle"> {children} </div>;
}
