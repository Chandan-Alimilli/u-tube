// import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className=" flex justify-center     p-5 shadow-lg bg-[#1d2e2b]">
      <div className="flex">
        A Mini Streaming Platform {new Date().getFullYear()} By
        <p
          className="text-[#52a447]
        font-bold mx-1"
        >
          Chandan
        </p>
      </div>
    </footer>
  );
}

export default Footer;
