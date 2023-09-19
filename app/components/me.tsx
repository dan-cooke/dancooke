import Image from "next/image";

export function Me() {
  return (
    <>
      <div className="w-32 h-32 lg:w-48 lg:h-48 relative block dark:hidden">
        <Image src="/svg/me_light.svg" fill alt="Daniel Cooke" />
      </div>
      <div className="w-32 h-32 lg:w-48 lg:h-48 relative dark:block hidden">
        <Image src="/svg/me_dark.svg" fill alt="Daniel Cooke" />
      </div>
    </>
  );
}
