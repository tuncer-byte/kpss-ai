import { ALL_TRACKS, lesson, subject, topic } from '../build';

// GUNCEL BILGILER (Genel Kultur'un 6 sorusu). Burada YALNIZCA kalici bilgi vardir: kurumlar, onemli gunler,
// uluslararasi kuruluslar, bilim/kultur mirasi. Anlik haberler (secimler, zirveler, fiyatlar) icin
// Firebase uzerinden guncellenen "Bu ay" akisi eklenecek (README).
export const guncel = subject('guncel', 'Güncel Bilgiler', 'newspaper-outline', 6, ALL_TRACKS, [
  topic('gun-kurum', 'Türkiye’nin Temel Kurumları', [
    lesson(
      'gun-kurum-ana',
      'Kurumlar ve Kuruluş Tarihleri',
      [
        ['Kuruluşlar', ['Anadolu Ajansı: 1920', 'Diyanet: 1924', 'Merkez Bankası: 1930', 'TÜBİTAK: 1963'], 'Anadolu Ajansı 6 Nisan 1920’de, Diyanet İşleri Başkanlığı 1924’te, Türkiye Cumhuriyet Merkez Bankası 1930’da, TÜBİTAK 1963’te kurulmuştur. ÖSYM ise 1974’ten beri sınavları yürütür.'],
        ['Görev alanları', ['TÜİK: istatistik', 'AFAD: afet ve acil durum', 'TİKA: kalkınma işbirliği', 'YÖK: yükseköğretim'], 'Türkiye İstatistik Kurumu resmî istatistikleri üretir. AFAD afet yönetiminden, TİKA yurt dışı kalkınma ve kültürel işbirliği projelerinden, YÖK yükseköğretimin planlanmasından sorumludur. Sayıştay kamu kaynaklarını denetler.'],
        ['Para ve piyasa', ['TCMB: fiyat istikrarı', 'Borsa İstanbul', 'SPK, BDDK'], 'Merkez Bankası’nın temel amacı fiyat istikrarını sağlamaktır. Borsa İstanbul menkul kıymet işlemlerinin yapıldığı piyasadır. Sermaye Piyasası Kurulu ve Bankacılık Düzenleme ve Denetleme Kurumu piyasaları düzenler ve denetler.'],
      ],
      [
        ['Türkiye Cumhuriyet Merkez Bankası’nın temel amacı aşağıdakilerden hangisidir?', ['Bütçe açığını kapatmak', 'Fiyat istikrarını sağlamak', 'Vergi toplamak', 'Sınav yapmak', 'Dış ticaret yapmak'], 1, 'Merkez Bankası’nın temel amacı fiyat istikrarıdır.'],
        ['Afet ve acil durum yönetiminden sorumlu kurum aşağıdakilerden hangisidir?', ['TİKA', 'TÜİK', 'AFAD', 'YÖK', 'ÖSYM'], 2, 'AFAD afet ve acil durum yönetimi başkanlığıdır.'],
        ['Anadolu Ajansı hangi tarihte kurulmuştur?', ['6 Nisan 1920', '23 Nisan 1920', '29 Ekim 1923', '3 Mart 1924', '1930'], 0, 'Anadolu Ajansı 6 Nisan 1920’de kurulmuştur.'],
      ],
    ),
  ]),
  topic('gun-gunler', 'Önemli Gün ve Haftalar', [
    lesson(
      'gun-gunler-ulusal',
      'Ulusal ve Uluslararası Önemli Günler',
      [
        ['Ulusal günler', ['23 Nisan: Ulusal Egemenlik ve Çocuk Bayramı', '19 Mayıs: Gençlik ve Spor Bayramı', '30 Ağustos: Zafer Bayramı', '29 Ekim: Cumhuriyet Bayramı'], 'Ulusal bayramlar 23 Nisan, 19 Mayıs, 30 Ağustos ve 29 Ekim’dir. 10 Kasım Atatürk’ü Anma Günü, 18 Mart Çanakkale Zaferi, 15 Temmuz Demokrasi ve Millî Birlik Günü’dür.'],
        ['Meslek ve toplum günleri', ['24 Kasım: Öğretmenler Günü', '1 Mayıs: Emek ve Dayanışma Günü', '8 Mart: Dünya Kadınlar Günü'], '24 Kasım Öğretmenler Günü, 1 Mayıs Emek ve Dayanışma Günü, 8 Mart Dünya Kadınlar Günü’dür. 12 Mart İstiklal Marşı’nın kabul günüdür (1921).'],
        ['Uluslararası günler', ['5 Haziran: Dünya Çevre Günü', '10 Aralık: İnsan Hakları Günü', '24 Ekim: BM Günü'], 'Dünya Çevre Günü 5 Haziran, İnsan Hakları Günü 10 Aralık, Birleşmiş Milletler Günü 24 Ekim’dir. 8 Eylül Dünya Okuma Yazma Günü’dür.'],
      ],
      [
        ['Aşağıdaki günlerden hangisi “Öğretmenler Günü”dür?', ['10 Kasım', '24 Kasım', '19 Mayıs', '30 Ağustos', '8 Mart'], 1, 'Öğretmenler Günü her yıl 24 Kasım’da kutlanır.'],
        ['İstiklal Marşı hangi tarihte TBMM tarafından kabul edilmiştir?', ['23 Nisan 1920', '12 Mart 1921', '30 Ağustos 1922', '29 Ekim 1923', '24 Temmuz 1923'], 1, 'İstiklal Marşı 12 Mart 1921’de kabul edilmiştir.'],
        ['10 Aralık hangi gün olarak anılır?', ['Dünya Çevre Günü', 'İnsan Hakları Günü', 'Dünya Kadınlar Günü', 'Emek Günü', 'BM Günü'], 1, '10 Aralık Dünya İnsan Hakları Günü’dür.'],
      ],
    ),
  ]),
  topic('gun-uluslararasi', 'Uluslararası Kuruluşlar ve Türkiye', [
    lesson(
      'gun-uluslararasi-kurum',
      'Türkiye’nin Üye Olduğu Başlıca Kuruluşlar',
      [
        ['Siyasi ve askerî', ['BM: 1945', 'NATO: 1952', 'Avrupa Konseyi: 1950', 'İİT: 1969'], 'Türkiye BM kurucu üyesi, 1950’de Avrupa Konseyi, 1952’de NATO üyesi olmuştur. İslam İşbirliği Teşkilatı 1969’da kurulmuş, Türkiye kurucu üyelerdendir.'],
        ['Ekonomik', ['OECD: 1961 kurucu', 'DTÖ: 1995', 'G20'], 'Türkiye OECD’nin kurucu üyesidir. Dünya Ticaret Örgütü 1995’te kurulmuştur. G20 dünyanın büyük ekonomilerinin oluşturduğu platformdur ve Türkiye üyesidir.'],
        ['Türk dünyası', ['Türk Konseyi: 2009', 'Türk Devletleri Teşkilatı: 2021'], 'Türk Konseyi 2009’da Nahçıvan’da kurulmuş, 2021’de Türk Devletleri Teşkilatı adını almıştır. Üyeler arasında Azerbaycan, Kazakistan, Kırgızistan, Özbekistan ve Türkiye yer alır.'],
      ],
      [
        ['Türkiye’nin kurucu üyesi olduğu ekonomik kuruluş aşağıdakilerden hangisidir?', ['OPEC', 'OECD', 'AB', 'BRICS', 'ASEAN'], 1, 'Türkiye 1961’de OECD’nin kurucu üyeleri arasında yer almıştır.'],
        ['Türk Konseyi’nin kuruluş yeri neresidir?', ['Ankara', 'Bakü', 'Nahçıvan', 'Astana', 'Bişkek'], 2, '2009 Nahçıvan Anlaşması ile kurulmuştur.'],
        ['Aşağıdakilerden hangisi Türkiye’nin 1952’de üye olduğu kuruluştur?', ['BM', 'Avrupa Konseyi', 'NATO', 'OECD', 'İİT'], 2, 'NATO üyeliği 1952’dedir.'],
      ],
    ),
  ]),
  topic('gun-ekonomi', 'Temel Ekonomi Kavramları', [
    lesson(
      'gun-ekonomi-kavram',
      'Enflasyon, GSYH, Faiz, Kur ve Bütçe',
      [
        ['Enflasyon ve faiz', ['Enflasyon: genel fiyat artışı', 'Faiz: paranın fiyatı'], 'Enflasyon mal ve hizmet fiyatlarının genel düzeyindeki sürekli artıştır. Faiz paranın kullanım bedelidir. Merkez Bankası politika faizi ile enflasyonu kontrol etmeye çalışır.'],
        ['GSYH ve dış ticaret', ['GSYH: bir yılda üretilen mal-hizmet', 'İhracat − ithalat'], 'Gayrisafi yurtiçi hasıla bir ülkede bir yılda üretilen nihai mal ve hizmetlerin toplam değeridir. İhracat gelirinin ithalat giderinden fazla olması dış ticaret fazlası, tersi açıktır.'],
        ['Kur ve bütçe', ['Kur: bir paranın diğer para cinsinden fiyatı', 'Bütçe: gelir-gider planı'], 'Döviz kuru bir ülke parasının başka para cinsinden değeridir. Bütçe, devletin bir yıllık gelir ve giderlerini gösterir. Gelir giderden fazlaysa bütçe fazlası, azsa bütçe açığı oluşur.'],
      ],
      [
        ['Bir ülkede bir yılda üretilen nihai mal ve hizmetlerin toplam değerine ne denir?', ['Enflasyon', 'GSYH', 'Bütçe', 'Cari açık', 'Kur'], 1, 'Gayrisafi yurtiçi hasıla (GSYH) üretim ölçüsüdür.'],
        ['Genel fiyat düzeyindeki sürekli artışa ne ad verilir?', ['Deflasyon', 'Devalüasyon', 'Enflasyon', 'Resesyon', 'Stagflasyon'], 2, 'Sürekli fiyat artışı enflasyondur.'],
        ['Devletin gelirleri giderlerinden azsa ne oluşur?', ['Bütçe fazlası', 'Bütçe açığı', 'Cari fazla', 'Dış ticaret fazlası', 'Denk bütçe'], 1, 'Gelir < gider durumunda bütçe açığı oluşur.'],
      ],
    ),
  ]),
  topic('gun-bilim', 'Bilim ve Teknoloji', [
    lesson(
      'gun-bilim-insan',
      'Türk Bilim İnsanları ve Teknoloji',
      [
        ['Tarihte bilim', ['Ali Kuşçu, Uluğ Bey: astronomi', 'Piri Reis: 1513 dünya haritası'], 'Ali Kuşçu ve Uluğ Bey astronomi alanında çalışmıştır. Piri Reis 1513’te meşhur dünya haritasını çizmiş, Kitab-ı Bahriye adlı eseriyle denizcilik bilgisini aktarmıştır.'],
        ['Modern Türk bilim insanları', ['Cahit Arf: matematik', 'Feza Gürsey: fizik', 'Oktay Sinanoğlu: kimya', 'Aziz Sancar: Nobel 2015'], 'Cahit Arf matematikte Arf değişmezi ile, Feza Gürsey teorik fizikte, Oktay Sinanoğlu kimyada tanınır. Aziz Sancar DNA onarımı çalışmalarıyla 2015’te Nobel Kimya Ödülü’nü paylaşmıştır.'],
        ['Teknoloji', ['TÜBİTAK, TUSAŞ', 'Türksat uyduları', 'TOGG: yerli otomobil'], 'TÜBİTAK bilimsel araştırmaları destekler. Türksat haberleşme uydularını işletir. Yerli ve elektrikli otomobil markası TOGG 2023’te seri üretime başlamıştır.'],
      ],
      [
        ['1513 tarihli dünya haritasını çizen denizci kimdir?', ['Evliya Çelebi', 'Piri Reis', 'Seydi Ali Reis', 'Ali Kuşçu', 'Katip Çelebi'], 1, 'Piri Reis 1513’te dünya haritasını çizmiştir.'],
        ['2015 Nobel Kimya Ödülü’nü paylaşan Türk bilim insanı kimdir?', ['Cahit Arf', 'Feza Gürsey', 'Aziz Sancar', 'Oktay Sinanoğlu', 'Orhan Pamuk'], 2, 'Aziz Sancar DNA onarımı çalışmalarıyla ödüle layık görülmüştür.'],
        ['Arf değişmezi hangi bilim dalındadır?', ['Fizik', 'Kimya', 'Matematik', 'Biyoloji', 'Astronomi'], 2, 'Cahit Arf matematikçidir.'],
      ],
    ),
  ]),
  topic('gun-kultur', 'Kültür, Sanat ve Miras', [
    lesson(
      'gun-kultur-miras',
      'UNESCO Mirası ve Kültürel Değerler',
      [
        ['Somut miras', ['İstanbul, Göreme, Divriği: 1985', 'Troya: 1998', 'Göbeklitepe: 2018'], 'UNESCO Dünya Mirası Listesi’ne 1985’te İstanbul’un Tarihi Alanları, Göreme ve Divriği Ulu Camii; sonraki yıllarda Hattuşa, Pamukkale, Safranbolu, Truva, Edirne Selimiye, Efes, Ani ve Göbeklitepe (2018) girmiştir.'],
        ['Somut olmayan miras', ['Mevlevi Sema Töreni', 'Âşıklık geleneği', 'Karagöz', 'Türk kahvesi', 'Ebru'], 'Mevlevi Sema Töreni, Âşıklık geleneği, Karagöz, Meddahlık, Nevruz, Türk kahvesi ve geleneği, Ebru sanatı UNESCO Somut Olmayan Kültürel Miras listesindedir.'],
        ['Edebiyat ve sanat', ['Orhan Pamuk: Nobel 2006', 'Mimar Sinan: Selimiye'], 'Orhan Pamuk 2006’da Nobel Edebiyat Ödülü’nü almıştır. Mimar Sinan’ın ustalık eseri Edirne Selimiye Camii’dir; Süleymaniye ise kalfalık eseridir.'],
      ],
      [
        ['Göbeklitepe hangi ildedir?', ['Mardin', 'Şanlıurfa', 'Diyarbakır', 'Gaziantep', 'Batman'], 1, 'Göbeklitepe Şanlıurfa’dadır.'],
        ['Orhan Pamuk hangi alanda Nobel ödülü almıştır?', ['Barış', 'Edebiyat', 'Kimya', 'Fizik', 'Ekonomi'], 1, 'Pamuk 2006 Nobel Edebiyat Ödülü sahibidir.'],
        ['Mimar Sinan’ın “ustalık eseri” kabul edilen yapı hangisidir?', ['Süleymaniye Camii', 'Şehzade Camii', 'Selimiye Camii', 'Sultanahmet Camii', 'Yeni Cami'], 2, 'Selimiye Camii (Edirne) ustalık eseridir.'],
      ],
    ),
  ]),
]);
