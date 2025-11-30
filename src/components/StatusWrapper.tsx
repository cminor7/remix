
"use client";
import StatusBar from "./StatusBar";
import { usePathname } from "next/navigation";
import {useState} from "react";

export default function StatusWrapper() {
  const pathname = usePathname();
  const [icon, setIcon] = useState<"info" | "loading" | "success">("info");

  // define paths that should show the status bar
  const showOn = ["/", "/MassEmail", "/SupplierInfo"];
  const shouldShow = showOn.includes(pathname);

  if (!shouldShow) return null;
  return <StatusBar message="hello" icon={icon}/>;
}
