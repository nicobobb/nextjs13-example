import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Link href="/" className="inline-block">
        <Image
          alt="Logo"
          className="block w-[140px]"
          src="/logo.png"
          width="140"
          height="90"
        />
      </Link>
    </>
  );
};

export { Logo };
