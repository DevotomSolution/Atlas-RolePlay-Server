export default {
    job: {
        get: {//Когда подошёл к боту Emma Smith, у которого можно устроиться на работу или уволиться
            desc: `Selectați orice slujbă care vă place, faceți clic pe „Obțineți o slujbă”, apoi ajungeți la locația de începere a slujbei, care va fi instalată automat pe hartă. Poți lucra doar un loc de muncă la un moment dat!`,
        },
        dismissal: {//Когда уволился с работы
            desc: `Puteți alege un alt loc de muncă sau vă puteți alătura uneia dintre facțiuni în orice moment. Informații despre toate facțiunile pot fi găsite în meniul de ajutor apăsând F10, apoi articolele „Facții criminale” și „Facții guvernamentale”. Vă rugăm să rețineți că este imposibil să fiți într-o facțiune și la locul de muncă în același timp.`,
        },
        electric: {//Когда подошёл к боту Ryan Nelson
            desc: "Apăsați E pentru a începe ziua de lucru. Pe hartă vor apărea semne roșii. Ajunge la ei pentru a finaliza sarcini pentru care vei primi bani. Pentru a încheia ziua de lucru, abordați din nou botul și apăsați E.",
        },
        lawn: {//Когда подошёл к работе газонокосильщика
            desc: "Stați pe mașina de tuns iarba pentru a începe lucrul. Apoi, urmați punctele de control. Veți primi bani pentru fiecare punct de control trecut.",
        },
        post: {//Когда подошёл к Отделению почты
            desc: `Apăsați E, apoi „Începeți”. Trebuie să livrați corespondența la adresele care vor apărea automat pe hartă. Puteți obține un vehicul care funcționează stând pe punctul de control alb și apăsând E.`,
        },
        post: {//Когда закончились посылки
            desc: "Nu mai ai niciun pachet pentru livrare. Pentru a obține altele noi, întoarceți-vă la oficiul poștal. Marcatorul de pe hartă a fost setat automat.",
        },
        taxi: {//Когда подошёл к таксопарку
            desc: `Luați un taxi pentru a închiria o mașină. Există 4 clase de taxiuri, care diferă ca tarife și prețuri de închiriere. Pentru început, vă recomandăm să alegeți clasa „Econom”.`,
        },
        taxi: {//Когда арендовал транспорт
            desc: "Transportul a fost inchiriat, tot ce trebuie sa faci este sa astepti prima comanda!",
        },
        taxi: {//Когда появился заказ
            desc: "A apărut o comandă în sistem. Pentru a o accepta, utilizați comanda /ta [ID]. Atenție, comenzile sunt făcute de alți jucători.",
        },
        taxi: {//Когда клиент сел в транспорт
            desc: "Livrați clientul la adresa dorită. Pentru a emite un cec pentru plată, utilizați comanda /tprice [ID] [Suma].",
        },
        bus: {//Когда подошел к автопарку автобусов
            desc: "Găsiți un autobuz gratuit și închiriați-l. Apoi, urmați punctele de control. Veți primi bani pentru fiecare punct de control trecut.",
        },
        mechanik: {//Когда подошел к автопарку механиков
            desc: "Găsiți o camionetă disponibilă și închiriați-o.",
        },
        mechanik: {//Когда арендовал транспорт
            desc: "Transportul a fost inchiriat, tot ce trebuie sa faci este sa astepti prima comanda!",
        },
        mechanik: {//Когда появился заказ
            desc: "A apărut o comandă în sistem. Pentru a o accepta, utilizați comanda /ma [ID]. Atenție, comenzile sunt făcute de alți jucători.",
        },
        mechanik: {//Когда приехал на заказ
            desc: "Pentru a oferi o reparație, utilizați comanda /repair [ID] [Preț]. Pe lângă reparații, puteți alimenta vehiculele clienților. Informații mai detaliate pot fi găsite în meniul de ajutor (F10)>Works>Mechanic.",
        },
        truck: {//Когда подошел к автопарку дальнобойщиков
            desc: "Găsiți un camion disponibil și închiriați-l.",
        },
        truck: {//Когда арендовал транспорт
            desc: "Utilizați comanda /order pentru a selecta o comandă.",
        },
        truck: {//Когда взял заказ
            desc: "Ridicați comanda de la locația de încărcare. Marcatorul de pe hartă a fost setat automat.",
        },
        truck: {//Когда забрал прицеп
            desc: "Livrați comanda companiei. Marcatorul de pe hartă a fost setat automat.",
        },
        col: {//Когда подошел к автопарку инкассаторов
            desc: "Găsiți un camion disponibil și închiriați-l.",
        },
        col: {//Когда арендовал транспорт
            desc: "Trebuie să livrați bagajele la adresele care vor apărea automat pe hartă.",
        },
        col: {//Когда закончились мешки
            desc: `Nu mai aveți bagaje pentru livrare. Pentru a obține altele noi, întoarceți-vă în parcare, stați pe marcatorul „Luați saci de bani” și apăsați E. Marcatorul de pe hartă a fost instalat automat.`,
        },
    },
    other: {
        death: {//Игрока убивают
            desc: `Dacă observați o încălcare a regulilor serverului, vă rugăm să contactați administrația. Pentru a face acest lucru, utilizați comanda /report.
                    Regulile serverului pot fi găsite pe forum, care poate fi deschis la linkul: https://wiki.atlas-rp.ro
                    Pe lângă reguli, puteți lăsa o plângere împotriva unui jucător sau administrator pe forum. Pentru a face acest lucru, accesați secțiunea „Reclamații”.".`,
        },
        money: {//Игрок имеет на руках больше 15.000$
            desc: "Țineți o sumă mare de bani în mâini. Ai grijă, s-ar putea să fii jefuit de alți jucători. Pentru a economisi bani, îi puteți pune într-un cont bancar. Pentru a găsi o bancă, faceți clic pe M>GPS>Nearest Places>Nearest ATM.",
        },
        money: {//Игрок имеет больше 50.000$ и не владеет домом
            desc: "Ai economisit suficienți bani pentru a cumpăra o casă. Casele libere sunt afișate ca o casă verde pe hartă. Dacă nu sunt acolo, atunci puteți cumpăra o casă de la alt jucător. Anunțurile de vânzare de case apar adesea în chat.",
        },
        money: {//Игрок имеет дом и больше 10.000
            desc: "Îți poți cumpăra primul vehicul. Pentru a face acest lucru, mergeți la Autoroom. Poate fi găsit prin GPS. Pentru a face acest lucru, faceți clic pe M>GPS>Afaceri>Low Autoroom.",
        },
        simcard: {//Игрок открыл телефон
            desc: "Pentru a primi și a efectua apeluri, trebuie să cumpărați o cartelă SIM. Acest lucru se poate face în magazin 24/7. Faceți clic pe M>GPS>Afaceri>24/7.",
        },
        transfer: {//Игроку пришли деньги на банковский счет
            desc: "Cineva a trimis bani în contul tău bancar. Utilizați un bancomat pentru a retrage bani. Pentru a face acest lucru, faceți clic pe M>GPS>Nearest places>Nearest ATM.",
        },
        stock: {//Когда игрок получил предмет на склад
            desc: "Un colet a fost livrat la depozitul dvs. Depozitul poate fi găsit pe hartă, arată ca o cutie albastră.",
        },
        pickup: {//Когда игрок поднял предмет с земли
            desc: "Ați ridicat articolul și a fost mutat cu succes în inventarul dvs. Inventar deschis - I.",
        },
        bag: {//Когда в инвентаре игрока находится более 14 предметов
            desc: "Aveți deja o mulțime de articole în inventar. Puteți cumpăra o geantă din magazinul 24/7 pe care o puteți folosi pentru a depozita lucruri. Magazinul 24/7 poate fi găsit făcând clic pe M>GPS>Business>24/7.",
        },
        bag: {//Когда игрок купил сумку
            desc: "Pentru a pune sau scoate articole din geantă, trebuie să o porți. Ai grijă, dacă mori în timp ce geanta este pusă, o vei pierde.",
        },
        heal: {//Когда у игрока мало хп
            desc: "Ai CP putini. Cel mai simplu mod de a completa HP este să folosești alimente care pot fi cumpărate de la magazinul 24/7 sau Burger-Shot. Le puteți găsi folosind GPS-ul telefonului dvs.",
        },
        demorgan: {//Когда игрок получил деморган
            desc: "Ai primit o pedeapsă pentru încălcarea regulilor. Utilizați comanda /time pentru a afla motivul și durata pedepsei. Dacă nu sunteți de acord cu pedeapsa, puteți lăsa o plângere împotriva administratorului pe https://ucp.atlas-rp.ro",
        },
        cuff: {//На игрока надели наручники или стяжки
            desc: "Ești în cătușe. În niciun caz nu părăsiți jocul până când nu sunt eliminate. Aceasta va avea ca rezultat o penalizare de 240 de minute. Puteți elimina cătușele de pe piața neagră.",
        },
    },
    location: {
        ems: {//Игрока появился в EMS после смерти
            desc: `Pentru a restabili sănătatea, stați pe markerul alb „Începe tratamentul” și apăsați E. Pentru a restabili sănătatea instantaneu, utilizați serviciile unui medic. Amintiți-vă, medicii sunt adevărații jucători.`,
        },
        ghetto: {//Игрок заехал в гетто
            desc: "Te afli într-o zonă de ghetou periculoasă. Ai grijă, poți fi jefuit, răpit sau ucis!",
        },
        voice: {//Игрок вошел в зону войс-чата и слышит разговоры
            desc: "Pentru a comunica prin chat vocal, țineți apăsată tasta N. Tasta poate fi înlocuită în meniul de legare (Tab). Nu apelați la insultarea părinților, a religiei și a națiunii. Acest lucru este interzis și pedepsit pe server!",
        },
        voicemute: {//Игрок вошел в зону c игроком, который установил решим "Я не слышу"
            desc: `Dacă vedeți inscripția „Nu aud” deasupra capului jucătorului, atunci acesta poate vedea doar chat-ul text. Puteți instala această soluție în setări. Faceți clic pe I>Setări>Nu aud.`,
        },
        autoroom: {//Игрок подошёл к авто или мото руму и не имеет дома
            desc: "Puteți cumpăra transport personal în showroom, dar mai întâi trebuie să cumpărați o casă!",
        },
        house: {//Игрок подошёл к свободному или чужому дому
            desc: "Puteți cumpăra o casă personală care poate fi modernizată (inclusiv locuri de garaj). Ele pot fi vândute altor jucători. În casă puteți depozita lucruri și transporta, puteți instala o trusă de prim ajutor și, de asemenea, puteți decora interiorul.",
        },
        autoschool: {//Игрок подошёл к автошколе
            desc: "La scoala de soferi poti obtine permise pentru a conduce vehicule. Sunt necesare pentru angajare în unele locuri de muncă și facțiuni. Poliția poate emite o amendă pentru conducere fără permis.",
        },
        greenzone: {//Игрок вошёл в ЗЗ
            desc: "Sunteți în Zona Verde (zonă pașnică). În ZZ este imposibil să se producă daune și orice acțiune penală este interzisă.",
        },
    },
    vehicles: {
        seat: {//Игрок сел в машину
            desc: "Pentru a porni motorul, folosiți cheia B.",
        },
        key: {//Игрок зашёл в гараж, в котором стоит купленная машина
            desc: "Pentru a utiliza transportul personal, sunt necesare cheile. Faceți clic pe M>Mașini>Mașinile mele>Selectați un vehicul>Obțineți o cheie duplicată.",
        },
        drive: {//Спустя минуту поездки на транспорте
            desc: "Puteți naviga în transport folosind un pilot automat. Pentru a face acest lucru, plasați un marcaj pe hartă și apăsați Z.",
        },
        belt: {//Игрок сел на пассажирское место
            desc: "Pentru a vă fixa centura de siguranță, apăsați G>Fixați centura.",
        },
        key: {//Игрок попытался сесть в чужой закрытый транспорт
            desc: "Dacă mașina este încuiată, poate fi deschisă doar cu cheia. Cheia poate fi dată de proprietarul vehiculului.",
        },
        lsc: {//Если игрок купил машину, прошёл час, а он не заходил в LSC
            desc: "Transportul personal poate fi reglat. Acest lucru se poate face în LS Customs. Faceți clic pe M>GPS>Afaceri>LS Vamă.",
        },
        seat: {//Когда игрок пытается сесть на водительское место фракционного транспорта
            desc: "Vehiculele facțiunii pot fi conduse numai de membrii facțiunii.",
        },
    },
    licenses: {
        gun: {//Игрок подошёл к gun-shop
            desc: "Este necesară o licență pentru a cumpăra o armă. Se poate obține la secția de poliție. Adresați-vă ofițerilor pentru mai multe detalii.",
        },
        gun: {//Игрок получил лицензию на оружие
            desc: "Acum puteți cumpăra arme din magazin. Pentru a găsi magazinul de care aveți nevoie, faceți clic pe M>GPS>Afaceri>Magazin de arme. Atenție, pentru încălcarea legii, poliția vă poate lua permisul.",
        },
        licB: {//Игрок получил лицензию категории В
            desc: "Ai primit permis categoria B. Acum poți alege unul dintre următoarele locuri de muncă: Poștaș, Taximetrist, Mecanic. Puteți obține un loc de muncă la Primărie, care este afișat pe hartă ca un steag.",
        },
        licC: {//Игрок получил лицензию категории С
            desc: "Ai primit permis categoria C. Acum poți alege unul dintre următoarele locuri de muncă: șofer autobuz, șofer camion, colector de numerar. Puteți obține un loc de muncă la Primărie, care este afișat pe hartă ca un steag.",
        },
    },
}