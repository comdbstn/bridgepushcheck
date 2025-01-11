import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm hover:bg-white/90"
      onClick={() => navigate("/")}
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  );
}