import { ALL_TRACKS, lesson, subject, topic } from '../build';

// MATEMATIK (30 soru, geometri ile birlikte). OSYM GY kapsami: temel kavramlar, sayilar, problemler,
// kumeler, islem, permutasyon-olasilik, tablo-grafik ve sayisal mantik. Geometri ayri dersi: geometri.ts
export const matematik = subject('matematik', 'Matematik', 'calculator-outline', 30, ALL_TRACKS, [
  topic('mat-sayilar', 'Temel Kavramlar ve Sayılar', [
    lesson(
      'mat-sayi-kumeleri',
      'Sayı Kümeleri, Asal Sayılar ve Ardışık Sayılar',
      [
        ['Sayı kümeleri', ['N ⊂ Z ⊂ Q ⊂ R', 'İrrasyonel: kesir olarak yazılamaz'], 'Doğal sayılar tam sayıların, tam sayılar rasyonel sayıların, rasyonel sayılar da gerçek sayıların alt kümesidir. Karekökü tam olmayan sayılar (√2 gibi) irrasyoneldir.'],
        ['Asal sayılar', ['Tam 2 pozitif böleni var', '1 asal değil, 2 tek çift asal'], 'Yalnızca 1 ve kendisine bölünebilen, 1\'den büyük doğal sayılara asal sayı denir. 2 tek çift asal sayıdır. İki asal sayının toplamı tek ise biri mutlaka 2\'dir.'],
        ['Ardışık sayılar', ['n ardışık sayının toplamı = ortadaki × n', 'Ardışık çift: x, x+2, x+4'], 'Ardışık sayıların toplamında terim sayısı tekse ortadaki terim ile terim sayısının çarpımı toplamı verir. Ardışık çift ya da tek sayılar 2 farkla ilerler.'],
      ],
      [
        ['x ve y asal sayılardır. x + y = 21 olduğuna göre x · y kaçtır?', ['19', '38', '42', '57', '96'], 1, 'Toplam tek olduğundan biri 2, diğeri 19\'dur. Çarpım 2 · 19 = 38.'],
        ['Ardışık üç çift sayının toplamı 78 ise en büyüğü kaçtır?', ['24', '26', '28', '30', '32'], 2, 'Sayılar 24, 26, 28 olur; toplam 78. En büyüğü 28.'],
        ['Aşağıdakilerden hangisi irrasyonel sayıdır?', ['0,25', '√4', '√2', '22/7', '−3'], 2, '√2 iki tam sayının oranı olarak yazılamaz.'],
      ],
    ),
    lesson(
      'mat-basamaklar',
      'Sayı Basamakları ve Çözümleme',
      [
        ['Çözümleme', ['ab = 10a + b', 'abc = 100a + 10b + c'], 'İki basamaklı ab sayısı 10a + b, üç basamaklı abc sayısı 100a + 10b + c şeklinde çözümlenir. Rakamlar 0-9 arasındadır, baştaki rakam 0 olamaz.'],
        ['Yer değiştirme', ['ab + ba = 11(a + b)', 'ab − ba = 9(a − b)'], 'Bir sayı ile rakamları yer değiştirmiş hâlinin toplamı 11(a + b), farkı 9(a − b) şeklindedir. Bu kısa yol sorularda zaman kazandırır.'],
        ['Rakamları farklı sayılar', ['En büyük/küçük sayıyı kurarken yüksek basamaktan başla'], 'Rakamları farklı en büyük sayıyı yazarken en büyük rakamlar yüksek basamaklara yerleştirilir; çift sayı isteniyorsa birler basamağı çift olmalıdır.'],
      ],
      [
        ['İki basamaklı bir sayı ile rakamlarının yerleri değiştirilerek elde edilen sayının toplamı 121 ise rakamları toplamı kaçtır?', ['9', '10', '11', '12', '13'], 2, 'ab + ba = 11(a + b) = 121 ise a + b = 11.'],
        ['İki basamaklı bir sayı ile rakamlarının yerleri değiştirilmiş hâli arasındaki fark 27 ise rakamları arasındaki fark kaçtır?', ['1', '2', '3', '4', '5'], 2, '9(a − b) = 27 ise a − b = 3.'],
        ['Rakamları birbirinden farklı üç basamaklı en büyük çift sayı kaçtır?', ['998', '988', '986', '984', '896'], 2, 'Rakamlar farklı olacağından 9, 8 sonra birler basamağı çift ve farklı en büyük rakam 6 olur: 986.'],
      ],
    ),
    lesson(
      'mat-bolunebilme',
      'Bölme ve Bölünebilme Kuralları',
      [
        ['Kurallar', ['2: son rakam çift', '3: rakamlar toplamı 3\'ün katı', '4: son iki basamak 4\'ün katı', '5: son rakam 0 veya 5', '9: rakamlar toplamı 9\'un katı'], 'Bir sayı 3 ile bölünebiliyorsa rakamları toplamı 3\'ün katıdır; 9 için aynı kural 9\'un katı ile geçerlidir. 4 için son iki basamağa, 5 için son rakama bakılır.'],
        ['Bileşik sayılar', ['6: hem 2 hem 3', '12: hem 3 hem 4', '15: hem 3 hem 5'], 'Bir sayının 6 ile bölünebilmesi için hem 2 hem 3 ile bölünmesi gerekir. 12 için 3 ve 4, 15 için 3 ve 5 şartları aranır.'],
        ['Kalan', ['Bölme: A = B·C + K, K < B', 'Kalan kuralı: çarpmada kalanlar çarpılır'], 'Bölme işleminde kalan bölenden küçüktür. Kalanlar toplanıp çarpılabilir ve sonuç yeniden böleni ile bölünür.'],
      ],
      [
        ['Üç basamaklı 4A5 sayısı 3 ile tam bölünebildiğine göre A\'nın alabileceği değerlerin toplamı kaçtır?', ['9', '12', '15', '18', '21'], 3, '4 + A + 5 = A + 9, 3\'ün katı olmalı; A = 0, 3, 6, 9 olur. Toplam 18.'],
        ['12 ile tam bölünebilen en küçük üç basamaklı doğal sayı kaçtır?', ['100', '102', '108', '112', '120'], 2, '12 · 9 = 108 en küçük üç basamaklı 12\'nin katıdır.'],
        ['Bir sayının 7 ile bölümünden kalan 3 ise bu sayının 2 katının 7 ile bölümünden kalan kaçtır?', ['1', '3', '4', '5', '6'], 4, 'Kalan 2 · 3 = 6 olur ve 7\'den küçük olduğu için sonuç 6\'dır.'],
      ],
    ),
    lesson(
      'mat-ebob-ekok',
      'EBOB ve EKOK',
      [
        ['EBOB', ['Ortak bölenlerin en büyüğü', 'Asal çarpanlarda ortak olanların en küçük kuvveti'], 'İki ya da daha çok sayının ortak bölenlerinin en büyüğüne EBOB denir. Asal çarpanlara ayırdığımızda ortak asal çarpanların en küçük üsleri çarpılır.'],
        ['EKOK', ['Ortak katların en küçüğü', 'Asal çarpanların en büyük kuvveti'], 'Ortak katların en küçüğüne EKOK denir. Tüm asal çarpanların en büyük üsleri çarpılır. Peş peşe tekrar eden olaylarda "yeniden aynı anda" ifadesi EKOK\'u işaret eder.'],
        ['Altın formül ve uygulama', ['a · b = EBOB · EKOK', 'Kare parçalama problemlerinde EBOB'], 'İki sayının çarpımı EBOB ile EKOK\'un çarpımına eşittir. Dikdörtgeni en az sayıda eş kareye bölerken kenar uzunluğu EBOB alınır.'],
      ],
      [
        ['36 ve 48 sayılarının EBOB\'u kaçtır?', ['6', '8', '12', '16', '24'], 2, '36 = 2²·3², 48 = 2⁴·3; ortak çarpanlar 2² · 3 = 12.'],
        ['6, 8 ve 12 sayılarının EKOK\'u kaçtır?', ['12', '24', '36', '48', '72'], 1, '6 = 2·3, 8 = 2³, 12 = 2²·3; EKOK = 2³ · 3 = 24.'],
        ['Kenarları 24 cm ve 36 cm olan dikdörtgen biçimindeki bir kâğıt, kenarları tam sayı uzunluğunda eş karelere ayrılacaktır. En az kaç kare elde edilir?', ['4', '6', '8', '12', '24'], 1, 'Kare kenarı EBOB(24, 36) = 12 cm. (24/12) · (36/12) = 2 · 3 = 6 kare.'],
      ],
    ),
    lesson(
      'mat-rasyonel-ondalik',
      'Rasyonel ve Ondalık Sayılar',
      [
        ['Rasyonel sayılar', ['a/b, b ≠ 0', 'Payda eşitle, sadeleştir'], 'Pay ve paydası tam sayı olan, paydası sıfırdan farklı sayılara rasyonel sayı denir. Toplamada paydalar eşitlenir; çarpmada paylar paylarla, paydalar paydalarla çarpılır.'],
        ['Ondalık gösterim', ['0,25 = 1/4', '0,2 · 0,03 = 0,006', 'Virgülü kaydırmayı unutma'], 'Ondalık sayıların çarpımında virgülsüz çarpılır, ardından toplam ondalık basamak sayısı kadar virgül sola alınır. 0,2 · 0,03 = 0,006.'],
        ['Devirli ondalık', ['0,(3) = 1/3', '0,(6) = 2/3'], 'Devirli sayılar kesre çevrilirken devreden kısım pay, devreden basamak sayısı kadar 9 payda yazılır. 0,(3) = 3/9 = 1/3.'],
      ],
      [
        ['0,25 + 3/4 işleminin sonucu kaçtır?', ['3/4', '1', '5/4', '1,5', '2'], 1, '0,25 = 1/4; 1/4 + 3/4 = 1.'],
        ['0,(6) + 0,(3) işleminin sonucu kaçtır?', ['0,(9)', '1', '9/10', '2/3', '1/3'], 1, '0,(6) = 2/3, 0,(3) = 1/3; toplam 1.'],
        ['0,2 · 0,03 işleminin sonucu kaçtır?', ['0,6', '0,06', '0,006', '0,0006', '6'], 2, '2 · 3 = 6 ve toplam üç ondalık basamak olduğundan 0,006.'],
      ],
    ),
    lesson(
      'mat-esitsizlik-mutlak',
      'Eşitsizlik ve Mutlak Değer',
      [
        ['Eşitsizlik kuralları', ['Negatifle çarpınca yön değişir', 'Taraflara aynı sayı eklenir'], 'Eşitsizliğin iki tarafına aynı sayı eklenip çıkarılabilir. Negatif bir sayıyla çarpılırsa ya da bölünürse eşitsizlik yön değiştirir.'],
        ['Mutlak değer', ['|x| uzaklıktır', '|x| < a ⇒ −a < x < a'], 'Mutlak değer bir sayının sıfıra olan uzaklığıdır; her zaman sıfır ya da pozitiftir. |x| < a eşitsizliği −a < x < a olarak açılır.'],
        ['Aralık dönüşümü', ['a < x < b ise ax+c aralığı'], 'Bir x aralığı verildiğinde ifadenin aralığı bulunurken önce çarpma, sonra toplama işlemi uygulanır.'],
      ],
      [
        ['|x − 3| < 2 eşitsizliğini sağlayan x tam sayılarının toplamı kaçtır?', ['6', '7', '8', '9', '10'], 3, '1 < x < 5 olur; x = 2, 3, 4 ve toplam 9.'],
        ['|−5| + |3| − |−2| işleminin sonucu kaçtır?', ['0', '4', '6', '8', '10'], 2, '5 + 3 − 2 = 6.'],
        ['−2 < x < 3 olduğuna göre 2x − 1 ifadesi aşağıdaki aralıklardan hangisindedir?', ['(−5, 5)', '(−3, 5)', '(−4, 6)', '(−5, 6)', '(−3, 7)'], 0, '−4 < 2x < 6 ise −5 < 2x − 1 < 5.'],
      ],
    ),
    lesson(
      'mat-uslu',
      'Üslü Sayılar',
      [
        ['Temel kurallar', ['aᵐ · aⁿ = aᵐ⁺ⁿ', 'aᵐ / aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ'], 'Tabanlar aynıysa çarpmada üsler toplanır, bölmede çıkarılır. Üssün üssü alınırken üsler çarpılır.'],
        ['Özel durumlar', ['a⁰ = 1', 'a⁻ⁿ = 1/aⁿ'], 'Sıfırdan farklı her sayının sıfırıncı kuvveti 1\'dir. Negatif üs, sayının çarpmaya göre tersini alır: 2⁻¹ = 1/2.'],
        ['Denklem çözme', ['Tabanları eşitle, üsleri eşitle', '2ˣ⁺¹ = 2·2ˣ'], 'Üslü denklemlerde tabanlar aynı yapılır ve üsler eşitlenir. 2ˣ⁺¹ ifadesi 2 · 2ˣ olarak yazılır.'],
      ],
      [
        ['3⁰ + 2⁻¹ işleminin sonucu kaçtır?', ['1/2', '1', '3/2', '2', '5/2'], 2, '3⁰ = 1 ve 2⁻¹ = 1/2; toplam 3/2.'],
        ['(2⁵ · 2³) / 2⁶ işleminin sonucu kaçtır?', ['2', '4', '8', '16', '32'], 1, '2⁸ / 2⁶ = 2² = 4.'],
        ['2ˣ⁺¹ + 2ˣ = 48 olduğuna göre x kaçtır?', ['2', '3', '4', '5', '6'], 2, '2ˣ · (2 + 1) = 48 ise 2ˣ = 16 ve x = 4.'],
      ],
    ),
    lesson(
      'mat-koklu',
      'Köklü Sayılar',
      [
        ['Kök dışına çıkarma', ['√(a²·b) = a√b', '√50 = 5√2'], 'Kök içindeki sayı tam kare çarpanlarına ayrılır ve tam kare kök dışına çıkar. √50 = √(25·2) = 5√2.'],
        ['Toplama ve çıkarma', ['Kök içleri aynıysa katsayılar toplanır'], 'Köklü ifadelerle toplama ve çıkarma yapabilmek için kök içlerinin aynı olması gerekir. √18 + √8 = 3√2 + 2√2 = 5√2.'],
        ['Çarpma ve özdeşlik', ['√a · √b = √(ab)', '(√a + b)(√a − b) = a − b²'], 'Kök içleri çarpılabilir. (√3 + 1)(√3 − 1) çarpımı iki kare farkı olduğundan 3 − 1 = 2 olur.'],
      ],
      [
        ['√12 + √27 işleminin sonucu kaçtır?', ['5√3', '6√3', '√39', '7√3', '9√3'], 0, '√12 = 2√3 ve √27 = 3√3; toplam 5√3.'],
        ['√2 · √8 işleminin sonucu kaçtır?', ['2', '4', '8', '16', '√10'], 1, '√16 = 4.'],
        ['(√3 + 1)(√3 − 1) işleminin sonucu kaçtır?', ['1', '2', '3', '4', '√3'], 1, 'İki kare farkı: 3 − 1 = 2.'],
      ],
    ),
    lesson(
      'mat-carpanlara-ayirma',
      'Çarpanlara Ayırma ve Özdeşlikler',
      [
        ['İki kare farkı', ['x² − y² = (x − y)(x + y)'], 'Birer tam kare olan iki terimin farkı, farkları ve toplamlarının çarpımına eşittir. Hesaplamayı kolaylaştırmak için sıkça kullanılır.'],
        ['Tam kare açılımı', ['(a + b)² = a² + 2ab + b²', '(a − b)² = a² − 2ab + b²'], 'Bir toplamın karesi, ilk terimin karesi, iki çarpım ve ikinci terimin karesinin toplamıdır. a² + b² = (a + b)² − 2ab olarak da kullanılır.'],
        ['İkinci derece üç terimli', ['x² + (a + b)x + ab = (x + a)(x + b)'], 'Üç terimli ifadeler, çarpımları ab ve toplamları a + b olan iki sayı bulunarak çarpanlarına ayrılır.'],
      ],
      [
        ['x − y = 4 ve x + y = 6 ise x² − y² kaçtır?', ['10', '20', '24', '30', '36'], 2, 'x² − y² = (x − y)(x + y) = 4 · 6 = 24.'],
        ['a + b = 5 ve a · b = 6 ise a² + b² kaçtır?', ['11', '12', '13', '25', '31'], 2, 'a² + b² = (a + b)² − 2ab = 25 − 12 = 13.'],
        ['101² − 99² işleminin sonucu kaçtır?', ['200', '300', '400', '500', '600'], 2, '(101 − 99)(101 + 99) = 2 · 200 = 400.'],
      ],
    ),
  ]),
  topic('mat-problemler', 'Problemler', [
    lesson(
      'mat-oran-oranti',
      'Oran ve Orantı',
      [
        ['Oran', ['a/b iki çokluğun karşılaştırması', 'Zincirleme oran'], 'İki çokluğun bölümüyle karşılaştırılmasına oran denir. a/b = 2/3 ve b/c = 3/4 ise a ile c\'yi karşılaştırmak için b değerleri eşitlenir.'],
        ['Doğru orantı', ['Biri artarsa diğeri de artar', 'Oran sabit'], 'İki çokluk aynı yönde değişiyorsa doğru orantılıdır; oranları sabittir. 5 kalem 20 TL ise 8 kalem 32 TL olur.'],
        ['Ters orantı', ['Biri artarsa diğeri azalır', 'Çarpım sabit'], 'Biri artarken diğeri azalıyorsa ters orantılıdır; çarpımları sabittir. İşçi sayısı ve gün gibi.'],
      ],
      [
        ['a / b = 2/3 ve b / c = 3/4 ise a / c kaçtır?', ['1/2', '2/3', '3/4', '3/2', '1'], 0, 'a : b = 2 : 3 ve b : c = 3 : 4 ise a : c = 2 : 4 = 1/2.'],
        ['5 kalem 20 TL ise aynı fiyattan 8 kalem kaç TL\'dir?', ['28', '30', '32', '36', '40'], 2, 'Bir kalem 4 TL; 8 · 4 = 32 TL.'],
        ['6 işçi bir işi 12 günde bitiriyorsa aynı işi 8 işçi kaç günde bitirir?', ['6', '8', '9', '10', '16'], 2, 'Ters orantı: 6 · 12 = 8 · x ise x = 9.'],
      ],
    ),
    lesson(
      'mat-denklem',
      'Denklem Çözme',
      [
        ['Birinci dereceden denklem', ['Bilinmeyeni yalnız bırak', 'Terimleri taraf değiştirince işaret değişir'], 'Bilinmeyenli terimler bir tarafa, sayılar diğer tarafa toplanır. Taraf değiştiren terimin işareti değişir.'],
        ['İki bilinmeyenli sistem', ['Toplama / çıkarma yöntemi', 'Yok etme / yerine koyma'], 'Denklemler taraf tarafa toplanarak ya da çıkarılarak bir bilinmeyen yok edilebilir. Elde edilen değer başka bir denklemde yerine konur.'],
        ['Parantezli denklem', ['Önce parantezi aç'], 'Parantezli denklemlerde dağılma özelliği uygulanır: 3(x − 2) = 3x − 6.'],
      ],
      [
        ['3x − 5 = 2x + 7 denkleminin çözümü kaçtır?', ['2', '6', '10', '12', '14'], 3, 'x = 7 + 5 = 12.'],
        ['x + y = 10 ve x − y = 2 ise x · y kaçtır?', ['16', '20', '24', '28', '32'], 2, 'Taraf tarafa toplanırsa x = 6, y = 4 olur. Çarpım 24.'],
        ['3(x − 2) = 2(x + 1) denkleminin çözümü kaçtır?', ['4', '6', '8', '10', '12'], 2, '3x − 6 = 2x + 2 ise x = 8.'],
      ],
    ),
    lesson(
      'mat-sayi-kesir-problemleri',
      'Sayı ve Kesir Problemleri',
      [
        ['Sayı problemi', ['Problemi cebirle yaz', 'Bilinmeyene harf ver'], 'Sayı problemlerinde bilinmeyen sayı x olarak alınır, verilen ilişkiler denklem biçiminde yazılır.'],
        ['Kesir problemleri', ['Önce kalan miktarı bul'], 'Kesir problemlerinde her aşamada kalan miktar hesaplanır. Bir miktarın a/b\'si alındıktan sonra geriye (b − a)/b kalır.'],
        ['Ardışık işlemler', ['Önce bütünün ilk kesrini, sonra kalan'], 'Önce bütünden bir kesir alınır, kalan miktar bulunur, sonra o kalanın bir kesri alınır. Her adımda hangi miktarın üzerinden kesir alındığına dikkat edilir.'],
      ],
      [
        ['Bir sayının 3 katının 5 fazlası 20 ise bu sayı kaçtır?', ['3', '4', '5', '6', '8'], 2, '3x + 5 = 20 ise x = 5.'],
        ['Bir sayının 2/5\'i 12 ise bu sayı kaçtır?', ['24', '28', '30', '32', '36'], 2, 'x · 2/5 = 12 ise x = 30.'],
        ['120 sayfalık bir kitabın 1/3\'ü ilk gün, kalanın 1/4\'ü ikinci gün okunuyor. Geriye kaç sayfa kalır?', ['40', '50', '60', '70', '80'], 2, 'İlk gün 40, kalan 80; ikinci gün 20 okunur; geriye 60 sayfa kalır.'],
      ],
    ),
    lesson(
      'mat-yas',
      'Yaş Problemleri',
      [
        ['Temel ilke', ['Yaş farkı hiç değişmez', 'Her yıl herkes 1 yıl yaşlanır'], 'İki kişi arasındaki yaş farkı zamanla değişmez. t yıl sonra herkesin yaşı t artar, t yıl önce t azalır.'],
        ['Toplam yaş', ['t yıl sonra toplam 2t artar', 'Kişi sayısı kadar'], 'n kişinin toplam yaşı t yıl sonra n · t kadar artar. Bu bilgi bugünkü toplamı bulmak için kullanılır.'],
        ['Oran ve fark', ['Yaşların oranı değişir, farkı değişmez'], 'Oran verilen yaş problemlerinde bugünkü yaşlar x ve kx gibi seçilir; t yıl sonrası için x + t ve kx + t yazılır.'],
      ],
      [
        ['Annenin yaşı 40, çocuğun yaşı 10\'dur. Kaç yıl sonra annenin yaşı çocuğun yaşının 2 katı olur?', ['5', '10', '15', '20', '25'], 3, '40 + x = 2(10 + x) ise x = 20.'],
        ['Baba oğuldan 30 yaş büyüktür. 5 yıl sonra yaşları toplamı 70 olacağına göre oğlun şimdiki yaşı kaçtır?', ['10', '12', '15', '18', '20'], 2, 'Şimdiki toplam 60; x + x + 30 = 60 ise x = 15.'],
        ['Ali, Veli\'nin 3 katı yaşındadır. 6 yıl sonra yaşları toplamı 52 olacağına göre Ali\'nin şimdiki yaşı kaçtır?', ['20', '24', '30', '36', '40'], 2, 'Şimdiki toplam 52 − 12 = 40; 4x = 40 ise Veli 10, Ali 30.'],
      ],
    ),
    lesson(
      'mat-yuzde-kar-zarar',
      'Yüzde, Kâr ve Zarar',
      [
        ['Yüzde', ['%x = x/100', '%20 artış → × 1,2'], 'Yüzde paydası 100 olan kesirdir. %20 zam ×1,2, %20 indirim ×0,8 ile gösterilir. Ardışık değişimlerde çarpanlar çarpılır.'],
        ['Kâr ve zarar', ['Satış = Maliyet + Kâr', 'Kâr oranı maliyete göre'], 'Satış fiyatı maliyetten büyükse kâr, küçükse zarar vardır. Aksi söylenmedikçe kâr ve zarar yüzdesi maliyet üzerinden hesaplanır.'],
        ['Ters hesap', ['Satış fiyatı ÷ çarpan = maliyet'], '%20 zararla satılan bir mal 160 TL\'ye gitmişse maliyet çarpanı 0,8 olduğundan maliyet 160 / 0,8 = 200 TL\'dir.'],
      ],
      [
        ['Fiyatı 200 TL olan bir ürüne %25 zam yapılıp ardından %20 indirim uygulanıyor. Son fiyat kaç TL olur?', ['180', '190', '200', '210', '250'], 2, '200 · 1,25 · 0,8 = 200 TL.'],
        ['Maliyeti 200 TL olan bir mal %25 kârla satılırsa satış fiyatı kaç TL olur?', ['225', '240', '250', '260', '275'], 2, '200 · 1,25 = 250 TL.'],
        ['Bir mal %20 zararla 160 TL\'ye satılıyor. Malın maliyeti kaç TL\'dir?', ['180', '190', '200', '210', '220'], 2, 'Maliyet · 0,8 = 160 ise maliyet 200 TL.'],
      ],
    ),
    lesson(
      'mat-faiz',
      'Faiz Problemleri',
      [
        ['Basit faiz', ['Faiz = Ana para · oran · süre / 100', 'Süre yıl cinsinden'], 'Basit faizde faiz her dönem ana paraya göre hesaplanır: F = A · r · t / 100. Süre ay ya da gün verilmişse yıla çevrilir.'],
        ['Bileşik faiz', ['Her dönem faiz ana paraya eklenir', 'A · (1 + r)ⁿ'], 'Bileşik faizde dönem sonunda faiz ana paraya eklenir ve yeni dönemde bu toplam üzerinden faiz hesaplanır.'],
        ['Hangi seçilir?', ['Aynı sürede bileşik, basitten fazladır'], 'İkiden fazla dönemde bileşik faiz, aynı oran için basit faizden daha fazla kazandırır.'],
      ],
      [
        ['2000 TL yıllık %12 basit faizle 2 yıl bankada tutulursa faiz geliri kaç TL olur?', ['240', '360', '440', '480', '540'], 3, '2000 · 12 · 2 / 100 = 480.'],
        ['1000 TL yıllık %10 bileşik faizle 2 yıl sonra toplam kaç TL olur?', ['1100', '1200', '1210', '1220', '1331'], 2, '1000 · 1,1 · 1,1 = 1210.'],
        ['Yıllık %10 basit faizle 5 yılda 500 TL faiz getiren ana para kaç TL\'dir?', ['500', '750', '1000', '1250', '2500'], 2, 'A · 10 · 5 / 100 = 500 ise A = 1000.'],
      ],
    ),
    lesson(
      'mat-karisim',
      'Karışım Problemleri',
      [
        ['Yüzde ve miktar', ['Saf madde = karışım · yoğunluk'], 'Karışım problemlerinde karışımdaki saf madde miktarı, toplam miktar ile yoğunluk yüzdesinin çarpımıdır. Karışımlar birleştirildiğinde saf madde miktarları toplanır.'],
        ['Su ekleme / çıkarma', ['Saf madde değişmez'], 'Karışıma su eklenirse saf madde miktarı değişmez, toplam miktar artar ve yoğunluk azalır.'],
        ['İki karışım', ['(Saf₁ + Saf₂) / (Toplam₁ + Toplam₂)'], 'İki karışımın yoğunluğu, saf maddelerin toplamının toplam kütleye bölünmesiyle bulunur.'],
      ],
      [
        ['%20\'lik 300 gram tuzlu suya 200 gram saf su ekleniyor. Yeni karışımın yoğunluğu yüzde kaç olur?', ['10', '12', '14', '15', '16'], 1, 'Tuz 60 g; toplam 500 g. 60/500 = %12.'],
        ['%10\'luk 200 gram şekerli su ile %40\'lık 100 gram şekerli su karıştırılırsa yoğunluk yüzde kaç olur?', ['15', '20', '25', '30', '35'], 1, '20 + 40 = 60 g şeker / 300 g = %20.'],
        ['%30\'luk 100 gram tuzlu suyun yoğunluğunu %20 yapmak için kaç gram su eklenmelidir?', ['25', '40', '50', '60', '75'], 2, 'Tuz 30 g; 30/(100 + x) = 0,2 ise x = 50.'],
      ],
    ),
    lesson(
      'mat-hareket',
      'Hareket (Hız – Yol – Zaman) Problemleri',
      [
        ['Temel formül', ['Yol = Hız · Zaman', 'Birimleri eşitle'], 'Yol hız ile zamanın çarpımıdır. km/saat ve dakika karışırsa birimler eşitlenir.'],
        ['Karşılıklı ve aynı yön', ['Karşılıklı: hızlar toplanır', 'Aynı yön: hızlar çıkarılır'], 'Birbirine doğru giden iki aracın yaklaşma hızı hızların toplamıdır. Aynı yönde giden iki aracın aradaki mesafeyi kapatma hızı hızlar farkıdır.'],
        ['Ortalama hız', ['Toplam yol / toplam zaman', 'Aritmetik ortalama değil'], 'Ortalama hız toplam yolun toplam zamana oranıdır. Aynı yolu farklı hızlarla gidip gelen araç için ortalama hız harmonik ortalamadır.'],
      ],
      [
        ['Saatte 90 km hızla giden bir araç 3 saatte kaç km yol alır?', ['180', '240', '270', '300', '360'], 2, '90 · 3 = 270 km.'],
        ['Aralarındaki uzaklık 360 km olan iki araç, hızları saatte 50 km ve 70 km olarak birbirlerine doğru yola çıkıyor. Kaç saat sonra karşılaşırlar?', ['2', '3', '4', '5', '6'], 1, 'Hızlar toplamı 120 km/s; 360 / 120 = 3 saat.'],
        ['Bir araç gidişte saatte 60 km, dönüşte aynı yolu saatte 40 km hızla alıyor. Ortalama hızı saatte kaç km\'dir?', ['44', '45', '48', '50', '52'], 2, 'Yol d olsun: toplam 2d; süre d/60 + d/40 = 5d/120. Ortalama = 2d / (d/24) = 48.'],
      ],
    ),
    lesson(
      'mat-isci-havuz',
      'İşçi ve Havuz Problemleri',
      [
        ['Birim iş', ['Bir işi 1 olarak al', 'x günde → günde 1/x'], 'Bir işin tamamı 1 kabul edilir. Bir işçi işi x günde bitiriyorsa bir günde işin 1/x\'ini yapar. Birlikte çalışırken günlük işler toplanır.'],
        ['Birlikte çalışma', ['1/a + 1/b = 1/t'], 'İki işçi işi sırasıyla a ve b günde bitiriyorsa birlikte t günde bitirir: 1/a + 1/b = 1/t.'],
        ['Havuz problemleri', ['Dolduran + , boşaltan −'], 'Havuz doldurma ve boşaltma problemleri işçi problemleriyle aynıdır. Boşaltan musluğun hızı doldurana göre negatif işaretle hesaplanır.'],
      ],
      [
        ['Bir işi A işçisi 12 günde, B işçisi 6 günde bitiriyor. İkisi birlikte çalışırsa işi kaç günde bitirir?', ['3', '4', '5', '6', '9'], 1, '1/12 + 1/6 = 3/12 = 1/4; 4 gün.'],
        ['Bir havuzu A musluğu 6 saatte, B musluğu 3 saatte dolduruyor. İkisi birlikte açılırsa havuz kaç saatte dolar?', ['1', '2', '3', '4', '9'], 1, '1/6 + 1/3 = 1/2; 2 saat.'],
        ['Bir işi A 10 günde, B 15 günde bitirebiliyor. İkisi birlikte çalışırsa iş kaç günde biter?', ['4', '5', '6', '8', '12'], 2, '1/10 + 1/15 = 5/30 = 1/6; 6 gün.'],
      ],
    ),
  ]),
  topic('mat-kumeler', 'Kümeler', [
    lesson(
      'mat-kumeler-ders',
      'Kümeler ve Venn Şeması',
      [
        ['Küme işlemleri', ['Birleşim ∪, kesişim ∩, fark −'], 'Birleşim iki kümenin tüm elemanlarını, kesişim ortak elemanları, fark ise ilk kümede olup ikincide olmayan elemanları içerir.'],
        ['Eleman sayısı', ['s(A∪B) = s(A) + s(B) − s(A∩B)'], 'İki kümenin birleşiminin eleman sayısı bulunurken kesişim iki kez sayıldığı için bir kez çıkarılır.'],
        ['Alt küme', ['n elemanlı kümenin 2ⁿ alt kümesi'], 'n elemanlı bir kümenin 2ⁿ alt kümesi vardır; öz alt küme sayısı 2ⁿ − 1\'dir.'],
      ],
      [
        ['s(A) = 10, s(B) = 8 ve s(A ∩ B) = 3 ise s(A ∪ B) kaçtır?', ['11', '13', '15', '18', '21'], 2, '10 + 8 − 3 = 15.'],
        ['3 elemanlı bir kümenin kaç alt kümesi vardır?', ['3', '6', '7', '8', '9'], 3, '2³ = 8.'],
        ['Bir sınıftaki 30 öğrencinin 18\'i futbol, 15\'i basketbol oynuyor ve her öğrenci en az bir spor yapıyor. İkisini de oynayan kaç öğrenci vardır?', ['1', '2', '3', '4', '5'], 2, '30 = 18 + 15 − x ise x = 3.'],
      ],
    ),
  ]),
  topic('mat-islem-moduler', 'İşlem ve Modüler Aritmetik', [
    lesson(
      'mat-islem-modul',
      'Tanımlı İşlem ve Modüler Aritmetik',
      [
        ['Tanımlı işlem', ['Verilen kuralı aynen uygula', 'a * b = 2a + b'], 'Tanımlı işlem sorularında sembolün yeni bir kuralla tanımlandığı görülür. Kural, verilen değerlere doğrudan uygulanır.'],
        ['Mod', ['a mod n = a\'nın n\'ye bölümünden kalan'], 'Modüler aritmetikte yalnızca kalan önemlidir. Haftanın günleri 7, saat 12 modunda hesaplanır.'],
        ['Gün ve saat', ['Gün sorularında mod 7'], 'Belirli gün sonra haftanın hangi günü olduğu, gün sayısının 7 ile bölümünden kalanla bulunur.'],
      ],
      [
        ['a * b = 2a + b işlemi tanımlanıyor. 3 * 4 işleminin sonucu kaçtır?', ['7', '9', '10', '11', '14'], 2, '2 · 3 + 4 = 10.'],
        ['Bugün salı ise 100 gün sonra haftanın hangi günü olur?', ['Cuma', 'Perşembe', 'Çarşamba', 'Cumartesi', 'Pazar'], 1, '100 mod 7 = 2; salıdan 2 gün sonra perşembe.'],
        ['Saat 9 iken 7 saat sonra saat kaç olur? (12 saatlik saatle)', ['2', '3', '4', '5', '6'], 2, '(9 + 7) mod 12 = 4.'],
      ],
    ),
  ]),
  topic('mat-permutasyon-olasilik', 'Permütasyon, Kombinasyon ve Olasılık', [
    lesson(
      'mat-permutasyon-kombinasyon',
      'Sayma, Permütasyon ve Kombinasyon',
      [
        ['Sayma kuralları', ['Çarpma kuralı: ve → çarp', 'Toplama kuralı: veya → topla'], 'Ardışık seçimlerde çarpma, ayrı durumlarda toplama kuralı uygulanır. Sıralı seçimler çarpma kuralının uygulamasıdır.'],
        ['Permütasyon', ['n! = n·(n−1)···1', 'P(n, r) = n!/(n−r)!'], 'n farklı elemanın sıralı dizilimlerine permütasyon denir. n kişi n!, r tanesi sıralı seçilirse P(n, r) şekilde dizilebilir.'],
        ['Kombinasyon', ['C(n, r) = n! / (r!(n−r)!)', 'Sıra önemsiz'], 'Sıranın önemli olmadığı seçimlerde kombinasyon kullanılır. C(5, 2) = 10 ve C(n, r) = C(n, n − r)\'dir.'],
      ],
      [
        ['5 kişi bir sırada kaç farklı biçimde sıralanabilir?', ['25', '60', '100', '120', '720'], 3, '5! = 120.'],
        ['5 kişi arasından 2 kişilik bir komite kaç farklı biçimde seçilir?', ['5', '10', '15', '20', '25'], 1, 'C(5, 2) = 10.'],
        ['3 farklı gömlek ve 4 farklı pantolonla kaç farklı kombin yapılabilir?', ['7', '9', '12', '14', '24'], 2, '3 · 4 = 12.'],
      ],
    ),
    lesson(
      'mat-olasilik',
      'Olasılık',
      [
        ['Temel kavram', ['P(A) = İstenen durum / Tüm durum', '0 ≤ P ≤ 1'], 'Bir olayın olasılığı istenen durum sayısının tüm durum sayısına oranıdır. İmkânsız olayın olasılığı 0, kesin olayın olasılığı 1\'dir.'],
        ['Zar ve para', ['Zar: 6 durum', 'İki zar: 36 durum'], 'Bir zar atıldığında 6, iki zar atıldığında 36 eş olasılıklı durum vardır. Çift gelme olasılığı 3/6 = 1/2\'dir.'],
        ['Bağımsız olaylar', ['P(A ve B) = P(A) · P(B)', 'Tümleyen: 1 − P(A)'], 'Birbirini etkilemeyen olayların birlikte olma olasılığı çarpılarak bulunur. Olayın gerçekleşmeme olasılığı 1 − P(A)\'dır.'],
      ],
      [
        ['Bir zar atıldığında üst yüze çift sayı gelme olasılığı kaçtır?', ['1/6', '1/3', '1/2', '2/3', '5/6'], 2, 'Çift sayılar 2, 4, 6; 3/6 = 1/2.'],
        ['İki zar birlikte atıldığında üst yüzlerin toplamının 7 olma olasılığı kaçtır?', ['1/12', '1/9', '1/6', '1/4', '1/3'], 2, 'Toplamı 7 yapan 6 durum vardır; 6/36 = 1/6.'],
        ['Bir torbada 3 kırmızı, 2 mavi top vardır. Rastgele çekilen bir topun kırmızı olma olasılığı kaçtır?', ['1/5', '2/5', '1/2', '3/5', '3/2'], 3, '3 / 5.'],
      ],
    ),
  ]),
  topic('mat-grafik-tablo', 'Tablo ve Grafik Yorumlama', [
    lesson(
      'mat-grafik-tablo-ders',
      'Tablo ve Grafik Yorumlama',
      [
        ['Okuma adımları', ['Başlık, eksen, birim', 'Önce tabloyu anla'], 'Tablo ve grafik sorularında önce başlık, birim ve eksenler okunur. Soru bu verilerin hangisini istiyorsa yalnızca o veriye bakılır.'],
        ['Oran ve yüzde', ['Yüzde = parça / bütün × 100'], 'Grafikteki bir değerin bütün içindeki payı hesaplanırken parça bütüne bölünür. Daire grafiklerinde açı ile değer doğru orantılıdır.'],
        ['Değişim', ['Artış yüzdesi = (Yeni − Eski) / Eski × 100'], 'İki dönem arasındaki değişim yüzdesi, farkın eski değere bölünmesiyle bulunur.'],
      ],
      [
        ['Bir okulda 1. sınıfta 40, 2. sınıfta 60 ve 3. sınıfta 100 öğrenci vardır. 3. sınıf öğrencilerinin tüm öğrenciler içindeki oranı yüzde kaçtır?', ['40', '45', '50', '55', '60'], 2, 'Toplam 200; 100/200 = %50.'],
        ['Bir ürünün satışı Ocak\'ta 80, Şubat\'ta 100 adet olmuştur. Şubat\'ta satış yüzde kaç artmıştır?', ['15', '20', '25', '30', '40'], 2, '(100 − 80) / 80 = %25.'],
        ['Bir daire grafiğinde 90° lik dilimi temsil eden değer toplam 400 birimin kaçıdır?', ['50', '80', '100', '120', '150'], 2, '90 / 360 = 1/4; 400 / 4 = 100.'],
      ],
    ),
  ]),
  topic('mat-sayisal-mantik', 'Sayısal Mantık', [
    lesson(
      'mat-sayisal-mantik-ders',
      'Sayı Dizileri, Kural ve Kod Soruları',
      [
        ['Sayı dizileri', ['Farka bak: sabit mi, artıyor mu?', 'Çarpım kuralı'], 'Sayı dizilerinde komşu terimler arasındaki fark, oran ya da kare/küp ilişkisi araştırılır. Farklar da bir dizi oluşturuyorsa ikinci farka bakılır.'],
        ['Kural ve kod', ['Kuralı küçük örnekle dene'], 'Verilen bir kod ya da işlem kuralı ilk örneğe uygulanır, doğruysa diğer örneklere uygulanarak cevap bulunur.'],
        ['Tablo ve düzenek', ['Şekilleri satır-sütun olarak oku'], 'Şekilli düzenek sorularında bir satır ya da sütundaki kural bulunur ve bilinmeyen kareye uygulanır.'],
      ],
      [
        ['2, 6, 12, 20, … dizisinin sıradaki terimi kaçtır?', ['24', '28', '30', '32', '36'], 2, 'Farklar 4, 6, 8; sonraki fark 10 olur: 20 + 10 = 30.'],
        ['3, 5, 9, 17, … dizisinin sıradaki terimi kaçtır?', ['25', '31', '33', '34', '35'], 2, 'Farklar 2, 4, 8; sonraki fark 16: 17 + 16 = 33.'],
        ['Her adımda önceki sayının 2 katından 1 çıkarılarak bir dizi oluşturuluyor. İlk terim 3 ise üçüncü terim kaçtır?', ['5', '7', '9', '11', '13'], 2, '2. terim 2·3 − 1 = 5; 3. terim 2·5 − 1 = 9.'],
      ],
    ),
  ]),
]);
