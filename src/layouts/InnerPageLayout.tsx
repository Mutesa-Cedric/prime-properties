import React from 'react'
import Banner from '../components/ui/Banner'

interface InnerPageLayoutProps {
    children: React.ReactNode,
    pageTitle: string
}
const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({ children, pageTitle }) => {
    return (
        <div className="w-full">
            <Banner title={pageTitle} />
            {children}
        </div>
    )
}

export default InnerPageLayout
