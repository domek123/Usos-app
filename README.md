# Dokumentacja Funkcjonalności - System USOS

## Spis treści

1. [Opis projektu](#opis-projektu)
2. [Technologie](#technologie)
3. [Role użytkowników](#role-użytkowników)
4. [Moduły systemu](#moduły-systemu)
5. [Funkcjonalności](#funkcjonalności)
6. [Komponenty](#komponenty)
7. [API i integracje](#api-i-integracje)

---

## Opis projektu

System USOS to aplikacja webowa służąca do zarządzania uczelnią, umożliwiająca obsługę studentów, nauczycieli oraz administratorów. System oferuje kompleksowe rozwiązanie do zarządzania semestrami, zapisami na przedmioty, planem zajęć, ocenami oraz komunikacją wewnętrzną.

---

## Technologie

### Frontend

- **React 19** - biblioteka do budowy interfejsu użytkownika
- **TypeScript** - typowany JavaScript
- **Vite** - narzędzie do budowania aplikacji
- **Material-UI (MUI)** - biblioteka komponentów UI
- **React Router DOM** - routing w aplikacji
- **React Hook Form** - obsługa formularzy
- **Zod** - walidacja danych
- **TanStack React Query** - zarządzanie stanem serwera i cache'owaniem
- **Zustand** - zarządzanie globalnym stanem aplikacji
- **i18next** - internacjonalizacja
- **Axios** - klient HTTP

### Narzędzia deweloperskie

- **ESLint** - linter kodu
- **TypeScript ESLint** - reguły ESLint dla TypeScript

---

## Role użytkowników

System obsługuje trzy główne role użytkowników:

### 1. **ADMIN** (Administrator)

Administrator posiada najszersze uprawnienia w systemie, w tym:

- Pełne zarządzanie semestrami
- Zarządzanie nauczycielami
- Zarządzanie studentami

### 2. **TEACHER** (Nauczyciel)

Nauczyciel ma dostęp do funkcji związanych z prowadzeniem zajęć:

- Przeglądanie studentów
- Wystawianie i edycja ocen

### 3. **STUDENT** (Student)

Student ma dostęp do funkcji związanych z nauką:

- Przeglądanie ocen
- Dostęp do planu zajęć
- Przeglądanie zapisanych przedmiotów

---

## Moduły systemu

### 1. **Moduł autoryzacji**

- Logowanie użytkowników (`/login`)
- Resetowanie hasła (`/forgot-password`)
- Zmiana hasła
- Chronione ścieżki (ProtectedRoute) z weryfikacją uprawnień

### 2. **Panel administratora** (`/admin`)

Administrator ma dostęp do następujących podstron:

#### Zarządzanie semestrami (`/semesters`)

- Wyświetlanie listy semestrów
- Tworzenie nowych semestrów
- Edycja istniejących semestrów
- Usuwanie semestrów
- Ustawianie aktywnego semestru

#### Informacje o semestrze (`/semester`)

- Szczegółowe informacje o wybranym semestrze
- Lista przedmiotów w semestrze
- Zarządzanie przedmiotami:
  - Dodawanie nowych przedmiotów
  - Edycja przedmiotów
  - Usuwanie przedmiotów
  - Otwieranie/zamykanie zapisów na przedmioty

#### Zarządzanie nauczycielami (`/teachers`)

- Lista nauczycieli
- Dodawanie nowych nauczycieli
- Edycja danych nauczycieli
- Usuwanie nauczycieli
- Filtrowanie i wyszukiwanie nauczycieli

#### Zarządzanie studentami (`/students`)

- Lista studentów
- Dodawanie nowych studentów
- Edycja danych studentów
- Usuwanie studentów
- Usuwanie studentów z wydziału
- Filtrowanie i wyszukiwanie studentów

### 3. **Panel nauczyciela** (`/teacher`)

#### Wystawianie ocen (`/teacher-grade`)

- Przeglądanie listy przedmiotów prowadzonych przez nauczyciela
- Wyświetlanie studentów zapisanych na przedmiot
- Wystawianie ocen
- Edycja ocen
- Automatyczne obliczanie oceny końcowej

### 4. **Panel studenta** (`/student`)

#### Oceny (`/grades`)

- Przeglądanie wszystkich ocen
- Filtrowanie ocen według:
  - Semestru
  - Przedmiotu
- Podgląd szczegółów ocen
- Wyświetlanie oceny końcowej

#### Plan zajęć (`/schedule`)

- Wyświetlanie tygodniowego planu zajęć

### 5. **Moduł wiadomości** (`/contact`)

System komunikacji wewnętrznej między użytkownikami:

#### Odebrane wiadomości (`/contact/received`)

- Lista otrzymanych wiadomości
- Oznaczanie wiadomości jako przeczytane
- Szczegóły wiadomości (`/contact/received/:id`)
- Status przeczytania wiadomości

#### Wysłane wiadomości (`/contact/sent`)

- Lista wysłanych wiadomości
- Szczegóły wysłanych wiadomości (`/contact/sent/:id`)

#### Tworzenie wiadomości (`/contact/create`)

- Formularz nowej wiadomości
- Wybór odbiorcy
- Temat i treść wiadomości
- Wysyłanie wiadomości

### 6. **Dashboard** (`/`)

- Główny ekran po zalogowaniu
- Podsumowanie informacji dla użytkownika
- Szybki dostęp do najważniejszych funkcji

### 7. **Przeglądanie studentów** (`/student`)

Funkcjonalność dostępna dla nauczycieli i administratorów:

- Szczegółowe informacje o studentach

---

## Funkcjonalności

### Zarządzanie danymi (CRUD Operations)

#### Studenci

- **Dodawanie**: Formularz z danymi osobowymi i przypisanie do wydziału
- **Edycja**: Modyfikacja danych osobowych studenta
- **Usuwanie**:
  - Usunięcie studenta z systemu
  - Usunięcie studenta z wydziału
  - Usunięcie zapisu studenta na przedmiot
- **Przypisywanie**: Przypisywanie studentów do semestrów
- **Zapisy**: Zapisywanie studentów na przedmioty

#### Nauczyciele

- **Dodawanie**: Formularz z danymi osobowymi nauczyciela
- **Edycja**: Modyfikacja danych osobowych nauczyciela
- **Usuwanie**: Usunięcie nauczyciela z systemu

#### Semestry

- **Dodawanie**: Tworzenie nowego semestru z datami początku i końca
- **Edycja**: Modyfikacja parametrów semestru
- **Usuwanie**: Usunięcie semestru z systemu
- **Aktywacja**: Ustawianie aktywnego semestru

#### Przedmioty

- **Dodawanie**: Tworzenie przedmiotu w ramach semestru
- **Edycja**: Modyfikacja parametrów przedmiotu
- **Usuwanie**: Usunięcie przedmiotu z semestru
- **Zarządzanie zapisami**: Otwieranie/zamykanie zapisów na przedmiot
- **Typy przedmiotów**: LAB (Laboratorium), EXAM (Egzamin), PROJECT (Projekt)

#### Plan zajęć

- **Dodawanie wydarzeń**: Tworzenie nowych zajęć w planie
- **Edycja wydarzeń**: Modyfikacja szczegółów zajęć
- **Usuwanie wydarzeń**: Usunięcie zajęć z planu
- **Informacje zawierają**:
  - Dzień tygodnia (poniedziałek-piątek)
  - Godziny zajęć
  - Sala
  - Typ zajęć
  - Nauczyciel prowadzący
  - Przedmiot

#### Oceny

- **Wystawianie**: Nauczyciel przypisuje ocenę studentowi
- **Edycja**: Modyfikacja wystawionej oceny
- **Obliczanie oceny końcowej**: Automatyczne wyliczanie średniej

### Filtrowanie i wyszukiwanie

System oferuje zaawansowane możliwości filtrowania danych:

#### Filtry dla studentów

- Wyszukiwanie po imieniu/nazwisku
- Filtrowanie według wydziału
- Filtrowanie według semestru

#### Filtry dla planu zajęć

- Według semestru
- Według roku studiów
- Według nauczyciela
- Według dnia tygodnia

#### Filtry dla ocen

- Według semestru
- Według przedmiotu
- Według typu przedmiotu

### System wiadomości

#### Funkcje komunikacji

- Wysyłanie wiadomości do innych użytkowników
- Odbieranie wiadomości
- Oznaczanie wiadomości jako przeczytane
- Przeglądanie historii wiadomości
- Osobne widoki dla wiadomości wysłanych i odebranych

### Autoryzacja i bezpieczeństwo

#### Ochrona ścieżek (ProtectedRoute)

- Weryfikacja zalogowania użytkownika
- Kontrola dostępu na podstawie ról
- Przekierowanie niezalogowanych użytkowników do strony logowania
- Blokada dostępu do nieautoryzowanych zasobów

#### Zarządzanie sesją

- Przechowywanie danych użytkownika w globalnym stanie
- Automatyczne wylogowanie przy braku autoryzacji
- Bezpieczne przechowywanie tokenów

---

## Komponenty

### Komponenty formularzy

#### FormTextField

Pole tekstowe z integracją React Hook Form:

- Walidacja w czasie rzeczywistym
- Wyświetlanie błędów walidacji
- Obsługa różnych typów inputów

#### CustomButton

Przycisk z niestandardowym stylem:

- Różne warianty (primary, secondary, text)
- Obsługa stanów loading
- Ikony

#### CustomSelect

Lista rozwijana:

- Dynamiczne ładowanie opcji
- Obsługa wielokrotnego wyboru
- Filtrowanie opcji

#### CustomDropdown

Menu rozwijane:

- Akcje kontekstowe
- Integracja z menu Material-UI

#### YearSelect

Komponent do wyboru roku studiów:

- Lista dostępnych lat
- Integracja z filtrowaniem

#### TeacherSelect

Komponent do wyboru nauczyciela:

- Lista nauczycieli z systemu
- Wyszukiwanie nauczyciela

#### SearchInput

Pole wyszukiwania:

- Debouncing dla optymalizacji
- Ikona wyszukiwania
- Obsługa czyszczenia

### Komponenty tabel

#### DefaultTableContainer

Kontener dla tabel z domyślnym układem:

- Responsywność
- Stylizacja Material-UI
- Sortowanie kolumn
- Paginacja

#### StyledTableCell

Stylizowana komórka tabeli:

- Spójny wygląd
- Responsywność

### Komponenty modali

#### ModalContainer

Główny kontener dla okien modalnych:

- Centrowanie na ekranie
- Obsługa zamykania
- Backdrop

#### ModalHeader

Nagłówek modala:

- Tytuł
- Przycisk zamknięcia

#### ModalFooter

Stopka modala:

- Przyciski akcji (zapisz, anuluj)
- Układ przycisków

### Komponenty planu zajęć

#### ScheduleTable

Główna tabela planu zajęć:

- Podział na dni tygodnia
- Wyświetlanie godzin
- Responsywny układ

#### ScheduleBody

Ciało tabeli planu:

- Komórki z wydarzeniami
- Informacje o zajęciach
- Obsługa kliknięć

#### AddEditScheduleEventModal

Modal do dodawania/edycji zajęć:

- Formularz z walidacją
- Wybór dnia, godzin, sali
- Wybór przedmiotu i nauczyciela

#### ScheduleInfoModal

Modal z informacjami o zajęciach:

- Szczegóły zajęć
- Opcje edycji/usunięcia

### Komponenty menu

#### EditDeleteMenu

Menu z opcjami edycji i usuwania:

- Ikona trzech kropek
- Lista akcji
- Potwierdzenia usunięcia

#### InfoContainer

Kontener na informacje:

- Wyświetlanie szczegółów
- Układ karty

---

## API i integracje

### Hooki do pobierania danych (fetch hooks)

- `useFetchCurrentSemester` - pobranie aktywnego semestru
- `useFetchFaculties` - lista wydziałów
- `useFetchFilteredStudents` - filtrowana lista studentów
- `useFetchMessages` - wiadomości użytkownika
- `useFetchPersonData` - dane osobowe użytkownika
- `useFetchScheduleEvents` - wydarzenia w planie zajęć
- `useFetchSemesterSubjects` - przedmioty w semestrze
- `useFetchSemesters` - lista semestrów
- `useFetchStudentSemesters` - semestry studenta
- `useFetchStudents` - lista studentów
- `useFetchTeachers` - lista nauczycieli
- `useFetchYears` - lista lat studiów

### Hooki do zapisu danych (post hooks)

- `useAddEditScheduleEvent` - dodawanie/edycja wydarzenia w planie
- `useAddEditStudent` - dodawanie/edycja studenta
- `useAddEditSubject` - dodawanie/edycja przedmiotu
- `useAddEditTeacher` - dodawanie/edycja nauczyciela
- `useAddEnrollment` - zapisanie studenta na przedmiot
- `useAddSemester` - dodawanie semestru
- `useAssignSemestersToStudent` - przypisanie semestrów do studenta
- `useChangePassword` - zmiana hasła
- `useCloseOpenSubject` - otwieranie/zamykanie zapisów na przedmiot
- `useCreateMessage` - tworzenie wiadomości
- `useEditGrade` - edycja oceny
- `useEditSemester` - edycja semestru
- `useLogin` - logowanie
- `useMarkAsRead` - oznaczanie wiadomości jako przeczytanej
- `useSetActiveSemester` - ustawianie aktywnego semestru

### Hooki do usuwania danych (delete hooks)

- `useDeletePerson` - usuwanie osoby z systemu
- `useDeleteSubject` - usuwanie przedmiotu
- `useDeleteSemester` - usuwanie semestru
- `useDeleteStudentFromFaculty` - usuwanie studenta z wydziału
- `useDeleteStudentEnrollment` - usuwanie zapisu studenta na przedmiot
- `useDeleteStudentSemester` - usuwanie przypisania studenta do semestru
- `useDeleteScheduleEvent` - usuwanie wydarzenia z planu

### Zarządzanie stanem globalnym (Zustand stores)

#### useUserStore

Przechowuje dane zalogowanego użytkownika:

- Informacje o użytkowniku
- Rola użytkownika
- Stan zalogowania

#### useFacultyStore

Przechowuje dane o wydziałach:

- Aktywny wydział

### Konteksty (React Context)

#### ModalContext

Zarządzanie modalami w aplikacji:

- Otwieranie modali
- Zamykanie modali
- Stan modali
- Provider dla całej aplikacji

---

## Walidacja i obsługa błędów

### Walidacja formularzy

- Wykorzystanie biblioteki Zod do definiowania schematów
- Integracja z React Hook Form przez @hookform/resolvers
- Walidacja w czasie rzeczywistym
- Wyświetlanie komunikatów błędów pod polami

### Obsługa błędów API

- Centralna obsługa błędów w hooków
- Wyświetlanie komunikatów toast
- Rollback optymistycznych aktualizacji
- Logowanie błędów

### Przykład walidacji (AddEditScheduleEventModalValidation)

```typescript
- Walidacja dnia tygodnia
- Walidacja czasu rozpoczęcia i zakończenia
- Walidacja sali
- Walidacja wybranego przedmiotu
```

---

## Internationalization (i18n)

System obsługuje wielojęzyczność przez bibliotekę i18next:

- Tłumaczenia przechowywane w katalogu `src/i18n/resources/`
- Dynamiczna zmiana języka
- Wsparcie dla różnych języków
- Formatowanie dat i liczb według locale

---

## Utilities

### calculateFinalGrade

Funkcja do obliczania oceny końcowej na podstawie ocen cząstkowych:

- Uwzględnia wagi różnych ocen
- Zwraca średnią ważoną

### convertToDays

Konwersja reprezentacji dni:

- Z formatu systemowego na format wyświetlania
- Mapowanie enum Days

### formatTeacherData

Formatowanie danych nauczyciela:

- Łączenie imienia i nazwiska
- Formatowanie do wyświetlania w selectach

### parseToHHMM

Parsowanie czasu do formatu HH:MM:

- Walidacja formatu czasu
- Konwersja z różnych formatów

### GradeFormatter

Komponent do formatowania wyświetlania ocen:

- Kolorowanie według wartości
- Ikony dla różnych typów ocen

---

## Struktura projektu

```
src/
├── api/              # Konfiguracja API i klienta HTTP
├── components/       # Komponenty wielokrotnego użytku
├── context/          # Konteksty React
├── hooks/            # Custom hooki
│   ├── delete/       # Hooki do usuwania danych
│   ├── fetch/        # Hooki do pobierania danych
│   └── post/         # Hooki do zapisu danych
├── i18n/             # Konfiguracja internationalization
├── pages/            # Strony aplikacji
│   ├── adminPanel/   # Strony panelu administratora
│   ├── studentPanel/ # Strony panelu studenta
│   └── teacherPanel/ # Strony panelu nauczyciela
├── routes/           # Konfiguracja routingu
├── stores/           # Globalne store Zustand
├── styles/           # Stylizowane komponenty
├── theme/            # Konfiguracja motywu Material-UI
├── types/            # Definicje typów TypeScript
│   ├── dto/          # Data Transfer Objects
│   ├── responses/    # Typy odpowiedzi API
│   └── enums.ts      # Enumy
└── utils/            # Funkcje pomocnicze
```

---

## Typy przedmiotów

System rozróżnia trzy typy przedmiotów:

- **LAB** (Laboratorium) - zajęcia praktyczne
- **EXAM** (Egzamin) - egzaminy
- **PROJECT** (Projekt) - projekty studenckie

---

## Dni tygodnia

System obsługuje plan zajęć dla dni od poniedziałku do piątku:

- MONDAY (Poniedziałek)
- TUESDAY (Wtorek)
- WEDNESDAY (Środa)
- THURSDAY (Czwartek)
- FRIDAY (Piątek)

---

## Wymagania systemowe

### Minimalne wymagania

- Node.js w wersji 18 lub wyższej
- Przeglądarka wspierająca ES6+
- Połączenie z internetem (dla API)

### Rekomendowane

- Node.js w wersji 20+
- Nowoczesna przeglądarka (Chrome, Firefox, Safari, Edge)

---

## Uruchamianie aplikacji

### Instalacja zależności

```bash
npm install
```

### Uruchomienie w trybie deweloperskim

```bash
npm run dev
```

### Budowanie do produkcji

```bash
npm run build
```

### Podgląd buildu produkcyjnego

```bash
npm run preview
```

### Sprawdzanie jakości kodu

```bash
npm run lint
```

---

## Możliwości rozwoju

System może zostać rozszerzony o następujące funkcjonalności:

1. **Moduł płatności** - obsługa opłat za studia
2. **Biblioteka** - wypożyczanie książek
3. **Ankiety** - ocena zajęć przez studentów
4. **Obecności** - rejestracja obecności na zajęciach
5. **Dyplomy** - zarządzanie pracami dyplomowymi
6. **Raporty** - generowanie raportów i statystyk
7. **Powiadomienia push** - powiadomienia w czasie rzeczywistym
8. **Kalendarz akademicki** - wydarzenia uczelni
9. **Forum** - forum dyskusyjne dla studentów
10. **API publiczne** - udostępnienie API dla zewnętrznych aplikacji

---

## Kontakt i wsparcie

W przypadku pytań lub problemów z systemem:

- Skorzystaj z wbudowanego modułu wiadomości
- Skontaktuj się z administratorem systemu
- Sprawdź dokumentację techniczną

---

_Dokumentacja wersja 1.0 - Grudzień 2025_
