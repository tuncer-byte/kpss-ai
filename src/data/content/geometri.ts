import { ALL_TRACKS, lesson, subject, topic } from '../build';

// GEOMETRI. OSYM sinavinda Matematik testinin icinde yer alir (yaklasik 6-9 soru); burada ayri ders olarak calisilir.
// Sinav sayisi Matematik'in 30 sorusunun icindedir, bu yuzden examQuestions 0 gosterilir.
export const geometri = subject('geometri', 'Geometri', 'shapes-outline', 0, ALL_TRACKS, [
  topic('geo-acilar', 'Açılar', [
    lesson(
      'geo-aci-temel',
      'Doğruda ve Paralel Doğrularda Açılar',
      [
        ['Temel açılar', ['Tümler: toplam 90°', 'Bütünler: toplam 180°'], 'İki açının toplamı 90° ise tümler, 180° ise bütünlerdir. Ters açılar eşittir. Bir doğru üzerindeki açılar toplamı 180°\'dir.'],
        ['Paralel doğrular', ['İç ters, yöndeş, karşı durumlu'], 'İki paralel doğruyu bir kesen kestiğinde iç ters ve yöndeş açılar eşit, kesenin aynı yanındaki iç açılar toplamı ise 180°\'dir.'],
        ['Denklem kurma', ['Eşit açıları eşitle'], 'Paralel doğrularda açı denklemleri, eşit olan açılar eşitlenerek ve bütünler açılar toplanarak çözülür.'],
      ],
      [
        ['İki tümler açıdan biri 35° ise diğeri kaç derecedir?', ['45', '55', '65', '125', '145'], 1, '90° − 35° = 55°.'],
        ['İki bütünler açıdan biri diğerinin 2 katıdır. Küçük açı kaç derecedir?', ['30', '45', '60', '90', '120'], 2, 'x + 2x = 180° ise x = 60°.'],
        ['Paralel iki doğruyu kesen bir doğruda iç ters açıların ölçüleri 3x + 10 ve 5x − 30 olduğuna göre x kaçtır?', ['10', '15', '20', '25', '30'], 2, 'İç ters açılar eşit: 3x + 10 = 5x − 30 ise x = 20.'],
      ],
    ),
  ]),
  topic('geo-ucgenler', 'Üçgenler', [
    lesson(
      'geo-ucgen-aci',
      'Üçgende Açılar',
      [
        ['İç ve dış açı', ['İç açılar toplamı 180°', 'Dış açı = karşıt iki iç açının toplamı'], 'Her üçgenin iç açıları toplamı 180°\'dir. Bir dış açı, kendisine komşu olmayan iki iç açının toplamına eşittir.'],
        ['İkizkenar ve eşkenar', ['Taban açıları eşit', 'Eşkenarda her açı 60°'], 'İkizkenar üçgende eşit kenarların karşısındaki açılar eşittir. Eşkenar üçgenin her açısı 60° olur.'],
        ['Üçgen eşitsizliği', ['|b − c| < a < b + c'], 'Bir üçgenin bir kenarı diğer iki kenarın toplamından küçük, farkının mutlak değerinden büyüktür.'],
      ],
      [
        ['Bir üçgenin iki açısı 50° ve 60° ise üçüncü açısı kaç derecedir?', ['50', '60', '70', '80', '90'], 2, '180° − 110° = 70°.'],
        ['Tepe açısı 40° olan ikizkenar üçgenin taban açıları kaçar derecedir?', ['40', '60', '70', '80', '100'], 2, '(180° − 40°) / 2 = 70°.'],
        ['Kenar uzunlukları 5 cm, 7 cm ve x cm olan üçgenin x\'i kaç farklı tam sayı değeri alabilir?', ['5', '7', '9', '10', '11'], 2, '2 < x < 12 olduğundan x = 3, 4, …, 11; 9 değer.'],
      ],
    ),
    lesson(
      'geo-pisagor-ozel',
      'Pisagor Bağıntısı ve Özel Üçgenler',
      [
        ['Pisagor', ['a² + b² = c²', '3-4-5, 5-12-13, 8-15-17'], 'Dik üçgende dik kenarların kareleri toplamı hipotenüsün karesine eşittir. 3-4-5 ve 5-12-13 sık sorulan üçlülerdir.'],
        ['30-60-90 üçgeni', ['Kenarlar x, x√3, 2x'], '30-60-90 üçgeninde 30°\'nin karşısındaki kenar x ise 60°\'nin karşısındaki x√3, hipotenüs 2x olur.'],
        ['45-45-90 üçgeni', ['Kenarlar x, x, x√2', 'Kare köşegeni a√2'], 'İkizkenar dik üçgende dik kenarlar x ise hipotenüs x√2\'dir. Kenarı a olan karenin köşegeni a√2\'dir.'],
      ],
      [
        ['Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsü kaç cm\'dir?', ['9', '10', '12', '14', '15'], 1, '√(36 + 64) = 10.'],
        ['Hipotenüsü 10 cm olan 30-60-90 üçgeninde 30° nin karşısındaki kenar kaç cm\'dir?', ['3', '4', '5', '5√3', '10'], 2, 'Hipotenüs 2x = 10 ise x = 5.'],
        ['Kenarı 4 cm olan karenin köşegeni kaç cm\'dir?', ['4', '4√2', '4√3', '8', '8√2'], 1, 'Köşegen a√2 = 4√2.'],
      ],
    ),
    lesson(
      'geo-ucgen-benzerlik',
      'Benzerlik, Kenarortay ve Açıortay',
      [
        ['Thales ve benzerlik', ['DE ∥ BC ise AD/DB = AE/EC'], 'Bir üçgende bir kenara paralel çizilen doğru diğer iki kenarı orantılı parçalara ayırır. Benzer üçgenlerde kenar oranları eşittir.'],
        ['Kenarortay', ['Karşı kenarı ortalar', 'Ağırlık merkezi 2 : 1'], 'Kenarortaylar ağırlık merkezinde kesişir. Ağırlık merkezi köşeden 2/3, kenara 1/3 oranında uzaklıktadır.'],
        ['Açıortay teoremi', ['AB/AC = BD/DC'], 'Açıortay karşı kenarı komşu kenarlarla orantılı iki parçaya ayırır: BD/DC = AB/AC.'],
      ],
      [
        ['ABC üçgeninde DE ∥ BC, AD = 4, DB = 2 ve AE = 6 ise EC kaçtır?', ['1', '2', '3', '4', '6'], 2, 'AD/DB = AE/EC ise 4/2 = 6/EC ve EC = 3.'],
        ['Bir üçgende köşeden çizilen kenarortayın uzunluğu 12 cm\'dir. Ağırlık merkezinin bu köşeye uzaklığı kaç cm\'dir?', ['4', '6', '8', '9', '10'], 2, 'Ağırlık merkezi köşeye 2/3 uzaklıktadır: 12 · 2/3 = 8.'],
        ['ABC üçgeninde [AD] açıortaydır. AB = 6, AC = 9 ve BC = 10 ise BD kaçtır?', ['3', '4', '5', '6', '8'], 1, 'BD / DC = 6 / 9 = 2 / 3; BC = 10 olduğundan BD = 4.'],
      ],
    ),
    lesson(
      'geo-ucgen-alan',
      'Üçgende Alan',
      [
        ['Temel formül', ['Alan = taban · yükseklik / 2'], 'Üçgenin alanı bir kenar ile o kenara ait yüksekliğin çarpımının yarısıdır. Dik üçgende dik kenarlar taban ve yükseklik olarak alınır.'],
        ['Eşkenar üçgen', ['Alan = a²√3 / 4', 'Yükseklik = a√3 / 2'], 'Kenarı a olan eşkenar üçgenin yüksekliği a√3/2, alanı a²√3/4\'tür.'],
        ['Aynı yükseklik', ['Tabanlar oranı = alanlar oranı'], 'Yükseklikleri aynı olan üçgenlerde alanlar, tabanlarla doğru orantılıdır.'],
      ],
      [
        ['Taban uzunluğu 10 cm, yüksekliği 6 cm olan üçgenin alanı kaç cm²\'dir?', ['16', '30', '40', '60', '120'], 1, '10 · 6 / 2 = 30.'],
        ['Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin alanı kaç cm²\'dir?', ['14', '24', '28', '48', '50'], 1, '6 · 8 / 2 = 24.'],
        ['Kenarı 4 cm olan eşkenar üçgenin alanı kaç cm²\'dir?', ['4', '4√3', '8', '8√3', '16'], 1, 'a²√3 / 4 = 16√3 / 4 = 4√3.'],
      ],
    ),
  ]),
  topic('geo-dortgenler', 'Çokgenler ve Dörtgenler', [
    lesson(
      'geo-dortgen',
      'Dörtgenler: Paralelkenar, Dikdörtgen, Eşkenar Dörtgen, Yamuk',
      [
        ['Özellikler', ['İç açılar toplamı 360°', 'Paralelkenarda karşılıklı kenar ve açılar eşit'], 'Her dörtgenin iç açıları toplamı 360°\'dir. Paralelkenarda karşılıklı kenarlar paralel ve eşittir, köşegenler birbirini ortalar.'],
        ['Dikdörtgen, eşkenar dörtgen, kare', ['Dikdörtgen: köşegenler eşit', 'Eşkenar dörtgen: köşegenler dik'], 'Dikdörtgenin köşegenleri eşittir. Eşkenar dörtgenin köşegenleri birbirini dik kesip ortalar. Kare her iki özelliği taşır.'],
        ['Yamuk', ['Alan = (a + c) / 2 · h'], 'Yamukta paralel kenarların toplamının yarısı ile yüksekliğin çarpımı alanı verir.'],
      ],
      [
        ['Kenar uzunlukları 6 cm ve 8 cm olan dikdörtgenin köşegeni kaç cm\'dir?', ['9', '10', '12', '14', '15'], 1, '√(36 + 64) = 10.'],
        ['Paralel kenarları 8 cm ve 12 cm, yüksekliği 5 cm olan yamuğun alanı kaç cm²\'dir?', ['40', '50', '60', '80', '100'], 1, '(8 + 12) / 2 · 5 = 50.'],
        ['Köşegenleri 6 cm ve 8 cm olan eşkenar dörtgenin çevresi kaç cm\'dir?', ['14', '20', '24', '28', '48'], 1, 'Kenar √(3² + 4²) = 5; çevre 4 · 5 = 20.'],
      ],
    ),
    lesson(
      'geo-cokgen',
      'Çokgenler',
      [
        ['İç açılar', ['Toplam: (n − 2) · 180°'], 'n kenarlı bir çokgenin iç açıları toplamı (n − 2) · 180°\'dir. Dış açılar toplamı her çokgende 360°\'dir.'],
        ['Köşegen sayısı', ['n(n − 3) / 2'], 'n kenarlı çokgenin köşegen sayısı n(n − 3)/2 formülüyle bulunur.'],
        ['Düzgün çokgen', ['Bir dış açı = 360° / n'], 'Düzgün çokgenin tüm kenarları ve açıları eşittir. Bir dış açı 360°/n, iç açı 180° − 360°/n\'dir.'],
      ],
      [
        ['Beşgenin iç açıları toplamı kaç derecedir?', ['360', '450', '540', '720', '900'], 2, '(5 − 2) · 180° = 540°.'],
        ['Sekizgenin kaç köşegeni vardır?', ['16', '18', '20', '24', '28'], 2, '8 · 5 / 2 = 20.'],
        ['Bir iç açısı 140° olan düzgün çokgen kaç kenarlıdır?', ['6', '7', '8', '9', '10'], 3, 'Dış açı 40°; 360 / 40 = 9.'],
      ],
    ),
  ]),
  topic('geo-cember', 'Çember ve Daire', [
    lesson(
      'geo-cember-aci',
      'Çemberde Açılar ve Teğet',
      [
        ['Merkez ve çevre açı', ['Merkez açı = yay', 'Çevre açı = yay / 2'], 'Merkez açının ölçüsü gördüğü yayın ölçüsüne eşittir. Çevre açı ise gördüğü yayın yarısıdır. Çapı gören çevre açı 90°\'dir.'],
        ['Teğet', ['Teğet ⊥ yarıçap', 'Dıştaki noktadan teğet uzunlukları eşit'], 'Teğet, değme noktasındaki yarıçapa diktir. Çemberin dışındaki bir noktadan çizilen iki teğetin uzunlukları eşittir.'],
        ['Teğet uzunluğu', ['Pisagor: t² = d² − r²'], 'Dıştaki noktanın merkeze uzaklığı d, yarıçap r ise teğet uzunluğu √(d² − r²)\'dir.'],
      ],
      [
        ['Merkez açısı 80° olan yayı gören çevre açısı kaç derecedir?', ['20', '40', '80', '100', '160'], 1, 'Çevre açı yayın yarısıdır: 80° / 2 = 40°.'],
        ['Çapı gören çevre açının ölçüsü kaç derecedir?', ['45', '60', '90', '120', '180'], 2, 'Çapı gören çevre açı 90°\'dir.'],
        ['Merkezi O, yarıçapı 5 cm olan çembere merkezden 13 cm uzaktaki bir noktadan çizilen teğetin uzunluğu kaç cm\'dir?', ['8', '10', '12', '√194', '18'], 2, '√(13² − 5²) = √144 = 12.'],
      ],
    ),
    lesson(
      'geo-cember-alan',
      'Çember ve Daire: Çevre ve Alan',
      [
        ['Formüller', ['Çevre = 2πr', 'Alan = πr²'], 'Yarıçapı r olan çemberin çevresi 2πr, dairenin alanı πr²\'dir.'],
        ['Daire dilimi', ['Alan = πr² · α / 360', 'Yay = 2πr · α / 360'], 'Merkez açısı α olan daire diliminin alanı πr² · α/360, yay uzunluğu 2πr · α/360\'dır.'],
        ['Çap ve yarıçap', ['Çap = 2r', 'Kareye çizilen en büyük daire: r = a/2'], 'Soru çap verirse yarıçap bulunur. Kenarı a olan karenin içine çizilen en büyük dairenin yarıçapı a/2\'dir.'],
      ],
      [
        ['Yarıçapı 3 cm olan dairenin alanı kaç cm²\'dir?', ['3π', '6π', '9π', '12π', '18π'], 2, 'π · 3² = 9π.'],
        ['Alanı 49π cm² olan dairenin çevresi kaç cm\'dir?', ['7π', '14π', '21π', '28π', '49π'], 1, 'r = 7; çevre 2π · 7 = 14π.'],
        ['Yarıçapı 4 cm olan dairenin merkez açısı 90° olan diliminin alanı kaç cm²\'dir?', ['2π', '4π', '8π', '16π', '32π'], 1, '16π · 90 / 360 = 4π.'],
      ],
    ),
  ]),
  topic('geo-analitik', 'Analitik Geometri', [
    lesson(
      'geo-analitik-ders',
      'Nokta, Doğru ve Eğim',
      [
        ['Uzaklık ve orta nokta', ['d = √((x₂−x₁)² + (y₂−y₁)²)', 'Orta nokta: ortalamalar'], 'İki nokta arasındaki uzaklık koordinat farklarının kareleri toplamının kareköküdür. Orta nokta için koordinatların ortalaması alınır.'],
        ['Eğim', ['m = (y₂ − y₁) / (x₂ − x₁)', 'Paralel: eğimler eşit', 'Dik: eğimler çarpımı −1'], 'Doğrunun eğimi dikey farkın yatay farka oranıdır. Paralel doğruların eğimleri eşit, dik doğruların eğimleri çarpımı −1\'dir.'],
        ['Doğru denklemi', ['y = mx + n', 'Noktayı yerine koy'], 'Bir noktanın doğru üzerinde olup olmadığı koordinatların denklemde yerine konmasıyla anlaşılır.'],
      ],
      [
        ['A(1, 2) ve B(4, 6) noktaları arasındaki uzaklık kaç birimdir?', ['3', '4', '5', '6', '7'], 2, '√(3² + 4²) = 5.'],
        ['A(2, 4) ve B(6, 8) noktalarının orta noktası aşağıdakilerden hangisidir?', ['(3, 5)', '(4, 6)', '(5, 7)', '(6, 8)', '(8, 12)'], 1, '((2 + 6)/2, (4 + 8)/2) = (4, 6).'],
        ['A(1, 2) ve B(3, 6) noktalarından geçen doğrunun eğimi kaçtır?', ['1/2', '1', '2', '3', '4'], 2, '(6 − 2) / (3 − 1) = 2.'],
      ],
    ),
  ]),
  topic('geo-kati', 'Katı Cisimler', [
    lesson(
      'geo-kati-cisimler',
      'Prizma, Silindir, Koni ve Küre',
      [
        ['Prizmalar', ['Hacim = taban alanı · yükseklik', 'Küp: a³, yüzey 6a²'], 'Prizmalarda hacim taban alanı ile yüksekliğin çarpımıdır. Kenarı a olan küpün hacmi a³, yüzey alanı 6a²\'dir.'],
        ['Silindir ve koni', ['Silindir: πr²h', 'Koni: πr²h / 3'], 'Silindirin hacmi πr²h, koninin hacmi aynı taban ve yükseklikteki silindirin üçte biridir.'],
        ['Küre', ['V = 4πr³ / 3', 'A = 4πr²'], 'Küre hacmi 4πr³/3, yüzey alanı 4πr²\'dir.'],
      ],
      [
        ['Kenar uzunluğu 3 cm olan küpün hacmi kaç cm³\'tür?', ['9', '18', '27', '54', '81'], 2, '3³ = 27.'],
        ['Taban yarıçapı 2 cm, yüksekliği 5 cm olan silindirin hacmi kaç cm³\'tür?', ['10π', '20π', '40π', '60π', '100π'], 1, 'π · 2² · 5 = 20π.'],
        ['Taban yarıçapı 3 cm, yüksekliği 4 cm olan koninin hacmi kaç cm³\'tür?', ['6π', '9π', '12π', '36π', '48π'], 2, 'π · 9 · 4 / 3 = 12π.'],
      ],
    ),
  ]),
]);
