# React alkalmazások fejlesztése Frontend óra | 5. heti anyag

## Miket tanulunk meg ebben a blokkban?

+ Side effect

	```
        let guest = 0;

        function Cup() {
            guest = guest + 1; // hibás kód: mert meglévő változót használunk!
            return <h2>Tea cup for guest #{guest}</h2>;
        }

        export default function TeaSet() {
            return (
                <>
                    <Cup />
                    <Cup />
                    <Cup />
                </>
            );
        }

        Megjegyzés: ezt a részt csak a props-k létjogosultsága miatt hagyom itt.

        Kimenet: 

        Tea cup for guest #2
        Tea cup for guest #4
        Tea cup for guest #6
	```
	
+ Interaktivitás (eseménykezelés):

    ```
        <button onClick={ ()=>{ alert('Ide kattintott!')} }>Kattints ide!</button>
    ```

+ Komponens memória, azaz useState-ek:
    ```
        const [count, setCount] = useState(0)

        <button onClick={ ()=>{ setCount(count => count+1) } }>Növel</button>

        <p>{count}</p>        

        Megjegyzés: typeScript esetén: const [count, setCount] = useState<Number>(0)

    ```

+ Komponens memória és egyszerű űrlapmező:

    ```
        const [name, setName] = useState<string>("");
        <input 
            type="text" 
            placeholder="Név" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
        />

        <p>Név: {name}</p>
    ```
    
+ Lista kezelése useState segítségével:

    ```
        const [items, setItems] = useState<string[]>([]);
        const [input, setInput] = useState<string>("");

        const addItem = () => {

            if (input) {
                setItems([...items, input]);
                setInput("");
            }
        };

        return (
            <div>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Adj hozzá egy elemet" 
                />
                <button onClick={addItem}>Hozzáadás</button>
                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index}>{item}</li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    ```

+ Filterezés:

    ```
        const [items] = useState<string[]>(['Alma', 'Banán', 'Narancs', 'Körte', 'Szőlő']);
        const [filter, setFilter] = useState<string>('');

        const filteredItems = items.filter(item => 
            item.toLowerCase().includes(filter.toLowerCase())
        );    

        return (
            <div>
                <input 
                type="text" 
                placeholder="Keresés..." 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)} 
                />
                <ul>
                    {
                    filteredItems.map( (item, index) => ( <li key={index}>{item}</li> ) )
                    }
                </ul>
            </div>
        );        
    ```

# React – Feladatok a `useState` gyakorlására

## 1. feladat – Kapcsolo

**Téma:** `useState`, eseménykezelés, feltételes megjelenítés, `props`.

Hozz létre egy új Vite + React alkalmazást `Kapcsolo` néven!

### Kötelező feladatok

**1. Fejlec komponens**

A fejlécben az alábbi cím jelenjen meg:

`Kapcsoló – Állapotkezelés a Reactben`

**2. ReactKapcsolo komponens**

Készíts egy egyszerű kapcsolót, amely egy gomb megnyomásával váltogatja az állapotát:

- Bekapcsolt állapot: „Be”
- Kikapcsolt állapot: „Ki”

Az állapotot `useState` segítségével kezeld!

**3. KepBetolto komponens**

Keress két képet egy izzóról: egyet kikapcsolt, egyet bekapcsolt állapotban!

Készíts egy `KepBetolto` komponenst, amely `props` segítségével kapja meg a kép URL-jét, és megjeleníti a képet.

A `ReactKapcsolo` komponensben a kapcsoló állapotának megfelelő kép jelenjen meg!

A képek forrásaként használhatod a W3Schools izzós példáját:

https://www.w3schools.com/js/tryit.asp?filename=tryjs_lightbulb

A hivatkozás egy működő példára mutat; a megfelelő képek URL-jét külön ellenőrizd.

**4. Lablec komponens**

Használd fel újra az előző feladatban elkészített `Lablec` komponenst! A láblécben az aktuális feladat adatai szerepeljenek.

---

## 2. feladat – ColorChanger

**Téma:** `useState`, eseménykezelés, dinamikus stílusbeállítás.

Hozz létre egy új Vite + React alkalmazást `ColorChanger` néven!

### Kötelező feladatok

**1. Fejlec komponens**

A fejléc címe:

`Color Changer`

**2. ColorChanger komponens**

Készíts egy komponenst, amelyben egy gomb megnyomásakor véletlenszerű színre változik az oldal háttere!

Követelmények:

- A háttérszínt `useState` segítségével tárold!
- A gomb minden megnyomásakor generálj egy új színt!
- A kiválasztott színt dinamikusan alkalmazd az oldalra!
- A gomb felirata legyen „Új szín generálása”!

**3. Lablec komponens**

Használd fel újra a korábban elkészített `Lablec` komponenst az aktuális adatokkal!

---

## 3. feladat – SzovegFuggvenyek

**Téma:** `useState`, űrlapkezelés, szövegkezelő függvények.

Hozz létre egy új Vite + React alkalmazást `SzovegFuggvenyek` néven!

### Kötelező feladatok

**1. Fejlec komponens**

A fejléc címe:

`Feladat szövegfüggvényekkel`

**2. SzovegKezeloFuggvenyek komponens**

Készíts egy szövegkezelő alkalmazást az alábbi funkciókkal!

- Hozz létre egy szövegbeviteli mezőt!
- A beviteli mező alatt jelenítsd meg az aktuális szöveget!
- Gépelés közben jelenjen meg a beírt karakterek száma:
  - „Még nem írt be egyetlen karaktert sem.”
  - „A beírt karakterek száma: XY.”
- Készíts egy „Nagybetűs” gombot, amely a megjelenített szöveget csupa nagybetűssé alakítja!
- Készíts egy „Kisbetűs” gombot, amely a megjelenített szöveget csupa kisbetűssé alakítja!
- Készíts egy „Visszaállít” gombot, amely törli a beviteli mező és az eredmény tartalmát, és alaphelyzetbe állítja az alkalmazást!
- Az oldalt formázd meg igényesen, Bootstrap 5 segítségével!

### Haladó feladatok

Készíts további gombokat az alábbi funkciókkal!

- **Szókezdő nagybetűs:** minden szó első betűje legyen nagybetűs, a többi betű pedig kisbetűs!
- **Mondatkezdő nagybetűs:** a szöveg legyen kisbetűs, de minden mondat első betűje legyen nagybetűs!
- **Szövegirány visszafelé:** a megjelenített szöveg karakterei fordított sorrendben jelenjenek meg!
- **Szövegirány normál:** a szöveg jelenjen meg az eredeti karakter- és sorrendhelyzetében!
- **Szövegirány kapcsoló:** egy gombbal lehessen váltani a normál és a fordított sorrendű megjelenítés között!

A megoldás során figyelj arra, hogy az eredeti beviteli szöveg megmaradjon, és a különböző műveletek a megjelenített eredményen történjenek!

---

## 4. feladat – Szamologep

**Téma:** `useState`, űrlapkezelés, feltételes működés, matematikai műveletek.

Hozz létre egy új Vite + React alkalmazást `Szamologep` néven!

### Kötelező feladatok

**1. Fejlec komponens**

A fejléc címe:

`Számológép`

**2. Calculator komponens**

Készíts egyszerű számológépet, amely két számot fogad két beviteli mezőn keresztül!

A felhasználó választhasson az alábbi műveletek közül:

- Összeadás
- Kivonás
- Szorzás
- Osztás

A művelet kiválasztása után egy gomb megnyomására jelenjen meg az eredmény!

Követelmények:

- A két számot és a kiválasztott műveletet megfelelő állapotváltozókban tárold!
- Az eredményt a kiválasztott művelet alapján számítsd ki!
- A beviteli mezők tartalmát számmá kell alakítani a számítás előtt.
- Ellenőrizd, hogy a megadott értékek érvényes számok-e!
- Nullával való osztás esetén jeleníts meg megfelelő hibaüzenetet!
- Az eredményt jól látható módon jelenítsd meg!

**3. Lablec komponens**

Használd fel újra a korábban elkészített `Lablec` komponenst!

Az oldalt formázd meg igényesen, Bootstrap 5 segítségével!

---

## 5. feladat – ComplexCalculator

**Téma:** Összetett állapotkezelés, eseménykezelés, számológép készítése.

Hozz létre egy új Vite + React alkalmazást `ComplexCalculator` néven!

### Feladatleírás

Készíts egy grafikus számológépet a következő mintakép alapján:

https://www.shutterstock.com/image-vector/calculator-vector-icon-260nw-183959492.jpg

A számológép rendelkezzen:

- számjegygombokkal (0–9);
- tizedesvessző vagy tizedespont bevitelére alkalmas gombbal;
- összeadás, kivonás, szorzás és osztás gombokkal;
- egyenlőségjellel az eredmény kiszámításához;
- törlés gombbal;
- jól látható kijelzővel, amely megjeleníti a beírt értékeket és az eredményt.

Követelmények:

- Az aktuális kijelzőtartalmat `useState` segítségével tárold!
- A gombok megnyomásakor frissüljön a kijelző!
- A számítások a kiválasztott műveletnek megfelelően történjenek!
- Kezeld a nullával való osztást és a hibás műveleteket!
- Az oldalt formázd meg igényesen, a képernyőterületet arányosan kihasználva!

**Lábléc:** használd fel a korábban elkészített `Lablec` komponenst!

---

## 6. feladat – Házi feladat: SajatTema

**Téma:** Tömbkezelés, `useState`, keresés, rendezés, adatfelvétel és validáció.

Hozz létre egy új Vite + React alkalmazást `SajatTema` néven!

Az alkalmazás témája az órán kiadott téma legyen. A fejlécben a saját témád neve szerepeljen.

### Kötelező feladatok

**1. Mintaadatok**

Hozz létre egy tömböt, amely legalább 5 rekordot tartalmaz! Minden rekord legalább 5 mezőből álljon.

A rekordok a választott témához kapcsolódó, értelmes adatokat tartalmazzanak.

**2. Táblázatos megjelenítés**

Jelenítsd meg a rekordokat egy táblázatban!

A táblázat tartalmazzon:

- fejlécsort, amely megnevezi az adatmezőket;
- adatsorokat, amelyek a rekordokat jelenítik meg;
- igény szerint egy összesítő vagy láblécsort.

**3. Keresés**

Készíts keresőmezőt és „Keresés” gombot!

A felhasználó legalább egy szöveges mező alapján szűrhesse a rekordokat.

A keresés ne különböztesse meg a kis- és nagybetűket! Üres keresés esetén jelenjen meg az összes rekord.

**4. Rendezés**

Legalább egy mező szerint lehessen növekvő és csökkenő sorrendbe rendezni a rekordokat!

A rendezési irányt egy kapcsolóval lehessen váltani. A rendezés az aktuális adatokon valós időben történjen.

**5. Új rekord felvétele**

Készíts űrlapot új rekordok felvételéhez!

Az űrlap minden szükséges mezőhöz tartalmazzon megfelelő beviteli elemet. Az új rekordot a felhasználó gombnyomással tudja hozzáadni a listához.

**6. Validáció**

Ellenőrizd a felhasználó által megadott adatokat!

- A kötelező mezők nem maradhatnak üresen.
- A szám típusú mezők csak érvényes számot fogadhatnak el.
- Hibás adat esetén jelenjen meg érthető hibaüzenet.
- Sikeres adatfelvétel után az új rekord jelenjen meg a táblázatban.

**7. Megjelenés**

Az alkalmazás legyen áttekinthető, egységes és igényesen formázott. A Bootstrap 5 használata plusz pontot ér.

**Lábléc:** használd fel a korábban elkészített `Lablec` komponenst az aktuális adatokkal!
