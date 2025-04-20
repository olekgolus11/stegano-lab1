/**
 * Słownik synonimów dla wybranych słów w języku polskim.
 * Każda para klucz-wartość zawiera słowo i jego synonimy.
 * 
 * Format: { słowo: [synonim1, synonim2, ...] }
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
  "świat": ["glob", "ziemia", "rzeczywistość", "uniwersum"],
  "życie": ["egzystencja", "byt", "istnienie", "żywot"],
  "historia": ["dzieje", "kronika", "przeszłość", "opowieść"],
  "cel": ["zamiar", "zadanie", "dążenie", "meta"],
  "wiedza": ["erudycja", "mądrość", "nauka", "rozeznanie"],
  "podróż": ["wyprawa", "wojaż", "wycieczka", "wędrówka"],
  "rada": ["wskazówka", "porada", "zalecenie", "sugestia"],
  "technologia": ["technika", "inżynieria", "wynalazczość", "innowacja"],
  "współpraca": ["kooperacja", "kolaboracja", "partnerstwo", "synergia"],
  "cierpliwość": ["wytrwałość", "wyrozumiałość", "opanowanie", "hart"],
  "marzenie": ["pragnienie", "fantazja", "tęsknota", "aspiracja"],
  "gwiazda": ["planeta", "ciało niebieskie", "konstelacja", "astrum"],
  "umysł": ["rozum", "intelekt", "umysłowość", "psychika"],
  "kierunek": ["strona", "trasa", "azymut", "kurs"],
  "wartość": ["cnota", "zasada", "przymiot", "zaleta"],
  "epoka": ["era", "wiek", "okres", "czas"],
  "wyzwanie": ["zadanie", "próba", "test", "sprawdzian"],
  "piękno": ["uroda", "powab", "czar", "wdzięk"],
  "teoria": ["koncepcja", "hipoteza", "założenie", "teza"],
  "doświadczenie": ["praktyka", "eksperyment", "próba", "przygoda"],
  
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
  "piękny": ["śliczny", "urodziwy", "olśniewający", "czarujący"],
  "spokojny": ["cichy", "opanowany", "zrównoważony", "wyciszony"],
  "mądry": ["rozumny", "światły", "przemyślny", "roztropny"],
  "szybki": ["prędki", "bystry", "rączy", "wartki"],
  "wolny": ["powolny", "leniwy", "ospały", "ociężały"],
  "cierpliwy": ["wytrwały", "znoszący", "wyrozumiały", "opanowany"],
  "prawdziwy": ["autentyczny", "rzeczywisty", "faktyczny", "realny"],
  "podstawowy": ["zasadniczy", "fundamentalny", "kluczowy", "główny"],
  "globalny": ["światowy", "międzynarodowy", "ogólnoświatowy", "uniwersalny"],
  "współczesny": ["aktualny", "nowoczesny", "teraźniejszy", "bieżący"],
  "jasny": ["klarowny", "przejrzysty", "wyraźny", "zrozumiały"],
  "pełen": ["kompletny", "cały", "integralny", "napełniony"],
  "cenniejszy": ["wartościowszy", "droższy", "znaczniejszy", "istotniejszy"],
  "uważny": ["baczny", "skupiony", "skoncentrowany", "czujny"],
  "natychmiastowy": ["błyskawiczny", "momentalny", "niezwłoczny", "nagły"],
  "główny": ["podstawowy", "kluczowy", "zasadniczy", "centralny"],
  "cenny": ["wartościowy", "drogocenny", "kosztowny", "szacowny"],
  "niezmienne": ["stałe", "trwałe", "stabilne", "niewzruszone"],
  "lepszy": ["doskonalszy", "skuteczniejszy", "wydajniejszy", "efektywniejszy"],
  "indywidualny": ["osobisty", "jednostkowy", "prywatny", "pojedynczy"],
  
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
  "uczyć": ["szkolić", "kształcić", "edukować", "instruować"],
  "słuchać": ["wysłuchiwać", "przysłuchiwać", "nasłuchiwać", "podsłuchiwać"],
  "patrzeć": ["spoglądać", "zerkać", "przyglądać", "lustrować"],
  "podróżować": ["wędrować", "zwiedzać", "przemieszczać", "jeździć"],
  "pomagać": ["wspierać", "asystować", "dopomagać", "ratować"],
  "tworzyć": ["kreować", "formować", "konstruować", "budować"],
  "rozpocząć": ["zacząć", "zapoczątkować", "zainicjować", "wszcząć"],
  "odpuścić": ["darować", "zrezygnować", "pofolgować", "ustąpić"],
  "definiować": ["określać", "charakteryzować", "precyzować", "tłumaczyć"],
  "pielęgnować": ["dbać", "troszczyć", "kultywować", "opiekować"],
  "złapać": ["chwycić", "pochwycić", "schwytać", "uchwycić"],
  "wskazywać": ["pokazywać", "kierować", "wytyczać", "wyznaczać"],
  "zyskać": ["uzyskać", "pozyskać", "nabyć", "osiągnąć"],
  "odkryć": ["odnaleźć", "znaleźć", "natrafić", "dotrzeć"],
  "zmierzać": ["podążać", "dążyć", "kierować", "zdążać"],
  
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
  "często": ["regularnie", "nierzadko", "wielokrotnie", "nagminnie"],
  "rzadko": ["sporadycznie", "nieczęsto", "czasami", "okazjonalnie"],
  "równie": ["jednakowo", "tak samo", "podobnie", "analogicznie"],
  "cierpliwie": ["wytrwale", "spokojnie", "znośnie", "konsekwentnie"],
  "prawdziwie": ["autentycznie", "rzeczywiście", "faktycznie", "realnie"],
  "szeroko": ["obszernie", "panoramicznie", "rozlegle", "przestronnie"],
  "naturalnie": ["oczywiście", "samoistnie", "automatycznie", "spontanicznie"],
  "natychmiast": ["zaraz", "bezzwłocznie", "od razu", "momentalnie"],
  "całkowicie": ["zupełnie", "absolutnie", "kompletnie", "totalnie"],
  "niestandardowo": ["nietypowo", "oryginalnie", "osobliwie", "wyjątkowo"],
  "właściwie": ["poprawnie", "odpowiednio", "prawidłowo", "należycie"],
  "współcześnie": ["aktualnie", "obecnie", "dzisiaj", "teraz"],
  "trudno": ["skomplikowanie", "złożono", "ciężko", "wymagająco"],
  "łatwo": ["prosto", "nieskomplikowanie", "banalnie", "bezproblemowo"],
  "lepiej": ["skuteczniej", "efektywniej", "wydajniej", "sprawniej"],
  "razem": ["wspólnie", "łącznie", "zbiorowo", "kolektywnie"],

  // Dodatkowe słowa z długiego tekstu
  "mieszkać": ["przebywać", "zamieszkiwać", "rezydować", "bytować"],
  "znane": ["popularne", "słynne", "renomowane", "rozpoznawalne"],
  "ludzie": ["osoby", "ludność", "społeczeństwo", "obywatele"],
  "spieszyć": ["śpieszyć", "pędzić", "gnać", "podążać"],
  "zarządzać": ["kierować", "administrować", "prowadzić", "nadzorować"],
  "rozwiązanie": ["załatwienie", "rozwikłanie", "wyjaśnienie", "rozstrzygnięcie"],
  "polepszenie": ["poprawę", "ulepszenie", "udoskonalenie", "korektę"],
  "przynosi": ["dostarcza", "oferuje", "zapewnia", "prezentuje"],
  "wpływa": ["oddziałuje", "wywiera wpływ", "kształtuje", "determinuje"],
  "nastrój": ["humor", "samopoczucie", "usposobienie", "stan ducha"],
  "mijają": ["przemijają", "przechodzą", "odchodzą", "kończą się"],
  "wspomnienia": ["reminiscencje", "pamięć", "retrospekcje", "przeszłość"],
  "warto": ["opłaca się", "należy", "wskazane", "korzystnie"],
  "zmieniające": ["modyfikujące", "przekształcające", "transformujące", "ewoluujące"],
  "okoliczności": ["warunki", "sytuacje", "czynniki", "uwarunkowania"],
  "zwolnić": ["spowolnić", "zahamować", "przystopować", "osłabić"],
  "popatrzeć": ["spojrzeć", "zerknąć", "oglądnąć", "obserwować"],
  "stresującej": ["napięta", "nerwowa", "trudna", "wymagająca"]
};

/**
 * Tokenizuje tekst na słowa, zachowując również znaki interpunkcyjne i spacje.
 * @param text Tekst do tokenizacji
 * @returns Tablica tokenów (słowa, znaki interpunkcyjne, spacje)
 */
export const tokenizeText = (text: string): string[] => {
  // Wzorzec rozpoznający słowa, znaki interpunkcyjne i spacje
  const pattern = /([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\w]+|[.,!?;:()[\]{}""''„""—–-]|\s+)/g;
  return text.match(pattern) || [];
};

/**
 * Sprawdza, czy token jest słowem (a nie np. znakiem interpunkcyjnym)
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
 * 
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

  const result = [...tokens];
  const usedSynonyms: Record<number, string> = {};
  
  for (let i = 0; i < message.length; i++) {
    const bit = message[i];
    const tokenIndex = wordIndicesWithSynonyms[i];
    const word = tokens[tokenIndex];
    const synonyms = getSynonyms(word);

    if (synonyms.length > 0) {
      // Bit 0 - używamy oryginalnego słowa
      // Bit 1 - używamy synonimu
      if (bit === '1') {
        // Używamy prostego algorytmu: indeks słowa % liczba dostępnych synonimów
        const synonymIndex = i % synonyms.length;
        const synonym = synonyms[synonymIndex];
        
        // Zapisz użyty synonim w mapie dla tego indeksu tokenów
        usedSynonyms[tokenIndex] = synonym;
        
        result[tokenIndex] = preserveCapitalization(word, synonym);
      }
      // Dla bitu 0 zostawiamy oryginalne słowo
    }
  }

  // Zapisujemy informację o użytych synonimach jako ukrytą właściwość
  // Dzięki temu przy dekodowaniu wiemy, których synonimów użyliśmy
  // Ta właściwość jest przechowywana tylko na czas sesji - nie wpływa na tekst
  (result as any)._usedSynonyms = usedSynonyms;
  
  // Mapujemy zmodyfikowane tokeny i łączymy je w tekst
  return result.join('');
};

/**
 * Ekstrakt wiadomości binarnej ukrytej w tekście.
 * Przepisana funkcja, która wykorzystuje oryginalny tekst, jeśli jest dostępny.
 * 
 * @param encodedText Tekst z ukrytą wiadomością
 * @param originalText Oryginalny tekst (opcjonalnie)
 * @param messageLength Długość ukrytej wiadomości (opcjonalnie)
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

  // Jeśli mamy dostęp do oryginalnego tekstu, to używamy go do dekodowania
  if (originalText) {
    const originalTokens = tokenizeText(originalText);
    const encodedTokens = tokenizeText(encodedText);
    
    // Sprawdź, czy obie wersje tekstu mają tę samą liczbę tokenów
    if (originalTokens.length !== encodedTokens.length) {
      console.warn("Teksty mają różną liczbę tokenów, co może prowadzić do nieprawidłowego dekodowania.");
      // Kontynuujemy mimo to, ale z ostrożnością
    }
    
    let extractedMessage = '';
    let count = 0;
    
    // Znajdź wszystkie słowa w oryginalnym tekście, które mają synonimy
    const wordIndicesWithSynonyms: number[] = [];
    
    for (let i = 0; i < originalTokens.length; i++) {
      const token = originalTokens[i];
      if (isWord(token) && hasSynonyms(token)) {
        wordIndicesWithSynonyms.push(i);
      }
    }
    
    // Teraz porównaj słowa w tych samych pozycjach
    for (let i = 0; i < wordIndicesWithSynonyms.length; i++) {
      const index = wordIndicesWithSynonyms[i];
      
      // Upewnij się, że indeks jest w zakresie obu tablic
      if (index < originalTokens.length && index < encodedTokens.length) {
        const originalWord = originalTokens[index].toLowerCase();
        const encodedWord = encodedTokens[index].toLowerCase();
        
        // Jeśli słowa są różne, oznacza to bit 1, w przeciwnym razie bit 0
        if (originalWord !== encodedWord) {
          extractedMessage += '1';
        } else {
          extractedMessage += '0';
        }
        
        count++;
        
        // Jeśli znamy długość wiadomości, przestańmy po jej uzyskaniu
        if (messageLength && count >= messageLength) {
          break;
        }
      }
    }
    
    return extractedMessage;
  } 
  // Jeśli nie mamy oryginalnego tekstu, używamy poprzedniej metody
  else {
    const encodedTokens = tokenizeText(encodedText);
    let extractedMessage = '';
    
    // Znajdź słowa, które mogą zawierać bity
    const wordIndices: number[] = [];
    
    for (let i = 0; i < encodedTokens.length; i++) {
      const token = encodedTokens[i];
      if (isWord(token)) {
        // Sprawdź czy to słowo jest w słowniku lub jest synonimem
        const tokenLower = token.toLowerCase();
        
        // Słowo jest kluczem w słowniku (bezpośrednio) lub jest synonimem
        if (synonymDictionary[tokenLower] !== undefined || 
            Object.values(synonymDictionary).some(synonyms => synonyms.includes(tokenLower))) {
          wordIndices.push(i);
        }
      }
    }
    
    // Analizuj znalezione słowa
    const maxBits = messageLength || wordIndices.length;
    
    for (let i = 0; i < Math.min(maxBits, wordIndices.length); i++) {
      const tokenIndex = wordIndices[i];
      const token = encodedTokens[tokenIndex];
      const tokenLower = token.toLowerCase();
      
      // Jeśli to słowo bazowe, reprezentuje bit 0
      if (synonymDictionary[tokenLower] !== undefined) {
        extractedMessage += '0';
      } 
      // W przeciwnym razie to synonim, czyli bit 1
      else {
        let foundAsSynonym = false;
        
        // Szukamy, którego słowa to jest synonim
        for (const [baseWord, synonyms] of Object.entries(synonymDictionary)) {
          if (synonyms.includes(tokenLower)) {
            extractedMessage += '1';
            foundAsSynonym = true;
            break;
          }
        }
        
        // Jeśli nie znaleźliśmy jako synonim (coś poszło nie tak), 
        // przyjmujemy bezpieczną wartość 0
        if (!foundAsSynonym) {
          extractedMessage += '0';
          console.warn(`Nie zidentyfikowano słowa '${token}' - przyjęto bit 0`);
        }
      }
    }
    
    // Jeśli podano długość wiadomości, zwróć dokładnie tyle bitów
    if (messageLength !== undefined && messageLength > 0) {
      return extractedMessage.substring(0, messageLength);
    }
    
    return extractedMessage;
  }
};