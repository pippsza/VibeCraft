import Container from "../Container/Container.jsx";

export default function BackCircles() {
  return (
    <Container style=" absolute -z-10 top-0 left-1/2 h-full transform -translate-x-1/2">
      <div className="bg-green-700 w-full h-full"></div>
    </Container>
  );
}
