import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ButtonWithIconDemo = () => {
  return (
    <Button asChild className="!rounded-full relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 shadow-lg hover:shadow-xl hover:scale-105">
      <Link href="/contact#reservation" className="flex items-center rounded-full">
        <span className="relative z-10 transition-all duration-500 font-semibold">
          Réserver
        </span>
        <div className="absolute right-1 w-10 h-10 bg-white text-secondary-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45 shadow-md">
          <ArrowUpRight size={16} />
        </div>
      </Link>
    </Button>
  );
};

export default ButtonWithIconDemo;
