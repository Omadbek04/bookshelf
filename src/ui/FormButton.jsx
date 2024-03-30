function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={`mb-[10px] bg-btn-bg  text-white w-full py-[10px] rounded-md  text-center outline-none focus:outline-none border-none`}>
      {children}
    </button>
  );
}

export default Button;
