# Steganografia Lingwistyczna

## Opis programu

Aplikacja umożliwia ukrywanie wiadomości binarnych (sekwencji zer i jedynek) w polskich tekstach poprzez wykorzystanie techniki steganografii lingwistycznej. Program wykorzystuje synonimy do zastępowania wybranych słów w tekście, dzięki czemu wiadomość jest ukryta w sposób niewidoczny dla osoby, która nie zna oryginalnej wersji tekstu.

## Jak działa steganografia lingwistyczna?

Steganografia lingwistyczna to metoda ukrywania informacji w tekście poprzez dokonywanie drobnych modyfikacji, które nie zmieniają znaczenia tekstu, ale pozwalają na zakodowanie dodatkowych danych. W przeciwieństwie do klasycznego szyfrowania, gdzie widoczne jest, że wiadomość została zaszyfrowana, steganografia ukrywa sam fakt istnienia tajnej wiadomości.

## Algorytm enkodowania (krok po kroku)

Program wykorzystuje następujący algorytm do ukrywania wiadomości binarnej w tekście:

1. **Tokenizacja tekstu** - Tekst jest dzielony na tokeny (słowa, znaki interpunkcyjne, spacje) z zachowaniem polskich znaków diakrytycznych.

2. **Identyfikacja słów z synonimami** - Program identyfikuje wszystkie słowa w tekście, które mają synonimy w słowniku.

3. **Weryfikacja pojemności tekstu** - Sprawdzane jest, czy w tekście znajduje się wystarczająca liczba słów z synonimami, aby ukryć całą wiadomość binarną (jedno słowo = jeden bit).

4. **Kodowanie bitów**:
   - Dla każdego bitu w wiadomości binarnej wybierane jest kolejne słowo z synonimami.
   - Jeśli bit to **0** - słowo pozostaje bez zmian (używane jest oryginalne słowo).
   - Jeśli bit to **1** - słowo jest zastępowane jego pierwszym synonimem z listy.
   - Wielkość liter jest zachowywana (słowa zaczynające się wielką literą pozostają takimi po zamianie).

5. **Generowanie tekstu wynikowego** - Zmodyfikowane tokeny są łączone z powrotem w tekst, zachowując oryginalny układ i formatowanie.

## Algorytm dekodowania (krok po kroku)


1. **Tokenizacja** obu tekstów (oryginalnego i zakodowanego) na tokeny.

2. **Identyfikacja potencjalnych nośników bitów** - Program identyfikuje wszystkie słowa w oryginalnym tekście, które mają synonimy.

3. **Porównanie odpowiadających sobie słów** - Dla każdego słowa z synonimami:
   - Jeśli słowo w zakodowanym tekście **różni się** od oryginalnego - bit to **1**.
   - Jeśli słowo w zakodowanym tekście **jest takie samo** jak w oryginale - bit to **0**.

4. **Rekonstrukcja wiadomości** - Bity są zbierane w kolejności, w jakiej występują odpowiadające im słowa w tekście.

## Słownik synonimów

Program wykorzystuje obszerny słownik synonimów dla słów w języku polskim, obejmujący:
- Rzeczowniki (np. dom, droga, czas)
- Przymiotniki (np. duży, mały, dobry)
- Czasowniki (np. mówić, widzieć, myśleć)
- Przysłówki (np. bardzo, szybko, wolno)

Każde słowo w słowniku ma przypisany zestaw synonimów (zwykle 4), które mogą je zastąpić bez istotnej zmiany znaczenia tekstu.

## Jak korzystać z aplikacji

### Ukrywanie wiadomości

1. W zakładce "Ukryj wiadomość" wprowadź tekst, w którym chcesz ukryć wiadomość (lub wybierz jeden z przykładów).
2. Wprowadź wiadomość binarną (sekwencję 0 i 1) lub wybierz jeden z przykładów.
3. Kliknij przycisk "Ukryj wiadomość".

### Odczytywanie wiadomości

1. W zakładce "Odczytaj wiadomość" kliknij guzik "Odczytaj wiadomość"
2. Odczytana wiadomość binarna zostanie wyświetlona.


## Ograniczenia

- Tekst musi zawierać wystarczającą liczbę słów z synonimami, aby ukryć całą wiadomość.
- System obsługuje wyłącznie język polski i słowa występujące w zaimplementowanym słowniku synonimów.
