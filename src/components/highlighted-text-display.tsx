import { useRef } from "react";
import { tokenizeText, isWord, hasSynonyms } from "../services/steganography";

interface HighlightedTextDisplayProps {
    value: string;
    originalText?: string;
    className?: string;
}

export const HighlightedTextDisplay: React.FC<HighlightedTextDisplayProps> = ({ value, originalText, className = "" }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const getHighlightedText = () => {
        if (!value) return "";

        if (originalText) {
            const originalTokens = tokenizeText(originalText);
            const encodedTokens = tokenizeText(value);

            if (originalTokens.length !== encodedTokens.length) {
                return getSimpleHighlightedText();
            }

            return encodedTokens
                .map((token, index) => {
                    if (isWord(token) && isWord(originalTokens[index]) && token.toLowerCase() !== originalTokens[index].toLowerCase()) {
                        return `<span class="has-synonym changed-word">${token}</span>`;
                    } else if (isWord(token) && hasSynonyms(token)) {
                        return `<span class="has-synonym">${token}</span>`;
                    }
                    return token;
                })
                .join("");
        }

        return getSimpleHighlightedText();
    };

    const getSimpleHighlightedText = () => {
        const tokens = tokenizeText(value);
        return tokens
            .map((token) => {
                if (isWord(token) && hasSynonyms(token)) {
                    return `<span class="has-synonym">${token}</span>`;
                }
                return token;
            })
            .join("");
    };

    return <div ref={containerRef} className={`highlighted-text-display ${className}`} dangerouslySetInnerHTML={{ __html: getHighlightedText() }} />;
};
