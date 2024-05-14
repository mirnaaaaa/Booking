import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export const Socials = [
  {
    id: 3,
    child: (
      <>
        Linkedin <AiFillLinkedin size={25} />
      </>
    ),
    href: "https://www.linkedin.com/in/mirna-misheal-b792b9268/",

    style: "hover:text-blue-500"
  },
  {
    id: 0,
    child: (
      <>
        Github <AiOutlineGithub size={25} />
      </>
    ),
    href: "https://github.com/mirnaaaaa",
    style: "hover:text-black"
  }
];
