import './Button.css'

function Button({symbol ,color ,handleClick}) 
{
    return( 
        <>
            <button 
            onClick={
                ()=>{
                    handleClick(symbol)
                }
            }
            className='button' style={{backgroundColor : color}}>{symbol}</button>
        </>
    );
}

export default Button;