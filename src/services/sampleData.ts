/**
 * Przykładowe polskie teksty do testowania steganografii lingwistycznej.
 * Teksty zawierają wiele słów, które mają synonimy w naszym słowniku.
 */
export const sampleTexts = {
    short: `Dom, w którym mieszkam, znajduje się przy głównej drodze. Każdego dnia widzę, jak ludzie spieszą się do pracy. Myślę, że czas płynie bardzo szybko, gdy jesteśmy zajęci. Osoba, która potrafi dobrze zarządzać swoim dniem, zawsze znajdzie sposób na rozwiązanie trudnych problemów. W dzisiejszym świecie mamy duży wybór metod na polepszenie naszej sytuacji. Stary sposób myślenia nie zawsze jest zły, ale nowy często przynosi ciekawe rozwiązania.
    
Stary sposób myślenia nie zawsze jest zły, ale nowy często przynosi ciekawe rozwiązania. Miejsce, w którym się znajdujemy, wpływa na nasz nastrój. Chcieć to móc - tak mówi znane przysłowie. Trudne chwile zawsze mijają, tyle.`,

    medium: `Dom, w którym mieszkam, znajduje się przy głównej drodze. Każdego dnia widzę, jak ludzie spieszą się do pracy. Myślę, że czas płynie bardzo szybko, gdy jesteśmy zajęci. Osoba, która potrafi dobrze zarządzać swoim dniem, zawsze znajdzie sposób na rozwiązanie trudnych problemów. W dzisiejszym świecie mamy duży wybór metod na polepszenie naszej sytuacji. 

Stary sposób myślenia nie zawsze jest zły, ale nowy często przynosi ciekawe rozwiązania. Miejsce, w którym się znajdujemy, wpływa na nasz nastrój. Chcieć to móc - tak mówi znane przysłowie. Trudne chwile zawsze mijają, a dobre wspomnienia zostają z nami na zawsze.
  
Droga do sukcesu bywa kręta, ale warto nią podążać. Bardzo ważne jest, aby szybko reagować na zmieniające się okoliczności. Dobrze jest czasem zwolnić i popatrzeć na świat z innej perspektywy. Myśleć jasno w stresującej sytuacji to prawdziwa sztuka.`,

    long: `Dom, w którym mieszkam, znajduje się przy głównej drodze. Każdego dnia widzę, jak ludzie spieszą się do pracy. Myślę, że czas płynie bardzo szybko, gdy jesteśmy zajęci. Osoba, która potrafi dobrze zarządzać swoim dniem, zawsze znajdzie sposób na rozwiązanie trudnych problemów. W dzisiejszym świecie mamy duży wybór metod na polepszenie naszej sytuacji.
  
Stary sposób myślenia nie zawsze jest zły, ale nowy często przynosi ciekawe rozwiązania. Miejsce, w którym się znajdujemy, wpływa na nasz nastrój. Chcieć to móc - tak mówi znane przysłowie. Trudne chwile zawsze mijają, a dobre wspomnienia zostają z nami na zawsze.
  
Droga do sukcesu bywa kręta, ale warto nią podążać. Bardzo ważne jest, aby szybko reagować na zmieniające się okoliczności. Dobrze jest czasem zwolnić i popatrzeć na świat z innej perspektywy. Myśleć jasno w stresującej sytuacji to prawdziwa sztuka.
  
Mały gest może mieć duże znaczenie w odpowiednim momencie. Osoba, z którą rozmawiamy, czuje, czy jesteśmy szczerzy. Dać komuś szansę to często najlepszy prezent. Wolno podejmować decyzje, ale trzeba być konsekwentnym w działaniu.
  
Wszędzie dobrze, ale w domu najlepiej - to zdanie ma w sobie dużo prawdy. Nigdy nie jest za późno, aby zacząć od nowa. Dzień bez uśmiechu to dzień stracony. Praca, którą wykonujemy z pasją, nie jest ciężarem. Czas jest najcenniejszym zasobem, jaki posiadamy. Sposób, w jaki go wykorzystujemy, definiuje nasze życie. Znajdować radość w małych rzeczach to wielka sztuka. Zły nastrój można zmienić dobrą książką lub rozmową z bliską osobą. Czekać cierpliwie to nie to samo, co marnować czas.
  
Marzenia są jak gwiazdy - trudno je złapać, ale wskazują nam kierunek. Spokój umysłu jest kluczem do jasnego myślenia. Czasami trzeba odpuścić, aby zyskać coś cenniejszego. Historia uczy nas, że każda epoka ma swoje wyzwania i trudności. Świat jest pełen pięknych miejsc, które czekają na odkrycie. Podróż może być równie ważna jak cel, do którego zmierzamy.`,
};

/**
 * Przykładowe wiadomości binarne do testowania.
 */
export const sampleBinaryMessages = {
    short: "10101010", // 8 bitów
    medium: "1100110011001100110011001100110011001100", // 40 bitów
    long: "1010101010101010101010101010101010101010101010101010101010101010", // 64 bity
};

/**
 * Teksty do testowania steganografii lingwistycznej.
 * Trzy typy tekstów: naukowy, literacki i publicystyczny, każdy po około 200 słów.
 */

// Teksty testowe
export const testTexts = {
    // Tekst naukowy (213 słów)
    scientific: `Współczesne badania w dziedzinie kognitywistyki wskazują na istotne powiązania między strukturą językową a procesami poznawczymi człowieka. Analiza tego zagadnienia wymaga interdyscyplinarnego podejścia, łączącego elementy lingwistyki, psychologii oraz neurobiologii. Podstawowym założeniem jest teza, że język nie tylko służy do komunikacji, ale również wpływa na sposób postrzegania rzeczywistości.

Wyniki eksperymentów przeprowadzonych na grupie zróżnicowanej kulturowo pokazują, że osoby mówiące różnymi językami wykazują odmienne wzorce kategoryzacji obiektów oraz inne strategie rozwiązywania problemów przestrzennych. Zjawisko to można zaobserwować szczególnie wyraźnie w przypadku języków posiadających rozbudowane systemy określania kierunków geograficznych zamiast egocentry cznych odniesień przestrzennych.

Badania przy użyciu funkcjonalnego rezonansu magnetycznego ujawniają, że podczas przetwarzania zdań o różnej złożoności syntaktycznej aktywują się odmienne obszary mózgu. Dla struktur prostych obserwuje się głównie aktywność lewej półkuli, natomiast zdania złożone angażują bardziej rozległe sieci neuronowe, włączając rejony czołowe odpowiedzialne za funkcje wykonawcze.

Przedstawione dane sugerują, że doświadczenie językowe może prowadzić do długotrwałych zmian w organizacji mózgu. Teoria względności językowej, choć kontrowersyjna w swojej silnej wersji, znajduje potwierdzenie w wynikach badań nad wpływem gramatyki na pamięć epizodyczną. Zaobserwowano, że użytkownicy języków z obowiązkowym oznaczaniem aspektu czasownika wykazują lepszą pamięć szczegółów zdarzeń.

Powyższe odkrycia mają potencjalne zastosowanie w projektowaniu skuteczniejszych metod nauczania, terapii zaburzeń językowych oraz rozwoju systemów sztucznej inteligencji uwzględniających kulturowe i językowe zróżnicowanie użytkowników.`,

    // Tekst literacki (206 słów)
    literary: `Stary zegar wybijał północ, gdy Marcin przekroczył próg opuszczonego domu na wzgórzu. Wiatr szarpał gałęziami drzew za oknem, tworząc na ścianach tańczące cienie, które zdawały się obserwować każdy jego krok. Drewniana podłoga skrzypiała pod jego stopami, jakby chciała zdradzić jego obecność niewidzialnym mieszkańcom tego zapomnianego miejsca.

W powietrzu unosił się zapach starych książek i wilgoci, przywodzący na myśl odległe wspomnienia z dzieciństwa. Marcin czuł, jak jego serce przyspiesza, gdy jego dłoń dotknęła chłodnej klamki drzwi prowadzących do biblioteki. Wiedział, że właśnie tam znajdzie odpowiedź na pytanie, które dręczyło go od miesięcy.

Księżycowa poświata wpadająca przez zakurzone okno oświetlała stary sekretarzyk, na którym leżał pozłacany klucz. Ostrożnie podniósł go, ważąc w dłoni, jakby próbował odgadnąć jego tajemnicę. Na ścianie wisiał portret kobiety o smutnych oczach, które zdawały się śledzić każdy jego ruch.

Nagle usłyszał szept - cichy, ale wyraźny, dobiegający zza półek z książkami. Zastygł w bezruchu, wstrzymując oddech. Czy to tylko wytwór jego wyobraźni, czy może dom próbował z nim rozmawiać? Zrozumiał wtedy, że granica między rzeczywistością a złudzeniem jest znacznie cieńsza, niż kiedykolwiek przypuszczał.

Wspomnienia są jak duchy, pomyślał, zawsze znajdą sposób, by nas nawiedzić, nieważne jak daleko próbujemy uciec.`,

    // Tekst publicystyczny (203 słowa)
    journalistic: `Kryzys mieszkaniowy w Polsce przybiera na sile, stawiając młode pokolenie przed trudnymi wyborami życiowymi. Rosnące ceny nieruchomości, zwłaszcza w dużych miastach, dawno już przestały odpowiadać realnym możliwościom finansowym przeciętnego obywatela. Eksperci alarmują, że bez systemowych rozwiązań, problem będzie się pogłębiać.

Według najnowszych danych, średnia cena mieszkania w Warszawie przekroczyła 13 tysięcy złotych za metr kwadratowy, co sprawia, że zakup własnego lokum staje się nieosiągalnym marzeniem dla wielu młodych ludzi. Kredyt hipoteczny, niegdyś postrzegany jako rozwiązanie, dziś często oznacza zobowiązanie finansowe na kilkadziesiąt lat, obciążające domowy budżet w niepokojącym stopniu.

Rząd zapowiada wprowadzenie programu wsparcia dla osób poszukujących pierwszego mieszkania, jednak krytycy wskazują, że proponowane rozwiązania mogą paradoksalnie doprowadzić do dalszego wzrostu cen. Historia poprzednich programów dotacyjnych pokazuje, że mogą one przynosić korzyści głównie deweloperom.

Samorządy próbują reagować lokalnymi inicjatywami mieszkaniowymi, ale skala problemu przerasta ich możliwości. Budownictwo społeczne, choć potrzebne, rozwija się zbyt wolno, by zaspokoić istniejące potrzeby. Tymczasem młodzi Polacy coraz częściej rozważają emigrację jako sposób na rozwiązanie swojej sytuacji mieszkaniowej.

Eksperci podkreślają, że skuteczna strategia mieszkaniowa musi łączyć różne formy wsparcia, uwzględniające zarówno aspekty podażowe, jak i popytowe rynku. Czy decydenci znajdą odwagę, by wprowadzić konieczne reformy?`,
};

// Przykładowe teksty do testowania steganografii
// Każdy tekst zawiera około 200 słów

// Tekst naukowy
export const scientificText = `Współczesne badania interdyscyplinarne w zakresie nauk kognitywnych wymagają integracji wiedzy z różnych dziedzin, takich jak psychologia, neurobiologia i informatyka. Analizy przeprowadzane w ostatnich latach pokazują wyraźne powiązania między strukturą języka a funkcjami poznawczymi mózgu. Neuronalne podstawy językowej komunikacji stanowią obecnie jeden z głównych obszarów zainteresowania naukowców. Wyniki obserwacji sugerują, że mechanizmy przetwarzania informacji językowych aktywują odmienne sieci neuronowe w zależności od charakterystyki bodźca.

Badania prowadzone przy użyciu zaawansowanych technik obrazowania mózgu pozwalają zrozumieć, jak różne elementy języka wpływają na pracę poszczególnych struktur mózgowych. Paradoksalnie, mimo rozwoju technologii, wiele fundamentalnych pytań pozostaje bez jednoznacznej odpowiedzi. Szczególnie interesująca wydaje się teza o wpływie dwujęzyczności na poprawę funkcji poznawczych.

Metodologia stosowana w tych badaniach musi uwzględniać złożone zależności między zmiennymi. Dane zbierane długotrwale od zróżnicowanych grup uczestników pozwalają na formułowanie bardziej precyzyjnych wniosków. Zaobserwowano, że osoby posługujące się kilkoma językami wykazują większą elastyczność poznawczą. Zastosowanie metod ilościowych i jakościowych daje możliwość kompleksowej analizy tego zjawiska. W kontekście edukacyjnym, wyniki tych badań mogą służyć projektowaniu skuteczniejszych metod nauczania. Współczesne podejście do problemu wymaga uwzględnienia zarówno kulturowych, jak i biologicznych uwarunkowań funkcjonowania mózgu.`;

// Tekst literacki
export const literaryText = `Wiatr unosił delikatne cienie wspomnień, gdy przekroczył próg starego domu. Każdy krok przyspieszał bicie jego serca, a drewniana podłoga skrzypiała pod stopami, jakby chciała opowiedzieć wszystkie historie, których była świadkiem. Zapach kurzu mieszał się z wonią starych książek, tworząc niepowtarzalną mieszankę przeszłości.

Ostrożnie dotknął chłodnej klamki, otwierając drzwi do pokoju, którego nie widział od dwudziestu lat. Światło słoneczne oświetlało zapomniane przedmioty, nadając im magiczny blask. Wspomnienia zaczęły powracać – głosy, śmiech, dawne rozmowy.

Usiadł na starym krześle przy oknie, przez które widać było rozległy ogród, teraz zaniedbany i dziki. Cienie drzew tańczyły na ścianach, tworząc obrazy z przeszłości. Usłyszał ciche kroki, choć dobrze wiedział, że jest sam. To tylko pamięć gra swoje kapryśne melodie, pomyślał z lekkim uśmiechem.

Młody mężczyzna, którego niegdyś znał, patrzył na niego teraz z zakurzonej fotografii. Oczy pełne nadziei i marzeń, których większość pozostała niespełniona. Po policzkach spłynęły łzy, gdy zrozumiał, jak wiele czasu upłynęło, jak wiele szans zostało utraconych.

Stare drewniane pudełko na parapecie przyciągnęło jego wzrok. Znajdował w nim kiedyś swoje najcenniejsze skarby. Z bijącym sercem podniósł wieko, odsłaniając tajemnice przeszłości, których nigdy nie potrafił zapomnieć.`;

// Tekst publicystyczny
export const journalisticText = `Kryzys mieszkaniowy w Polsce przybiera alarmujące rozmiary. Ceny nieruchomości w dużych miastach przekroczyły poziom dostępności dla przeciętnej rodziny, stawiając pod znakiem zapytania przyszłość młodego pokolenia. Eksperci rynku nieruchomości wskazują na systemowe przyczyny tego zjawiska oraz przestają wierzyć w skuteczność dotychczasowych rozwiązań.

Rosnące koszty materiałów budowlanych, ograniczona podaż gruntów oraz niewydolność procedur administracyjnych sprawiają, że budowanie mieszkań staje się coraz droższe. Jednocześnie niskie stopy procentowe w ostatnich latach spowodowały wzrost zainteresowania nieruchomościami jako formą inwestycji, co dodatkowo napędziło spiralę cenową.

Rząd zapowiada wprowadzenie programu wsparcia dla osób poszukujących pierwszego mieszkania, jednak analitycy podkreślają, że podobne inicjatywy w przeszłości często prowadziły do dalszego wzrostu cen. Rozważane są również zmiany w prawie budowlanym, które miałyby uprościć i przyspieszyć procesy inwestycyjne.

Samorządy miejskie stoją przed wyzwaniem zwiększenia dostępności mieszkaniowej przy jednoczesnym zachowaniu ładu przestrzennego. Budownictwo społeczne i komunalne, choć potrzebne, nie jest w stanie zaspokoić całości popytu. Eksperci zgodnie twierdzą, że rozwiązanie problemu wymaga skoordynowanych działań na wielu płaszczyznach.

Alternatywne formy zamieszkiwania, takie jak kooperatywy mieszkaniowe czy najem długoterminowy, zyskują na popularności, szczególnie wśród młodych mieszkańców miast.`;
