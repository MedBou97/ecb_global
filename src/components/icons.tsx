import Image from "next/image";

export function EcbLogo() {
  return (
    <Image
      src="https://ecbglobal.com.tr/wp-content/uploads/2024/05/logo-ecb.png"
      alt="ECB Global Logo"
      width={160}
      height={40}
      priority
    />
  );
}
