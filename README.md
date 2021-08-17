# Quotes

run application -> https://denekd.github.io/Quotes

aplikacja Quotes pokazuje cytaty uzytkowników oraz komentaze do poszczegołnych cytatów

stack technologiczny:
React, Redux toolkit, React Router, React Form hook, react transition group, 

## Applications features: 
- aplikacja wykorzystuje firebase jako baze danych do przechowywania cytatów, komentarzy oraz do authentication,
- aplikacja posiada system rejestracji nowych uzytkowników i logowania istniejących
- można dodawać nowe cytaty i komentarze oraz do głosować na cytaty,
- obsługa i walidacja folrmularzy przez React form hook,


## Authentication:
- credentials uzytkowników przechowywane na firebase authentication, 
- nowy uzytkownik moze załozyc nowe konto na adres email albo dla lazy uzers:  
            email: test@test.com  
         password: password123
- token zalogowanego uzytkownika przechowywany jest w local storage na ok godzine 
- zalogowany uzytkownik po odswiezeniu strony dalej bedzie zalogownany
- zalogowany uzytkownik może zmienic swoje hasło w ustawieniach swojego konta,
- tylko zalogowani uzytkownicy maję dostęp do dodawania nowych cytatów i komentarzy oraz do głosowania na cytaty,
- nie zalogowani mogą przegladać zawartosć


## State management: 
- Redux Toolkit - dane cytatów i komentarzy,
- React Context - authentication, 

## UI features:
- powiadomienia które informują uzytkownika o prawidłowych lub nie operacjach na bazie danych,
- dark i light mode,
- ikonki z Font Awesome,
- animacje React transition group (nie wszystkie),
- w aplikacji nie korzystałem z bibliotek graficznych takich jak Material UI, Bootsrap itp.,


