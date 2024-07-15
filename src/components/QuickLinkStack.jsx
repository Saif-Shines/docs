export default function QuickLinkStack({ children, title, ...props }) {
  return (
    <div className={props.className + " stack-box"}>
      <h2 className="stack-title">{title}</h2>
      <div className="">{children}</div>
    </div>
  );
}
