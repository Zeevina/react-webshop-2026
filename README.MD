När jag startade igång detta projekt började jag med att köra:

npm create vite@latest

Därefter angav projektets namn och valde React som ramverk.


För att starta upp projektet:
- npm run dev (startar upp appen i en dev-server som kontrollerar om ändringar i koden sker. Efter varje ändring laddas appen automatiskt om av servern.)
- och sedan ange detta i en webbläsare: http://localhost:5173/


Innan jag startade igång projektet rensade jag bort filer och kod jag inte kände att jag behövde, mycket också för att starta från en blank sida. 

Jag arbetar mycket med att se till att varje komponent och sida är kopplade så jag började med det traditionella: Skriva "Hello World!".


Vad är målet med detta projekt?
Målet med detta projekt är att lära mig ramverket React och hur komponenter och hooks fungerar. Samtidigt som jag känner att jag har ett överhängande förstånd i hur React fungerar så har jag väldigt repetition framför mig att göra för att förstå det helt och hur allt är kopplat. Projektet har gett mig en insikt över mina bristande områden och hur komplext React kan bli men att det samtidigt är ett kraftfullt ramverk att arbeta med. Jag ser helt enkelt fram emot att få lära mig mer!




Navbar.. Vad är en hemsida utan en Navbar? Jag börjar alltid med en Navbar i mina projekt för det är där allting börjar. Det är den som kan hjälpa användaren att navigera runt på sidan så jag anser att den spelar en viktig roll i ett projekts uppbyggnad. Så jag bestämde mig för att skapa en svart bakgrund med vit text, ganska simpel men en stilren design som är lätt för användaren att se på och tolka.
Jag känner också mig väldigt bekväm vid att använda Browser Router och Links. Tycker inte att jag stötte på några motgångar vid skapandet av min Navbar eller dess tillhörande komponenter. I detta skede i projektet utvecklig är inte Navbaren helt färdig än och kommer inte bli det förrän komponenterna för hur kundvagnen hanteras blir skapad. Användaren ska kunna se i Navbaren hur många produkter samt totala kostnaden denne har.

Jag tycker också om att strukturera upp min kod i mappar och komponenter om så är möjligt. Jag vet att jag kunde bryta ner fler kodblock till mindre komponenter, men har inte haft möjlighet att utföra det pga okunskap och tidsbrist. Här finns ett ypperligt tillfälle för att utveckla mina kunskaper så att jag kan utföra detta.
I detta projekt delas koden in beroende på om de är sidor, komponenter, hooks eller annat i mappar. I större projekt kan jag se många fördelar med att dela upp projektets delar i mindre bitar och fler mappar för att det inte ska bli så rörigt. Även CSS skulle kunna delas upp i mindre filer för att det inte ska bli en lång sida, alternativt använda Tailwind, ett ramverk för CSS. Jag valde dock att använda CSS i detta projekt utan hjälp av Tailwind.


Efter det skapade jag projektet hemsidor, shoppen och kundvagnen. Jag avslutade med att vid checkout skapa en modal när användaren "köper" sina produkter.

Detta projekt har verkligen satt krav på mig. Jag känner verkligen att jag behöver "steppa upp". Jag stötte på många hinder med att få ihop koden och hur de är kopplade med varandra, hur de skickar över sina props till andra funktioner osv. Under sommaruppehållet kommer jag fokusera på att repetera mycket så att det här verkligen sitter när vi börjar med Backend.


DEBOUNCE:
Jag implementerade min Debounce i kundvagnen. När användaren ändrar kvantitet per produkt så blir det en fördröjning innan kvantitet uppdateras i kundvagnen.


TRY-CATCH FELHANTERING:
Just nu har enbart grunden i felhantering implementerats när API ska hämtas. Görs inte detta löper appen stor risk att crasha/sluta fungera. Med TRY så väntar man in för att hämta/"Fetcha" data från en API, och om den lyckas, hämtar och gör om datan till ett läsbart format med hjälp av raden "const data = await res.json();". Om det av någon anledning skulle uppstå fel vid hämtning av data är det viktigt att fånga upp felet för att hindra crashen. 
Detta görs med: 
    catch(error) {
        console.error("Error fetching data: ", error);
    }

Varpå consolen loggar felkoden så att utvecklaren snabbt kan identifiera orsaken till felet. 

