import { ALL_TRACKS, lesson, subject, topic } from '../build';

// TARIH (27 soru). OSYM GK kapsami: Islamiyet oncesi Turk tarihi, ilk Turk-Islam devletleri,
// Anadolu Selcuklu ve beylikler, Osmanli (kurulus -> dagilma, kultur ve uygarlik), XX. yy basi,
// Kurtulus Savasi, Ataturk donemi (inkilaplar, ilkeler, ic-dis politika), Ataturk sonrasi, cagdas Turk ve dunya tarihi.
export const tarih = subject('tarih', 'Tarih', 'time-outline', 27, ALL_TRACKS, [
  topic('tarih-islamiyet-oncesi', 'İslamiyet Öncesi Türk Tarihi', [
    lesson(
      'tarih-ilk-turk-devletleri',
      'Hunlar, Göktürkler ve Uygurlar',
      [
        ['Asya Hun Devleti', ['Mete Han (MÖ 209)', 'Ordu onlu sisteme göre düzenlendi'], 'Asya Hun Devleti\'nin en güçlü hükümdarı Mete Han\'dır. Mete Han orduyu onlu sisteme göre düzenlemiş, Çin\'e karşı güçlü bir imparatorluk kurmuştur. Avrupa Hunları ise Kavimler Göçü\'nü başlatmış, Attila döneminde en güçlü dönemini yaşamıştır.'],
        ['Göktürkler', ['"Türk" adını kullanan ilk devlet', 'Orhun Yazıtları', 'Bumin Kağan ve İstemi Yabgu'], 'Türk adını devlet adı olarak kullanan ilk Türk devleti Göktürklerdir. Bumin Kağan ve kardeşi İstemi Yabgu devleti kurmuştur. Orhun Yazıtları Bilge Kağan ve Kül Tigin için dikilmiş, Türkçenin bilinen ilk yazılı belgeleridir; Tonyukuk Yazıtı ise Tonyukuk\'un kendi yaşamını anlatır.'],
        ['Uygurlar', ['Yerleşik hayata geçen ilk Türk devleti', 'Maniheizm, Budizm'], 'Uygurlar yerleşik hayata geçen ilk Türk devletidir. Tarım, ticaret ve el sanatlarıyla uğraşmış; Maniheizm ve Budizm\'i benimsemişlerdir. Uygur alfabesi daha sonra Türk devletlerinde de yaygın biçimde kullanılmıştır.'],
      ],
      [
        ['Orhun Yazıtları hangi Türk devletine aittir?', ['Asya Hun', 'Göktürk', 'Uygur', 'Karahanlı', 'Avar'], 1, 'Orhun Yazıtları Göktürk Devleti dönemine aittir (Bilge Kağan, Kül Tigin, Tonyukuk).'],
        ['Yerleşik hayata geçen ilk Türk devleti hangisidir?', ['Asya Hun', 'Göktürk', 'Uygur', 'Avrupa Hun', 'Kırgız'], 2, 'Uygurlar tarım ve ticaretle uğraşarak yerleşik hayata geçmiştir.'],
        ['Orduyu onlu sisteme göre düzenleyen hükümdar kimdir?', ['Bilge Kağan', 'Mete Han', 'Attila', 'Bumin Kağan', 'Kül Tigin'], 1, 'Mete Han, orduyu onlu sisteme göre düzenlemiştir.'],
      ],
    ),
    lesson(
      'tarih-turk-kultur-oncesi',
      'İslamiyet Öncesi Türk Devlet Yapısı ve Kültürü',
      [
        ['Devlet yönetimi', ['Hakan: kut ve töre', 'Kurultay (Toy)'], 'Türklerde hükümdarın yönetme yetkisini Tanrı\'dan aldığı kabul edilen "kut" anlayışı vardı. Önemli kararlar kurultayda (toy) alınır, hükümdar töreye bağlı kalırdı. Devlet, hanedanın ortak malı sayılırdı.'],
        ['Ordu ve ekonomi', ['Hayvancılık, göçebe ekonomi', 'Atlı ordu, onlu sistem'], 'Ekonomi hayvancılığa dayanıyordu. Ordu atlı birliklerden oluşur, onlu sisteme göre örgütlenirdi. Uygurlarda tarım ve ticaret öne çıkmıştır.'],
        ['Din ve yazı', ['Gök Tanrı inancı, Şamanizm', 'Göktürk (Orhun) alfabesi'], 'Eski Türkler Gök Tanrı inancına sahipti. Göktürk (Orhun) alfabesi kullanılmış, Uygurlar ise Uygur alfabesini kullanmıştır. Atalara saygı ve ölü gömme gelenekleri (balbal, kurgan) önemlidir.'],
      ],
      [
        ['Eski Türklerde hükümdarın yönetme yetkisini Tanrı\'dan aldığı anlayışına ne ad verilir?', ['Töre', 'Kut', 'Toy', 'Yarlık', 'Balbal'], 1, '"Kut" hükümdarın yönetme yetkisinin Tanrı tarafından verildiği inancıdır.'],
        ['Önemli devlet kararlarının alındığı Türk meclisine ne ad verilir?', ['Divan', 'Kurultay (Toy)', 'Senato', 'Ayan', 'Şura'], 1, 'Kurultay ya da toy, önemli kararların alındığı meclistir.'],
        ['Orhun Yazıtlarında kullanılan alfabe aşağıdakilerden hangisidir?', ['Uygur alfabesi', 'Kiril alfabesi', 'Göktürk alfabesi', 'Arap alfabesi', 'Latin alfabesi'], 2, 'Orhun Yazıtları Göktürk alfabesiyle yazılmıştır.'],
      ],
    ),
  ]),
  topic('tarih-ilk-turk-islam', 'İlk Türk-İslam Devletleri', [
    lesson(
      'tarih-karahanli-gazneli',
      'Karahanlılar ve Gazneliler',
      [
        ['Karahanlılar', ['İlk Müslüman Türk devleti', 'Satuk Buğra Han'], 'Karahanlılar Satuk Buğra Han döneminde İslamiyet\'i kabul eden ilk Türk devletidir. Kaşgarlı Mahmut Divanü Lügati\'t-Türk\'ü, Yusuf Has Hacib Kutadgu Bilig\'i bu dönemde yazmıştır.'],
        ['Gazneliler', ['Mahmut döneminde en güçlü', 'Dandanakan 1040'], 'Gazneliler Sultan Mahmut döneminde Hindistan\'a seferler düzenleyerek en geniş sınırlarına ulaşmıştır. Dandanakan Savaşı\'nda (1040) Selçuklulara yenilmiş ve gerilemiştir.'],
        ['Eserler', ['Kutadgu Bilig', 'Divanü Lügati\'t-Türk', 'Atabetü\'l-Hakayık'], 'Kutadgu Bilig devlet yönetimi hakkında, Divanü Lügati\'t-Türk ilk Türkçe sözlük, Atabetü\'l-Hakayık ise ahlak üzerine yazılmış eserlerdir.'],
      ],
      [
        ['İslamiyet\'i kabul eden ilk Türk devleti aşağıdakilerden hangisidir?', ['Gazneliler', 'Karahanlılar', 'Büyük Selçuklular', 'Uygurlar', 'Harezmşahlar'], 1, 'Karahanlılar Satuk Buğra Han döneminde Müslüman olmuştur.'],
        ['Kutadgu Bilig eserinin yazarı kimdir?', ['Kaşgarlı Mahmut', 'Yusuf Has Hacib', 'Edip Ahmet Yükneki', 'Ahmet Yesevi', 'Nizamülmülk'], 1, 'Kutadgu Bilig Yusuf Has Hacib\'in eseridir.'],
        ['Gazneli Devleti hangi savaşta Selçuklulara yenilmiştir?', ['Malazgirt', 'Dandanakan', 'Katvan', 'Miryokefalon', 'Kösedağ'], 1, '1040 Dandanakan Savaşı Gazneliler\'in gerilemesine yol açmıştır.'],
      ],
    ),
    lesson(
      'tarih-buyuk-selcuklu',
      'Büyük Selçuklu Devleti',
      [
        ['Kuruluş', ['Tuğrul Bey', 'Dandanakan (1040)'], 'Büyük Selçuklu Devleti Tuğrul ve Çağrı Beyler önderliğinde kurulmuş, 1040 Dandanakan Savaşı ile bağımsızlığını kazanmıştır. Tuğrul Bey Bağdat\'a girerek Abbasi halifesini Şii Büveyhoğulları\'ndan kurtarmıştır.'],
        ['Malazgirt', ['Alp Arslan', '1071 Malazgirt', 'Anadolu\'nun kapıları açıldı'], '1071 Malazgirt Savaşı\'nda Alp Arslan, Bizans İmparatoru Romen Diyojen\'i yenmiştir. Bu zaferle Anadolu Türklere açılmıştır.'],
        ['Melikşah ve kurumlar', ['Nizamülmülk', 'Nizamiye Medreseleri', 'İktâ sistemi'], 'Melikşah döneminde devlet en güçlü hâline ulaşmıştır. Vezir Nizamülmülk Nizamiye Medreselerini kurmuş, Siyasetname\'yi yazmıştır. Ordu ve yönetim iktâ sistemiyle örgütlenmiştir.'],
      ],
      [
        ['1071 Malazgirt Savaşı\'nda Selçuklu sultanı kimdir?', ['Tuğrul Bey', 'Alp Arslan', 'Melikşah', 'Sencer', 'Çağrı Bey'], 1, 'Alp Arslan, Bizans imparatoru Romen Diyojen\'i yenmiştir.'],
        ['Nizamiye Medreselerini kuran vezir kimdir?', ['Nizamülmülk', 'Ahmet Yesevi', 'Gazali', 'Sencer', 'Hasan Sabbah'], 0, 'Nizamülmülk Nizamiye Medreselerini kurmuştur.'],
        ['Büyük Selçuklu Devleti\'nin kesin kuruluşu hangi savaşla kabul edilir?', ['Malazgirt', 'Pasinler', 'Dandanakan', 'Katvan', 'Miryokefalon'], 2, '1040 Dandanakan Savaşı ile Selçuklular bağımsız devlet olmuştur.'],
      ],
    ),
  ]),
  topic('tarih-anadolu-selcuklu', 'Türkiye Selçukluları ve Anadolu Beylikleri', [
    lesson(
      'tarih-anadolu-selcuklu-ders',
      'Anadolu Selçuklu Devleti',
      [
        ['Kuruluş', ['Kutalmışoğlu Süleymanşah', 'İznik (1075)'], 'Anadolu Selçuklu Devleti Kutalmışoğlu Süleymanşah tarafından kurulmuş, merkez İznik olmuştur. I. Haçlı Seferi sırasında İznik kaybedilince başkent Konya\'ya taşınmıştır.'],
        ['Miryokefalon ve Kösedağ', ['1176 Miryokefalon: Bizans yenildi', '1243 Kösedağ: Moğollar'], '1176 Miryokefalon Savaşı\'nda II. Kılıçarslan Bizans\'ı yenmiş, Anadolu\'nun Türk yurdu olması kesinleşmiştir. 1243 Kösedağ Savaşı\'nda Moğollara yenilen devlet zayıflamıştır.'],
        ['Kültür ve eserler', ['Alaeddin Keykubat dönemi', 'Kervansaraylar, medreseler'], 'Alaeddin Keykubat döneminde devlet en parlak devrini yaşamıştır. Kervansaraylar, medreseler ve hanlar yaygınlaşmış, ticaret gelişmiştir.'],
      ],
      [
        ['Anadolu\'nun kesin olarak Türk yurdu olmasını sağlayan savaş hangisidir?', ['Malazgirt', 'Miryokefalon', 'Kösedağ', 'Dandanakan', 'Ankara'], 1, '1176 Miryokefalon Zaferi Bizans\'ın Anadolu\'yu geri alma umudunu bitirmiştir.'],
        ['Anadolu Selçuklu Devleti\'ni zayıflatan 1243 savaşı hangisidir?', ['Miryokefalon', 'Kösedağ', 'Haçlı', 'Pasinler', 'Ankara'], 1, 'Kösedağ\'da Moğollara yenilen devlet yarı bağımlı hâle gelmiştir.'],
        ['Anadolu Selçuklu Devleti\'nin kurucusu kimdir?', ['Alp Arslan', 'Kutalmışoğlu Süleymanşah', 'Alaeddin Keykubat', 'Melikşah', 'Tuğrul Bey'], 1, 'Devlet Kutalmışoğlu Süleymanşah tarafından kurulmuştur.'],
      ],
    ),
    lesson(
      'tarih-anadolu-beylikleri',
      'Anadolu Beylikleri',
      [
        ['Anadolu\'da ilk beylikler', ['Danişmendliler, Saltuklular, Mengücekler, Artuklular', 'Çaka Bey (İzmir)'], 'Malazgirt sonrası Anadolu\'da Danişmendliler, Saltuklular, Mengücekler ve Artuklular gibi beylikler kurulmuştur. Çaka Bey İzmir\'de ilk Türk donanmasını oluşturmuştur.'],
        ['Selçuklu sonrası beylikler', ['Karamanoğulları, Germiyanoğulları, Aydınoğulları, Osmanlılar'], 'Kösedağ sonrası Anadolu Selçuklu zayıflayınca Karamanoğulları, Germiyanoğulları, Aydınoğulları, Saruhanoğulları, Menteşeoğulları ve Osmanlılar gibi beylikler ortaya çıkmıştır.'],
        ['Karamanoğulları', ['Türkçe resmî dil (1277)'], 'Karamanoğlu Mehmet Bey 1277\'de Türkçeyi resmî dil ilan etmiştir. Karamanoğulları Osmanlı\'nın uzun süre rakibi olmuştur.'],
      ],
      [
        ['Türkçeyi resmî dil ilan eden Anadolu beyliği aşağıdakilerden hangisidir?', ['Germiyanoğulları', 'Karamanoğulları', 'Aydınoğulları', 'Saruhanoğulları', 'Menteşeoğulları'], 1, 'Karamanoğlu Mehmet Bey 1277\'de Türkçeyi resmî dil ilan etmiştir.'],
        ['İzmir\'de ilk Türk donanmasını kuran bey kimdir?', ['Çaka Bey', 'Osman Bey', 'Aydınoğlu Mehmet Bey', 'Karamanoğlu Mehmet Bey', 'Saltuk Bey'], 0, 'Çaka Bey İzmir merkezli bir donanma oluşturmuştur.'],
        ['Aşağıdakilerden hangisi Malazgirt sonrasında kurulan ilk beyliklerdendir?', ['Aydınoğulları', 'Danişmendliler', 'Osmanlılar', 'Karamanoğulları', 'Germiyanoğulları'], 1, 'Danişmendliler, Saltuklular, Mengücekler ve Artuklular ilk beyliklerdir.'],
      ],
    ),
  ]),
  topic('tarih-osmanli-kurulus-yukselme', 'Osmanlı Devleti: Kuruluş ve Yükselme', [
    lesson(
      'tarih-osmanli-kurulus',
      'Osmanlı Kuruluş Dönemi',
      [
        ['Osman Bey', ['1299 kuruluş (geleneksel)', 'Koyunhisar 1302 (Bafeus)'], 'Osman Bey beyliği Söğüt ve Domaniç çevresinde kurmuş, 1302 Koyunhisar (Bafeus) Savaşı\'nda Bizans\'ı yenmiştir.'],
        ['Orhan ve I. Murat', ['Orhan: Bursa 1326, İznik 1331', 'I. Murat: Edirne, Kosova 1389'], 'Orhan Bey Bursa\'yı fethederek ilk başkenti yapmış, ilk düzenli ordu (yaya, müsellem) onun döneminde kurulmuştur. Rumeli\'ye geçiş Çimpe Kalesi ile başlamıştır. I. Murat Edirne\'yi fethetmiş, 1389 I. Kosova Savaşı sırasında şehit olmuştur.'],
        ['Yıldırım Bayezid ve Fetret', ['Niğbolu 1396', 'Ankara 1402', 'Fetret Devri'], 'Yıldırım Bayezid 1396 Niğbolu\'da Haçlıları yenmiş, ancak 1402 Ankara Savaşı\'nda Timur\'a yenilmiştir. Bunun ardından şehzadeler arasında Fetret Devri yaşanmıştır; Çelebi Mehmet birliği yeniden sağlamıştır.'],
      ],
      [
        ['Osmanlı Devleti\'nin Rumeli\'ye geçişi hangi kaleyle başlamıştır?', ['İznik', 'Çimpe Kalesi', 'Edirne', 'Gelibolu', 'Selanik'], 1, 'Çimpe Kalesi (1352) Rumeli\'ye geçişin başlangıcıdır.'],
        ['Fetret Devri hangi savaşın sonucunda başlamıştır?', ['Niğbolu', 'Ankara', 'Kosova', 'Varna', 'Çaldıran'], 1, '1402 Ankara Savaşı\'nda Yıldırım Bayezid\'in Timur\'a yenilmesiyle başlamıştır.'],
        ['Osmanlı\'da ilk düzenli ordu hangi hükümdar döneminde kurulmuştur?', ['Osman Bey', 'Orhan Bey', 'I. Murat', 'Yıldırım Bayezid', 'II. Mehmet'], 1, 'İlk düzenli ordu (yaya ve müsellem) Orhan Bey döneminde kurulmuştur.'],
      ],
    ),
    lesson(
      'tarih-osmanli-yukselme',
      'Fatih, Yavuz ve Kanuni Dönemleri',
      [
        ['Fatih Sultan Mehmet', ['1453 İstanbul\'un fethi', 'Orta Çağ\'ın sonu, Yeni Çağ\'ın başı'], 'II. Mehmet 1453\'te İstanbul\'u fethederek Bizans\'a son vermiştir. Türk tarihçiliğine göre Orta Çağ kapanmış, Yeni Çağ başlamıştır. Fatih, Trabzon\'u (1461) alarak Karadeniz\'de hâkimiyet kurmuş, 1473 Otlukbeli\'nde Akkoyunlu\'yu yenmiştir.'],
        ['Yavuz Sultan Selim', ['Çaldıran 1514', 'Mercidabık 1516', 'Ridaniye 1517', 'Hilafet'], 'Yavuz Sultan Selim Çaldıran\'da Safevileri, Mercidabık ve Ridaniye\'de Memlükleri yenmiştir. Mısır\'ın fethiyle halifelik Osmanlı\'ya geçmiştir.'],
        ['Kanuni Sultan Süleyman', ['Mohaç 1526', 'Preveze 1538', 'Osmanlı\'nın en geniş sınırları'], 'Kanuni döneminde Belgrad (1521), Rodos (1522) alınmış, 1526 Mohaç Savaşı kazanılmış, 1538 Preveze Deniz Savaşı ile Akdeniz hâkimiyeti sağlanmıştır. Devlet en geniş sınırlarına ulaşmıştır.'],
      ],
      [
        ['İstanbul\'un fethi hangi yılda gerçekleşmiştir?', ['1389', '1402', '1453', '1517', '1526'], 2, 'İstanbul, 1453\'te II. Mehmet tarafından fethedilmiştir.'],
        ['Hilafetin Osmanlılara geçmesi hangi fetihle ilişkilidir?', ['Mohaç', 'Çaldıran', 'Mısır (Ridaniye)', 'Rodos', 'Preveze'], 2, 'Yavuz Sultan Selim\'in Mısır\'ı fethiyle (1517) halifelik Osmanlı\'ya geçmiştir.'],
        ['1538 Preveze Deniz Savaşı hangi Osmanlı hükümdarı döneminde yapılmıştır?', ['II. Mehmet', 'Yavuz Sultan Selim', 'Kanuni Sultan Süleyman', 'II. Selim', 'III. Murat'], 2, 'Preveze Deniz Savaşı Kanuni döneminde Barbaros Hayrettin Paşa komutasında kazanılmıştır.'],
      ],
    ),
  ]),
  topic('tarih-osmanli-gerileme', 'Osmanlı Devleti: Duraklama, Gerileme ve Dağılma', [
    lesson(
      'tarih-duraklama-gerileme',
      'Duraklama ve Gerileme Dönemleri',
      [
        ['Duraklama (XVII. yy)', ['Zitvatorok 1606', 'Padişahın üstünlüğü azaldı'], 'Duraklama döneminde merkezî otorite zayıflamış, Celali isyanları ve Zitvatorok (1606) gibi gelişmeler yaşanmıştır. Savaşlarda üstünlük sağlanamamış, Osmanlı Batı\'nın gerisinde kalmaya başlamıştır.'],
        ['Karlofça 1699', ['İlk toprak kaybı', 'Gerileme dönemi başlangıcı'], '1699 Karlofça Antlaşması ile Osmanlı Devleti ilk kez büyük toprak kaybetmiş, gerileme dönemi başlamıştır. 1718 Pasarofça ile Lale Devri başlar.'],
        ['Küçük Kaynarca 1774', ['Kırım bağımsızlığı', 'Rus himayesi'], '1774 Küçük Kaynarca Antlaşması ile Kırım bağımsız olmuş, Rusya Osmanlı\'daki Ortodokslar üzerinde koruyuculuk hakkı elde etmiştir. 1792 Yaş Antlaşması ile gerileme dönemi sona ermiştir.'],
      ],
      [
        ['Osmanlı Devleti\'nin ilk büyük toprak kaybına yol açan antlaşma hangisidir?', ['Zitvatorok', 'Karlofça', 'Pasarofça', 'Küçük Kaynarca', 'Yaş'], 1, '1699 Karlofça Antlaşması ile ilk büyük toprak kaybı yaşanmıştır.'],
        ['Kırım\'ın bağımsız olmasını sağlayan antlaşma hangisidir?', ['Karlofça', 'Pasarofça', 'Küçük Kaynarca', 'Yaş', 'Bükreş'], 2, '1774 Küçük Kaynarca Antlaşması ile Kırım bağımsız kabul edilmiştir.'],
        ['Gerileme dönemi hangi antlaşma ile sona ermiştir?', ['Karlofça', 'Pasarofça', 'Küçük Kaynarca', 'Yaş', 'Edirne'], 3, 'Gerileme dönemi 1792 Yaş Antlaşması ile biter, dağılma dönemi başlar.'],
      ],
    ),
    lesson(
      'tarih-yenilesme-hareketleri',
      'Yenilik Hareketleri: Tanzimat, Islahat ve Meşrutiyet',
      [
        ['Tanzimat Fermanı', ['1839, Gülhane Hatt-ı Hümayunu', 'Mustafa Reşit Paşa', 'Can, mal, ırz güvenliği'], '1839 Tanzimat Fermanı Mustafa Reşit Paşa tarafından hazırlanmış, can, mal ve ırz güvenliği sağlanmış, vergi eşitliği ve askerlik düzenlenmiştir. Padişahın yetkisi ilk kez hukukla sınırlanmıştır.'],
        ['Islahat Fermanı', ['1856', 'Gayrimüslimlere eşitlik'], '1856 Islahat Fermanı ile gayrimüslimlere Müslümanlarla eşit haklar tanınmıştır. Bu ferman Avrupa devletlerinin baskısıyla çıkmıştır.'],
        ['Meşrutiyet', ['I. Meşrutiyet 1876 (Kanun-ı Esasi)', 'II. Meşrutiyet 1908'], '1876\'da Kanun-ı Esasi ilan edilerek I. Meşrutiyet başlamıştır. II. Abdülhamid 1878\'de meclisi kapatmış, 1908\'de İttihat ve Terakki\'nin baskısıyla II. Meşrutiyet ilan edilmiştir.'],
      ],
      [
        ['Padişahın yetkilerini ilk kez sınırlayan belge hangisidir?', ['Sened-i İttifak', 'Tanzimat Fermanı', 'Islahat Fermanı', 'Kanun-ı Esasi', 'Misak-ı Millî'], 1, 'Tanzimat Fermanı ile padişahın yetkileri ilk kez hukukla sınırlanmıştır.'],
        ['Gayrimüslimlere Müslümanlarla eşit haklar tanıyan ferman hangisidir?', ['Tanzimat Fermanı', 'Islahat Fermanı', 'Gülhane Hatt-ı Hümayunu', 'Sened-i İttifak', 'Hatt-ı Şerif'], 1, '1856 Islahat Fermanı gayrimüslimlere eşit haklar vermiştir.'],
        ['I. Meşrutiyet hangi yıl ilan edilmiştir?', ['1839', '1856', '1876', '1908', '1913'], 2, 'Kanun-ı Esasi ile 1876\'da I. Meşrutiyet ilan edilmiştir.'],
      ],
    ),
  ]),
  topic('tarih-osmanli-kultur', 'Osmanlı Kültür ve Uygarlığı', [
    lesson(
      'tarih-osmanli-devlet-teskilati',
      'Devlet Teşkilatı, Ordu ve Toplum',
      [
        ['Merkez teşkilatı', ['Divan-ı Hümayun', 'Sadrazam', 'Şeyhülislam'], 'Devlet Divan-ı Hümayun\'da yönetilirdi; başkanı padişah, sonraki dönemlerde sadrazamdı. Şeyhülislam dinî ve hukukî görüş bildirirdi.'],
        ['Ordu', ['Yeniçeri Ocağı', 'Tımarlı sipahi', 'Devşirme'], 'Kapıkulu askerleri devşirme sistemiyle yetiştirilirdi; Yeniçeri Ocağı 1826\'da II. Mahmut tarafından kaldırılmıştır (Vaka-i Hayriye). Tımarlı sipahiler taşrada toprak geliriyle ordu besler.'],
        ['Toplum', ['Millet sistemi', 'Reaya ve askerî sınıf'], 'Toplum askerî (yönetici) ve reaya (vergi veren) olarak ikiye ayrılırdı. Gayrimüslimler dinî topluluklarına göre millet sistemiyle yönetilirdi.'],
      ],
      [
        ['Yeniçeri Ocağı hangi padişah döneminde kaldırılmıştır?', ['III. Selim', 'II. Mahmut', 'Abdülmecid', 'II. Abdülhamid', 'IV. Murat'], 1, '1826\'da II. Mahmut Vaka-i Hayriye ile Yeniçeri Ocağı\'nı kaldırmıştır.'],
        ['Osmanlı\'da devletin en üst düzey dinî görevlisi kimdir?', ['Sadrazam', 'Kazasker', 'Şeyhülislam', 'Nişancı', 'Defterdar'], 2, 'Şeyhülislam dinî ve hukukî konularda en yüksek yetkilidir.'],
        ['Devşirme sistemi aşağıdakilerden hangisini yetiştirmek için kullanılırdı?', ['Tımarlı sipahileri', 'Kapıkulu askerlerini ve devlet adamlarını', 'Ulemayı', 'Esnafı', 'Din görevlilerini'], 1, 'Devşirme ile Yeniçeri ve yönetici kadrosu yetiştirilirdi.'],
      ],
    ),
  ]),
  topic('tarih-xx-yy-baslari', 'XX. Yüzyıl Başlarında Osmanlı ve I. Dünya Savaşı', [
    lesson(
      'tarih-balkan-ve-birinci-dunya',
      'Trablusgarp, Balkan Savaşları ve I. Dünya Savaşı',
      [
        ['Savaşlar dönemi', ['1911 Trablusgarp', '1912–1913 Balkan Savaşları'], 'İtalya 1911\'de Trablusgarp\'a saldırmış, Balkan Devletleri 1912\'de Osmanlı\'ya savaş açmıştır. Balkan Savaşları\'nda Rumeli büyük ölçüde kaybedilmiştir.'],
        ['I. Dünya Savaşı', ['Osmanlı\'nın girişi 1914', 'Almanya yanında'], 'Osmanlı Devleti, Alman gemilerinin Karadeniz\'deki Rus limanlarını bombalamasıyla (Ekim 1914) Almanya\'nın yanında savaşa girmiştir. Çanakkale, Kafkas, Irak ve Filistin cepheleri açılmıştır.'],
        ['Mondros', ['30 Ekim 1918', 'Ateşkes'], '30 Ekim 1918\'de imzalanan Mondros Ateşkes Antlaşması ile Osmanlı savaştan çekilmiş, ağır koşullar kabul etmiştir. Antlaşma, itilaf devletlerine stratejik yerleri işgal etme olanağı vermiştir.'],
      ],
      [
        ['Osmanlı Devleti I. Dünya Savaşı\'na hangi blokun yanında girmiştir?', ['İtilaf Devletleri', 'İttifak Devletleri', 'Bağlantısızlar', 'Balkan Antantı', 'Üçlü İttifak dışı'], 1, 'Osmanlı, Almanya\'nın yanında İttifak Devletleri safında savaşa girmiştir.'],
        ['Osmanlı\'nın I. Dünya Savaşı\'ndan çekilmesini sağlayan belge hangisidir?', ['Sevr Antlaşması', 'Mondros Ateşkes Antlaşması', 'Lozan Antlaşması', 'Mudanya Ateşkesi', 'Ankara Antlaşması'], 1, '30 Ekim 1918 Mondros Ateşkes Antlaşması ile savaştan çekilmiştir.'],
        ['Rumeli\'nin büyük kısmının kaybedildiği savaşlar hangileridir?', ['Trablusgarp', 'Balkan Savaşları', 'Çanakkale', 'Kafkas', 'Irak'], 1, '1912–1913 Balkan Savaşları ile Rumeli büyük ölçüde kaybedilmiştir.'],
      ],
    ),
  ]),
  topic('tarih-kurtulus-hazirlik', 'Kurtuluş Savaşı Hazırlık Dönemi', [
    lesson(
      'tarih-milli-mucadele-hazirlik',
      'Mustafa Kemal Samsun\'da, Kongreler ve TBMM',
      [
        ['Samsun ve genelge', ['19 Mayıs 1919 Samsun', 'Havza, Amasya Genelgesi'], '19 Mayıs 1919\'da Mustafa Kemal Samsun\'a çıkmış, Havza ve Amasya Genelgesi ile millî mücadelenin temelini atmıştır. Amasya Genelgesi\'nde "Vatanın bütünlüğü, milletin istiklali tehlikededir" denir.'],
        ['Kongreler', ['Erzurum: 23 Temmuz–7 Ağustos 1919', 'Sivas: 4–11 Eylül 1919'], 'Erzurum Kongresi bölgesel, Sivas Kongresi ulusal niteliktedir. Sivas\'ta Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti birleştirilmiş, manda ve himaye reddedilmiştir.'],
        ['Misak-ı Millî ve TBMM', ['28 Ocak 1920 Misak-ı Millî', '23 Nisan 1920 TBMM'], 'Son Osmanlı Meclisi\'nde Misak-ı Millî kabul edilmiş, İstanbul\'un işgali (16 Mart 1920) üzerine 23 Nisan 1920\'de Ankara\'da TBMM açılmıştır.'],
      ],
      [
        ['Millî mücadelenin gerekçesini ve amacını ilk kez ilan eden belge hangisidir?', ['Misak-ı Millî', 'Amasya Genelgesi', 'Erzurum Kongresi bildirgesi', 'Sivas Kongresi kararları', 'Teşkilat-ı Esasiye'], 1, 'Amasya Genelgesi (22 Haziran 1919) millî mücadelenin gerekçesini ve amacını duyurmuştur.'],
        ['Manda ve himaye fikrinin kesin olarak reddedildiği kongre hangisidir?', ['Balıkesir', 'Alaşehir', 'Erzurum', 'Sivas', 'Amasya'], 3, 'Sivas Kongresi\'nde manda ve himaye kesin olarak reddedilmiştir.'],
        ['TBMM hangi tarihte açılmıştır?', ['19 Mayıs 1919', '28 Ocak 1920', '23 Nisan 1920', '29 Ekim 1923', '1 Kasım 1922'], 2, 'TBMM 23 Nisan 1920\'de Ankara\'da açılmıştır.'],
      ],
    ),
  ]),
  topic('tarih-kurtulus-muharebeler', 'Kurtuluş Savaşı Muharebeleri', [
    lesson(
      'tarih-kurtulus-cepheler',
      'Doğu, Güney ve Batı Cepheleri',
      [
        ['Doğu ve Güney', ['Doğu: Gümrü Antlaşması (1920)', 'Güney: Antep, Maraş, Urfa'], 'Doğu Cephesi\'nde Kazım Karabekir komutasında Ermenistan yenilmiş, 3 Aralık 1920\'de TBMM\'nin imzaladığı ilk antlaşma olan Gümrü Antlaşması yapılmıştır. Güney Cephesi\'nde Antep, Maraş ve Urfa halk direnişiyle kurtarılmıştır.'],
        ['Batı Cephesi', ['I. İnönü Ocak 1921', 'II. İnönü Mart 1921', 'Sakarya 1921'], 'Batı Cephesi\'nde önce düzenli ordu kurulmuş, I. ve II. İnönü Savaşları kazanılmıştır. 23 Ağustos–13 Eylül 1921 Sakarya Meydan Muharebesi ile Yunan ilerleyişi durdurulmuş, Mustafa Kemal\'e Gazi unvanı verilmiştir.'],
        ['Büyük Taarruz', ['26 Ağustos 1922', 'Başkomutan Meydan Muharebesi', '9 Eylül İzmir'], '26 Ağustos 1922\'de Büyük Taarruz başlamış, Başkomutan Meydan Muharebesi (30 Ağustos) kazanılmış, 9 Eylül 1922\'de İzmir kurtarılmıştır. 11 Ekim 1922\'de Mudanya Ateşkesi imzalanmıştır.'],
      ],
      [
        ['TBMM\'nin imzaladığı ilk antlaşma hangisidir?', ['Moskova', 'Gümrü', 'Ankara', 'Kars', 'Mudanya'], 1, '3 Aralık 1920 Gümrü Antlaşması TBMM\'nin imzaladığı ilk antlaşmadır.'],
        ['Mustafa Kemal\'e "Gazi" unvanı hangi savaştan sonra verilmiştir?', ['I. İnönü', 'II. İnönü', 'Sakarya', 'Dumlupınar', 'Kütahya-Eskişehir'], 2, 'Sakarya Meydan Muharebesi\'nden sonra Mustafa Kemal\'e Gazi unvanı ve Mareşallik rütbesi verilmiştir.'],
        ['Büyük Taarruz hangi tarihte başlamıştır?', ['23 Ağustos 1921', '26 Ağustos 1922', '9 Eylül 1922', '11 Ekim 1922', '24 Temmuz 1923'], 1, 'Büyük Taarruz 26 Ağustos 1922\'de başlamıştır.'],
      ],
    ),
  ]),
  topic('tarih-antlasmalar', 'Millî Mücadele Dönemi Antlaşmaları', [
    lesson(
      'tarih-lozan',
      'Sevr, Mudanya ve Lozan',
      [
        ['Sevr', ['10 Ağustos 1920', 'TBMM tanımadı'], '10 Ağustos 1920\'de İstanbul Hükûmeti Sevr Antlaşması\'nı imzalamış, ancak TBMM bu antlaşmayı tanımamış ve uygulanamamıştır.'],
        ['Mudanya Ateşkesi', ['11 Ekim 1922', 'Doğu Trakya boşaltıldı'], '11 Ekim 1922 Mudanya Ateşkesi ile Yunanlılar Doğu Trakya\'yı boşaltmayı kabul etmiş, Lozan görüşmelerinin yolu açılmıştır. Ardından 1 Kasım 1922\'de saltanat kaldırılmıştır.'],
        ['Lozan', ['24 Temmuz 1923', 'Kapitülasyonlar kalktı', 'Boğazlar, Hatay, Musul bırakıldı'], '24 Temmuz 1923 Lozan Antlaşması ile yeni Türk Devleti uluslararası alanda tanınmış, kapitülasyonlar kaldırılmıştır. Musul meselesi ve Boğazlar sorunu çözümsüz bırakılmıştır.'],
      ],
      [
        ['Aşağıdakilerden hangisi TBMM\'nin tanımadığı antlaşmadır?', ['Gümrü', 'Sevr', 'Moskova', 'Kars', 'Lozan'], 1, 'Sevr Antlaşması TBMM tarafından tanınmamıştır.'],
        ['Kapitülasyonların kaldırılması hangi antlaşmayla gerçekleşmiştir?', ['Mondros', 'Sevr', 'Mudanya', 'Lozan', 'Ankara'], 3, '1923 Lozan Antlaşması ile kapitülasyonlar kaldırılmıştır.'],
        ['Mudanya Ateşkesi\'nin sonucu aşağıdakilerden hangisidir?', ['Saltanatın kaldırılması', 'Doğu Trakya\'nın boşaltılması', 'Hatay\'ın alınması', 'Boğazlar sorununun çözümü', 'Halifeliğin kaldırılması'], 1, 'Mudanya\'da Yunanlıların Doğu Trakya\'yı boşaltması kabul edilmiştir.'],
      ],
    ),
  ]),
  topic('tarih-inkilaplar', 'Atatürk İnkılapları', [
    lesson(
      'tarih-siyasi-hukuki-inkilaplar',
      'Siyasi ve Hukuki İnkılaplar',
      [
        ['Siyasi inkılaplar', ['Saltanat 1922', 'Cumhuriyet 29 Ekim 1923', 'Halifelik 1924'], '1 Kasım 1922\'de saltanat kaldırılmış, 29 Ekim 1923\'te Cumhuriyet ilan edilmiş, 3 Mart 1924\'te halifelik kaldırılmıştır. Böylece egemenliğin kayıtsız şartsız millete ait olduğu ilkesi hayata geçmiştir.'],
        ['Hukuki inkılaplar', ['Medeni Kanun 1926', 'Mecelle kaldırıldı'], '1926\'da kabul edilen Türk Medeni Kanunu ile çok eşlilik kaldırılmış, kadın erkek eşitliği ilkesi benimsenmiştir. Mecelle yürürlükten kalkmış, kapitülasyonlar sona ermiştir.'],
        ['Anayasa', ['1921 Teşkilat-ı Esasiye', '1924 Anayasası'], '1921 Teşkilat-ı Esasiye millî egemenliğe dayanıyordu. 1924 Anayasası ile cumhuriyet rejimi yerleşmiş, laiklik 1937\'de anayasaya girmiştir.'],
      ],
      [
        ['Saltanat hangi tarihte kaldırılmıştır?', ['23 Nisan 1920', '1 Kasım 1922', '29 Ekim 1923', '3 Mart 1924', '1926'], 1, 'Saltanat 1 Kasım 1922\'de kaldırılmıştır.'],
        ['Çok eşliliği kaldıran ve kadın erkek eşitliğini sağlayan düzenleme hangisidir?', ['Tevhid-i Tedrisat', 'Medeni Kanun', 'Şapka Kanunu', 'Harf İnkılabı', 'Soyadı Kanunu'], 1, '1926 Medeni Kanunu çok eşliliği kaldırmıştır.'],
        ['Halifelik hangi tarihte kaldırılmıştır?', ['1922', '1923', '1924', '1925', '1926'], 2, 'Halifelik 3 Mart 1924\'te kaldırılmıştır.'],
      ],
    ),
    lesson(
      'tarih-egitim-toplum-ekonomi-inkilap',
      'Eğitim, Toplumsal ve Ekonomik İnkılaplar',
      [
        ['Eğitim ve kültür', ['Tevhid-i Tedrisat 1924', 'Harf İnkılabı 1928', 'TTK 1931, TDK 1932'], '1924\'te Tevhid-i Tedrisat ile öğretim birleştirilmiştir. 1928\'de Latin esaslı Türk alfabesi kabul edilmiş, 1931\'de Türk Tarih Kurumu, 1932\'de Türk Dil Kurumu kurulmuştur.'],
        ['Toplumsal inkılaplar', ['Şapka Kanunu 1925', 'Tekke ve zaviyelerin kapatılması 1925', 'Soyadı Kanunu 1934'], '1925\'te Şapka Kanunu çıkarılmış, tekke ve zaviyeler kapatılmıştır. 1934\'te Soyadı Kanunu ile soyadı alınması zorunlu olmuş, kadınlara seçme ve seçilme hakkı 1930 (belediye) ve 1934 (milletvekili) yıllarında tanınmıştır.'],
        ['Ekonomik inkılaplar', ['İzmir İktisat Kongresi 1923', 'Aşar vergisi kalktı 1925', 'Sanayi Planı 1934'], '1923\'te İzmir İktisat Kongresi toplanmış, 1925\'te aşar vergisi kaldırılmış, 1927 Teşvik-i Sanayi Kanunu çıkarılmıştır. 1934\'te Birinci Beş Yıllık Sanayi Planı uygulanmaya konmuştur.'],
      ],
      [
        ['Öğretimin birleştirilmesini sağlayan kanun hangisidir?', ['Medeni Kanun', 'Tevhid-i Tedrisat', 'Soyadı Kanunu', 'Şapka Kanunu', 'Harf Kanunu'], 1, '1924 Tevhid-i Tedrisat Kanunu ile bütün öğretim kurumları Millî Eğitim Bakanlığı\'na bağlanmıştır.'],
        ['Kadınlara milletvekili seçme ve seçilme hakkı hangi yıl tanınmıştır?', ['1926', '1930', '1934', '1937', '1945'], 2, '1934\'te kadınlara milletvekili seçme ve seçilme hakkı tanınmıştır.'],
        ['Latin esaslı Türk alfabesi hangi yıl kabul edilmiştir?', ['1924', '1926', '1928', '1930', '1934'], 2, '1928 Harf İnkılabı ile yeni Türk alfabesi kabul edilmiştir.'],
      ],
    ),
  ]),
  topic('tarih-ilkeler', 'Atatürk İlkeleri', [
    lesson(
      'tarih-ataturk-ilkeleri',
      'Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık',
      [
        ['Cumhuriyetçilik, milliyetçilik, halkçılık', ['Egemenlik millete aittir', 'Millî birlik', 'Kanun önünde eşitlik'], 'Cumhuriyetçilik, millî egemenliğe dayalı yönetimdir. Milliyetçilik Türk milletinin birlik ve beraberliğini hedefler. Halkçılık, sınıf ayrımı gözetmeden herkesin kanun önünde eşit olduğunu savunur.'],
        ['Devletçilik', ['Devlet ekonomide düzenleyici ve yatırımcı', 'Özel girişim de var'], 'Devletçilik, devletin ekonomide özel girişimin yapamadığı alanlarda yatırımcı ve düzenleyici olmasıdır. Özel teşebbüs dışlanmaz.'],
        ['Laiklik ve inkılapçılık', ['Din ve devlet işleri ayrı', 'Sürekli yenilenme'], 'Laiklik din ve devlet işlerinin ayrılmasıdır. İnkılapçılık, gelişen ihtiyaçlara göre sürekli yenilenmeyi savunur. İlkeler 1931\'de CHP programına, 1937\'de anayasaya girmiştir.'],
      ],
      [
        ['Devletin ekonomide düzenleyici ve yatırımcı rol üstlenmesi hangi ilkeyle ilgilidir?', ['Halkçılık', 'Devletçilik', 'Laiklik', 'Milliyetçilik', 'İnkılapçılık'], 1, 'Devletçilik ilkesi devletin ekonomide düzenleyici ve yatırımcı olmasını içerir.'],
        ['Laiklik ilkesi anayasaya hangi yıl girmiştir?', ['1921', '1924', '1931', '1937', '1945'], 3, 'Laiklik 1937\'de anayasaya girmiştir.'],
        ['"Egemenlik kayıtsız şartsız milletindir" ilkesi hangi Atatürk ilkesiyle ilgilidir?', ['Devletçilik', 'Halkçılık', 'Cumhuriyetçilik', 'Laiklik', 'İnkılapçılık'], 2, 'Cumhuriyetçilik millî egemenliğe dayalı yönetim demektir.'],
      ],
    ),
  ]),
  topic('tarih-ataturk-ic-politika', 'Atatürk Dönemi İç Politika', [
    lesson(
      'tarih-ic-politika',
      'İç Politika Gelişmeleri ve Ayaklanmalar',
      [
        ['Çok partili denemeler', ['TpCF 1924', 'Serbest Fırka 1930'], '1924\'te Terakkiperver Cumhuriyet Fırkası kurulmuş, Şeyh Said Ayaklanması üzerine kapatılmıştır. 1930\'da Fethi Okyar önderliğinde Serbest Cumhuriyet Fırkası kurulmuş, kısa sürede kapanmıştır.'],
        ['Ayaklanmalar', ['Şeyh Said 1925', 'Menemen 1930'], '1925 Şeyh Said Ayaklanması üzerine Takrir-i Sükûn Kanunu çıkarılmıştır. 1930 Menemen Olayı\'nda öğretmen Kubilay şehit edilmiştir.'],
        ['Nutuk', ['1927'], 'Mustafa Kemal 1927\'de CHP Büyük Kongresi\'nde Nutuk\'u okumuştur. Nutuk Kurtuluş Savaşı\'nı ve cumhuriyetin kuruluşunu anlatır.'],
      ],
      [
        ['Şeyh Said Ayaklanması sonrasında çıkarılan kanun hangisidir?', ['Şapka Kanunu', 'Takrir-i Sükûn Kanunu', 'Medeni Kanun', 'Soyadı Kanunu', 'Tevhid-i Tedrisat'], 1, 'Takrir-i Sükûn Kanunu 1925\'te çıkarılmıştır.'],
        ['Menemen Olayı\'nda şehit edilen öğretmen kimdir?', ['Kubilay', 'Said Nursi', 'Fethi Okyar', 'Kazım Özalp', 'Rauf Orbay'], 0, 'Öğretmen Kubilay 1930 Menemen Olayı\'nda şehit edilmiştir.'],
        ['Serbest Cumhuriyet Fırkası\'nı kuran kişi kimdir?', ['Ali Fuat Cebesoy', 'Fethi Okyar', 'Kazım Karabekir', 'Rauf Orbay', 'Adnan Adıvar'], 1, 'Serbest Fırka Fethi Okyar tarafından 1930\'da kurulmuştur.'],
      ],
    ),
  ]),
  topic('tarih-ataturk-dis-politika', 'Atatürk Dönemi Dış Politika', [
    lesson(
      'tarih-dis-politika',
      'Dış Politika: Musul, Montrö, Hatay ve Paktlar',
      [
        ['Musul ve Milletler Cemiyeti', ['Ankara Antlaşması 1926', 'Milletler Cemiyeti\'ne giriş 1932'], 'Musul sorunu 1926 Ankara Antlaşması ile Irak lehine çözülmüştür. Türkiye 1932\'de Milletler Cemiyeti\'ne üye olmuştur.'],
        ['Montrö', ['1936', 'Boğazlar üzerinde Türk egemenliği'], '1936 Montrö Boğazlar Sözleşmesi ile Türkiye Boğazlar üzerinde egemenlik hakkını geri almıştır. Boğazların askerlikten arındırılmış statüsü kaldırılmıştır.'],
        ['Hatay ve paktlar', ['Hatay 1939', 'Balkan Antantı 1934', 'Sadabat Paktı 1937'], '1939\'da Hatay Türkiye\'ye katılmıştır. Barışçı dış politika kapsamında 1934\'te Balkan Antantı, 1937\'de Sadabat Paktı imzalanmıştır.'],
      ],
      [
        ['Boğazlar üzerinde Türkiye\'nin egemenliğini sağlayan sözleşme hangisidir?', ['Lozan', 'Montrö', 'Sevr', 'Mudanya', 'Ankara'], 1, '1936 Montrö Sözleşmesi ile Türkiye Boğazlar üzerinde egemenlik hakkını geri kazanmıştır.'],
        ['Hatay hangi yıl Türkiye\'ye katılmıştır?', ['1923', '1936', '1938', '1939', '1945'], 3, 'Hatay 1939\'da anavatana katılmıştır.'],
        ['Sadabat Paktı\'na dahil olmayan devlet aşağıdakilerden hangisidir?', ['Türkiye', 'İran', 'Irak', 'Afganistan', 'Yunanistan'], 4, 'Sadabat Paktı Türkiye, İran, Irak ve Afganistan arasında yapılmıştır.'],
      ],
    ),
  ]),
  topic('tarih-ataturk-sonrasi', 'Atatürk Sonrası Dönem', [
    lesson(
      'tarih-ataturk-sonrasi-ders',
      'İnönü Dönemi, Çok Partili Hayat ve Sonrası',
      [
        ['İnönü dönemi', ['10 Kasım 1938 Atatürk\'ün vefatı', 'II. Dünya Savaşı\'nda tarafsızlık'], 'Atatürk 10 Kasım 1938\'de vefat etmiş, yerine İsmet İnönü cumhurbaşkanı seçilmiştir. II. Dünya Savaşı\'nda Türkiye tarafsız kalmaya çalışmış, 1942\'de Varlık Vergisi uygulanmıştır.'],
        ['Çok partili hayat', ['Demokrat Parti 1946', '1950 seçimleri'], '1946\'da Demokrat Parti kurulmuş, 1950 seçimlerini kazanarak iktidara gelmiştir. Menderes başbakan, Celal Bayar cumhurbaşkanı olmuştur.'],
        ['Dış ilişkiler', ['NATO 1952', 'Kore\'ye asker'], 'Türkiye 1950\'de Kore Savaşı\'na asker göndermiş, 1952\'de NATO\'ya üye olmuştur. 27 Mayıs 1960\'ta askerî müdahale yaşanmıştır.'],
      ],
      [
        ['Türkiye NATO\'ya hangi yıl üye olmuştur?', ['1945', '1949', '1950', '1952', '1960'], 3, 'Türkiye 1952\'de NATO\'ya katılmıştır.'],
        ['Demokrat Parti hangi seçimle iktidara gelmiştir?', ['1946', '1950', '1954', '1957', '1960'], 1, 'DP 1950 seçimlerini kazanarak iktidara gelmiştir.'],
        ['Atatürk\'ün ardından cumhurbaşkanı seçilen kişi kimdir?', ['Celal Bayar', 'İsmet İnönü', 'Adnan Menderes', 'Cemal Gürsel', 'Fevzi Çakmak'], 1, 'İsmet İnönü 11 Kasım 1938\'de cumhurbaşkanı seçilmiştir.'],
      ],
    ),
  ]),
  topic('tarih-cagdas-turk-dunya', 'Çağdaş Türk ve Dünya Tarihi', [
    lesson(
      'tarih-cagdas-dunya',
      'Fransız İhtilali, Sanayi Devrimi ve Dünya Savaşları',
      [
        ['Fransız İhtilali', ['1789', 'Milliyetçilik ve eşitlik fikirleri'], '1789 Fransız İhtilali özgürlük, eşitlik ve kardeşlik fikirlerini yaymış, milliyetçilik akımı Osmanlı gibi çok uluslu devletleri etkilemiştir.'],
        ['Sanayi Devrimi', ['XVIII. yy İngiltere', 'Buhar makinesi, sömürgecilik'], 'Sanayi Devrimi İngiltere\'de başlamış, buhar makinesinin kullanımıyla üretimi artırmıştır. Hammadde ve pazar arayışı sömürgeciliği güçlendirmiştir.'],
        ['Dünya savaşları', ['I. Dünya Savaşı 1914–1918', 'II. Dünya Savaşı 1939–1945', 'Soğuk Savaş'], 'I. Dünya Savaşı 1914-1918, II. Dünya Savaşı 1939-1945 arasındadır. II. Dünya Savaşı sonrasında ABD ve SSCB arasında Soğuk Savaş başlamış, NATO ve Varşova Paktı kurulmuştur.'],
      ],
      [
        ['Sanayi Devrimi hangi ülkede başlamıştır?', ['Fransa', 'İngiltere', 'Almanya', 'ABD', 'Rusya'], 1, 'Sanayi Devrimi XVIII. yüzyılda İngiltere\'de başlamıştır.'],
        ['Fransız İhtilali hangi yıl gerçekleşmiştir?', ['1689', '1776', '1789', '1815', '1848'], 2, 'Fransız İhtilali 1789\'da gerçekleşmiştir.'],
        ['Soğuk Savaş hangi iki devlet arasındaki rekabet olarak bilinir?', ['İngiltere – Fransa', 'ABD – SSCB', 'Almanya – İtalya', 'Çin – Japonya', 'Türkiye – Yunanistan'], 1, 'Soğuk Savaş ABD ve SSCB liderliğindeki iki blok arasında yaşanmıştır.'],
      ],
    ),
  ]),
]);
