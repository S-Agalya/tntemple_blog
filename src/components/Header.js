import Link from 'next/link'
import React from 'react'
import styles from '../styles/Header.module.css'
const Header = () => {
  return (
    <div className='align-items-center justify-content-center'>
    <div className={styles.box} >
        <div className={styles.links}>
      <Link href='/home' >Home</Link>
      <Link href='/temple'>temple</Link>
      <Link href='/contact'>Contact</Link>
    </div>
    </div>
    </div>
  )
}

export default Header
