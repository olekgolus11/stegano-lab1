import { useState, useEffect, useRef } from "react";
import "./App.css";
import { hideMessage, extractMessage, hasSynonyms, tokenizeText, isWord } from "./services/steganography";
import { sampleTexts, sampleBinaryMessages } from "./services/sampleData";

// New component for highlighting words with synonyms
interface HighlightedTextareaProps {
    value: string;
    onChange: (value: string) => void;
    rows: number;
    placeholder: string;
}

const HighlightedTextarea: React.FC<HighlightedTextareaProps> = ({ value, onChange, rows, placeholder }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const highlightRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set initial height based on rows
        if (containerRef.current) {
            const lineHeight = 1.5; // Common line height
            const padding = 16; // Approx padding (8px * 2)
            const heightPx = rows * lineHeight * 16 + padding * 2; // 16px is typical base font size
            containerRef.current.style.height = `${heightPx}px`;
        }
    }, [rows]);

    // Process the text to highlight words with synonyms
    const getHighlightedText = () => {
        if (!value) return "";

        const tokens = tokenizeText(value);
        const highlightedTokens = tokens.map((token) => {
            if (isWord(token) && hasSynonyms(token)) {
                return `<span class="has-synonym">${token}</span>`;
            }
            return token;
        });

        return highlightedTokens.join("");
    };

    // Sync scrolling between the textarea and the highlight layer
    const handleScroll = () => {
        if (textareaRef.current && highlightRef.current) {
            highlightRef.current.scrollTop = textareaRef.current.scrollTop;
            highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
        }
    };

    // Handle textarea resize
    const handleResize = () => {
        if (containerRef.current && textareaRef.current) {
            containerRef.current.style.height = `${textareaRef.current.offsetHeight}px`;
        }
    };

    return (
        <div className="highlighted-textarea-container" ref={containerRef}>
            <div ref={highlightRef} className="highlight-layer" dangerouslySetInnerHTML={{ __html: getHighlightedText() }} />
            <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onScroll={handleScroll}
                onInput={handleResize}
                rows={rows}
                placeholder={placeholder}
                className="text-input"
            />
        </div>
    );
};

function App() {
    const [sourceText, setSourceText] = useState("");
    const [binaryMessage, setBinaryMessage] = useState("");
    const [encodedText, setEncodedText] = useState("");
    const [extractedMessage, setExtractedMessage] = useState("");
    const [activeTab, setActiveTab] = useState("encode");
    const [messageLength, setMessageLength] = useState<number | undefined>();
    const [originalText, setOriginalText] = useState<string | undefined>();
    const [hasEncodedMessage, setHasEncodedMessage] = useState(false);

    const handleEncode = () => {
        const result = hideMessage(sourceText, binaryMessage);

        if (result) {
            setEncodedText(result);
            setOriginalText(sourceText);
            setMessageLength(binaryMessage.length);
            setHasEncodedMessage(true);
        }
    };

    const handleDecode = () => {
        if (!originalText) {
            alert("Brak oryginalnego tekstu do dekodowania.");
            return;
        }
        const result = extractMessage(encodedText, originalText, messageLength);

        if (result) {
            setExtractedMessage(result);
        } else {
            setExtractedMessage("");
            alert("Nie udało się odczytać ukrytej wiadomości.");
        }
    };

    // Funkcja sprawdzająca ile słów z synonimami jest w tekście
    const countWordsWithSynonyms = (text: string): number => {
        let count = 0;
        const words = text.split(/\s+/);

        words.forEach((word) => {
            // Usuń znaki interpunkcyjne z końca słowa
            const cleanWord = word.replace(/[.,!?;:()[\]{}""''„""—–-]+$/, "");
            if (cleanWord && hasSynonyms(cleanWord)) {
                count++;
            }
        });

        return count;
    };

    const loadSampleText = (size: "short" | "medium" | "long") => {
        setSourceText(sampleTexts[size]);
    };

    const loadSampleBinaryMessage = (size: "short" | "medium" | "long") => {
        setBinaryMessage(sampleBinaryMessages[size]);
    };

    const handleTabChange = (tab: "encode" | "decode") => {
        setActiveTab(tab);
        // Reset wiadomości przy zmianie na zakładkę dekodowania
        if (tab === "decode") {
            setExtractedMessage("");
        }
    };

    return (
        <div className="steganography-container">
            <h1>Steganografia Lingwistyczna</h1>

            <div className="tabs">
                <button className={activeTab === "encode" ? "active" : ""} onClick={() => handleTabChange("encode")}>
                    Ukryj wiadomość
                </button>
                <button className={activeTab === "decode" ? "active" : ""} onClick={() => handleTabChange("decode")}>
                    Odczytaj wiadomość
                </button>
            </div>

            {activeTab === "encode" ? (
                <div className="encode-section">
                    <h2>Ukrywanie wiadomości</h2>

                    <div className="input-group">
                        <div className="label-with-actions">
                            <label htmlFor="sourceText">Tekst źródłowy (w języku polskim):</label>
                            <div className="sample-actions">
                                <span>Wczytaj przykład: </span>
                                <button className="sample-button" onClick={() => loadSampleText("short")}>
                                    Krótki
                                </button>
                                <button className="sample-button" onClick={() => loadSampleText("medium")}>
                                    Średni
                                </button>
                                <button className="sample-button" onClick={() => loadSampleText("long")}>
                                    Długi
                                </button>
                            </div>
                        </div>
                        {/* Replace standard textarea with HighlightedTextarea */}
                        <HighlightedTextarea
                            value={sourceText}
                            onChange={setSourceText}
                            rows={10}
                            placeholder="Wprowadź tekst, w którym chcesz ukryć wiadomość..."
                        />
                        {sourceText && (
                            <div className="text-stats">
                                <div>Liczba znaków: {sourceText.length}</div>
                                <div>Liczba słów: {sourceText.split(/\s+/).filter(Boolean).length}</div>
                                <div>Słowa z synonimami: {countWordsWithSynonyms(sourceText)}</div>
                            </div>
                        )}
                    </div>

                    <div className="input-group">
                        <div className="label-with-actions">
                            <label htmlFor="binaryMessage">Wiadomość binarna (maksymalnie 64 bity):</label>
                            <div className="sample-actions">
                                <span>Wczytaj przykład: </span>
                                <button className="sample-button" onClick={() => loadSampleBinaryMessage("short")}>
                                    8 bitów
                                </button>
                                <button className="sample-button" onClick={() => loadSampleBinaryMessage("medium")}>
                                    40 bitów
                                </button>
                                <button className="sample-button" onClick={() => loadSampleBinaryMessage("long")}>
                                    64 bity
                                </button>
                            </div>
                        </div>
                        <input
                            id="binaryMessage"
                            type="text"
                            value={binaryMessage}
                            onChange={(e) => {
                                // Accept only 0s and 1s
                                const newValue = e.target.value.replace(/[^01]/g, "");
                                // Limit to 64 bits
                                setBinaryMessage(newValue.slice(0, 64));
                            }}
                            placeholder="np. 10101010"
                        />
                        <div className="bit-counter">Liczba bitów: {binaryMessage.length}/64</div>
                    </div>

                    <button
                        onClick={handleEncode}
                        disabled={!sourceText || !binaryMessage || countWordsWithSynonyms(sourceText) < binaryMessage.length}
                        className="main-button"
                    >
                        Ukryj wiadomość
                    </button>

                    {countWordsWithSynonyms(sourceText) < binaryMessage.length && sourceText && binaryMessage && (
                        <div className="error-message">
                            Tekst ma zbyt mało słów z synonimami ({countWordsWithSynonyms(sourceText)}) aby ukryć wiadomość o długości{" "}
                            {binaryMessage.length} bitów.
                        </div>
                    )}

                    {encodedText && (
                        <div className="result-container">
                            <h3>Tekst z ukrytą wiadomością:</h3>
                            <div className="encoded-text">{encodedText}</div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="decode-section">
                    <h2>Odczytywanie ukrytej wiadomości</h2>

                    <div className="input-group">
                        <label htmlFor="stegoText">Tekst z ukrytą wiadomością (tylko do odczytu):</label>
                        <textarea
                            id="stegoText"
                            value={encodedText}
                            readOnly
                            rows={10}
                            placeholder="Najpierw ukryj wiadomość w zakładce 'Ukryj wiadomość'..."
                            className={hasEncodedMessage ? "" : "disabled-textarea"}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="messageLength">Długość wiadomości (w bitach):</label>
                        <input
                            id="messageLength"
                            type="number"
                            min="1"
                            max="64"
                            value={messageLength || ""}
                            onChange={(e) => setMessageLength(parseInt(e.target.value) || undefined)}
                            placeholder="Opcjonalnie"
                            readOnly
                        />
                        <div className="hint">Długość wiadomości została automatycznie zapamiętana podczas kodowania.</div>
                    </div>

                    <button onClick={handleDecode} disabled={!hasEncodedMessage} className="main-button">
                        Odczytaj wiadomość
                    </button>

                    {extractedMessage && (
                        <div className="result-container">
                            <h3>Odczytana wiadomość binarna:</h3>
                            <div className="extracted-message">{extractedMessage}</div>
                            <div className="bit-counter">Długość: {extractedMessage.length} bitów</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
