function Button({ url = 'https://www.google.com', text = 'Visit this Website!'})
{
    const handleClick = () => 
    {
        window.location.href = url;
    };

    const faviconUrl = `https://icons.duckduckgo.com/ip3/${new URL(url).hostname}.ico`;

    return (
        <button className = 'btn' onClick={handleClick}>
            <img 
                src={faviconUrl} 
                alt="" 
                style={{height: "20px", marginRight: "8px", verticalAlign: "middle"}}
            />
            {text}
        </button>
    )
}

export default Button;