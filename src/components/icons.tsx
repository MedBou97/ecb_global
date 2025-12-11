import Image from "next/image";
import logo from "./ecb_logo.svg";

export function EcbLogo() {
  return (
    <Image src={logo} alt="ECB Global logo" className="h-10 w-auto" priority />
  );
}
