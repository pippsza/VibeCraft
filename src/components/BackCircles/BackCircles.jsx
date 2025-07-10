import Container from "../Container/Container.jsx";

export default function BackCircles({ children }) {
  return (
    <Container style="absolute top-0 left-0 ">
      <div className="bg-red-600 ">{children}</div>
    </Container>
  );
}
