import './style.css' 

const Button = ({ children, bg, cursor, onClick }) => {
    return (
        <button 
            className='button'
            onClick={onClick} 
            style={{ 
                backgroundColor: bg, 
                cursor: cursor
            }}
        >
            {children}
        </button>
    )
}

export default Button