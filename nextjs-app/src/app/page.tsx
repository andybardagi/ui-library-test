// nextjs-app/src/app/page.tsx
import { Button } from "@your-org/ui-library"; // Using sub-path export
import "@your-org/ui-library/styles/index.css";
// Or if using main export:
// import { Button } from "@your-org/ui-library";

export default function HomePage() {
  return (
    <div className="p-8 bg-primary">
      <Button variant="destructive">Click me from UI Library</Button>
    </div>
  );
}