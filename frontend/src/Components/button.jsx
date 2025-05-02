function Button({ url = 'https://www.google.com', text = 'Visit this Website!'})
{
    const handleClick = () => 
    {
        window.location.href = url;
    };

    return (
        <button className = 'btn' onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;