
import { CardWithForm } from "@/components/ui/FormCard";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className="min-h-screen flex justify-center items-center">
    <CardWithForm/>
   
  </div>
  );
}
