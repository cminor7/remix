
"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import { NavConfig } from "@/lib/NavConfig";

export default function NavWrapper(){
    
    const pathname = usePathname();
    const items = NavConfig(pathname);

    return <NavBar items={items} />;

}