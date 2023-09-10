import styles from "../style"


const Button = () => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins 
    font-medium text-[18px] text-primary outline-none mt-10 rounded-lg ${styles}`}>
      Get Started
    </button>
  )
}

export default Button