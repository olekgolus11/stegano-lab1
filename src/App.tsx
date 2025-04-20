import { useState } from 'react'
import './App.css'
import { hideMessage, extractMessage, hasSynonyms } from './services/steganography'
import { sampleTexts, sampleBinaryMessages } from './services/sampleData'

function App() {
  const [sourceText, setSourceText] = useState('')
  const [binaryMessage, setBinaryMessage] = useState('')
  const [encodedText, setEncodedText] = useState('')
  const [extractedMessage, setExtractedMessage] = useState('')
  const [activeTab, setActiveTab] = useState('encode')
  const [messageLength, setMessageLength] = useState<number | undefined>()
  const [originalText, setOriginalText] = useState<string | undefined>()
  const [hasEncodedMessage, setHasEncodedMessage] = useState(false)

  const handleEncode = () => {
    // Ukryj wiadomość w tekście źródłowym
    const result = hideMessage(sourceText, binaryMessage)
    
    if (result) {
      setEncodedText(result)
      // Zapamiętaj oryginał i długość wiadomości dla dokładnego dekodowania
      setOriginalText(sourceText)
      setMessageLength(binaryMessage.length)
      setHasEncodedMessage(true) // Oznacz, że mamy zakodowaną wiadomość
    }
  }

  const handleDecode = () => {
    // Wyodrębnij ukrytą wiadomość z tekstu, używając oryginalnego tekstu
    const result = extractMessage(encodedText, originalText, messageLength)
    
    if (result) {
      setExtractedMessage(result)
    } else {
      setExtractedMessage('')
      alert('Nie udało się odczytać ukrytej wiadomości.')
    }
  }

  // Funkcja sprawdzająca ile słów z synonimami jest w tekście
  const countWordsWithSynonyms = (text: string): number => {
    let count = 0;
    const words = text.split(/\s+/)
    
    words.forEach(word => {
      // Usuń znaki interpunkcyjne z końca słowa
      const cleanWord = word.replace(/[.,!?;:()[\]{}""''„""—–-]+$/, '');
      if (cleanWord && hasSynonyms(cleanWord)) {
        count++;
      }
    })
    
    return count;
  }

  // Wczytaj przykładowy tekst
  const loadSampleText = (size: 'short' | 'medium' | 'long') => {
    setSourceText(sampleTexts[size])
  }

  // Wczytaj przykładową wiadomość binarną
  const loadSampleBinaryMessage = (size: 'short' | 'medium' | 'long') => {
    setBinaryMessage(sampleBinaryMessages[size])
  }

  // Przełączanie zakładek z resetowaniem niektórych stanów
  const handleTabChange = (tab: 'encode' | 'decode') => {
    setActiveTab(tab);
    // Reset wiadomości przy zmianie na zakładkę dekodowania
    if (tab === 'decode') {
      setExtractedMessage('');
    }
  }

  return (
    <div className="steganography-container">
      <h1>Steganografia Lingwistyczna</h1>
      
      <div className="tabs">
        <button 
          className={activeTab === 'encode' ? 'active' : ''} 
          onClick={() => handleTabChange('encode')}
        >
          Ukryj wiadomość
        </button>
        <button 
          className={activeTab === 'decode' ? 'active' : ''} 
          onClick={() => handleTabChange('decode')}
        >
          Odczytaj wiadomość
        </button>
      </div>

      {activeTab === 'encode' ? (
        <div className="encode-section">
          <h2>Ukrywanie wiadomości</h2>
          
          <div className="input-group">
            <div className="label-with-actions">
              <label htmlFor="sourceText">Tekst źródłowy (w języku polskim):</label>
              <div className="sample-actions">
                <span>Wczytaj przykład: </span>
                <button className="sample-button" onClick={() => loadSampleText('short')}>Krótki</button>
                <button className="sample-button" onClick={() => loadSampleText('medium')}>Średni</button>
                <button className="sample-button" onClick={() => loadSampleText('long')}>Długi</button>
              </div>
            </div>
            <textarea
              id="sourceText"
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
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
                <button className="sample-button" onClick={() => loadSampleBinaryMessage('short')}>8 bitów</button>
                <button className="sample-button" onClick={() => loadSampleBinaryMessage('medium')}>40 bitów</button>
                <button className="sample-button" onClick={() => loadSampleBinaryMessage('long')}>64 bity</button>
              </div>
            </div>
            <input
              id="binaryMessage"
              type="text"
              value={binaryMessage}
              onChange={(e) => {
                // Accept only 0s and 1s
                const newValue = e.target.value.replace(/[^01]/g, '')
                // Limit to 64 bits
                setBinaryMessage(newValue.slice(0, 64))
              }}
              placeholder="np. 10101010"
            />
            <div className="bit-counter">
              Liczba bitów: {binaryMessage.length}/64
            </div>
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
              Tekst ma zbyt mało słów z synonimami ({countWordsWithSynonyms(sourceText)}) 
              aby ukryć wiadomość o długości {binaryMessage.length} bitów.
            </div>
          )}
          
          {encodedText && (
            <div className="result-container">
              <h3>Tekst z ukrytą wiadomością:</h3>
              <div className="encoded-text">
                {encodedText}
              </div>
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
              value={messageLength || ''}
              onChange={(e) => setMessageLength(parseInt(e.target.value) || undefined)}
              placeholder="Opcjonalnie"
              readOnly
            />
            <div className="hint">
              Długość wiadomości została automatycznie zapamiętana podczas kodowania.
            </div>
          </div>
          
          {originalText ? (
            <div className="info-message">
              Dostępny jest oryginalny tekst do porównania, co zapewnia bezbłędne dekodowanie wiadomości.
            </div>
          ) : (
            <div className="warning-message">
              Brak zakodowanej wiadomości. Najpierw ukryj wiadomość w zakładce 'Ukryj wiadomość'.
            </div>
          )}
          
          <button 
            onClick={handleDecode} 
            disabled={!hasEncodedMessage}
            className="main-button"
          >
            Odczytaj wiadomość
          </button>
          
          {extractedMessage && (
            <div className="result-container">
              <h3>Odczytana wiadomość binarna:</h3>
              <div className="extracted-message">
                {extractedMessage}
              </div>
              <div className="bit-counter">
                Długość: {extractedMessage.length} bitów
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
