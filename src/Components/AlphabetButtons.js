const AlphabetButtons = () => {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    const handleButtonClick = (char) => {
        alert(`${char}`);
    };

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "8px" }}>
            {alphabet.map((char, index) => (
                <button key={index} onClick={() => handleButtonClick(char)}>
                    {char}
                </button>
            ))}
        </div>
    );
};

export default AlphabetButtons;
