import React, { ReactElement } from 'react'

import AppBar from './components/appBar/appBar'

interface LayoutType{
  children: ReactElement
}

const Layout:React.FC<LayoutType> = ({children}) => {
  return (
    <div className='main'>
        <AppBar/>
            {children}
    </div>
  )
}

export default Layout