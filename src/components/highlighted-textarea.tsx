import { useRef, useEffect } from "react";
import { tokenizeText, isWord, hasSynonyms } from "../services/steganography";

interface HighlightedTextareaProps {
    value: string;
    onChange: (value: string) => void;
    rows: number;
    placeholder: string;
}

export const HighlightedTextarea: React.FC<HighlightedTextareaProps> = ({ value, onChange, rows, placeholder }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const highlightRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const lineHeight = 1.5;
            const padding = 16;
            const heightPx = rows * lineHeight * 16 + padding * 2;
            containerRef.current.style.height = `${heightPx}px`;
        }
    }, [rows]);

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

    const handleScroll = () => {
        if (textareaRef.current && highlightRef.current) {
            highlightRef.current.scrollTop = textareaRef.current.scrollTop;
            highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
        }
    };

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
