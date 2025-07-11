export default function Container({ children, style = "" }) {
  return (
    <div className={`m-auto max-w-[960px] w-full px-[20px] ${style}`}>
      {children}
    </div>
  );
}
