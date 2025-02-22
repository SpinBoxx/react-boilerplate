import { Navbar1 } from "@/components/navbar/navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  console.log("fefs");

  return (
    <div className="p-2">
      \
      <Navbar1 />
      <h3>Welcome Home!</h3>
    </div>
  );
}
