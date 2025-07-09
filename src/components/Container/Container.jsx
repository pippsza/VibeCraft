export default function Container({ children, style = "" }) {
  return (
    <div className={`m-auto w-[1000px] px-[20px] ${style}`}>{children}</div>
  );
}
