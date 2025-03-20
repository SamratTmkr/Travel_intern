import React from 'react'
import Button from '../Components/Button'
import { RiEditBoxFill } from 'react-icons/ri'

const Home = () => {
  return (
    <div className='mt-20'>
<Button value="Click me" />

// Text with icon
<Button value="Download" icons={<RiEditBoxFill />} hasBorder={false} />

// With styling options
<Button 
  value="Save" 
  icons={<RiEditBoxFill />}
  hasBackground={false}
  hasBorder={true}
  variant="success"
/>

<Button  icons={<RiEditBoxFill />}  hasBorder={false}/>
    </div>
  )
}

export default Home