type Props = {
  link: string;
  caption: string;
};

export const Link = ({ caption, link }: Props) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="text-blue-500"
    >
      {caption}
    </a>
  );
};
