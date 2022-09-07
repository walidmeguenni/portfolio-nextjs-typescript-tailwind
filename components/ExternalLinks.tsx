import Link from 'next/link';
import React from 'react'
interface ExternalLinksProps {
    link:string;
    content:string;
}
const ExternalLinks: React.FC<ExternalLinksProps> = (props) => {
  return (
    <Link href={props.link} >
      <a target="_blank" className="p-1-1.5 text-embroidery text-[1.6rem] bg-madder-brown rounded-[15px] transition duration-[0.5s] hover:bg-rubby-Red">
        {props.content}
      </a>
    </Link>
  );
}

export default ExternalLinks