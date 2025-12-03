import Image from 'next/image';

export function EcbLogo() {
  return (
    <Image
      src="https://ecbglobal.com.tr/wp-content/uploads/2023/02/logo.png"
      alt="ECB Global Logo"
      width={140}
      height={56}
      priority
    />
  );
}
