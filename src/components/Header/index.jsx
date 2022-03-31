import classes from 'src/components/Header/Header.module.css'
import Link from "next/link"

export function Header() {
  return (
      <header className={classes.header}>
        <Link href="/">
          <a className={classes.ancher}>Index</a>  
        </Link>
        <Link href="/about"> 
          <a className={classes.ancher}>About</a>
        </Link>
      </header>
  )
}
