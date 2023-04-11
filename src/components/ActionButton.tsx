import React, { } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { EnumPages } from '@/shared/types'

type Props = {
    children: React.ReactNode;
    setClickedPage: (value: EnumPages) => void
}

const ActionButton = ({setClickedPage, children }: Props) => {
  return (
    <AnchorLink href={`#${EnumPages.ContactUs}`} className='bg-secondary-500 px-5 py-2 hover:bg-primary-500 hover:text-white rounded-md' onClick={() => setClickedPage(EnumPages.ContactUs)} >
        {children}
    </AnchorLink>
  )
}

export default ActionButton