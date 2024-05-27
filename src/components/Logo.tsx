import Image from "next/image";
import logo from "/public/lexisnexis-rol.png";

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="LexisNexis Rule of Law Foundation Logo"
      title="LexisNexis Rule of Law Foundation Logo"
      width={170}
      height={300}
    ></Image>
  );
}
