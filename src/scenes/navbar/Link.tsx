import React from 'react'
import { EnumPages } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    clickedPage: EnumPages;
    setClickedPage: (value: EnumPages) => void;
}

const Link = ({ page, clickedPage, setClickedPage}: Props) => {
    const toLowwerCasePage = page.toLowerCase().replace(/ /g, '') as EnumPages
  return (
    <AnchorLink
        href={`#${toLowwerCasePage}`}
        className={`${clickedPage === toLowwerCasePage ? "text-primary-500" : ""} duration-500 transition hover:text-primary-300`}
        onClick={() => setClickedPage}
    >
        {page}
    </AnchorLink>
  )
}

export default Link