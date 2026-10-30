import { ALL_TRACKS, lesson, subject, topic } from '../build';

// COGRAFYA. OSYM GY testinde 18 soru. Agirlik: Turkiye fiziki + beseri + ekonomik cografya.
export const cografya = subject('cografya', 'Coğrafya', 'earth-outline', 18, ALL_TRACKS, [
  topic('cog-dunya', 'Dünya’nın Şekli ve Hareketleri', [
    lesson(
      'cog-dunya-hareket',
      'Dünya’nın Hareketleri ve Sonuçları',
      [
        ['Günlük hareket', ['24 saat sürer', 'Gece-gündüz, yön sapması, yerel saat'], 'Dünya kendi ekseni etrafında batıdan doğuya doğru 24 saatte döner. Gece ile gündüzün oluşması, yerel saat farkları ve hareketli cisimlerin sapması bu hareketin sonucudur.'],
        ['Yıllık hareket', ['365 gün 6 saat', 'Eksen eğikliği 23° 27’'], 'Dünya Güneş etrafındaki yörüngesini yaklaşık 365 gün 6 saatte tamamlar. Ekseninin eğik olması ve yıllık hareket birlikte mevsimleri, gece gündüz sürelerinin değişmesini ve ışınların geliş açısındaki farkı doğurur.'],
        ['Tarihler', ['21 Mart – 23 Eylül: gece = gündüz', '21 Haziran: Yengeç, 22 Aralık: Oğlak'], 'Ekinokslarda, yani 21 Mart ve 23 Eylül’de ışınlar Ekvator’a dik gelir. 21 Haziran’da Yengeç Dönencesi’ne, 22 Aralık’ta Oğlak Dönencesi’ne dik gelir. Kuzey Yarım Küre’de en uzun gün 21 Haziran’dır.'],
      ],
      [
        ['Ekvator’dan kutuplara doğru gidildikçe sıcaklığın azalmasının temel nedeni aşağıdakilerden hangisidir?', ['Dünya’nın kendi ekseni etrafında dönmesi', 'Güneş ışınlarının geliş açısının küçülmesi', 'Kara ve denizlerin dağılışı', 'Yükseltinin artması', 'Rüzgârların yönü'], 1, 'Enlem arttıkça ışınlar daha eğik gelir; aynı enerji daha geniş alana yayılır ve sıcaklık düşer.'],
        ['Aşağıdakilerden hangisi Dünya’nın ekseni etrafında dönmesinin sonuçlarından biridir?', ['Mevsimlerin oluşması', 'Gece ile gündüzün oluşması', 'Yılın 365 gün olması', 'Dönenceler arası sıcak kuşağın oluşması', 'Gece gündüz sürelerinin yıl içinde değişmesi'], 1, 'Gece-gündüz günlük harekete bağlıdır; diğer seçenekler yıllık hareket ve eksen eğikliğinin sonucudur.'],
        ['21 Haziran’da aşağıdakilerden hangisi görülür?', ['Güneş ışınları Ekvator’a dik gelir', 'Kuzey Yarım Küre’de gündüz en kısadır', 'Güneş ışınları Yengeç Dönencesi’ne dik gelir', 'Her yerde gece ile gündüz eşittir', 'Güney Yarım Küre’de yaz başlar'], 2, '21 Haziran’da ışınlar Yengeç Dönencesi’ne diktir; Kuzey Yarım Küre’de en uzun gündüz yaşanır.'],
      ],
    ),
  ]),
  topic('cog-harita', 'Harita Bilgisi', [
    lesson(
      'cog-harita-koordinat',
      'Koordinat Sistemi ve Yerel Saat',
      [
        ['Enlem ve boylam', ['Enlem: Ekvator’a paralel, 0°–90°', 'Boylam: kutupları birleştirir, 0°–180°'], 'Enlemler Ekvator’a paralel çizgilerdir. Boylamlar kutupları birleştiren yarım dairelerdir. Başlangıç boylamı Greenwich’tir. Bir yerin konumu enlem ve boylamıyla belirlenir.'],
        ['Yerel saat', ['1 boylam = 4 dakika', 'Doğudaki yerin saati ileridir'], 'İki boylam arasındaki fark 4 dakika ile çarpılarak yerel saat farkı bulunur. Doğuya gidildikçe saat ileri, batıya gidildikçe geri olur. Türkiye’nin doğusu ile batısı arasında yaklaşık 76 dakika fark vardır.'],
        ['Mesafe', ['1 enlem ≈ 111 km', 'Boylam uzunluğu kutuplara doğru azalır'], 'Ardışık iki enlem arası her yerde yaklaşık 111 kilometredir. Boylamlar arası mesafe ise Ekvator’da en fazla, kutuplarda sıfırdır.'],
      ],
      [
        ['45°D boylamında yerel saat 12.00 iken 30°D boylamında yerel saat kaçtır?', ['10.00', '10.30', '11.00', '12.30', '13.00'], 2, 'Fark 15° × 4 dk = 60 dk. Batıda olan yerin saati geridedir: 11.00.'],
        ['Türkiye’nin en batısı ile en doğusu arasında yaklaşık kaç dakika yerel saat farkı vardır?', ['36', '48', '60', '76', '90'], 3, 'Yaklaşık 19 boylam × 4 dakika = 76 dakika.'],
        ['Aralarında 3 enlem bulunan iki nokta arasındaki mesafe en az kaç kilometredir?', ['111', '222', '333', '444', '666'], 2, 'Her enlem arası yaklaşık 111 km olduğundan 3 × 111 = 333 km.'],
      ],
    ),
    lesson(
      'cog-harita-olcek',
      'Ölçek ve Harita Türleri',
      [
        ['Ölçek', ['Ölçek = harita uzaklığı / gerçek uzaklık', 'Büyük ölçek: ayrıntı çok, alan dar'], 'Ölçek, haritadaki uzunluğun gerçek uzunluğa oranıdır. Ölçeğin paydası küçüldükçe ölçek büyür; büyük ölçekli haritalar dar alanı ayrıntılı gösterir.'],
        ['İzohips', ['Eş yükselti eğrileri', 'Sık: dik yamaç, seyrek: eğimsiz'], 'İzohipsler aynı yükseltideki noktaları birleştirir. Eğrilerin sık olduğu yerde eğim fazla, seyrek olduğu yerde azdır. Vadi ve sırt şekilleri izohips kıvrımlarından okunur.'],
        ['Harita türleri', ['Fiziki, siyasi, topoğrafya, tematik'], 'Yeryüzü şekillerini gösteren haritalara fiziki, sınırları gösterenlere siyasi, yükselti ve ayrıntıyı birlikte veren haritalara topoğrafya haritası denir.'],
      ],
      [
        ['Ölçeği 1/500.000 olan haritada 4 cm uzunluk gerçekte kaç km’dir?', ['2', '5', '10', '20', '50'], 3, '4 × 500.000 = 2.000.000 cm = 20 km.'],
        ['Aşağıdakilerden hangisi küçük ölçekli haritaların özelliğidir?', ['Dar alanı gösterir', 'Ayrıntı çoktur', 'Geniş alanı gösterir, ayrıntı azdır', 'Kadastro haritasıdır', 'Ölçek paydası küçüktür'], 2, 'Küçük ölçekli haritalarda alan geniş, ayrıntı azdır (ör. dünya haritası).'],
        ['İzohips eğrilerinin birbirine sık olduğu bir yerde aşağıdakilerden hangisi söylenebilir?', ['Eğim azdır', 'Arazi düzdür', 'Eğim fazladır', 'Akarsu yoktur', 'Yükselti sabittir'], 2, 'Eğriler sıklaştıkça kısa mesafede yükselti değişir; eğim artar.'],
      ],
    ),
  ]),
  topic('cog-konum', 'Türkiye’nin Coğrafi Konumu', [
    lesson(
      'cog-konum-ozel',
      'Matematik ve Özel Konum',
      [
        ['Matematik konum', ['36°–42° kuzey enlemleri', '26°–45° doğu boylamları'], 'Türkiye 36°–42° kuzey enlemleri ile 26°–45° doğu boylamları arasındadır. Kuzey Yarım Küre’de ve orta kuşakta yer aldığı için dört mevsim belirgindir.'],
        ['Özel konum', ['3 kıtanın kavşağında', 'Boğazlar ve Akdeniz’e kıyı'], 'Türkiye Asya, Avrupa ve Afrika kıtalarının birleştiği bölgede, üç tarafı denizlerle çevrili bir yarımadadır. Boğazlar ve ticaret yolları üzerinde olması jeopolitik önemini artırır.'],
        ['Sonuçlar', ['Kuzey-güney uzaklığı ≈ 666 km', 'Doğu-batı uzaklığı fazla'], 'Altı enlem aralığı nedeniyle kuzey-güney arası yaklaşık 666 km’dir. Doğu-batı uzunluğu çok fazla olduğundan yerel saat farkı vardır, ayrıca iklim ve bitki örtüsü çeşitlidir.'],
      ],
      [
        ['Türkiye’nin matematik konumu aşağıdakilerden hangisidir?', ['30°–36° K, 20°–40° D', '36°–42° K, 26°–45° D', '38°–44° K, 25°–42° D', '36°–42° K, 20°–35° D', '40°–46° K, 26°–45° D'], 1, 'Türkiye 36°–42° kuzey enlemleri, 26°–45° doğu boylamları arasındadır.'],
        ['Türkiye’nin dört mevsimin belirgin yaşandığı bir ülke olmasında en etkili konum özelliği hangisidir?', ['Üç tarafının denizlerle çevrili olması', 'Orta kuşakta yer alması', 'Boğazlara sahip olması', 'Üç kıtanın kavşağında olması', 'Doğu-batı uzunluğu'], 1, 'Orta (ılıman) kuşakta bulunmak mevsimlerin belirgin olmasını sağlar.'],
        ['Türkiye’nin komşu sayısı kaçtır?', ['6', '7', '8', '9', '10'], 2, 'Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Azerbaycan (Nahçıvan), İran, Irak ve Suriye olmak üzere 8 komşusu vardır.'],
      ],
    ),
  ]),
  topic('cog-yer', 'Türkiye’nin Yer Şekilleri', [
    lesson(
      'cog-yer-olusum',
      'Oluşum, Dağlar ve Depremler',
      [
        ['İç ve dış kuvvetler', ['İç: orojenez, epirojenez, deprem, volkan', 'Dış: aşınma, taşınma, biriktirme'], 'Yer şekillerini iç kuvvetler (kıvrılma, kırılma, volkanizma) ve dış kuvvetler (akarsu, rüzgâr, buzul, dalga) şekillendirir. Türkiye Alp-Himalaya kuşağında olduğu için genç ve engebelidir.'],
        ['Dağ türleri', ['Kıvrım: Toroslar, Kuzey Anadolu', 'Kırık: Ege horst-graben', 'Volkan: Erciyes, Ağrı'], 'Toroslar ve Kuzey Anadolu Dağları kıvrım-kırık dağlardır. Ege’de Menderes ve Gediz gibi grabenler vardır. Ağrı (5137 m, en yüksek), Erciyes, Hasan ve Süphan volkanik dağlardır.'],
        ['Fay hatları ve deprem', ['Kuzey Anadolu Fayı', 'Doğu Anadolu Fayı', 'Batı Anadolu fayları'], 'Türkiye’de depremlerin çoğu Kuzey Anadolu, Doğu Anadolu ve Ege’deki fay hatları boyunca oluşur. Nüfusun büyük bölümü deprem kuşağında yaşar; yapı denetimi ve hazırlık hayati önemdedir.'],
      ],
      [
        ['Türkiye’nin en yüksek dağı aşağıdakilerden hangisidir?', ['Erciyes', 'Kaçkar', 'Uludağ', 'Ağrı', 'Süphan'], 3, 'Volkanik bir dağ olan Ağrı 5137 m ile Türkiye’nin en yüksek dağıdır.'],
        ['Aşağıdaki dağlardan hangisi volkanik kökenli değildir?', ['Erciyes', 'Hasan', 'Süphan', 'Nemrut', 'Kaçkar'], 4, 'Kaçkar Dağları kıvrım-kırık yapılı, granit ağırlıklı bir kütledir; diğerleri volkaniktir.'],
        ['Ege Bölgesi’nde dağların kıyıya dik uzanmasının ve ovaların denize kadar sokulmasının nedeni aşağıdakilerden hangisidir?', ['Volkanizma', 'Horst-graben (kırık) oluşumu', 'Buzul aşındırması', 'Karstlaşma', 'Rüzgâr aşındırması'], 1, 'Ege’de kırılmalarla oluşan horst ve graben sistemi dağları ve ovaları kıyıya dik uzatmıştır.'],
      ],
    ),
    lesson(
      'cog-yer-ova-plato',
      'Ovalar, Platolar ve Göller',
      [
        ['Ovalar', ['Çukurova: Seyhan-Ceyhan deltası', 'Bafra, Çarşamba: Karadeniz delta ovaları'], 'Çukurova alüvyal bir deltadır ve tarımda çok verimlidir. Bafra ve Çarşamba Karadeniz’deki delta ovalarıdır. Konya Ovası ise tektonik çanak kökenli iç ovadır.'],
        ['Platolar', ['İç Anadolu: Haymana, Cihanbeyli', 'Doğu Anadolu’da yüksek platolar'], 'Platolar çevresinden yüksek, düzlüğü geniş sahalardır. İç Anadolu’da Haymana ve Cihanbeyli platoları, Doğu Anadolu’da Erzurum-Kars platoları vardır.'],
        ['Göller', ['Van: tektonik+volkanik set, sodalı', 'Tuz: tektonik, ikinci büyük', 'Beyşehir: en büyük tatlı su'], 'Van Gölü en büyük gölümüzdür ve sodalıdır. Tuz Gölü tektonik kökenlidir. Beyşehir Gölü en büyük tatlı su gölüdür. Karstik şekiller en çok Toroslar’da görülür.'],
      ],
      [
        ['Türkiye’nin en büyük gölü hangisidir?', ['Tuz Gölü', 'Beyşehir Gölü', 'Van Gölü', 'Eğirdir Gölü', 'İznik Gölü'], 2, 'Van Gölü yüzölçümü bakımından en büyüktür; sodalı sulara sahiptir.'],
        ['Aşağıdakilerden hangisi alüvyal (akarsu biriktirme) kökenli bir ovadır?', ['Haymana', 'Cihanbeyli', 'Çukurova', 'Karapınar', 'Obruk'], 2, 'Çukurova, Seyhan ve Ceyhan’ın taşıdığı alüvyonlarla oluşmuş bir delta ovasıdır.'],
        ['Türkiye’de karstik şekillerin en çok görüldüğü yer aşağıdakilerden hangisidir?', ['Toroslar', 'Ergene Havzası', 'Kuzey Anadolu’nun kuzeyi', 'Ege Bölgesi’nin kıyıları', 'Karasu-Aras Dağları'], 0, 'Kalkerli (kireçtaşı) arazinin yaygın olduğu Toroslar’da dolin, polye, mağara gibi karstik şekiller çoktur.'],
      ],
    ),
  ]),
  topic('cog-iklim', 'Türkiye’nin İklimi', [
    lesson(
      'cog-iklim-unsurlar',
      'İklim Elemanları ve Etkenleri',
      [
        ['Sıcaklık', ['Yükseldikçe düşer (≈200 m’de 1°C)', 'Enlem, yükselti, denize uzaklık'], 'Sıcaklık enlem arttıkça ve yükseldikçe azalır. Denizden uzaklaştıkça karasallık artar, yıllık sıcaklık farkı büyür. Kıyıda yaz-kış farkı azdır.'],
        ['Basınç ve rüzgâr', ['Sıcak: alçak basınç', 'Rüzgâr yüksekten alçağa eser'], 'Isınan hava genleşip yükselir ve alçak basınç oluşturur. Rüzgârlar yüksek basınçtan alçak basınca doğru eser. Karasal alanlarda yazın alçak, kışın yüksek basınç görülür.'],
        ['Yağış türleri', ['Konveksiyonel: yaz, ısınma', 'Orografik: yamaç', 'Cephesel: sıcak-soğuk hava'], 'Isınan havanın yükselmesiyle konveksiyonel, hava kütlesinin dağa çarpıp yükselmesiyle orografik, farklı hava kütlelerinin karşılaşmasıyla cephesel yağış oluşur.'],
      ],
      [
        ['Deniz seviyesinde sıcaklığı 20°C olan bir yerden 1000 m yüksekteki bir noktada (yaklaşık) sıcaklık kaç °C olur? (Her 200 m’de 1°C)', ['5', '10', '15', '18', '19'], 2, '1000/200 = 5°C düşer: 20 − 5 = 15°C.'],
        ['Yağışın dağın denize bakan yamacında fazla, arka yamacında az olmasının nedeni aşağıdakilerden hangisidir?', ['Konveksiyonel yağış', 'Cephesel yağış', 'Yamaç (orografik) yağışı', 'Deniz tuzluluğu', 'Kar erimesi'], 2, 'Nemli hava dağa çarpıp yükselir, soğur ve ön yamaçta yağış bırakır; arka yamaç kurak kalır.'],
        ['Aşağıdakilerden hangisi karasallığı artıran etkendir?', ['Denize yakınlık', 'Yükseltinin azalması', 'Denizden uzaklık', 'Nem oranının artması', 'Dağların kıyıya paralel uzanması'], 2, 'Denizden uzaklaştıkça sıcaklık farkı büyür; karasal iklim özellikleri artar.'],
      ],
    ),
    lesson(
      'cog-iklim-turleri',
      'Türkiye’de İklim Tipleri',
      [
        ['Akdeniz iklimi', ['Yaz sıcak-kurak, kış ılık-yağışlı', 'Maki bitkisi'], 'Akdeniz ve Ege kıyılarında yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır. Doğal bitki örtüsü makidir. Narenciye, zeytin, pamuk gibi ürünler yetişir.'],
        ['Karadeniz iklimi', ['Her mevsim yağışlı', 'En fazla yağış Rize'], 'Karadeniz kıyılarında yazlar serin, kışlar ılıktır; her mevsim yağış alır. Dağların kıyıya paralel uzanması yağışı artırır. En çok yağış Doğu Karadeniz’de Rize çevresindedir.'],
        ['Karasal iklim', ['İç Anadolu, Doğu Anadolu', 'Yaz sıcak-kurak, kış soğuk-kar'], 'İç bölgelerde yazlar sıcak ve kurak, kışlar soğuk ve karlıdır. Yağış azdır, en az yağış alan yerler Konya Ovası ve Iğdır çevresidir. Bitki örtüsü bozkırdır.'],
      ],
      [
        ['Yazları sıcak ve kurak, kışları ılık ve yağışlı geçen iklimde görülen doğal bitki örtüsü aşağıdakilerden hangisidir?', ['Bozkır', 'Orman', 'Maki', 'Alpin çayır', 'Tundra'], 2, 'Akdeniz ikliminin doğal bitki örtüsü makidir.'],
        ['Türkiye’de en fazla yağış alan bölge aşağıdakilerden hangisidir?', ['İç Anadolu', 'Doğu Karadeniz', 'Güneydoğu Anadolu', 'Trakya', 'Orta Karadeniz'], 1, 'Doğu Karadeniz kıyıları (Rize çevresi) yağışın en yüksek olduğu yerdir.'],
        ['İç Anadolu’da yağışın az olmasının temel nedeni aşağıdakilerden hangisidir?', ['Dağların kıyıya paralel uzanması', 'Yükseltinin çok olması', 'Çevresinin dağlarla çevrili olması', 'Denize yakın olması', 'Rüzgâr hızı'], 2, 'Çevresindeki dağlar nemli rüzgârların içeri girmesini engeller; yağış azalır.'],
      ],
    ),
  ]),
  topic('cog-bitki', 'Bitki Örtüsü ve Topraklar', [
    lesson(
      'cog-bitki-toprak',
      'Doğal Bitki Örtüsü ve Toprak Tipleri',
      [
        ['Bitki örtüsü', ['Orman: Karadeniz, Marmara', 'Maki: Akdeniz, Ege', 'Bozkır: İç Anadolu'], 'Nemli bölgelerde orman, Akdeniz ikliminde maki, yağışın az olduğu iç kesimlerde bozkır yaygındır. Yüksek kesimlerde alpin çayırlar bulunur. Türkiye’nin ormanlık alanı kabaca yüzölçümünün üçte biri kadardır.'],
        ['Zonal topraklar', ['Podzol: Karadeniz', 'Kestane/kahverengi step: İç Anadolu', 'Terra rossa: Akdeniz'], 'İklim ve bitki örtüsünün oluşturduğu topraklara zonal denir. Karadeniz’de podzol ve kahverengi orman toprakları, Akdeniz’de kırmızı terra rossa, iç bölgelerde bozkır toprakları görülür.'],
        ['İntrazonal ve azonal', ['Kireçtaşında: rendzina', 'Alüvyal, kolüvyal, litosol: azonal'], 'Ana kayanın etkisiyle oluşan toprak intrazonaldır. Akarsuların biriktirdiği alüvyal topraklar henüz olgunlaşmadığından azonaldır ve tarım için çok verimlidir.'],
      ],
      [
        ['Akdeniz Bölgesi’nde kireçtaşı üzerinde oluşan kırmızı renkli toprak aşağıdakilerden hangisidir?', ['Podzol', 'Terra rossa', 'Çernozem', 'Alüvyal', 'Tundra'], 1, 'Terra rossa, kireçtaşı alanlarda Akdeniz iklimiyle oluşan kırmızı topraktır.'],
        ['Aşağıdaki topraklardan hangisi akarsuların biriktirmesiyle oluşur ve azonaldır?', ['Terra rossa', 'Podzol', 'Alüvyal toprak', 'Kestane rengi toprak', 'Çöl toprağı'], 2, 'Alüvyal topraklar akarsu taşıntılarından oluşur, azonaldır.'],
        ['Karadeniz kıyılarında hâkim bitki örtüsü aşağıdakilerden hangisidir?', ['Bozkır', 'Maki', 'Geniş yapraklı ve ibreli orman', 'Çöl bitkileri', 'Savan'], 2, 'Yağışın bol olduğu Karadeniz’de geniş yapraklı ve ibreli ormanlar yaygındır.'],
      ],
    ),
  ]),
  topic('cog-su', 'Türkiye’nin Su Varlığı', [
    lesson(
      'cog-su-akarsu-gol',
      'Akarsular, Göller ve Denizler',
      [
        ['Akarsular', ['En uzun: Kızılırmak', 'Fırat ve Dicle: Basra Körfezi', 'Aras, Çoruh: Hazar ve Karadeniz'], 'Kızılırmak tamamı Türkiye sınırları içinde akan en uzun akarsudur. Fırat ve Dicle Basra Körfezi’ne dökülür. Sakarya, Yeşilırmak, Seyhan, Ceyhan, Büyük Menderes diğer önemli akarsulardır.'],
        ['Rejim', ['Karadeniz: düzenli', 'Akdeniz-İç: düzensiz', 'Doğu: kar erimesi'], 'Karadeniz akarsuları her mevsim yağış aldığından düzenli akar. Akdeniz ve iç bölge akarsularının rejimi düzensizdir. Doğu Anadolu akarsuları ilkbahar-yaz başında kar erimesiyle yükselir.'],
        ['Denizler ve Boğazlar', ['Karadeniz az tuzlu', 'Akdeniz en tuzlu', 'Boğazlarda çift akıntı'], 'Karadeniz’in tuzluluğu en azdır, Akdeniz’in en fazladır. İstanbul ve Çanakkale Boğazları’nda üstte Karadeniz’den Marmara’ya az tuzlu su, altta Marmara’dan Karadeniz’e daha tuzlu su akar.'],
      ],
      [
        ['Aşağıdaki akarsulardan hangisi Türkiye sınırları içinde doğup yine Türkiye’de denize dökülen en uzun akarsudur?', ['Fırat', 'Dicle', 'Aras', 'Kızılırmak', 'Çoruh'], 3, 'Kızılırmak Sivas’ta doğar, Karadeniz’e dökülür; en uzun iç akarsudur.'],
        ['Karadeniz akarsularının rejiminin düzenli olmasının temel nedeni aşağıdakilerden hangisidir?', ['Dağların kıyıya dik uzanması', 'Her mevsim yağış alması', 'Kar erimesi', 'Karstik arazi', 'Deniz seviyesinin yüksek olması'], 1, 'Her mevsim yağış alan Karadeniz’de akarsu debisi yıl boyunca dengelidir.'],
        ['İstanbul Boğazı’nda alt akıntının Marmara’dan Karadeniz’e doğru olmasının nedeni aşağıdakilerden hangisidir?', ['Karadeniz’in daha tuzlu olması', 'Marmara’nın daha tuzlu, yoğun olması', 'Rüzgârların yönü', 'Boğazın dar olması', 'Gelgit olayı'], 1, 'Marmara suyu daha tuzlu ve yoğun olduğundan alttan Karadeniz’e doğru akar.'],
      ],
    ),
  ]),
  topic('cog-nufus', 'Nüfus ve Yerleşme', [
    lesson(
      'cog-nufus-temel',
      'Nüfus Özellikleri ve Yerleşme',
      [
        ['Nüfus', ['Nüfus yoğunluğu = nüfus / alan', 'Nüfus yaklaşık 85 milyon'], 'Türkiye’nin nüfusu yaklaşık 85 milyondur. Nüfus yoğunluğu, toplam nüfusun yüzölçümüne bölünmesiyle bulunur. Nüfus en çok Marmara ve Ege kıyılarında, en seyrek Doğu Anadolu’da toplanmıştır.'],
        ['Nüfus değişimi', ['Doğal artış = doğum − ölüm', 'Genç nüfus oranı azalıyor'], 'Doğum oranı düştükçe nüfus artış hızı azalır, nüfus yaşlanır. Türkiye’de kentsel nüfus oranı yüksektir ve kentleşme hızlıdır. En kalabalık ve en yoğun il İstanbul’dur.'],
        ['Yerleşme', ['Dağınık: Karadeniz', 'Toplu: İç Anadolu, Güneydoğu'], 'Engebeli ve yağışlı Karadeniz’de evler dağınık, düz ve sulak alanı az İç Anadolu’da toplu yerleşme görülür. Yerleşmeyi su, iklim, ulaşım ve tarım alanları belirler.'],
      ],
      [
        ['Nüfusu 6 milyon, yüzölçümü 12.000 km² olan bir ilin nüfus yoğunluğu (km²’ye düşen kişi) kaçtır?', ['200', '300', '400', '500', '600'], 3, '6.000.000 / 12.000 = 500.'],
        ['Karadeniz Bölgesi’nde dağınık yerleşmenin yaygın olmasının temel nedeni nedir?', ['Sanayinin gelişmiş olması', 'Engebeli arazi ve bol yağışla suyun her yerde bulunması', 'Kuraklık', 'Göçün azlığı', 'Ulaşımın kolaylığı'], 1, 'Engebe ve su kıtlığının olmaması evlerin geniş alana dağılmasına yol açar.'],
        ['Aşağıdakilerden hangisi Türkiye’de kentleşmeyi hızlandıran etkenlerden biri değildir?', ['Sanayileşme', 'Kırsal alanda tarımda makineleşme', 'İç göç', 'Hizmet sektörünün gelişmesi', 'Kırda yaşam alanlarının genişlemesi'], 4, 'Kırsal alanların genişlemesi kentleşmeyi hızlandırmaz; diğerleri hızlandırır.'],
      ],
    ),
  ]),
  topic('cog-goc', 'Göç', [
    lesson(
      'cog-goc-temel',
      'İç Göç, Dış Göç ve Sonuçları',
      [
        ['Göç türleri', ['İç göç: sınır içinde', 'Dış göç: ülke dışına', 'Mevsimlik, zorunlu'], 'Ülke sınırları içindeki yer değiştirmeye iç göç, ülke dışına yapılan göçe dış göç denir. Savaş, afet gibi nedenlerle zorunlu, tarım işleri için mevsimlik göç görülür.'],
        ['Nedenler', ['İtici: işsizlik, afet', 'Çekici: iş, eğitim, sağlık'], 'Göç ederken kaynak yerin itici nedenleri (işsizlik, geçim zorluğu, afet) ile hedef yerin çekici nedenleri (iş, eğitim, sağlık) birlikte etkilidir.'],
        ['Türkiye’de göç', ['Doğudan batıya, kırdan kente', '1961 işçi göçü', '1923 mübadele'], 'Türkiye’de iç göç genel olarak doğudan batıya ve kırdan kente doğrudur. 1961’den sonra Avrupa’ya işçi göçü başladı. 1923’te Türk-Yunan nüfus mübadelesi yapıldı.'],
      ],
      [
        ['Aşağıdakilerden hangisi göçün çekici nedenlerinden biridir?', ['İşsizlik', 'Doğal afet', 'Eğitim ve iş olanaklarının çokluğu', 'Savaş', 'Tarım arazisinin azlığı'], 2, 'İş ve eğitim fırsatları gidilen yerin çekici yönleridir.'],
        ['Türkiye’de iç göçün genel yönü aşağıdakilerden hangisidir?', ['Batıdan doğuya', 'Kentten kıra', 'Doğudan batıya ve kırdan kente', 'Kıyıdan iç kesimlere', 'Güneyden kuzeye'], 2, 'Sanayi ve hizmet sektörü batı kentlerinde yoğun olduğundan göç doğudan batıya akar.'],
        ['Hızlı kentleşmenin yol açtığı sonuçlardan biri aşağıdakilerden hangisi olabilir?', ['Kırsal nüfusun artması', 'Gecekondulaşma ve altyapı sorunları', 'Tarım arazilerinin genişlemesi', 'Doğal artış hızının sıfırlanması', 'Ulaşım yükünün azalması'], 1, 'Plansız kentleşme gecekondu, altyapı yetersizliği ve trafik sorunları doğurur.'],
      ],
    ),
  ]),
  topic('cog-tarim', 'Tarım', [
    lesson(
      'cog-tarim-urunler',
      'Tarım Ürünleri ve Yetiştiği Bölgeler',
      [
        ['Tahıl ve sanayi bitkileri', ['Buğday, arpa: İç Anadolu', 'Pamuk: Çukurova, Ege, GAP', 'Şeker pancarı: İç Anadolu'], 'İç Anadolu tahıl ambarıdır; buğday ve arpa en çok burada yetişir. Pamuk Çukurova, Ege ve Güneydoğu’da, şeker pancarı İç Anadolu ve Marmara’da yetiştirilir. Trakya ayçiçeği için önemlidir.'],
        ['Ege ve Karadeniz ürünleri', ['Ege: zeytin, incir, üzüm, tütün', 'Karadeniz: çay, fındık'], 'Ege’de zeytin, incir, üzüm ve tütün öne çıkar. Doğu Karadeniz’de çay, Ordu ve Giresun çevresinde fındık yetişir. Türkiye fındık üretiminde dünyada birinci sıradadır.'],
        ['Akdeniz ve Güneydoğu', ['Narenciye, muz: Akdeniz', 'Antep fıstığı, mercimek: Güneydoğu'], 'Akdeniz kıyılarında narenciye, Anamur’da muz yetişir. Güneydoğu’da antep fıstığı, mercimek ve pamuk önemlidir. Malatya kayısıda öne çıkar.'],
      ],
      [
        ['Aşağıdaki ürünlerden hangisi en çok Doğu Karadeniz’de yetiştirilir?', ['Pamuk', 'Çay', 'Zeytin', 'Şeker pancarı', 'Antep fıstığı'], 1, 'Çay yüksek nem ve asidik toprak ister; Rize-Trabzon çevresinde yetişir.'],
        ['Türkiye’de buğday ve arpa üretiminin en fazla yapıldığı bölge hangisidir?', ['Ege', 'Akdeniz', 'İç Anadolu', 'Karadeniz', 'Doğu Anadolu'], 2, 'Geniş düzlükleri nedeniyle İç Anadolu tahıl üretiminde birincidir.'],
        ['Aşağıdaki eşleştirmelerden hangisi yanlıştır?', ['Çukurova – Pamuk', 'Malatya – Kayısı', 'Ordu – Fındık', 'Rize – Çay', 'Trakya – Muz'], 4, 'Muz Akdeniz kıyılarında (Anamur, Bozyazı) yetişir; Trakya ayçiçeği ve tahıl bölgesidir.'],
      ],
    ),
  ]),
  topic('cog-hayvan', 'Hayvancılık, Ormancılık ve Su Ürünleri', [
    lesson(
      'cog-hayvan-genel',
      'Hayvancılık ve Balıkçılık',
      [
        ['Hayvancılık', ['Küçükbaş: Doğu Anadolu, İç Anadolu', 'Büyükbaş: Marmara, Ege, Karadeniz', 'Ankara keçisi: tiftik'], 'Geniş meralara sahip Doğu ve İç Anadolu’da küçükbaş hayvancılık yaygındır. Büyükbaş hayvancılık yağışlı ve yem bitkisi bol Marmara, Ege ve Karadeniz’de gelişmiştir. Tiftik Ankara keçisinden alınır.'],
        ['Arıcılık ve ipek', ['Arıcılık: Ordu, Muğla (çam balı)', 'İpekböcekçiliği: Bursa'], 'Arıcılıkta Muğla çam balıyla, Ordu ve Karadeniz çiçek balıyla öne çıkar. İpekböcekçiliği tarihsel olarak Bursa çevresinde gelişmiştir.'],
        ['Ormancılık ve balıkçılık', ['Orman: Karadeniz, Akdeniz, Marmara', 'Hamsi: Karadeniz'], 'Orman varlığı en fazla Karadeniz ve Akdeniz bölgelerindedir. Karadeniz’de hamsi, Marmara ve Ege’de çeşitli balıklar avlanır; kültür balıkçılığı (alabalık, levrek, çipura) giderek artmaktadır.'],
      ],
      [
        ['Aşağıdakilerden hangisi tiftik üretimiyle ünlü hayvandır?', ['Merinos koyunu', 'Ankara keçisi', 'Akkaraman koyunu', 'Kıl keçisi', 'Siyah alaca sığır'], 1, 'Tiftik (Moher) Ankara keçisinden elde edilir.'],
        ['Küçükbaş hayvancılığın Doğu Anadolu’da yaygın olmasının temel nedeni aşağıdakilerden hangisidir?', ['Sanayinin gelişmesi', 'Geniş mera alanlarının bulunması', 'Yem bitkisinin çokluğu', 'Nüfusun fazla olması', 'Denize yakınlık'], 1, 'Yüksek platolardaki geniş meralar küçükbaş hayvancılığa uygundur.'],
        ['Karadeniz’de en çok avlanan balık türü aşağıdakilerden hangisidir?', ['Sardalya', 'Hamsi', 'Levrek', 'Çipura', 'Ton'], 1, 'Hamsi Karadeniz balıkçılığında en önemli türdür.'],
      ],
    ),
  ]),
  topic('cog-maden', 'Madenler ve Enerji Kaynakları', [
    lesson(
      'cog-maden-genel',
      'Yer Altı Kaynakları',
      [
        ['Enerji madenleri', ['Taşkömürü: Zonguldak', 'Linyit: Soma, Afşin-Elbistan, Tunçbilek', 'Petrol: Batman, Adıyaman'], 'Taşkömürü Zonguldak havzasındadır. Linyit Soma, Tunçbilek ve Afşin-Elbistan’da çıkarılır. Petrol rezervimiz sınırlıdır; Batman ve Adıyaman çevresinde üretilir. Karadeniz’de doğalgaz keşifleri yapılmıştır.'],
        ['Metalik madenler', ['Demir: Divriği', 'Krom: Guleman (Elazığ)', 'Bakır: Ergani, Murgul, Çayeli', 'Boksit: Seydişehir'], 'Demir cevheri Sivas Divriği ve Malatya Hekimhan’dadır. Krom Elazığ-Guleman, Muğla ve Mersin’de bulunur. Bakır Ergani, Murgul ve Çayeli’de çıkarılır. Boksit alüminyum üretimi için Seydişehir’de işlenir.'],
        ['Endüstriyel madenler', ['Bor: Kırka, Bigadiç, Emet', 'Mermer: Afyon, Muğla, Marmara Adası'], 'Dünya bor rezervlerinin büyük bölümü Türkiye’dedir (Eskişehir Kırka, Balıkesir Bigadiç, Kütahya Emet). Mermer en çok Afyon, Muğla, Denizli ve Marmara Adası’nda çıkarılır.'],
      ],
      [
        ['Türkiye’nin tek taşkömürü havzası aşağıdakilerden hangisidir?', ['Soma', 'Zonguldak', 'Tunçbilek', 'Afşin-Elbistan', 'Çan'], 1, 'Taşkömürü yalnızca Zonguldak havzasında üretilir.'],
        ['Aşağıdaki eşleştirmelerden hangisi doğrudur?', ['Divriği – Bor', 'Seydişehir – Boksit', 'Kırka – Krom', 'Guleman – Linyit', 'Batman – Taşkömürü'], 1, 'Seydişehir (Konya) boksitten alüminyum üretimiyle bilinir. Divriği demir, Kırka bor, Guleman krom, Batman petrol bölgesidir.'],
        ['Bor madeninin çıkarıldığı yerler arasında aşağıdaki illerden hangisi yer almaz?', ['Eskişehir', 'Balıkesir', 'Kütahya', 'Konya', 'Hepsi bor üretir'], 3, 'Bor Eskişehir (Kırka), Balıkesir (Bigadiç) ve Kütahya (Emet)’tedir; Konya’da çıkarılmaz.'],
      ],
    ),
    lesson(
      'cog-enerji',
      'Enerji Üretimi',
      [
        ['Hidroelektrik ve termik', ['Atatürk, Keban, Karakaya barajları', 'Termik: kömür, doğalgaz'], 'Hidroelektrik santrallerde Fırat üzerindeki Atatürk, Keban ve Karakaya barajları büyük pay sahibidir. Termik santrallerde kömür ve doğalgaz kullanılır. Doğalgazın büyük kısmı ithal edilir.'],
        ['Yenilenebilir enerji', ['Jeotermal: Ege', 'Rüzgâr: Ege, Marmara', 'Güneş: Akdeniz, GAP'], 'Jeotermal enerji Ege’de (Denizli, Aydın) yoğundur. Rüzgâr santralleri Ege ve Marmara kıyılarında kuruludur. Güneş enerjisi en çok Akdeniz ve Güneydoğu’da verimlidir.'],
        ['Nükleer ve boru hatları', ['Akkuyu (Mersin)', 'BTC, Kerkük-Yumurtalık, TürkAkım, TANAP'], 'Mersin Akkuyu’da nükleer santral kurulmaktadır. Türkiye petrol ve doğalgaz boru hatlarıyla bir enerji geçiş merkezidir: Bakü-Tiflis-Ceyhan, Kerkük-Yumurtalık, TANAP ve TürkAkım.'],
      ],
      [
        ['Aşağıdakilerden hangisi yenilenebilir enerji kaynağı değildir?', ['Rüzgâr', 'Güneş', 'Jeotermal', 'Hidroelektrik', 'Doğalgaz'], 4, 'Doğalgaz fosil yakıttır; tükenebilir.'],
        ['Fırat Nehri üzerinde kurulu olan barajlardan hangisi Türkiye’nin en büyük barajıdır?', ['Keban', 'Karakaya', 'Atatürk', 'Ilısu', 'Hirfanlı'], 2, 'Atatürk Barajı, GAP’ın merkezinde yer alan en büyük barajdır.'],
        ['Bakü–Tiflis–Ceyhan boru hattı hangi kaynağı taşır?', ['Doğalgaz', 'Ham petrol', 'Su', 'Kömür', 'Elektrik'], 1, 'BTC, Hazar petrolünü Akdeniz’deki Ceyhan terminaline taşır.'],
      ],
    ),
  ]),
  topic('cog-sanayi', 'Sanayi', [
    lesson(
      'cog-sanayi-genel',
      'Sanayi Kolları ve Dağılışı',
      [
        ['Sanayinin kuruluş etkenleri', ['Hammadde, enerji, ulaşım, pazar, işgücü, sermaye'], 'Sanayi tesisleri hammaddeye, enerjiye, ulaşım ağına, pazara, ucuz işgücüne ve sermayeye yakın kurulur. Hammaddesi ağır olan sanayiler hammadde kaynağına yakın kurulur.'],
        ['Başlıca kollar', ['Demir-çelik: Karabük, Ereğli, İskenderun', 'Otomotiv: Bursa, Kocaeli', 'Petrokimya: İzmit, Aliağa'], 'Demir-çelik tesisleri Karabük, Ereğli ve İskenderun’dadır. Otomotiv Bursa, Kocaeli ve Sakarya’da yoğundur. Rafineriler İzmit, İzmir (Aliağa), Kırıkkale ve Batman’dadır.'],
        ['Tekstil ve gıda', ['Tekstil: İstanbul, Bursa, Denizli, Gaziantep', 'Şeker: pancar bölgeleri'], 'Tekstil en çok İstanbul, Bursa, Denizli ve Gaziantep’te gelişmiştir. Şeker fabrikaları pancar yetiştirilen yerlere kurulmuştur. Seramik ve cam ise Kütahya, Eskişehir ve Bilecik çevresinde öne çıkar.'],
      ],
      [
        ['Türkiye’nin ilk büyük entegre demir-çelik tesisi hangi ilde kurulmuştur?', ['Zonguldak', 'Karabük', 'Hatay', 'Sivas', 'Kırıkkale'], 1, 'Karabük Demir-Çelik Fabrikası 1939’da kurulan ilk entegre tesistir.'],
        ['Hammaddesi ağır ve nakliyesi zor sanayi kolları nerede kurulur?', ['Pazara yakın', 'Hammadde kaynağına yakın', 'Limanlara uzak', 'İşgücünün az olduğu yerde', 'Rastgele'], 1, 'Taşıma maliyetini düşürmek için hammadde kaynağına yakın kurulur.'],
        ['Aşağıdakilerden hangisi otomotiv sanayisinin yoğun olduğu bir ildir?', ['Rize', 'Kocaeli', 'Ardahan', 'Bayburt', 'Tunceli'], 1, 'Marmara’da Kocaeli, Bursa ve Sakarya otomotiv merkezidir.'],
      ],
    ),
  ]),
  topic('cog-ticaret', 'Ticaret ve Ulaşım', [
    lesson(
      'cog-ulasim',
      'Ulaşım Sistemleri ve Dış Ticaret',
      [
        ['Karayolu ve demiryolu', ['Karayolu en yaygın', 'Demiryolu ağı Ankara merkezli', 'Hızlı tren hatları'], 'Yolcu ve yük taşımacılığında karayolu en yaygındır. Demiryolu ağı Ankara merkezli yıldız biçimindedir. Ankara-Eskişehir-İstanbul, Ankara-Konya hızlı tren hatları vardır.'],
        ['Deniz ve hava', ['İstanbul, İzmir, Mersin limanları', 'Marmaray, Avrasya Tüneli', 'İstanbul Havalimanı'], 'Dış ticaret yükünün büyük kısmı denizyoluyla taşınır. Mersin, İzmir, İstanbul ve Kocaeli önemli limanlardır. Marmaray ve Avrasya Tüneli ile İstanbul Boğazı’nın altından geçilir; 1915 Çanakkale Köprüsü Avrupa ve Asya’yı birleştirir.'],
        ['Dış ticaret', ['İhracat: otomotiv, tekstil, demir-çelik', 'İthalat: enerji, ara malı'], 'Türkiye ihracatta otomotiv, tekstil, makine ve demir-çelik ürünleri öne çıkar; ithalatta enerji ve ara malları ağırlıktadır. Almanya başlıca ticaret ortaklarındandır.'],
      ],
      [
        ['Türkiye’de en yaygın kullanılan ulaşım türü aşağıdakilerden hangisidir?', ['Demiryolu', 'Denizyolu', 'Karayolu', 'Havayolu', 'Boru hattı'], 2, 'Yolcu ve yük taşımacılığının büyük bölümü karayoluyla yapılır.'],
        ['Aşağıdakilerden hangisi Türkiye’nin ihracatında ağırlıklı yer tutan ürün grubudur?', ['Ham petrol', 'Otomotiv ve tekstil', 'Doğalgaz', 'Kömür', 'Bor'], 1, 'Otomotiv ve tekstil ihracatın başlıca kalemleridir.'],
        ['Demiryolu ağının Ankara merkezli olmasının sonucu aşağıdakilerden hangisidir?', ['Hatların Ankara’dan her yöne ışınsal (yıldız biçimli) uzanması', 'Doğu-batı hattının olmaması', 'Limanların kullanılmaması', 'Hızlı trenin bulunmaması', 'Karayolunun gelişmemesi'], 0, 'Hatlar Ankara’dan her yöne ışınsal uzanır.'],
      ],
    ),
  ]),
  topic('cog-turizm', 'Turizm', [
    lesson(
      'cog-turizm-genel',
      'Turizm Türleri ve Merkezleri',
      [
        ['Doğal ve kıyı turizmi', ['Antalya, Muğla, Aydın, İzmir', 'Deniz-kum-güneş'], 'Akdeniz ve Ege kıyıları deniz-kum-güneş turizminde en çok turist çeken alanlardır. Yaz sıcak ve kurak olduğundan sezon uzundur; Antalya en çok turist alan ildir.'],
        ['Kültür ve inanç turizmi', ['Efes, Truva, Göbeklitepe, Ani', 'Kapadokya, Mevlana (Konya)'], 'Efes, Truva, Göbeklitepe, Ani ve Kapadokya UNESCO Dünya Mirası listesinde yer alır. Konya, Şanlıurfa ve İstanbul inanç turizminde öne çıkar.'],
        ['Termal ve kış turizmi', ['Pamukkale, Bursa, Afyon, Yalova', 'Uludağ, Erciyes, Palandöken, Kartalkaya'], 'Termal turizm Bursa, Yalova, Afyon ve Denizli (Pamukkale)’de gelişmiştir. Kış turizmi Uludağ, Erciyes, Palandöken ve Kartalkaya gibi karlı dağlarda yapılır.'],
      ],
      [
        ['Aşağıdakilerden hangisi UNESCO Dünya Mirası Listesi’nde yer alan bir yerdir?', ['Uludağ', 'Göbeklitepe', 'Bodrum Kalesi', 'Sapanca Gölü', 'Ayder Yaylası'], 1, 'Şanlıurfa’daki Göbeklitepe dünya mirası listesindedir.'],
        ['Kış turizmi için en uygun merkez aşağıdakilerden hangisidir?', ['Bodrum', 'Palandöken', 'Çeşme', 'Kuşadası', 'Marmaris'], 1, 'Erzurum Palandöken kayak merkezidir.'],
        ['Türkiye’de turizmin gelişmesine katkı sağlayan temel doğal etken aşağıdakilerden hangisidir?', ['Düz arazi', 'Uzun kıyılar ve ılıman iklim', 'Fazla yağış', 'Yer altı kaynakları', 'Nüfus yoğunluğu'], 1, 'Uzun kıyı şeridi, ılıman iklim ve zengin kültürel miras turizmi destekler.'],
      ],
    ),
  ]),
  topic('cog-bolgeler', 'Coğrafi Bölgeler', [
    lesson(
      'cog-bolge-ozellik',
      'Yedi Coğrafi Bölgenin Özellikleri',
      [
        ['Bölgeler', ['1941 Birinci Coğrafya Kongresi (Ankara)', '7 bölge'], 'Türkiye 1941’deki Birinci Coğrafya Kongresi’nde yedi bölgeye ayrıldı: Marmara, Ege, Akdeniz, Karadeniz, İç Anadolu, Doğu Anadolu ve Güneydoğu Anadolu.'],
        ['Karşılaştırmalar', ['En büyük: Doğu Anadolu', 'En küçük: Marmara (yüzölçümü)', 'En kalabalık: Marmara'], 'Yüzölçümü en büyük bölge Doğu Anadolu, en küçük bölge Marmara’dır. Nüfusu en fazla olan bölge Marmara’dır. Ege’nin kıyıları en çok girintili-çıkıntılıdır. Akdeniz’in kıyıları ise dağlar nedeniyle az girintilidir.'],
        ['Belirgin özellikler', ['Karadeniz: en çok yağış', 'Güneydoğu: en sıcak', 'Doğu Anadolu: en soğuk, en yüksek'], 'Doğu Karadeniz yağış, Güneydoğu Anadolu yazın sıcaklık, Doğu Anadolu kışın soğukluk ve yükselti bakımından ilk sıradadır. GAP projesi Güneydoğu’nun sulama ve enerji kalkınma projesidir.'],
      ],
      [
        ['Yüzölçümü bakımından en küçük coğrafi bölgemiz hangisidir?', ['Ege', 'Marmara', 'Akdeniz', 'Güneydoğu Anadolu', 'İç Anadolu'], 1, 'Marmara en küçük, Doğu Anadolu en büyük bölgedir.'],
        ['Aşağıdakilerden hangisi GAP projesi kapsamında yer alan akarsulardan biridir?', ['Sakarya', 'Fırat', 'Kızılırmak', 'Gediz', 'Seyhan'], 1, 'GAP, Fırat ve Dicle havzasında enerji ve sulama projesidir.'],
        ['Kıyı şeridi en fazla girintili çıkıntılı olan bölgemiz hangisidir?', ['Karadeniz', 'Akdeniz', 'Ege', 'Marmara', 'Doğu Anadolu'], 2, 'Horst-graben sistemi nedeniyle Ege kıyıları en fazla girintili çıkıntılıdır.'],
      ],
    ),
  ]),
  topic('cog-afet', 'Doğal Afetler ve Çevre', [
    lesson(
      'cog-afet-cevre',
      'Afetler ve Çevre Sorunları',
      [
        ['Doğal afetler', ['Deprem, heyelan, sel, çığ, erozyon'], 'Türkiye’de deprem, sel ve taşkın, heyelan (Karadeniz), çığ (Doğu Anadolu), orman yangını ve erozyon sık yaşanır. Afet yönetimi risk azaltma, hazırlık, müdahale ve iyileştirme aşamalarından oluşur.'],
        ['Çevre sorunları', ['Küresel ısınma, sera gazları', 'Ozon tabakası, asit yağmurları', 'Çölleşme'], 'Sera gazlarının artması küresel ısınmaya yol açar. CFC gazları ozon tabakasını inceltir. Kükürt ve azot oksitler asit yağmurlarına neden olur. Ormanların tahribi ve aşırı otlatma çölleşmeyi hızlandırır.'],
        ['Koruma çabaları', ['Paris İklim Anlaşması', 'Montreal Protokolü', 'Ramsar: sulak alanlar'], 'Montreal Protokolü ozon tabakasını, Paris Anlaşması ise iklim değişikliğini sınırlamayı hedefler. Ramsar Sözleşmesi sulak alanları korur. Türkiye milli park, tabiat parkı ve koruma alanlarıyla doğayı korur.'],
      ],
      [
        ['Aşağıdakilerden hangisi küresel ısınmanın temel nedenidir?', ['Ozon tabakasının güçlenmesi', 'Sera gazı salınımının artması', 'Ormanların artması', 'Güneş lekeleri', 'Yağışların artması'], 1, 'Fosil yakıt kullanımı ve sera gazı artışı atmosferin ısınmasına yol açar.'],
        ['Ozon tabakasını koruma amacıyla imzalanan uluslararası anlaşma hangisidir?', ['Kyoto', 'Ramsar', 'Montreal Protokolü', 'Paris', 'Basel'], 2, 'Montreal Protokolü ozon tabakasına zarar veren maddelerin üretimini kısıtlar.'],
        ['Karadeniz Bölgesi’nde sık görülen doğal afet aşağıdakilerden hangisidir?', ['Heyelan', 'Çığ', 'Volkanik patlama', 'Kuraklık', 'Çölleşme'], 0, 'Bol yağış ve eğimli arazi Karadeniz’de heyelan riskini artırır.'],
      ],
    ),
  ]),
]);
