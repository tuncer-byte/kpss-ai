import { ALL_TRACKS, lesson, subject, topic } from '../build';

// VATANDASLIK. OSYM GK testinde 9 soru. Mevzuat: 1982 Anayasasi (2017 degisikligi sonrasi, Cumhurbaskanligi Hukumet Sistemi).
export const vatandaslik = subject('vatandaslik', 'Vatandaşlık', 'shield-checkmark-outline', 9, ALL_TRACKS, [
  topic('vat-hukuk', 'Hukukun Temel Kavramları', [
    lesson(
      'vat-hukuk-kural',
      'Hukuk Kuralları ve Kaynakları',
      [
        ['Hukuk kuralı', ['Genel, soyut, sürekli', 'Yaptırımı devlet gücüyle uygulanır'], 'Hukuk kuralları herkes için geçerli, belirli kişiye özgü olmayan, devamlı ve yaptırımı devlet zoruyla sağlanan kurallardır. Din, ahlak ve görgü kurallarından farkı yaptırımın devlet eliyle uygulanmasıdır.'],
        ['Kaynaklar ve hiyerarşi', ['Anayasa > Kanun > Cumhurbaşkanlığı kararnamesi > Yönetmelik', 'Temel haklarla ilgili anlaşma: kanunla çatışırsa anlaşma esas'], 'Normlar hiyerarşisinde en üstte Anayasa yer alır. Ardından kanunlar ve usulüne göre yürürlüğe konmuş uluslararası anlaşmalar, daha sonra Cumhurbaşkanlığı kararnameleri ve yönetmelikler gelir. Alt norm üst norma aykırı olamaz.'],
        ['Hukuk dalları', ['Kamu hukuku: anayasa, idare, ceza, vergi', 'Özel hukuk: medeni, borçlar, ticaret'], 'Devletin egemenlik gücüyle bireyle ilişkisini düzenleyen dallar kamu hukukuna, eşit kişiler arasındaki ilişkileri düzenleyenler özel hukuka girer. Anayasa, idare, ceza ve vergi hukuku kamu hukuku dallarıdır.'],
      ],
      [
        ['Aşağıdakilerden hangisi hukuk kurallarının diğer toplumsal kurallardan ayrıldığı noktadır?', ['Ahlaki değer taşıması', 'Yaptırımının devlet gücüyle uygulanması', 'Herkes tarafından benimsenmesi', 'Yazılı olması', 'Değişmez olması'], 1, 'Hukuk kurallarının yaptırımı devlet zoruyla sağlanır.'],
        ['Aşağıdakilerden hangisi kamu hukuku dalıdır?', ['Borçlar hukuku', 'Ticaret hukuku', 'Medeni hukuk', 'İdare hukuku', 'Eşya hukuku'], 3, 'İdare hukuku kamu hukuku dalıdır; diğerleri özel hukuktur.'],
        ['Aşağıdakilerden hangisi normlar hiyerarşisinde en altta yer alır?', ['Anayasa', 'Kanun', 'Cumhurbaşkanlığı kararnamesi', 'Yönetmelik', 'Milletlerarası anlaşma'], 3, 'Yönetmelikler kararnamelerin ve kanunların altında, hiyerarşinin en alt basamaklarındandır.'],
      ],
    ),
    lesson(
      'vat-hukuk-ehliyet',
      'Hak, Kişilik ve Ehliyet',
      [
        ['Kişi', ['Gerçek kişi: insan', 'Tüzel kişi: kurum, dernek, vakıf, şirket'], 'Hukukta hak ve borç sahibi olabilen varlıklara kişi denir. Gerçek kişiler insanlardır. Tüzel kişiler ise belirli amaç için bir araya gelen kişi veya mal topluluklarıdır.'],
        ['Hak ehliyeti', ['Doğumla başlar, ölümle sona erer', 'Her kişide vardır'], 'Hak ehliyeti, kişinin hak sahibi olabilme ve borç altına girebilme yeteneğidir. Sağ ve tam doğmakla başlar, ölümle sona erer. Her insan hak ehliyetine sahiptir.'],
        ['Fiil ehliyeti', ['Ergin, ayırt etme gücüne sahip, kısıtlı olmayan', 'Ergin: 18 yaş'], 'Kendi fiilleriyle hak edinme ve borç altına girme yeteneğine fiil ehliyeti denir. Bunun için kişi ergin (18 yaşını doldurmuş), ayırt etme gücüne sahip ve kısıtlı olmamalıdır.'],
      ],
      [
        ['Gerçek kişilerde hak ehliyeti ne zaman başlar?', ['18 yaşında', 'Evlenmeyle', 'Sağ ve tam doğumla', 'Okula başlamayla', 'Vatandaşlık kazanmayla'], 2, 'Hak ehliyeti sağ ve tam doğmakla başlar.'],
        ['Aşağıdakilerden hangisi fiil ehliyetinin şartlarından biri değildir?', ['Ergin olmak', 'Ayırt etme gücüne sahip olmak', 'Kısıtlı olmamak', 'Vatandaş olmak', 'Hepsi şarttır'], 3, 'Fiil ehliyeti için vatandaşlık şart değildir; ergin, ayırt etme gücü ve kısıtlı olmamak gerekir.'],
        ['Aşağıdakilerden hangisi tüzel kişidir?', ['Bir çocuk', 'Bir derneğin tüzel kişiliği', 'Bir hayvan', 'Bir apartman sakini', 'Bir memur'], 1, 'Dernek, vakıf, şirket gibi topluluklar tüzel kişiliğe sahiptir.'],
      ],
    ),
  ]),
  topic('vat-devlet', 'Devlet ve Yönetim Biçimleri', [
    lesson(
      'vat-devlet-sekil',
      'Devletin Unsurları, Biçimleri ve Hükümet Sistemleri',
      [
        ['Devletin unsurları', ['İnsan topluluğu', 'Ülke', 'Egemenlik'], 'Devletin üç temel unsuru insan topluluğu, belirli bir ülke ve egemenliktir. Egemenlik, devletin iç ve dışta üstün ve bağımsız yetkisini ifade eder.'],
        ['Devlet ve yönetim biçimleri', ['Üniter / federal', 'Cumhuriyet / monarşi'], 'Üniter devlette tek anayasa, tek yasama ve tek yürütme vardır; Türkiye üniter devlettir. Federal devlette ise eyaletlerin kendi yasama yetkisi vardır. Devlet başkanı seçimle gelirse cumhuriyet, kalıtımla gelirse monarşidir.'],
        ['Hükümet sistemleri', ['Parlamenter, başkanlık, yarı başkanlık', 'Türkiye: Cumhurbaşkanlığı hükümet sistemi'], 'Parlamenter sistemde yürütme yasamaya bağlıdır. Başkanlık sisteminde devlet başkanı halk tarafından seçilir ve yürütmeyi tek başına yürütür. Türkiye 2018’den itibaren Cumhurbaşkanlığı hükümet sistemiyle yönetilir.'],
      ],
      [
        ['Aşağıdakilerden hangisi devletin unsurlarından biri değildir?', ['Ülke', 'İnsan topluluğu', 'Egemenlik', 'Ordu', 'Hepsi unsurdur'], 3, 'Ordu devletin unsuru değil, organıdır; unsurlar ülke, insan topluluğu ve egemenliktir.'],
        ['Tek yasama organı ve tek anayasaya sahip devlet biçimi aşağıdakilerden hangisidir?', ['Federal', 'Konfederal', 'Üniter', 'Birlik', 'Cumhuriyet'], 2, 'Üniter devlette yasama, yürütme ve yargı tektir.'],
        ['Devlet başkanının seçimle işbaşına geldiği yönetim biçimi aşağıdakilerden hangisidir?', ['Monarşi', 'Cumhuriyet', 'Teokrasi', 'Oligarşi', 'Aristokrasi'], 1, 'Cumhuriyette devlet başkanı seçimle belirlenir.'],
      ],
    ),
    lesson(
      'vat-devlet-demokrasi',
      'Demokrasi, Hukuk Devleti ve Kuvvetler Ayrılığı',
      [
        ['Demokrasi türleri', ['Doğrudan', 'Yarı doğrudan', 'Temsili'], 'Halkın yönetime doğrudan katıldığı sisteme doğrudan, temsilcileri aracılığıyla katıldığı sisteme temsili demokrasi denir. Referandum gibi araçlar yarı doğrudan demokrasi uygulamalarıdır. Türkiye temsili demokrasiyle yönetilir.'],
        ['Hukuk devleti', ['Yasallık, hukuki güvenlik, yargı denetimi', 'Anayasa mahkemesi, bağımsız yargı'], 'Hukuk devletinde devlet kendi koyduğu hukuk kurallarına bağlıdır. Bireyin hakları güvence altındadır, idarenin işlemleri yargı denetimine tabidir ve yargı bağımsızdır.'],
        ['Kuvvetler ayrılığı', ['Montesquieu: yasama, yürütme, yargı', 'Amaç: gücün sınırlanması'], 'Güçlerin tek elde toplanmasını önlemek için yasama, yürütme ve yargı ayrı organlara verilir. Bu düşünce Montesquieu’ya dayanır. Türkiye’de yetkiler birbirinden yumuşak biçimde ayrılmıştır.'],
      ],
      [
        ['Referandum aşağıdakilerden hangisinin örneğidir?', ['Doğrudan demokrasi', 'Yarı doğrudan demokrasi', 'Temsili demokrasi', 'Monarşi', 'Federasyon'], 1, 'Referandum halkın temsilcilerle birlikte yönetime katıldığı yarı doğrudan demokrasi aracıdır.'],
        ['Kuvvetler ayrılığı ilkesini sistemli biçimde ortaya koyan düşünür kimdir?', ['Rousseau', 'Locke', 'Montesquieu', 'Hobbes', 'Machiavelli'], 2, 'Yasama, yürütme ve yargı ayrımı Montesquieu’nun “Kanunların Ruhu” eserinde işlenmiştir.'],
        ['Aşağıdakilerden hangisi hukuk devletinin özelliklerinden biridir?', ['Yargı denetiminin olmaması', 'Mahkemelerin bağımsızlığı', 'Yasamanın sınırsız olması', 'Kuvvetlerin birleşmesi', 'İdarenin hukuka bağlı olmaması'], 1, 'Hukuk devletinde bağımsız mahkemeler ve idarenin yargı denetimi esastır.'],
      ],
    ),
  ]),
  topic('vat-anayasa', 'Anayasa Hukuku ve 1982 Anayasası', [
    lesson(
      'vat-anayasa-tarih',
      'Anayasa Kavramı ve Türk Anayasa Tarihi',
      [
        ['Anayasa kavramı', ['Devletin temel kurallar bütünü', 'Sert / yumuşak', 'Yazılı / yazısız'], 'Anayasa, devletin organlarını, yetkilerini ve bireylerin temel haklarını düzenleyen en üst hukuk normudur. Değiştirilmesi kanundan zor olan anayasalara sert, kanunla aynı usulle değiştirilebilenlere yumuşak anayasa denir. Türkiye’nin anayasası yazılı ve serttir.'],
        ['Anayasa tarihi', ['1876 Kanun-ı Esasi', '1921 Teşkilat-ı Esasiye', '1924, 1961, 1982'], 'İlk anayasa 1876 Kanun-ı Esasi’dir. 1921 Teşkilat-ı Esasiye millî egemenliğe ve kuvvetler birliğine dayanır. 1924 Anayasası gücün Meclis’te toplandığı bir yapı kurar. 1961 Anayasası Anayasa Mahkemesi ve Senato’yu getirmiştir. 1982 Anayasası halkoyu ile kabul edilmiştir.'],
        ['Anayasa değişikliği', ['Teklif: üye tamsayısının en az 1/3’ü', 'Kabul: 3/5 (360)'], 'Anayasa değişikliği teklifi TBMM üye tamsayısının en az üçte biri tarafından verilir. Genel Kurulda iki defa görüşülür ve kabul için üye tamsayısının beşte üç çoğunluğu gerekir.'],
      ],
      [
        ['Türk tarihinin ilk yazılı anayasası aşağıdakilerden hangisidir?', ['1921 Teşkilat-ı Esasiye', '1924 Anayasası', '1876 Kanun-ı Esasi', '1961 Anayasası', '1982 Anayasası'], 2, '1876 Kanun-ı Esasi, I. Meşrutiyet ile ilan edilen ilk anayasadır.'],
        ['Anayasa Mahkemesi’ni ilk kez kuran anayasa hangisidir?', ['1876', '1921', '1924', '1961', '1982'], 3, 'Anayasa Mahkemesi 1961 Anayasası ile kurulmuştur.'],
        ['Anayasa değişikliği teklifinin kabulü için TBMM’de kaç oy gerekir?', ['Üye tamsayısının salt çoğunluğu', 'Üye tamsayısının dörtte biri', 'Üye tamsayısının beşte üçü', 'Üye tamsayısının üçte biri', 'Toplantıya katılanların salt çoğunluğu'], 2, 'Teklif kabulü için üye tamsayısının beşte üçü (360) gereklidir.'],
      ],
    ),
    lesson(
      'vat-anayasa-esaslar',
      '1982 Anayasası Genel Esaslar (1–12. maddeler)',
      [
        ['Devletin şekli ve nitelikleri', ['Madde 1: Cumhuriyet', 'Madde 2: demokratik, laik, sosyal hukuk devleti', 'Madde 3: bütünlük, dil, bayrak, marş, başkent'], 'Madde 1’e göre Türkiye Devleti bir Cumhuriyettir. Madde 2 Cumhuriyet’in niteliklerini sayar: demokratik, laik ve sosyal hukuk devleti, Atatürk milliyetçiliğine bağlı. Madde 3 bütünlüğü, dilin Türkçe olduğunu, başkentin Ankara olduğunu belirtir.'],
        ['Değiştirilemez maddeler', ['1., 2. ve 3. maddeler', 'Değiştirilmesi teklif dahi edilemez'], 'Madde 4’e göre Anayasa’nın ilk üç maddesi değiştirilemez, değiştirilmesi teklif dahi edilemez. Bu maddeler Cumhuriyet’in temel çerçevesini korur.'],
        ['Egemenlik ve yetkiler', ['Madde 6: egemenlik millete aittir', 'Madde 7–9: yasama, yürütme, yargı', 'Madde 10: kanun önünde eşitlik'], 'Egemenlik kayıtsız şartsız millete aittir. Yasama yetkisi TBMM’de, yürütme yetkisi Cumhurbaşkanı’nda, yargı yetkisi bağımsız mahkemelerdedir. Herkes kanun önünde eşittir ve Anayasa her kesimi bağlayan temel hukuk kurallarıdır.'],
      ],
      [
        ['Anayasa’nın değiştirilmesi teklif dahi edilemeyecek maddeleri hangileridir?', ['1. madde', '1. ve 2. maddeler', '1., 2. ve 3. maddeler', '1.–5. maddeler', '1.–10. maddeler'], 2, 'Madde 4: İlk üç madde değiştirilemez, teklif dahi edilemez.'],
        ['Anayasa’ya göre Türkiye’nin başkenti neresidir?', ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Sivas'], 1, 'Madde 3: Başkent Ankara’dır.'],
        ['Aşağıdakilerden hangisi Anayasa’nın 2. maddesinde belirtilen Cumhuriyet’in niteliklerinden biri değildir?', ['Demokratik', 'Laik', 'Sosyal', 'Federal', 'Hukuk devleti'], 3, 'Türkiye üniter bir devlettir; federal değildir.'],
      ],
    ),
  ]),
  topic('vat-haklar', 'Temel Hak ve Hürriyetler', [
    lesson(
      'vat-haklar-turler',
      'Hak Türleri, Sınırlama ve Siyasi Haklar',
      [
        ['Hak türleri', ['Kişi hakları ve ödevleri', 'Sosyal ve ekonomik haklar', 'Siyasi haklar'], 'Anayasa temel hakları üç gruba ayırır: kişinin hakları ve ödevleri (yaşama, özgürlük, din ve vicdan, düşünce), sosyal ve ekonomik haklar (eğitim, sağlık, çalışma, mülkiyet) ve siyasi haklar (seçme, seçilme, siyasi faaliyette bulunma).'],
        ['Sınırlama', ['Ancak kanunla', 'Özüne dokunulmaz', 'Ölçülülük ilkesi'], 'Madde 13’e göre temel haklar ancak kanunla ve Anayasa’nın ilgili maddelerinde belirtilen sebeplere bağlı olarak sınırlanabilir. Sınırlama hakkın özüne dokunamaz, demokratik toplum düzeninin gereklerine ve ölçülülük ilkesine aykırı olamaz.'],
        ['Siyasi haklar', ['Seçme ve seçilme: 18 yaş', 'Kamu hizmetlerine girme hakkı', 'Dilekçe hakkı'], 'Seçme ve seçilme hakkı 18 yaşını dolduran her Türk vatandaşına aittir. Her Türk, kamu hizmetlerine girme hakkına sahiptir; alımda görevin gerektirdiği nitelikler dışında ayrım yapılamaz. Dilekçe hakkı da Anayasa güvencesindedir.'],
      ],
      [
        ['Temel hak ve hürriyetlerin sınırlanması hangi yolla yapılabilir?', ['Yönetmelikle', 'Genelgeyle', 'Ancak kanunla', 'Valilik kararıyla', 'Belediye kararıyla'], 2, 'Temel haklar yalnızca kanunla sınırlanabilir.'],
        ['Türkiye’de seçme ve seçilme yaşı kaçtır?', ['16', '17', '18', '21', '25'], 2, '18 yaşını dolduran her Türk seçme ve seçilme hakkına sahiptir.'],
        ['Aşağıdakilerden hangisi sosyal ve ekonomik haklar arasında yer alır?', ['Seçme hakkı', 'Dilekçe hakkı', 'Eğitim ve öğrenim hakkı', 'Kişi dokunulmazlığı', 'Siyasi parti kurma'], 2, 'Eğitim ve öğrenim, sağlık, çalışma, mülkiyet sosyal-ekonomik haklardır.'],
      ],
    ),
    lesson(
      'vat-haklar-vatandaslik',
      'Türk Vatandaşlığı ve Ödevler',
      [
        ['Vatandaşlık', ['Anayasa m. 66', 'Türk ana veya babadan doğan Türk’tür'], 'Anayasa’ya göre Türk Devletine vatandaşlık bağı ile bağlı olan herkes Türk’tür. Türk ana veya babanın çocuğu Türk’tür. Vatandaşlıktan çıkarma yalnızca vatana ihanet fiili için söz konusu olabilir.'],
        ['Kazanma yolları', ['Doğumla: soy bağı, doğum yeri', 'Sonradan: evlenme, yetkili makam kararı'], 'Vatandaşlık doğumla (soy bağı ya da doğum yeri esasına göre) veya sonradan (karar yoluyla, evlenme yoluyla, istisnai) kazanılır. Düzenleme 5901 sayılı Türk Vatandaşlığı Kanunu’ndadır.'],
        ['Ödevler', ['Vatan hizmeti', 'Vergi ödevi'], 'Vatan hizmeti her Türk’ün hakkı ve ödevidir. Herkes kamu giderlerini karşılamak için malî gücüne göre vergi vermekle yükümlüdür.'],
      ],
      [
        ['Türk vatandaşlığının sonradan kazanılma yollarından biri hangisidir?', ['Anne veya babanın Türk olması', 'Türkiye’de doğmak', 'Yetkili makam kararıyla', 'Askerlik yapmak', 'Seçim kazanmak'], 2, 'Sonradan kazanma: yetkili makam kararı, evlenme vb.'],
        ['Anayasa’ya göre vatandaşlıktan çıkarma hangi fiil için öngörülebilir?', ['Vergi borcu', 'Askerlik yapmamak', 'Vatana ihanet', 'Seçimlere katılmamak', 'Yurt dışında yaşamak'], 2, 'Madde 66: Vatandaşlıktan çıkarma yalnızca vatana ihanet fiili için öngörülebilir.'],
        ['Aşağıdakilerden hangisi Anayasa’ya göre vatandaşın ödevidir?', ['Dernek kurmak', 'Vergi vermek', 'Toplantı yapmak', 'Seyahat etmek', 'Dilekçe vermek'], 1, 'Vergi ödevi (m. 73) vatandaşın temel ödevlerindendir.'],
      ],
    ),
  ]),
  topic('vat-yasama', 'Yasama', [
    lesson(
      'vat-yasama-tbmm',
      'Türkiye Büyük Millet Meclisi',
      [
        ['Yapı', ['600 milletvekili', '5 yılda bir seçilir', 'Milletvekili seçilme yaşı 18'], 'TBMM 600 milletvekilinden oluşur ve seçimler beş yılda bir yapılır. Milletvekili seçilme yaşı 18’dir. Meclis Başkanı ilk iki yıl için, sonra yasama dönemi sonuna kadar seçilir.'],
        ['Görevler', ['Kanun yapmak', 'Bütçeyi görüşüp kabul etmek', 'Savaş ilanına karar vermek', 'Af ilanı: 3/5'], 'Meclis kanun yapar, değiştirir, kaldırır; bütçe ve kesin hesabı görüşür; para basılmasına ve savaş ilanına karar verir; milletlerarası anlaşmaların onaylanmasını uygun bulur; genel ve özel af ilanına üye tamsayısının beşte üçü ile karar verir.'],
        ['Toplanma ve dokunulmazlık', ['Toplantı yeter sayısı: üye tamsayısının 1/3’ü', 'Yasama sorumsuzluğu, yasama dokunulmazlığı'], 'Meclis üye tamsayısının en az üçte biri ile toplanır ve salt çoğunlukla karar verir; ancak karar yeter sayısı üye tamsayısının dörtte birinden bir fazlasından az olamaz. Milletvekilleri Meclis’teki oy ve sözlerinden sorumlu tutulamaz (sorumsuzluk).'],
      ],
      [
        ['TBMM’nin milletvekili sayısı kaçtır?', ['450', '550', '600', '650', '700'], 2, '2017 değişikliği ile milletvekili sayısı 600 olmuştur.'],
        ['Genel veya özel af ilanı için TBMM’de gerekli oy çoğunluğu nedir?', ['Salt çoğunluk', 'Üçte iki', 'Beşte üç', 'Dörtte bir', 'Oybirliği'], 2, 'Af ilanı için üye tamsayısının beşte üçü gerekir.'],
        ['Aşağıdakilerden hangisi TBMM’nin görevlerinden biri değildir?', ['Kanun yapmak', 'Bütçeyi kabul etmek', 'Savaş ilanına karar vermek', 'Cumhurbaşkanlığı kararnamesi çıkarmak', 'Af ilan etmek'], 3, 'Cumhurbaşkanlığı kararnamesi çıkarmak Cumhurbaşkanı’nın yetkisindedir.'],
      ],
    ),
  ]),
  topic('vat-yurutme', 'Yürütme', [
    lesson(
      'vat-yurutme-cb',
      'Cumhurbaşkanı ve Cumhurbaşkanlığı Hükümet Sistemi',
      [
        ['Seçilme', ['5 yıl, en fazla iki kez', '40 yaşını doldurmuş, yükseköğrenim', 'Halk seçer: geçerli oyların salt çoğunluğu'], 'Cumhurbaşkanı halk tarafından beş yıllığına seçilir ve en fazla iki kez seçilebilir. Adayın 40 yaşını doldurmuş ve yükseköğrenim görmüş olması gerekir. Geçerli oyların salt çoğunluğunu alan aday seçilir; alınamazsa ikinci tur yapılır.'],
        ['Yetkiler', ['Bakanları ve yardımcılarını atar', 'Cumhurbaşkanlığı kararnamesi', 'Üst düzey kamu görevlilerini atar'], 'Cumhurbaşkanı yürütme yetkisini kullanır, Cumhurbaşkanı yardımcılarını ve bakanları atar, Cumhurbaşkanlığı kararnamesi çıkarabilir. Başbakanlık kaldırılmıştır. Kararname temel haklar ile kanunla düzenlenmiş alanlarda çıkarılamaz.'],
        ['Sorumluluk', ['Meclis soruşturması', 'Yüce Divan: Anayasa Mahkemesi'], 'Cumhurbaşkanı hakkında suç işlediği iddiasıyla soruşturma açılması için üye tamsayısının salt çoğunluğunun önergesi, açılması için beşte üç oyu gerekir. Yüce Divan’a sevk için üçte iki çoğunluk gerekir. Yargılamayı Anayasa Mahkemesi yapar.'],
      ],
      [
        ['Cumhurbaşkanı kaç yıl için seçilir?', ['4', '5', '6', '7', '8'], 1, 'Cumhurbaşkanı 5 yıllığına seçilir ve en fazla iki kez seçilebilir.'],
        ['Aşağıdakilerden hangisi Cumhurbaşkanlığı hükümet sisteminde kaldırılan makamdır?', ['Cumhurbaşkanı yardımcılığı', 'Bakanlık', 'Başbakanlık', 'Meclis Başkanlığı', 'Vali'], 2, 'Başbakanlık makamı kaldırılmıştır.'],
        ['Cumhurbaşkanı adayının taşıması gereken yaş koşulu nedir?', ['25', '30', '35', '40', '45'], 3, 'Cumhurbaşkanı adayı 40 yaşını doldurmuş olmalıdır.'],
      ],
    ),
  ]),
  topic('vat-yargi', 'Yargı', [
    lesson(
      'vat-yargi-organ',
      'Mahkemeler ve Yüksek Yargı Organları',
      [
        ['Yargı bağımsızlığı', ['Hâkimlik teminatı', 'Mahkemeler bağımsız ve tarafsız'], 'Hâkimler görevlerinde bağımsızdır, Anayasa ve hukuka uygun karar verirler. Azlolunamaz, emekli edilemezler. Yargı kararlarına idare uymak zorundadır.'],
        ['Yüksek mahkemeler', ['Anayasa Mahkemesi: 15 üye', 'Yargıtay: adli yargı', 'Danıştay: idari yargı', 'Sayıştay: mali denetim'], 'Anayasa Mahkemesi 15 üyelidir; 12 üyeyi Cumhurbaşkanı, 3 üyeyi TBMM seçer. Yargıtay adli yargının, Danıştay idari yargının en üst mahkemesidir. Sayıştay kamu kaynaklarının kullanımını denetler. Uyuşmazlık Mahkemesi görev uyuşmazlıklarını çözer.'],
        ['Anayasa Mahkemesi görevleri', ['İptal davası', 'İtiraz yolu', 'Bireysel başvuru (2012)', 'Yüce Divan'], 'Anayasa Mahkemesi kanunların Anayasa’ya uygunluğunu denetler (iptal davası ve itiraz yolu). 2012’den beri bireysel başvuruları inceler. Cumhurbaşkanı ve üst düzey yöneticileri Yüce Divan sıfatıyla yargılar. Hâkimler ve Savcılar Kurulu 13 üyeden oluşur.'],
      ],
      [
        ['Anayasa Mahkemesi kaç üyeden oluşur?', ['11', '13', '15', '17', '19'], 2, 'AYM 15 üyelidir.'],
        ['İdari yargının en yüksek mahkemesi aşağıdakilerden hangisidir?', ['Yargıtay', 'Danıştay', 'Sayıştay', 'Anayasa Mahkemesi', 'Uyuşmazlık Mahkemesi'], 1, 'Danıştay idari yargı kolunun en üst mahkemesidir.'],
        ['Anayasa Mahkemesi’ne bireysel başvuru hakkı hangi yıldan itibaren kullanılmaya başlanmıştır?', ['1982', '2001', '2010', '2012', '2017'], 3, 'Bireysel başvuru 23 Eylül 2012’den itibaren kullanılmaktadır.'],
      ],
    ),
  ]),
  topic('vat-idare', 'İdare Hukuku', [
    lesson(
      'vat-idare-yapi',
      'İdarenin Yapısı ve Kamu Görevlileri',
      [
        ['Merkezî ve yerel yönetim', ['Merkezî: Cumhurbaşkanlığı, bakanlıklar, valilik', 'Yerel: belediye, il özel idaresi, köy'], 'Merkezî idare Cumhurbaşkanlığı, bakanlıklar ve taşra teşkilatından oluşur. Yerel yönetimler belediye, il özel idaresi ve köydür. Bu kuruluşların organları seçimle gelir ve kamu tüzel kişiliğine sahiptir.'],
        ['Yetki ilkeleri', ['Hiyerarşi: amir-ast', 'Vesayet: yerel yönetimler üzerinde', 'Yetki genişliği'], 'Merkezî idare kendi içinde hiyerarşi ile işler. Yerinden yönetim kuruluşları üzerinde ise vesayet denetimi uygulanır; vesayet yetkisi kanuna dayanmak zorundadır. Vesayet makamı kuruluşun işlemlerinin yerine geçemez.'],
        ['Kamu görevlileri', ['657 sayılı Devlet Memurları Kanunu', 'Memur, sözleşmeli, işçi'], 'Devlet memurları 657 sayılı Kanun’a tabidir. Kamu görevlileri memur, sözleşmeli personel ve işçi gibi gruplara ayrılır. Memurların haklarını ve disiplin cezalarını bu kanun belirler.'],
      ],
      [
        ['Aşağıdakilerden hangisi yerel yönetim birimidir?', ['Bakanlık', 'Valilik', 'Belediye', 'Cumhurbaşkanlığı', 'Kaymakamlık'], 2, 'Belediye, il özel idaresi ve köy yerel yönetimlerdir.'],
        ['Yerinden yönetim kuruluşları üzerinde uygulanan denetim türü hangisidir?', ['Hiyerarşi', 'Vesayet', 'Yargısal denetim', 'Meclis denetimi', 'Kamuoyu denetimi'], 1, 'Yerinden yönetim kuruluşları vesayet denetimine tabidir.'],
        ['Devlet memurlarının hak ve yükümlülüklerini düzenleyen kanun hangisidir?', ['4857', '657', '5018', '2547', '3071'], 1, '657 sayılı Devlet Memurları Kanunu.'],
      ],
    ),
  ]),
  topic('vat-uluslararasi', 'Uluslararası Kuruluşlar', [
    lesson(
      'vat-uluslararasi-ornek',
      'BM, NATO, AB ve Diğer Kuruluşlar',
      [
        ['BM', ['1945, merkez New York', 'Güvenlik Konseyi: 5 daimi + 10 geçici üye'], 'Birleşmiş Milletler 1945’te kuruldu. Merkezi New York’tur. Güvenlik Konseyi’nde ABD, Rusya, Çin, Fransa ve İngiltere daimi üyedir. Türkiye BM’nin kurucu üyelerindendir.'],
        ['NATO ve Avrupa Konseyi', ['NATO: 1949, Brüksel; Türkiye 1952', 'Avrupa Konseyi: 1949, Strazburg; Türkiye 1950'], 'NATO 1949’da kurulmuştur, merkezi Brüksel’dedir, Türkiye 1952’de üye olmuştur. Avrupa Konseyi merkezi Strazburg’dur; Avrupa İnsan Hakları Mahkemesi bu konseyin organıdır.'],
        ['AB ve diğerleri', ['AB: Türkiye 1999 aday', 'İİT: Cidde, 1969', 'OECD, DTÖ, G20'], 'Türkiye 1999 Helsinki Zirvesi’nde AB’ye aday ilan edilmiş, müzakereler 2005’te başlamıştır. İslam İşbirliği Teşkilatı (İİT) merkezi Cidde’dir. Türkiye OECD’nin kurucu üyesi, DTÖ ve G20 üyesidir. Türk Devletleri Teşkilatı 2021’de bu adı almıştır.'],
      ],
      [
        ['BM Güvenlik Konseyi’nin daimi üyesi olan ülkelerden biri aşağıdakilerden hangisidir?', ['Almanya', 'Japonya', 'Çin', 'Hindistan', 'Türkiye'], 2, 'Çin, ABD, Rusya, Fransa ve İngiltere daimi üyelerdir.'],
        ['Türkiye NATO’ya hangi yıl üye olmuştur?', ['1945', '1949', '1952', '1960', '1987'], 2, 'Türkiye 1952’de NATO üyesi olmuştur.'],
        ['İslam İşbirliği Teşkilatı’nın merkezi neresidir?', ['Kahire', 'Cidde', 'Ankara', 'Tahran', 'Rabat'], 1, 'İİT’nin merkezi Suudi Arabistan’ın Cidde şehridir.'],
      ],
    ),
  ]),
]);
