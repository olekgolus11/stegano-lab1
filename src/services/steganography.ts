/**
 * Słownik synonimów dla wybranych słów w języku polskim.
 * Każda para klucz-wartość zawiera słowo i jego synonimy.
 * 
 * Format: { słowo: [synonim1, synonim2, ...] }
 * 
 * Uwaga: To jest uproszczony słownik na potrzeby demonstracji.
 * W praktyce lepiej użyć zewnętrznego API lub pełniejszej bazy danych synonimów.
 */
export const synonymDictionary: Record<string, string[]> = {
  // Rzeczowniki
  "dom": ["budynek", "chata", "mieszkanie", "domostwo"],
  "droga": ["szlak", "trasa", "ścieżka", "szosa"],
  "czas": ["okres", "moment", "chwila", "era"],
  "osoba": ["człowiek", "jednostka", "postać", "osobnik"],
  "praca": ["zajęcie", "robota", "zatrudnienie", "działalność"],
  "dzień": ["doba", "jasność", "światło", "pora"],
  "miejsce": ["lokalizacja", "pozycja", "punkt", "obszar"],
  "sposób": ["metoda", "tryb", "technika", "forma"],
  "problem": ["kłopot", "trudność", "zagadnienie", "wyzwanie"],
  "sytuacja": ["okoliczność", "położenie", "stan", "układ"],
  
  // Przymiotniki
  "duży": ["wielki", "spory", "ogromny", "obszerny"],
  "mały": ["niewielki", "drobny", "nikły", "malutki"],
  "dobry": ["porządny", "odpowiedni", "właściwy", "prawidłowy"],
  "zły": ["niewłaściwy", "niedobry", "błędny", "nieprawidłowy"],
  "nowy": ["świeży", "nowatorski", "innowacyjny", "nietradycyjny"],
  "stary": ["dawny", "wiekowy", "przestarzały", "leciwy"],
  "ważny": ["istotny", "kluczowy", "znaczący", "doniosły"],
  "trudny": ["skomplikowany", "złożony", "ciężki", "wymagający"],
  "prosty": ["łatwy", "nieskomplikowany", "elementarny", "banalny"],
  "ciekawy": ["interesujący", "fascynujący", "intrygujący", "zajmujący"],
  
  // Czasowniki
  "mówić": ["rozmawiać", "gadać", "opowiadać", "komunikować"],
  "widzieć": ["dostrzegać", "zauważać", "oglądać", "obserwować"],
  "robić": ["wykonywać", "działać", "tworzyć", "pracować"],
  "myśleć": ["rozważać", "zastanawiać", "dumać", "rozmyślać"],
  "chcieć": ["pragnąć", "życzyć", "pożądać", "dążyć"],
  "dać": ["ofiarować", "wręczyć", "przekazać", "podarować"],
  "brać": ["przyjmować", "pobierać", "chwytać", "zabierać"],
  "znajdować": ["odkrywać", "napotykać", "odnajdywać", "natrafiać"],
  "czekać": ["oczekiwać", "wyczekiwać", "wypatrywać", "wstrzymywać"],
  "zmieniać": ["modyfikować", "przekształcać", "transformować", "przeobrażać"],
  
  // Przysłówki
  "bardzo": ["niezmiernie", "wyjątkowo", "niezwykle", "nadzwyczaj"],
  "szybko": ["prędko", "błyskawicznie", "bezzwłocznie", "migiem"],
  "wolno": ["powoli", "stopniowo", "pomału", "opieszale"],
  "dobrze": ["prawidłowo", "należycie", "właściwie", "odpowiednio"],
  "źle": ["nieprawidłowo", "niewłaściwie", "błędnie", "nieodpowiednio"],
  "jasno": ["wyraźnie", "klarownie", "przejrzyście", "zrozumiale"],
  "teraz": ["obecnie", "aktualnie", "w tej chwili", "współcześnie"],
  "zawsze": ["stale", "nieustannie", "permanentnie", "bezustannie"],
  "nigdy": ["przenigdy", "w żadnym razie", "żadną miarą", "za nic"],
  "wszędzie": ["wszędy", "dokoła", "wokół", "zewsząd"],
};

/**
 * Tokenizuje tekst na słowa, zachowując również znaki interpunkcyjne i spacje.
 * Poprawiona wersja, która zachowuje polskie znaki diakrytyczne.
 * @param text Tekst do tokenizacji
 * @returns Tablica tokenów (słowa, znaki interpunkcyjne, spacje)
 */
export const tokenizeText = (text: string): string[] => {
  // Wzorzec rozpoznający słowa (w tym z polskimi znakami), znaki interpunkcyjne i spacje
  const pattern = /([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\w]+|[.,!?;:()[\]{}""''„""—–-]|\s+)/g;
  return text.match(pattern) || [];
};

/**
 * Sprawdza, czy token jest słowem (a nie np. znakiem interpunkcyjnym)
 * Poprawiona wersja, która uwzględnia polskie znaki diakrytyczne.
 * @param token Token do sprawdzenia
 * @returns True, jeśli token jest słowem
 */
export const isWord = (token: string): boolean => {
  return /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\w]+$/.test(token);
};

/**
 * Sprawdza, czy słowo ma synonimy w słowniku
 * @param word Słowo do sprawdzenia
 * @returns True, jeśli słowo ma synonimy
 */
export const hasSynonyms = (word: string): boolean => {
  const lowerWord = word.toLowerCase();
  return synonymDictionary[lowerWord] !== undefined && synonymDictionary[lowerWord].length > 0;
};

/**
 * Pobiera synonimy dla danego słowa
 * @param word Słowo, dla którego szukamy synonimów
 * @returns Tablica synonimów lub pusta tablica, jeśli nie znaleziono
 */
export const getSynonyms = (word: string): string[] => {
  const lowerWord = word.toLowerCase();
  return synonymDictionary[lowerWord] || [];
};

/**
 * Zachowuje wielkość liter w zastąpionym słowie
 * @param originalWord Oryginalne słowo
 * @param newWord Nowe słowo (synonim)
 * @returns Nowe słowo z zachowaną wielkością liter
 */
export const preserveCapitalization = (originalWord: string, newWord: string): string => {
  if (originalWord === originalWord.toLowerCase()) {
    return newWord.toLowerCase();
  }
  if (originalWord === originalWord.toUpperCase()) {
    return newWord.toUpperCase();
  }
  if (originalWord[0] === originalWord[0].toUpperCase()) {
    return newWord.charAt(0).toUpperCase() + newWord.slice(1).toLowerCase();
  }
  return newWord.toLowerCase();
};

/**
 * Ukrywa wiadomość binarną w tekście poprzez zamianę wybranych słów na ich synonimy.
 * @param text Tekst źródłowy
 * @param message Wiadomość binarna (ciąg 0 i 1)
 * @returns Tekst z ukrytą wiadomością lub null w przypadku błędu
 */
export const hideMessage = (text: string, message: string): string | null => {
  if (!text || !message || !/^[01]+$/.test(message)) {
    return null;
  }

  const tokens = tokenizeText(text);
  const wordIndicesWithSynonyms: number[] = [];

  // Znajdź wszystkie słowa, które mają synonimy
  tokens.forEach((token, index) => {
    if (isWord(token) && hasSynonyms(token)) {
      wordIndicesWithSynonyms.push(index);
    }
  });

  // Sprawdź, czy mamy wystarczająco dużo słów do ukrycia całej wiadomości
  if (wordIndicesWithSynonyms.length < message.length) {
    alert(`Tekst jest za krótki, aby ukryć wiadomość. Potrzeba co najmniej ${message.length} słów z synonimami.`);
    return null;
  }

  // Ukryj wiadomość
  const result = [...tokens];
  for (let i = 0; i < message.length; i++) {
    const bit = message[i];
    const tokenIndex = wordIndicesWithSynonyms[i];
    const word = tokens[tokenIndex];
    const synonyms = getSynonyms(word);

    if (synonyms.length > 0) {
      // Bit 0 - używamy oryginalnego słowa
      // Bit 1 - używamy synonimu
      if (bit === '1') {
        // Wybierz pierwszy synonim dla uproszczenia
        const synonym = synonyms[0];
        result[tokenIndex] = preserveCapitalization(word, synonym);
      }
      // Dla bitu 0 zostawiamy oryginalne słowo
    }
  }

  // Mapujemy zmodyfikowane tokeny i łączymy je w tekst
  return result.join('');
};

/**
 * Ekstrakt wiadomości binarnej ukrytej w tekście, bazując wyłącznie na tekście z ukrytą wiadomością
 * oraz znajomości słownika synonimów używanego podczas kodowania.
 * 
 * @param encodedText Tekst z ukrytą wiadomością
 * @returns Wyodrębniona wiadomość binarna lub null w przypadku błędu
 */
export const extractMessage = (
  encodedText: string, 
  originalText?: string, 
  messageLength?: number
): string | null => {
  if (!encodedText) {
    return null;
  }

  const encodedTokens = tokenizeText(encodedText);
  let extractedMessage = '';
  
  // Przechodzimy przez wszystkie tokeny
  for (let i = 0; i < encodedTokens.length; i++) {
    const token = encodedTokens[i];
    
    // Sprawdzamy tylko tokeny, które są słowami
    if (isWord(token)) {
      const tokenLower = token.toLowerCase();
      
      // Sprawdź, czy słowo jest kluczem w słowniku synonimów (bazowe słowo)
      if (synonymDictionary[tokenLower] !== undefined) {
        // Jeśli to bazowe słowo, to bit to 0
        extractedMessage += '0';
      } else {
        // Jeśli słowo nie jest bazowe, sprawdź, czy jest synonimem
        let isSynonym = false;
        
        // Przeszukaj słownik, aby sprawdzić, czy słowo jest synonimem
        for (const [baseWord, synonyms] of Object.entries(synonymDictionary)) {
          if (synonyms.includes(tokenLower)) {
            // Jeśli słowo jest synonimem, to bit to 1
            extractedMessage += '1';
            isSynonym = true;
            break;
          }
        }
        
        // Jeśli nie znaleziono jako synonim, ignorujemy to słowo
        // (nie jest ani bazowym słowem, ani synonimem)
      }
    }
  }
  
  // Jeśli znamy długość wiadomości, zwróć tylko tyle bitów
  if (messageLength !== undefined && messageLength > 0) {
    return extractedMessage.substring(0, messageLength);
  }
  
  return extractedMessage;
};