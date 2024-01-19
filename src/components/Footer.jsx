// import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className=" flex justify-center  shadow-lg" >
      <p >
        &copy;Copyright {new Date().getFullYear()}by YouTube
      </p>
    </footer>
  )
}

export default Footer
