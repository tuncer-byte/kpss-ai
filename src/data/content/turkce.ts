import { ALL_TRACKS, lesson, subject, topic } from '../build';

// TURKCE (30 soru). Konu listesi OSYM GY kapsamina gore: anlam bilgisi (sozcuk, cumle, paragraf),
// dil bilgisi (ses, yapi, sozcuk turleri, cumle), yazim-noktalama, anlatim bozukluklari, sozel mantik.
export const turkce = subject('turkce', 'Türkçe', 'book-outline', 30, ALL_TRACKS, [
  topic('tr-sozcukte-anlam', 'Sözcükte Anlam', [
    lesson(
      'tr-gercek-mecaz-terim',
      'Gerçek, Mecaz ve Terim Anlam',
      [
        ['Gerçek anlam', ['Temel, ilk akla gelen anlam'], 'Bir sözcüğün akla ilk gelen, temel anlamına gerçek anlam denir. Sözlükte genellikle ilk sırada yer alır. "Taş" sözcüğünün sert, yapı malzemesi olan cisim anlamı gibi.'],
        ['Mecaz anlam', ['Gerçek anlamdan uzaklaşma', 'Örnek: tatlı bir ses'], 'Sözcük gerçek anlamından uzaklaşıp başka bir anlam kazandığında mecaz anlam oluşur. "Tatlı bir ses" ifadesinde sesin tadı olmaz; "tatlı" burada hoş, sevimli anlamındadır.'],
        ['Terim anlam', ['Alana özgü, tek anlamlı', 'Örnek: denklem, fotosentez'], 'Bir bilim, sanat ya da meslek dalına özgü kavramları karşılayan sözcüklere terim denir. Terimler genellikle tek anlamlıdır. "Denklem" matematik terimidir.'],
      ],
      [
        ['"Bu işte ince bir hesap var." cümlesindeki "ince" sözcüğü hangi anlamda kullanılmıştır?', ['Gerçek', 'Mecaz', 'Terim', 'Eş anlamlı', 'Zıt anlamlı'], 1, 'Hesabın kalınlığı ölçülmez; "ince" burada "dikkatle düşünülmüş" anlamında mecazdır.'],
        ['Aşağıdakilerin hangisinde "tatlı" sözcüğü mecaz anlamda kullanılmıştır?', ['Tatlı yemeyi çok sever.', 'Tatlı bir sesle konuştu.', 'Bu çay çok tatlı olmuş.', 'Tatlı bir meyve aldım.', 'Tatlı su balıkları pahalıydı.'], 1, 'Sesin tadı olmaz; "tatlı" burada hoş, sevimli anlamındadır.'],
        ['Aşağıdakilerin hangisinde altı çizili sözcük terim anlamlıdır?', ['Sınavda zor bir soru çıktı.', 'Yeni bir kalem aldı.', 'Dalgalar kıyıya çarpıyordu.', 'Üçgenin hipotenüsünü hesapladı.', 'Eve geç geldi.'], 3, '"Hipotenüs" geometriye özgü, tek anlamlı bir kavramdır; terimdir.'],
      ],
    ),
    lesson(
      'tr-es-zit-anlam',
      'Eş, Zıt ve Yakın Anlam',
      [
        ['Eş ve yakın anlam', ['Eş anlam: yazılışı ayrı, anlamı aynı', 'Örnek: okul – mektep'], 'Yazılışları ve sesleri farklı olduğu hâlde aynı kavramı karşılayan sözcüklere eş anlamlı denir. Çok az sözcük tam eş anlamlıdır; çoğu yakın anlamlıdır.'],
        ['Zıt anlam', ['Karşıt kavramlar', 'Örnek: uzun – kısa'], 'Anlamca birbirine karşıt sözcüklere zıt anlamlı denir. Sözcüğün hangi anlamda kullanıldığı önemlidir: "sert" gerçek anlamda "yumuşak", mecazda "ılımlı" sözcüğüne zıttır.'],
        ['Eş sesli sözcükler', ['Yazılışı ve okunuşu aynı, anlamı farklı', 'Örnek: yüz, çay, ben'], 'Yazılışları ve okunuşları aynı, anlamları farklı sözcüklere eş sesli denir. "Yüz" sözcüğü sayı, vücut parçası ve eylem anlamlarına gelebilir.'],
      ],
      [
        ['Aşağıdaki sözcük çiftlerinden hangisi zıt anlamlıdır?', ['Cesur – yürekli', 'Tembel – çalışkan', 'Dost – arkadaş', 'Mektep – okul', 'Hızlı – çabuk'], 1, 'Tembel ve çalışkan anlamca karşıttır; diğerleri eş ya da yakın anlamlıdır.'],
        ['"Yüz" sözcüğü aşağıdakilerin hangisinde diğerlerinden farklı anlamda kullanılmıştır?', ['Yüz kişi toplantıya katıldı.', 'Yüz lira borcu vardı.', 'Yüzü gülüyordu.', 'Yüz sayfalık bir kitap okudu.', 'Yüz yıl önce kurulmuştu.'], 2, 'Diğerlerinde "yüz" sayıdır; "yüzü gülüyordu"da vücut parçası anlamındadır.'],
        ['Aşağıdaki cümlelerin hangisinde "çay" sözcüğü akarsu anlamında kullanılmıştır?', ['Sabahları çay içer.', 'Çay demlemeyi bilmiyor.', 'Çayın kenarında oturup balık tuttular.', 'Çayı şekersiz sever.', 'Çay bardağını masaya koydu.'], 2, '"Çay" sözcüğü hem içecek hem küçük akarsu anlamına gelen eş sesli bir sözcüktür; "çayın kenarında balık tutmak" akarsu anlamını gösterir.'],
      ],
    ),
    lesson(
      'tr-deyim-atasozu',
      'Deyimler ve Atasözleri',
      [
        ['Deyimler', ['Kalıplaşmış, gerçek anlamı dışında', 'Örnek: gözden düşmek'], 'Deyimler birden fazla sözcükten oluşur, kalıplaşmıştır ve çoğunlukla gerçek anlamı dışında kullanılır. Öğüt vermez. "Gözden düşmek" değerini kaybetmek demektir.'],
        ['Atasözleri', ['Öğüt verir, genel yargı bildirir', 'Örnek: Damlaya damlaya göl olur'], 'Atasözleri uzun deneyimlerden doğmuş, genel yargı bildiren ve öğüt veren kalıplaşmış sözlerdir. Çoğunlukla yargı cümlesidir.'],
        ['Ayırt etme', ['Deyim: öğüt vermez', 'Atasözü: öğüt verir, yargı bildirir'], 'Deyim ile atasözünü ayırmak için cümlenin öğüt verip vermediğine bakılır. Deyimler cümlenin bir parçası gibi kullanılırken atasözleri çoğunlukla tek başına tam bir yargıdır.'],
      ],
      [
        ['Aşağıdakilerden hangisi bir deyimdir?', ['Ağaç yaş iken eğilir.', 'Ayağını yorgana göre uzat.', 'Yüreği ağzına gelmek', 'Sakla samanı gelir zamanı.', 'Bir elin nesi var, iki elin sesi var.'], 2, '"Yüreği ağzına gelmek" korkmak anlamında kalıplaşmış bir deyimdir; diğerleri atasözüdür.'],
        ['"Damlaya damlaya göl olur." sözüyle anlatılmak istenen aşağıdakilerden hangisidir?', ['Su kaynaklarını korumak gerekir.', 'Küçük birikimler zamanla büyür.', 'Yağmurlu havada dikkatli olunmalı.', 'Göller kendiliğinden oluşur.', 'Her işte acele edilmemeli.'], 1, 'Atasözü, küçük şeylerin birikerek büyük sonuç doğuracağını söyler.'],
        ['"Gözden düşmek" deyimi aşağıdakilerden hangisini anlatır?', ['Hasta olmak', 'Değerini, itibarını yitirmek', 'Gözlük kırmak', 'Yüksekten düşmek', 'Uykusuz kalmak'], 1, 'Deyimin anlamı itibarını, değerini yitirmektir.'],
      ],
    ),
  ]),
  topic('tr-cumlede-anlam', 'Cümlede Anlam', [
    lesson(
      'tr-cumle-yorumlama',
      'Cümle Yorumlama ve Anlam İlişkileri',
      [
        ['Cümle yorumu', ['Cümle neyi anlatıyor?', 'Doğrudan söylenenle yetinme'], 'Cümlede anlam sorularında önce cümlenin ana yargısı bulunur. Soru kökü "bu cümleden … çıkarılabilir" derse yalnızca cümlede söylenenler ya da onların kesin sonucu doğru olur.'],
        ['Neden-sonuç', ['Çünkü, -dığı için, bu yüzden', 'Sonuç cümlesi neden cümlesini izler'], 'Neden-sonuç cümlelerinde bir eylemin sebebi ve sonucu verilir. "Yağmur yağdığı için maç ertelendi" cümlesinde sebep yağmur, sonuç ertelenmedir.'],
        ['Amaç-sonuç ve koşul', ['Amaç: -mek için, diye', 'Koşul: -sa, -se, eğer'], 'Amaç-sonuç cümlesinde bir eylem belirli bir amaçla yapılır: "Sınavı geçmek için çalıştı." Koşul cümlesinde ise bir eylem başka bir eylemin gerçekleşmesine bağlıdır: "Çalışırsan başarırsın."'],
      ],
      [
        ['"Yağmur yağdığı için maç ertelendi." cümlesinde hangi anlam ilişkisi vardır?', ['Amaç-sonuç', 'Neden-sonuç', 'Koşul-sonuç', 'Karşılaştırma', 'Örnekleme'], 1, '"-dığı için" ile sebep, maçın ertelenmesiyle sonuç belirtilmiştir.'],
        ['"Sınavı geçmek için gece gündüz çalıştı." cümlesinde hangi anlam ilişkisi vardır?', ['Neden-sonuç', 'Koşul-sonuç', 'Amaç-sonuç', 'Karşıtlık', 'Benzetme'], 2, '"-mek için" eki amaç bildirir.'],
        ['"Erken yatarsan sabah zinde kalkarsın." cümlesindeki anlam ilişkisi aşağıdakilerden hangisidir?', ['Amaç-sonuç', 'Koşul-sonuç', 'Neden-sonuç', 'Öznel yargı', 'Kıyaslama'], 1, '"-sa/-se" eki koşul bildirir; sonuç koşula bağlıdır.'],
      ],
    ),
    lesson(
      'tr-oznel-nesnel',
      'Öznel ve Nesnel Yargılar',
      [
        ['Nesnel yargı', ['Kanıtlanabilir, herkes için aynı', 'Örnek: Ankara Türkiye\'nin başkentidir'], 'Nesnel yargılar kişiden kişiye değişmez, doğruluğu kanıtlanabilir. Sayısal veri, tarih, ölçüm bildiren cümleler genellikle nesneldir.'],
        ['Öznel yargı', ['Kişisel görüş, beğeni, yorum', 'Örnek: En güzel mevsim bahardır'], 'Öznel yargılar kişisel beğeni, duygu ve yoruma dayanır; herkes için aynı olmayabilir. "Güzel, kötü, en iyi" gibi değer bildiren sözcükler öznelliğe işaret eder.'],
        ['Sorularda ipucu', ['Sıfatlar ve değer yargıları', 'Kanıt aranırsa nesnel'], 'Soruda hangisi nesnel yargı içerir diye sorulursa kanıtlanabilir bilgi aranır. Tahmin, beğeni ve ölçülemeyen değerlendirmeler öznel kalır.'],
      ],
      [
        ['Aşağıdakilerden hangisi nesnel bir yargı içerir?', ['Bu roman çok sürükleyici.', 'Türkiye\'nin başkenti Ankara\'dır.', 'En güzel şehir İstanbul\'dur.', 'Kış ayları kasvetlidir.', 'Müzik insanı mutlu eder.'], 1, 'Başkentin Ankara olması kanıtlanabilir bir bilgidir; diğerleri kişisel yargıdır.'],
        ['Aşağıdakilerden hangisinde öznel bir yargı vardır?', ['Dünya Güneş\'in etrafında döner.', 'Su 100 °C\'de kaynar.', 'Bu film izlenmeye değer.', 'Kitap 200 sayfadır.', 'Toplantı saat 10.00\'da başladı.'], 2, '"İzlenmeye değer" kişisel bir değerlendirmedir.'],
        ['"Bu yıl yağışlar geçen yıla göre yüzde 20 azaldı." cümlesi için aşağıdakilerden hangisi söylenebilir?', ['Öznel bir yargı içerir.', 'Kişisel beğeniye dayanır.', 'Nesnel bir yargı içerir.', 'Yalnızca tahmindir.', 'Duygusal bir anlatımdır.'], 2, 'Sayısal veriye dayalı, ölçülebilir olduğundan nesneldir.'],
      ],
    ),
  ]),
  topic('tr-paragraf', 'Paragrafta Anlam', [
    lesson(
      'tr-ana-dusunce',
      'Konu, Ana Düşünce ve Yardımcı Düşünce',
      [
        ['Konu ve ana düşünce', ['Konu: ne anlatılıyor?', 'Ana düşünce: yazar ne demek istiyor?'], 'Konu, parçada "neyin" anlatıldığıdır; ana düşünce ise yazarın okura vermek istediği asıl mesajdır. Ana düşünce çoğunlukla bir yargı cümlesiyle ifade edilir ve parçanın tamamını kapsar.'],
        ['Yardımcı düşünce', ['Ana düşünceyi destekler', 'Örnek ve ayrıntı verir'], 'Yardımcı düşünceler ana düşünceyi açıklar, örneklendirir ya da destekler. Bir ayrıntı tek başına ana düşünce olamaz.'],
        ['Yöntem', ['Önce ilk ve son cümleye bak', 'Tekrar eden kavramı bul'], 'Ana düşünceyi bulmak için parçada en çok vurgulanan kavramı ve yazarın vardığı sonucu arayın. Genellikle giriş ya da sonuç cümlesinde yer alır.'],
      ],
      [
        ['"Kitap okumak, insanın yalnızca bilgisini artırmaz; aynı zamanda hayal gücünü geliştirir, kelime dağarcığını zenginleştirir ve farklı bakış açıları kazandırır." Bu parçanın ana düşüncesi aşağıdakilerden hangisidir?', ['Kitaplar pahalıdır.', 'Kitap okumak insana çok yönlü katkı sağlar.', 'Kelime dağarcığı yalnızca kitapla gelişir.', 'Hayal gücü olmayanlar kitap okumaz.', 'Bilgi, okumadan edinilemez.'], 1, 'Parça, okumanın bilgi, hayal gücü ve kelime dağarcığına katkısını sayarak çok yönlü fayda sağladığını söyler.'],
        ['Ana düşünce için aşağıdakilerden hangisi doğrudur?', ['Parçadaki en kısa cümledir.', 'Yalnızca örnekten oluşur.', 'Yazarın vermek istediği asıl mesajdır.', 'Her zaman ilk cümlededir.', 'Konu ile aynı şeydir.'], 2, 'Ana düşünce yazarın okura iletmek istediği asıl mesajdır; konu ise neyin anlatıldığıdır.'],
        ['Aşağıdakilerden hangisi bir parçanın yardımcı düşüncesi olabilir?', ['Parçanın tamamını özetleyen yargı', 'Ana düşünceyi destekleyen bir örnek', 'Parçanın başlığı', 'Parçanın genel sonucu', 'Yazarın asıl amacı'], 1, 'Yardımcı düşünce ana düşünceyi destekleyen örnek ve ayrıntıdır.'],
      ],
    ),
    lesson(
      'tr-paragraf-anlatim',
      'Anlatım Biçimleri ve Düşünceyi Geliştirme Yolları',
      [
        ['Anlatım biçimleri', ['Açıklayıcı, öyküleyici, betimleyici, tartışmacı'], 'Açıklayıcı anlatımda bilgi verilir. Öyküleyici anlatımda olaylar zaman sırasıyla anlatılır. Betimleyici anlatımda varlıklar okuyucunun gözünde canlanacak şekilde tanıtılır. Tartışmacı anlatımda bir görüş savunulur.'],
        ['Düşünceyi geliştirme yolları', ['Tanımlama, örnekleme, karşılaştırma, tanık gösterme, sayısal verilerden yararlanma'], 'Yazar düşüncesini tanımlama, örnekleme, karşılaştırma, benzetme, tanık gösterme ya da sayısal verilerden yararlanarak geliştirir. "Örneğin", "yani", "ne kadar ... o kadar" gibi ifadeler ipucudur.'],
        ['Ayırt etme', ['Duyulara hitap ediyorsa betimleme', 'Olay akışı varsa öyküleme'], 'Duyulara hitap eden ayrıntılar betimlemeye, olay akışı öyküleyici anlatıma, "bence, bana göre" gibi kanıt isteyen yargılar tartışmacı anlatıma işaret eder.'],
      ],
      [
        ['"Sabahın ilk ışıklarıyla sokaklar uyanmaya başlamıştı. Fırından taze ekmek kokusu yayılıyor, kaldırımlar henüz ıslak parlıyordu." Bu parçada ağırlıklı olarak hangi anlatım biçimi kullanılmıştır?', ['Açıklayıcı', 'Öyküleyici', 'Betimleyici', 'Tartışmacı', 'Öğretici'], 2, 'Görülen, koklanan ayrıntılarla bir ortam canlandırıldığı için betimleyici anlatımdır.'],
        ['"Örneğin" sözcüğüyle başlayan bir cümle, düşünceyi geliştirme yollarından hangisine işaret eder?', ['Tanımlama', 'Karşılaştırma', 'Örnekleme', 'Tanık gösterme', 'Benzetme'], 2, '"Örneğin" örnekleme yolunun belirgin ipucudur.'],
        ['Hangisinde tartışmacı anlatım kullanılmıştır?', ['Kitap, ciltli ve ince bir kapağa sahipti.', 'Dün akşam eve yürüyerek döndüm.', 'Bence kitap okumak, televizyon izlemekten çok daha verimlidir; çünkü zihni çalıştırır.', 'Dünya Güneş\'in çevresinde döner.', 'Ankara, İç Anadolu\'da yer alır.'], 2, 'Görüş savunulup gerekçe gösterildiği için tartışmacıdır.'],
      ],
    ),
    lesson(
      'tr-paragraf-siralama',
      'Cümle Sıralama, Paragraf Tamamlama ve Cümle Çıkarma',
      [
        ['Paragraf sıralama', ['Giriş cümlesi bağlaç/zamirle başlamaz', 'Zamir ve işaret sözcükleri önceki cümleye bağlar'], 'Sıralama sorularında önce giriş cümlesi bulunur; "bu, o, ancak, fakat, çünkü" gibi bağlayıcılarla başlayan cümle ilk cümle olamaz. Zamir ve belirteçler hangi cümleye bağlandığını gösterir.'],
        ['Paragraf tamamlama', ['Boşluktan önce ve sonrasına bak', 'Konudan sapma'], 'Tamamlama sorularında boşluk, öncesindeki yargıyla uyumlu ve parçanın bütünlüğünü bozmayacak şekilde doldurulmalıdır. Konudan sapan ya da tekrar eden seçenek elenir.'],
        ['Cümle çıkarma', ['Akışı bozan, konu dışı cümle'], 'Parçanın bütünlüğünü bozan cümle, ana düşünceden ya da anlatım akışından kopan cümledir. Genellikle konudan sapar ya da farklı bir yargı bildirir.'],
      ],
      [
        ['Bir paragrafın ilk cümlesi olabilecek cümle aşağıdakilerden hangisidir?', ['Bu nedenle sonuç değişmedi.', 'Ancak durum hiç de öyle değildi.', 'Türk mutfağı, zengin çeşitliliğiyle dünyada ün kazanmıştır.', 'Onlar da bunu çok sevdi.', 'Çünkü hava çok soğuktu.'], 2, 'Bağlaçla ya da zamirle başlayan cümleler önceki cümleye bağlıdır; konuyu tanıtan cümle ilk cümle olur.'],
        ['Cümle sıralama sorularında ilk cümleyi bulurken aşağıdakilerden hangisine dikkat edilir?', ['En uzun cümleye', 'Bağlaç ve zamirle başlamayan, konuyu tanıtan cümleye', 'Soru cümlesine', 'Noktalama işaretine', 'Son cümleye'], 1, 'Giriş cümlesi başka bir cümleye bağımlı olmayan, konuyu tanıtan cümledir.'],
        ['Cümle çıkarma sorularında çıkarılacak cümle hangisidir?', ['Ana düşünceyi destekleyen', 'Konudan sapan, akışı bozan', 'Örnek veren', 'Sonucu bildiren', 'Giriş cümlesi'], 1, 'Akışı bozan, konu dışı kalan cümle çıkarılır.'],
      ],
    ),
  ]),
  topic('tr-ses-bilgisi', 'Ses Bilgisi', [
    lesson(
      'tr-unlu-uyumlari',
      'Ünlü Uyumları',
      [
        ['Büyük ünlü uyumu', ['Kalın: a, ı, o, u', 'İnce: e, i, ö, ü'], 'İlk hecedeki ünlü kalınsa sonraki hecelerdeki ünlüler de kalın, ince ise ince olur. Kalın ünlüler a, ı, o, u; ince ünlüler e, i, ö, ü\'dür.'],
        ['Küçük ünlü uyumu', ['Düz: a, e, ı, i', 'Yuvarlak: o, ö, u, ü'], 'İlk hecede düz ünlü varsa sonraki hecelerde de düz ünlü gelir. İlk hecede yuvarlak ünlü varsa sonra düz geniş (a, e) ya da dar yuvarlak (u, ü) ünlü gelir.'],
        ['Uyuma uymayanlar', ['Yabancı sözcükler genelde uymaz', 'kitap, saat, avuç'], 'Yabancı kökenli ve birleşik sözcükler çoğunlukla ünlü uyumlarına uymaz. "Kitap" büyük, "avuç" küçük ünlü uyumunu bozar.'],
      ],
      [
        ['Aşağıdaki sözcüklerden hangisi büyük ünlü uyumuna uymaz?', ['okul', 'gelin', 'kitap', 'balık', 'ördek'], 2, '"kitap" sözcüğünde ince (i) ünlüden sonra kalın (a) ünlü gelmiştir.'],
        ['Aşağıdakilerden hangisinde küçük ünlü uyumu bozulmuştur?', ['kuzu', 'gözlük', 'avuç', 'çiçek', 'dolap'], 2, '"avuç" sözcüğünde düz ünlü (a) sonrasında yuvarlak ünlü (u) gelmiştir.'],
        ['Kalın ünlüler aşağıdakilerin hangisinde eksiksiz verilmiştir?', ['a, ı, o, u', 'a, e, o, u', 'ı, i, o, u', 'a, ı, ö, u', 'e, i, ö, ü'], 0, 'Kalın ünlüler a, ı, o, u; ince ünlüler e, i, ö, ü\'dür.'],
      ],
    ),
    lesson(
      'tr-ses-olaylari',
      'Ünsüz Benzeşmesi, Yumuşaması ve Ses Düşmesi',
      [
        ['Ünsüz benzeşmesi', ['Sert ünsüzden sonra sert ünsüz', 'f, s, t, k, ç, ş, h, p'], 'Sert ünsüzle (f, s, t, k, ç, ş, h, p) biten bir sözcüğe ünsüzle başlayan ek gelirse ek sertleşir: "kitap + ça → kitapça", "sokak + tan → sokaktan".'],
        ['Ünsüz yumuşaması', ['p, ç, t, k → b, c, d, ğ', 'Ünlüyle başlayan ek gelince'], 'Sert ünsüzle biten çok heceli sözcüklere ünlüyle başlayan ek gelince p, ç, t, k yumuşar: "kitap → kitabı", "ağaç → ağacı", "kanat → kanadı", "çocuk → çocuğu".'],
        ['Ünlü düşmesi ve ünsüz ikizleşmesi', ['Ünlü düşmesi: ağız → ağzı, burun → burnu', 'Ünsüz ikizleşmesi: af → affetmek'], 'Bazı sözcüklerde ek geldiğinde ikinci hecedeki ünlü düşer: "ağız → ağzı", "burun → burnu". Bazı Arapça kökenli sözcüklerde ise ek ya da yardımcı eylem gelince son ünsüz ikizleşir: "his → hissetmek", "af → affetmek".'],
      ],
      [
        ['Aşağıdakilerden hangisinde ünsüz yumuşaması görülür?', ['kalem → kalemi', 'ağız → ağzı', 'kitap → kitabı', 'sokak → sokaktan', 'ev → evde'], 2, '"kitap" sözcüğünde p ünsüzü, ünlüyle başlayan ek gelince b\'ye dönüşmüştür.'],
        ['"Sokak + tan → sokaktan" örneğinde hangi ses olayı vardır?', ['Ünlü düşmesi', 'Ünsüz yumuşaması', 'Ünsüz benzeşmesi', 'Ünlü türemesi', 'Ulama'], 2, 'Sert ünsüz (k) sonrası gelen ek sertleşmiş (-dan → -tan); bu ünsüz benzeşmesidir.'],
        ['Aşağıdaki sözcüklerin hangisinde ünlü düşmesi vardır?', ['ağaç → ağacı', 'burun → burnu', 'kitap → kitabı', 'çiçek → çiçeği', 'top → topu'], 1, '"burun + u → burnu" örneğinde ikinci hecedeki ünlü düşmüştür.'],
      ],
    ),
  ]),
  topic('tr-yapi-bilgisi', 'Yapı Bilgisi', [
    lesson(
      'tr-kok-ek',
      'Kök, Ek ve Sözcük Yapısı',
      [
        ['Kök ve ekler', ['Kök: anlamlı en küçük parça', 'Yapım ekleri yeni sözcük, çekim ekleri biçim değişikliği'], 'Kök, bir sözcüğün anlamlı en küçük parçasıdır. Yapım ekleri sözcüğün anlamını ya da türünü değiştirip yeni sözcük türetir; çekim ekleri ise sözcüğü cümledeki göreviyle ilgili biçime sokar.'],
        ['Sözcük yapısı', ['Basit: yalnız kök', 'Türemiş: kök + yapım eki', 'Birleşik: iki sözcük birleşir'], 'Yapım eki almamış sözcük basit, yapım eki almış sözcük türemiş, iki ya da daha fazla sözcüğün birleşmesiyle oluşan sözcük birleşiktir: "göz" basit, "gözlük" türemiş, "başkent" birleşiktir.'],
        ['Ayırt etme ipuçları', ['-lık, -cı, -lı yapım eki', '-ler, -i, -de çekim eki'], '"Gözlük" sözcüğünde "-lük" yapım ekidir; "gözler" sözcüğündeki "-ler" ise çekim ekidir. Yapım eki yeni bir varlık ya da kavram adı türetir.'],
      ],
      [
        ['Aşağıdaki sözcüklerden hangisi türemiş sözcüktür?', ['göz', 'başkent', 'gözlük', 'gelmek', 'kapıda'], 2, '"göz" köküne yapım eki "-lük" gelerek yeni bir sözcük türetilmiştir.'],
        ['Aşağıdakilerin hangisinde altı çizili ek yapım ekidir?', ['kitap-lar', 'ev-de', 'göz-lük', 'okul-dan', 'masa-yı'], 2, '"-lük" eki yeni bir sözcük türetir; diğerleri çekim ekidir.'],
        ['Aşağıdaki sözcüklerden hangisi birleşik sözcüktür?', ['çiçekçi', 'kitaplık', 'hanımeli', 'güzellik', 'öğretmen'], 2, '"Hanım" ve "eli" sözcüklerinin birleşmesiyle oluşmuş bir bitki adıdır.'],
      ],
    ),
  ]),
  topic('tr-sozcuk-turleri', 'Sözcük Türleri', [
    lesson(
      'tr-isim-sifat-zamir',
      'İsim, Sıfat, Zamir ve Zarf',
      [
        ['İsim ve sıfat', ['İsim: varlık adı', 'Sıfat: ismi niteler ya da belirtir'], 'İsimler varlıkları karşılar. Sıfatlar isimlerin önüne gelerek onları niteler ya da belirtir: "güzel kız" (niteleme), "bu kız" (belirtme). Sıfat tek başına kullanılırsa isimleşir.'],
        ['Zamir', ['İsmin yerini tutar', 'Kişi, işaret, belgisiz, soru zamirleri'], 'Zamirler isimlerin yerini tutar: ben, sen, o; bu, şu, o; kimi, kimse, hepsi; kim, ne, hangisi. "Bu kitap" sıfat, "Bunu aldım" zamir kullanımıdır.'],
        ['Zarf', ['Fiili, sıfatı, zarfı niteler', 'Hızlı koştu, çok güzel'], 'Zarflar fiilleri, sıfatları ya da başka zarfları anlam yönünden niteler: "hızlı koştu", "çok güzel", "pek hızlı". Sıfatla zarf, nitelediği sözcüğe göre ayrılır.'],
      ],
      [
        ['"Bu kitabı sana vereceğim." cümlesindeki "bu" sözcüğü hangi türdendir?', ['Zamir', 'Sıfat', 'Zarf', 'Edat', 'Bağlaç'], 1, '"Bu" kitap ismini belirttiği için işaret sıfatıdır.'],
        ['"Bunu sana vereceğim." cümlesindeki "bunu" sözcüğü hangi türdendir?', ['Sıfat', 'Zarf', 'Zamir', 'İsim', 'Edat'], 2, 'Bir ismin yerini tuttuğu için işaret zamiridir.'],
        ['"Çok güzel bir şarkı söyledi." cümlesinde "çok" sözcüğü hangi türdendir?', ['Sıfat', 'Zamir', 'Zarf', 'İsim', 'Bağlaç'], 2, '"Çok" sıfat olan "güzel"i nitelediği için zarftır.'],
      ],
    ),
    lesson(
      'tr-edat-baglac-fiil',
      'Edat, Bağlaç, Ünlem ve Fiiller',
      [
        ['Edat, bağlaç, ünlem', ['Edat: ile, için, gibi, kadar', 'Bağlaç: ve, ama, çünkü', 'Ünlem: duygu bildirir'], 'Edatlar tek başına anlamı olmayan, ilgi kuran sözcüklerdir: ile, için, gibi, kadar. Bağlaçlar sözcükleri ve cümleleri bağlar: ve, ama, fakat, çünkü, ya da. Ünlemler duygu bildirir: oh, vah, aferin.'],
        ['Fiil kipleri', ['Haber kipleri: -di, -miş, -yor, -ecek, -er', 'Dilek kipleri: -se, -e, -meli'], 'Fiil kipleri haber (bildirme) ve dilek kiplerine ayrılır. Haber kipleri zamanı belirtir: geldi, gelmiş, geliyor, gelecek, gelir. Dilek kipleri istek, şart, gereklilik gibi anlamlar taşır: gelse, gele, gelmeli.'],
        ['Ek fiil', ['İsmi yüklem yapar', 'ol-: -dı, -mış, -sa'], 'Ek fiil, isim soylu sözcükleri yüklem yapar ve zaman, kip, kişi bildirir: "öğrenciydi", "öğrenciymiş", "öğrenciyse".'],
      ],
      [
        ['Aşağıdaki cümlelerin hangisinde "ile" sözcüğü bağlaç görevindedir?', ['Ali ile Veli sinemaya gitti.', 'Kalemle yazdı.', 'Otobüsle geldi.', 'Bir bıçakla kesti.', 'Kuşlarla oynadı.'], 0, '"Ali ile Veli" ifadesinde "ile" iki ismi bağlayan, "ve" anlamında bir bağlaçtır; diğerlerinde araç bildiren edat ya da ektir.'],
        ['"Sınavı kazandı, çünkü çok çalışmıştı." cümlesinde "çünkü" sözcüğü hangi türdendir?', ['Edat', 'Zarf', 'Bağlaç', 'Ünlem', 'Zamir'], 2, 'Cümleleri sebep-sonuç yoluyla bağlar.'],
        ['"Gelmiş" sözcüğündeki kip aşağıdakilerden hangisidir?', ['Görülen geçmiş zaman', 'Duyulan geçmiş zaman', 'Gelecek zaman', 'İstek kipi', 'Gereklilik kipi'], 1, '"-miş" eki duyulan (öğrenilen) geçmiş zaman kipidir.'],
      ],
    ),
  ]),
  topic('tr-cumle-bilgisi', 'Cümle Bilgisi', [
    lesson(
      'tr-cumle-ogeleri',
      'Cümlenin Ögeleri',
      [
        ['Yüklem ve özne', ['Yüklem: eylemi ya da yargıyı bildirir', 'Özne: yüklemin bildirdiği işi yapan'], 'Yüklem cümlenin temel ögesidir ve eylemi ya da yargıyı bildirir. Özne, yüklemin bildirdiği işi yapan ya da durumda olan varlıktır; "kim, ne yaptı?" sorusuyla bulunur.'],
        ['Nesne ve tümleçler', ['Belirtili nesne: -ı hâli', 'Dolaylı tümleç: -e, -de, -den', 'Zarf tümleci: nasıl, ne zaman, nerede'], 'Nesne yüklemden etkilenen varlıktır. Belirtili nesne "-ı" ekini alır, belirtisiz nesne ek almaz. Dolaylı tümleç "-e, -de, -den" hâl eklerini alır. Zarf tümleci eylemin nasıl, ne zaman, nerede yapıldığını bildirir.'],
        ['Örnek çözümleme', ['Ali dün okula gitti.'], '"Ali dün okula gitti." cümlesinde özne Ali, zarf tümleci dün, dolaylı tümleç okula, yüklem gitti\'dir.'],
      ],
      [
        ['"Ali dün okula gitti." cümlesinde "okula" sözcüğü hangi ögedir?', ['Özne', 'Belirtili nesne', 'Dolaylı tümleç', 'Zarf tümleci', 'Yüklem'], 2, '"-a" yönelme hâl eki aldığı için dolaylı tümleçtir.'],
        ['"Çocuk topu attı." cümlesinde "topu" sözcüğü hangi ögedir?', ['Özne', 'Belirtili nesne', 'Dolaylı tümleç', 'Belirtisiz nesne', 'Zarf tümleci'], 1, '"-u" belirtme hâl eki almış, yüklemden etkilenen varlık olduğu için belirtili nesnedir.'],
        ['"Dün akşam eve geç geldim." cümlesinde kaç zarf tümleci vardır?', ['Bir', 'İki', 'Üç', 'Dört', 'Hiç'], 1, '"Dün akşam" zaman, "geç" zaman/nasıl bildiren iki ayrı zarf tümlecidir.'],
      ],
    ),
    lesson(
      'tr-cumle-turleri',
      'Cümle Türleri ve Fiilimsiler',
      [
        ['Yüklemine göre', ['Fiil cümlesi, isim cümlesi', 'Olumlu/olumsuz, soru'], 'Yüklemi fiil olan cümleye fiil cümlesi, isim olan cümleye isim cümlesi denir. Yüklemin olumlu ya da olumsuz olması, cümleyi olumlu ya da olumsuz yapar.'],
        ['Yapısına göre', ['Basit, birleşik, sıralı, bağlı cümle'], 'Tek yargılı cümleye basit, yan cümlecik içeren cümleye birleşik, virgül ya da noktalı virgülle birbirine bağlanan eş değerli cümlelerden oluşan cümleye sıralı, bağlaçla bağlanan cümleye bağlı cümle denir.'],
        ['Fiilimsiler', ['İsim-fiil: -mek, -ma, -ış', 'Sıfat-fiil: -an, -dık, -ecek', 'Zarf-fiil: -ıp, -ınca, -arak'], 'Fiilimsiler eylem kökünden türeyen, fiil gibi anlam taşıyıp isim, sıfat ya da zarf görevi yapan sözcüklerdir; yüklem olmazlar. "Okumak güzeldir" (isim-fiil), "gelen misafir" (sıfat-fiil), "koşarak geldi" (zarf-fiil).'],
      ],
      [
        ['"Koşarak geldi." cümlesindeki "koşarak" sözcüğü hangi fiilimsidir?', ['İsim-fiil', 'Sıfat-fiil', 'Zarf-fiil', 'Fiil', 'Ek fiil'], 2, '"-arak" eki zarf-fiil ekidir.'],
        ['"Gelen misafirleri karşıladık." cümlesindeki "gelen" sözcüğü hangi fiilimsidir?', ['İsim-fiil', 'Sıfat-fiil', 'Zarf-fiil', 'Fiil', 'Yüklem'], 1, '"-an" eki sıfat-fiil ekidir; "misafir"i niteler.'],
        ['Aşağıdakilerden hangisi birleşik cümledir?', ['Ali geldi.', 'Hava güzel, yürüyüşe çıktık.', 'Okuduğum kitabı sevdim.', 'Gel buraya!', 'Çocuklar oynuyor.'], 2, '"Okuduğum" yan cümlecik oluşturduğu için birleşik cümledir.'],
      ],
    ),
  ]),
  topic('tr-yazim-kurallari', 'Yazım Kuralları', [
    lesson(
      'tr-yazim',
      'Büyük Harf, de/ki, mi ve Birleşik Sözcükler',
      [
        ['Büyük harf', ['Cümle başı, özel adlar', 'Kitap, dergi adları'], 'Cümle başında, özel adların (kişi, yer, kurum) ilk harfinde, kitap ve dergi adlarının sözcüklerinin baş harflerinde büyük harf kullanılır. Ayrı yazılan "da/de" bağlacı küçük harfle yazılır.'],
        ['de, ki, mi', ['Bağlaç da/de ayrı yazılır', 'Bulunma hâli bitişik', 'Soru eki mi ayrı'], 'Bağlaç olan "da/de" ayrı yazılır ve ünsüz uyumuna uymaz: "Ali de geldi." Bulunma hâl eki bitişik yazılır: "evde". Bağlaç "ki" ayrı yazılır: "Biliyorum ki gelecek." Soru eki "mi" ayrı yazılır: "Geldin mi?"'],
        ['Birleşik sözcükler', ['Ses düşmesi varsa bitişik: kaynana', 'Ayrı yazılanlar: her şey, bir şey, ya da'], 'Birleşirken ses düşmesi ya da değişmesi oluyorsa sözcükler bitişik yazılır: "kayın + ana → kaynana", "pazar + ertesi → pazartesi". Ayrıca "hanımeli, birkaç, hiçbir" bitişik yazılır. "Her şey", "bir şey", "ya da", "çok güzel" ise ayrı yazılır.'],
      ],
      [
        ['Aşağıdakilerin hangisinde yazım yanlışı vardır?', ['Ali de geldi.', 'Evde kimse yoktu.', 'Ayşe\'de geldi.', 'Biliyorum ki gelecek.', 'Çocuk da güldü.'], 2, 'Bağlaç olan "de" ayrı yazılır ve kesme işareti almaz: "Ayşe de geldi."'],
        ['Aşağıdakilerin hangisinde "de" bitişik yazılmalıdır?', ['Ben ___ geldim.', 'Okul___ ders çalıştı.', 'O ___ biliyor.', 'Sen ___ gel.', 'Ali ___ burada.'], 1, 'Bulunma hâli eki olduğu için "okulda" bitişik yazılır.'],
        ['Aşağıdakilerin hangisinde yazım yanlışı yoktur?', ['her şey', 'herşey', 'hiç bir', 'bir kaç', 'yada'], 0, '"Her şey" ayrı yazılır; "hiçbir" bitişik, "birkaç" bitişik, "ya da" ayrı yazılır.'],
      ],
    ),
  ]),
  topic('tr-noktalama', 'Noktalama İşaretleri', [
    lesson(
      'tr-noktalama-isaretleri',
      'Nokta, Virgül, Noktalı Virgül ve Diğerleri',
      [
        ['Nokta ve virgül', ['Nokta: cümle sonu, kısaltma', 'Virgül: sıralama, ara söz'], 'Nokta tamamlanmış cümlenin sonuna konur; kısaltmalarda ve sıra bildiren sayılardan sonra da kullanılır. Virgül eş görevli sözcükleri ve sıralı cümleleri ayırır, ara söz ve hitapları ayırır.'],
        ['Noktalı virgül ve iki nokta', ['Noktalı virgül: virgüllü cümleleri ayırır', 'İki nokta: açıklama, örnek'], 'Noktalı virgül, içinde virgül olan eş görevli ögeleri ya da birbirine bağlı cümleleri ayırır. İki nokta, kendisinden sonra gelen açıklama, örnek ya da alıntıyı bildirir.'],
        ['Diğer işaretler', ['Üç nokta: yarım kalan düşünce', 'Kesme işareti: özel adlara gelen ekler'], 'Üç nokta söylenmeyen ya da yarım bırakılan düşünceyi gösterir. Soru işareti soru bildiren cümlelerin sonuna konur. Kesme işareti özel adlara gelen ekleri ayırır: "Türkiye\'nin", "Ankara\'dan". Cins isimlere gelen eklerde kesme işareti kullanılmaz.'],
      ],
      [
        ['Aşağıdakilerden hangisinde kesme işareti yanlış kullanılmıştır?', ['Ankara\'dan geldi.', 'Mehmet\'in evi', 'Türkçe\'yi sevdim.', 'İstanbul\'a gitti.', 'Ali\'nin kitabı'], 2, '"Türkçe" özel ad değildir; kesme işareti kullanılmaz: "Türkçeyi".'],
        ['"Gelirken ekmek, süt, yumurta ve peynir al." cümlesinde virgüller hangi görevdedir?', ['Ara söz bildirir', 'Hitap bildirir', 'Eş görevli sözcükleri ayırır', 'Alıntıyı ayırır', 'Soru bildirir'], 2, 'Ekmek, süt, yumurta eş görevli sözcüklerdir ve virgülle ayrılır.'],
        ['İki noktanın görevi aşağıdakilerden hangisidir?', ['Cümleyi bitirmek', 'Açıklama ve örnek bildirmek', 'Yarım kalan düşünceyi göstermek', 'Soru bildirmek', 'Kısaltma yapmak'], 1, 'İki nokta, kendisinden sonra gelen açıklama ya da örneği bildirir.'],
      ],
    ),
  ]),
  topic('tr-anlatim-bozuklugu', 'Anlatım Bozuklukları', [
    lesson(
      'tr-anlatim-bozukluklari',
      'Anlamsal ve Yapısal Anlatım Bozuklukları',
      [
        ['Anlamsal bozukluklar', ['Gereksiz sözcük, çelişen sözcük, yanlış sözcük'], 'Anlama dayalı bozukluklarda gereksiz sözcük (anlamca tekrar), çelişen sözcük, yerinde kullanılmayan sözcük ya da deyim ve mantık hatası bulunur: "Geriye dönüp tekrar baktı."'],
        ['Yapısal bozukluklar', ['Özne-yüklem uyumsuzluğu', 'Ek-fiil eksikliği', 'Tamlayan-tamlanan uyumsuzluğu'], 'Dil bilgisine dayalı bozukluklarda özne-yüklem uyumsuzluğu, çekim ve ek hataları, çatı uyumsuzluğu ya da ortak yüklem kullanımında hata görülür: "Ben ve arkadaşlarım gideriz."'],
        ['Düzeltme yöntemi', ['Gereksiz sözcüğü at', 'Yüklemi ögelere uydur'], 'Bozuk cümleyi düzeltirken önce anlamı bozan sözcüğü ya da yapı hatasını bulun, sonra cümleyi en az değişiklikle düzeltin.'],
      ],
      [
        ['Aşağıdaki cümlelerin hangisinde anlatım bozukluğu vardır?', ['Dün akşam sinemaya gittik.', 'Geriye dönüp tekrar baktı.', 'Bu kitabı çok sevdim.', 'Yarın erken kalkacağım.', 'Hava bugün oldukça sıcak.'], 1, '"Geriye dönüp" ve "tekrar" anlamca tekrar oluşturur; gereksiz sözcük vardır.'],
        ['"Bu yıl okuduğum kitaplar arasında en iyisi bu roman oldu." cümlesi için hangisi söylenebilir?', ['Gereksiz sözcük vardır.', 'Anlatım bozukluğu yoktur.', 'Özne eksiktir.', 'Yüklem yoktur.', 'Çelişen sözcük vardır.'], 1, 'Cümle anlamca ve yapıca doğrudur.'],
        ['"Sen ve kardeşin yarın bize geleceğim." cümlesinde hangi anlatım bozukluğu vardır?', ['Özne-yüklem uyumsuzluğu', 'Gereksiz sözcük kullanımı', 'Yanlış deyim kullanımı', 'Noktalama hatası', 'Anlam belirsizliği'], 0, 'Özne "sen ve kardeşin" olduğundan yüklem "geleceksiniz" olmalıdır; kişi eki özneyle uyuşmamaktadır.'],
      ],
    ),
  ]),
  topic('tr-sozel-mantik', 'Sözel Mantık', [
    lesson(
      'tr-sozel-mantik-ders',
      'Sözel Mantık: Sıralama, Eşleştirme ve Çıkarım',
      [
        ['Soru tipi', ['Verilen bilgilerden kesin sonuç', 'Tabloyla çalış'], 'Sözel mantık sorularında verilen bilgilerden kesin olarak çıkarılabilecek sonuç sorulur. Bilgiler önce tabloya ya da şemaya aktarılır, her bilgi ayrı ayrı işlenir.'],
        ['Sıralama', ['Önce kesin bilgiyi yerleştir', 'Ardışık/yan yana ifadeleri birlikte düşün'], 'Sıralama sorularında "A, B\'den önce" gibi bilgiler zincirleme yazılır. Kesin konum veren ifadelerle başlanır, kalan bilgiler yerleştirilir.'],
        ['Kesin ve olası', ['Kesin: her durumda doğru', 'Olası: bazı durumlarda doğru'], '"Kesinlikle doğrudur" sorularında her olası durumda geçerli sonuç aranır. Yalnızca bir olasılıkta doğru olan ifade kesin doğru sayılmaz.'],
      ],
      [
        ['Ali, Veli\'den uzundur. Veli, Can\'dan uzundur. Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?', ['Can, Ali\'den uzundur.', 'Ali en kısadır.', 'Ali, Can\'dan uzundur.', 'Veli en uzundur.', 'Can, Veli\'den uzundur.'], 2, 'Ali > Veli > Can sıralaması çıkar; Ali, Can\'dan uzundur.'],
        ['Sözel mantık sorularında bilgilerin tabloyla işlenmesinin amacı nedir?', ['Soruyu kısaltmak', 'Verilen tüm bilgileri düzenli görmek', 'Seçenekleri elemek', 'Süreyi uzatmak', 'Cevabı tahmin etmek'], 1, 'Tablo, bilgileri düzenli görmeyi ve çelişkileri fark etmeyi sağlar.'],
        ['Üç kişi (A, B, C) yarışa katılmıştır. A, B\'den önce bitirmiştir. C en son bitirmemiştir. Buna göre sıralama aşağıdakilerden hangisi olabilir?', ['A, C, B', 'B, A, C', 'C, B, A', 'B, C, A', 'A, B, C'], 0, 'C son değilse son B olmalıdır ve A, B\'den öncedir; A, C, B sıralaması şartlara uyar.'],
      ],
    ),
  ]),
]);
