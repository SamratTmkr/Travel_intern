const Button = ({
    value,
    icons,
    hasBackground = true,
    hasBorder = true,
    variant = "primary"
  }) => {
    // Style configurations based on variant
    const variantStyles = {
      primary: {
        bg: "bg-blue-300 hover:bg-blue-200",
        text: "text-black",
        border: "border-black"
      },
    };
  
    // Get the correct style based on variant
    const style = variantStyles[variant] || variantStyles.primary;
  
    return (
      <div>
        <button 
          className={`
            rounded
             transition
            ${hasBackground ? style.bg : 'bg-transparent hover:bg-gray-100'}
            ${hasBackground ? style.text : style.text}
            ${hasBorder ? `border ${style.border}` : 'border-0'}
          `}

        >
          {
            icons ? (
              <div className="flex items-center gap-2 py-2 px-4 ">
                <span className='text-[16px]'>{icons}</span>
                <span className="text-[14px]">{value}</span>
              </div>
            ) : (
                <div className="flex items-center gap-2 py-2 px-4">
                <span className="text-[14px]">{value}</span>
              </div>
            )
          }
        </button>
      </div>
    );
  };
  
  export default Button;