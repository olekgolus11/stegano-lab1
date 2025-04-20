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
