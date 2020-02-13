const birdsData = [
  {
    family: 'Фермерские птицы',
    data: [
      {
        id: 1,
        name: 'Кура',
        species: 'Gallus domesticus',
        description: 'Cамая многочисленная и распространённая домашняя птица, которая является одомашненной формой банкивской джунглевой курицы. Летает плохо, недалеко. Разводят их ради мяса и яиц, кроме того, от них получают перо и пух.',
        image: 'https://live.staticflickr.com/670/21535633069_9a36b98aca_k.jpg',
        audio: 'http://www.xeno-canto.org/103543/download',
      },
      {
        id: 2,
        name: 'Гусь',
        species: 'Anser',
        description: 'Гуси живут на луговых и болотистых пространствах, некоторые на берегах морей; хорошо ходят и бегают; летают быстро, но плавают и ныряют хуже уток. На воде находятся гораздо меньше, чем утки и лебеди, большую часть жизни проводят на суше.',
        image: 'https://live.staticflickr.com/1729/42639470762_af459a7331_h.jpg',
        audio: 'http://www.xeno-canto.org/481556/download',
      },
      {
        id: 3,
        name: 'Индейка',
        species: 'Meleagris gallopavo',
        description: 'Дикая индейка служит предметом охоты как ружейной (к самцам подкрадываются на току, то есть в брачный период), так и ловушками. Последняя облегчается крайней глупостью птицы.',
        image: 'https://live.staticflickr.com/4591/38669218274_4e39d328e6_k.jpg',
        audio: 'http://www.xeno-canto.org/370486/download',
      },
      {
        id: 4,
        name: 'Цесарка',
        species: 'Numida meleagris',
        description: 'Цесарки ведут стайный образ жизни, что помогает им предупреждать друг друга об опасности пронзительными криками. Хорошо бегают, в случае опасности поднимаются на крыло. Ночуют на деревьях.',
        image: 'https://live.staticflickr.com/1919/44169377485_83851cb0da_k.jpg',
        audio: 'http://www.xeno-canto.org/507927/download',
      },
      {
        id: 5,
        name: 'Утка',
        species: 'Anas platyrhynchos',
        description: 'Породы домашних уток подразделяются на мясные (пекинские, серые украинские, чёрные белогрудые), мясо-яичные (зеркальные, хаки-кемпбелл), яичные (индийские бегуны). Уток разводят во многих странах, в том числе в России.',
        image: 'https://live.staticflickr.com/3873/15296687926_911fd18ab3_k.jpg',
        audio: 'http://www.xeno-canto.org/525303/download',
      },
      {
        id: 6,
        name: 'Перепел',
        species: 'Coturnix coturnix',
        description: 'Птица ведёт наземный образ жизни, питается семенами и насекомыми, которые ползают по земле. Когда поспевают хлеба, перепела переселяются в поля, быстро откармливаются и сильно жиреют.',
        image: 'https://live.staticflickr.com/8202/8173178457_34b83a81f8_b.jpg',
        audio: 'http://www.xeno-canto.org/500401/download',
      },
    ],
  },
  {
    family: 'Певчие птицы',
    data: [
      {
        id: 1,
        name: 'Чиж',
        species: 'Carduelis spinus',
        description: 'Чиж получил своё название за характерный «чижиный» писк, которым беспрерывно перекликаются отдельные птицы в стаях. Песня чижа довольно разнообразна и состоит как из собственных его коротких «слов и ударов», так и из подражания пению других птиц, преимущественно синиц.',
        image: 'https://live.staticflickr.com/7838/47501257991_5499752bf0_c.jpg',
        audio: 'https://www.xeno-canto.org/522814/download',
      },
      {
        id: 2,
        name: 'Зарянка',
        species: 'Erithacus rubecula',
        description: 'Самцы начинают петь рано утром, открывая концерт после горихвостки-чернушки вместе с чёрным дроздом. Вечером поют даже в сумерках. Песня звенящая и является одной из самых красивых птичьих песен.',
        image: 'https://live.staticflickr.com/65535/46726708415_f5d3affa2b_c.jpg',
        audio: 'https://www.xeno-canto.org/526415/download',
      },
      {
        id: 3,
        name: 'Зеленушка',
        species: 'Carduelis chloris',
        description: 'Петь начинают ранней весной на кочёвках, наиболее активно поют в апреле — мае, затем временами — всё лето. Песня состоит из неторопливого чередования разнообразных звонких трелей и щебетаний, из которых наиболее выделяется жужжащее «джжжюююии» или «вжжжжеееу».',
        image: 'https://live.staticflickr.com/3794/32847257032_6149331e95_c.jpg',
        audio: 'https://www.xeno-canto.org/526733/download',
      },
      {
        id: 4,
        name: 'Канарейка',
        species: 'Serinus canaria',
        description: 'Канарейка может отличать последовательности звуков, хранить в памяти и воспроизводить. Поэтому она может научиться присущему виду пению. Она может подражать звукам и последовательностям звуков других птиц, а также включать чужие шумы в своё пение.',
        image: 'https://live.staticflickr.com/5456/9676206214_9eaaea10dd_c.jpg',
        audio: 'https://www.xeno-canto.org/485630/download',
      },
      {
        id: 5,
        name: 'Чечевица',
        species: 'Carpodacus',
        description: 'На глаза попадается редко, так как прячется в густой листве, хотя часто выдает своё присутствие мелодичным свистом, легко передаваемым фразой «Витю видел?». Питается семенами травянистых растений, ягодами, реже насекомыми.',
        image: 'https://live.staticflickr.com/7273/7805530880_cc81f2f889_c.jpg',
        audio: 'https://www.xeno-canto.org/503404/download',
      },
      {
        id: 6,
        name: 'Щегол',
        species: 'Carduelis carduelis',
        description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
        image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
      },
    ],
  },
  {
    family: 'Врановые птицы',
    data: [
      {
        id: 1,
        name: 'Ворон',
        species: 'Corvus corax',
        description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
        image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
      },
      {
        id: 2,
        name: 'Галка',
        species: 'Coloeus monedula',
        description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
        image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3',
      },
      {
        id: 3,
        name: 'Грач',
        species: 'Corvus frugilegus',
        description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
        image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
      },
      {
        id: 4,
        name: 'Сорока',
        species: 'Pica pica',
        description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
        image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',
      },
      {
        id: 5,
        name: 'Серая ворона',
        species: 'Corvus cornix',
        description: 'Обитают вороны чаще всего на окраинах лесов и опушек, тростниковых зарослях, склонах береговых обрывов, зарослях речных долин, а также вблизи жилья человека. ',
        image: 'https://live.staticflickr.com/7919/46513063934_62709d4d5d_k.jpg',
        audio: 'https://www.xeno-canto.org/524846/download',
      },
      {
        id: 6,
        name: 'Сойка',
        species: 'Garrulus glandarius',
        description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
        image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
      },
    ],
  },
  {
    family: 'Экзотические птицы',
    data: [
      {
        id: 1,
        name: 'Птица-носорог',
        species: 'Bucerotidae',
        description: 'Птицы-носороги получили своё название из-за больших длинных клювов, резко загнутых вниз и имеющих у своего основания значительные выросты различной формы, которые отсутствуют лишь у представителей рода токи',
        image: 'http://live.staticflickr.com/65535/49515334681_685fbe7d24_b.jpg',
        audio: 'https://www.xeno-canto.org/460480/download',
      },
      {
        id: 2,
        name: 'Тукан',
        species: 'Ramphastos toco',
        description: 'У большого тукана необыкновенное оперение: тело его черное, воротник, грудь и верхняя часть хвоста белые, а нижняя часть хвоста красная. Но самым выдающимся у него является гигантский желто-оранжевый клюв с красной частью сверху и черным пятном на конце. ',
        image: 'https://live.staticflickr.com/4640/24382801737_f945490027_k.jpg',
        audio: 'https://www.xeno-canto.org/506060/download',
      },
      {
        id: 3,
        name: 'Турако',
        species: 'Tauraco',
        description: 'Турако — это длиннохвостые птицы, достигающие длины от 35 до 45 см. У них имеется прямой хохол из перьев на голове. Окраска оперения чаще металлически зелёная и синяя. Самец и самка в пределах своего вида не имеют отличий в окраске и размере. ',
        image: 'https://live.staticflickr.com/65535/49492671063_85d8ee6aa2_c.jpg',
        audio: 'https://www.xeno-canto.org/345104/download',
      },
      {
        id: 4,
        name: 'Красный ибис',
        species: 'Eudocimus ruber',
        description: 'Красный ибис живёт в больших группах, насчитывающих часто по несколько сотен сородичей. Его питание состоит из насекомых, моллюсков, крабов и рыб. Своим серповидным согнутым вниз клювом он ковыряется в мягкой тине, отыскивая червей и крабов.',
        image: 'https://live.staticflickr.com/8767/17943230879_66eb50e9c4_c.jpg',
        audio: 'https://www.xeno-canto.org/222844/download',
      },
      {
        id: 5,
        name: 'Колибри',
        species: 'Trochilidae',
        description: 'В основном позывки колибри состоят из короткого слога продолжительностью около одной секунды и немного более длинного — до двух секунд. Некоторые виды используют более продолжительную мелодию.',
        image: 'https://live.staticflickr.com/4667/39803446184_4c51fd5997_c.jpg',
        audio: 'https://www.xeno-canto.org/469239/download',
      },
      {
        id: 6,
        name: 'Танагра-медосос',
        species: 'Cyanerpes caeruleus',
        description: 'Пурпурная танагра-медосос часто образует маленькие группы. Питается нектаром, ягодами и насекомыми, преимущественно в кроне деревьев. Охотно отвечает на призыв рыжего воробьиного сыча.',
        image: 'https://live.staticflickr.com/4358/37375722256_fcd613ee1f_c.jpg',
        audio: 'https://www.xeno-canto.org/512306/download',
      },
    ],
  },
  {
    family: 'Попугаи',
    data: [
      {
        id: 1,
        name: 'Волнистый попугайчик',
        species: 'Melopsittacus undulatus',
        description: 'Особи отличаются шумом и болтливостью, довольно легко запоминают слова и выражения, которые повторяют много раз при «общении» с человеком и даже с другими домашними птицами. В большинстве случаев заученные слова и выражения повторяют без связной логики.',
        image: 'https://live.staticflickr.com/2908/14464479298_817f5a0cf3_b.jpg',
        audio: 'https://www.xeno-canto.org/504279/download',
      },
      {
        id: 2,
        name: 'Жако',
        species: 'Psittacus erithacus',
        description: 'Жако часто стремятся повторять звуки, издаваемые бытовой электроникой — телефоном, домофоном или будильником. Часто повторяют они звуки диких птиц, живущих на улице. Ручной жако может копировать психологию хозяина — то есть его формы поведения, такие как радость, заботу и раздражительность.',
        image: 'https://live.staticflickr.com/896/39444523610_9cfb7e84cc_c.jpg',
        audio: 'http://www.xeno-canto.org/492834/download',
      },
      {
        id: 3,
        name: 'Сине-желтый Ара',
        species: 'Ara ararauna',
        description: 'Способны к произношению нескольких десятков слов. Популярны как домашние животные из-за красоты и возможности подражать человеческой речи, трудны в содержании и требуют большого внимания, в отличие от традиционных питомцев — собак и кошек. Очень интеллектуальны.',
        image: 'https://live.staticflickr.com/384/31695056394_97e6ae8457_c.jpg',
        audio: 'https://www.xeno-canto.org/474805/download',
      },
      {
        id: 4,
        name: 'Какаду',
        species: 'Cacatuidae',
        description: 'Очень привязываются к человеку, который заботится о них и уделяет им много внимания. Хотя они не обладают большими способностями к разговору, их можно научить произносить несколько десятков слов и даже небольшие фразы, издавать самые разнообразные звуки. Так как какаду обладают очень высокими интеллектуальными способностями, они легко обучаются различным командам и трюкам. ',
        image: 'https://live.staticflickr.com/65535/49144787166_ecbed74428_c.jpg',
        audio: 'https://www.xeno-canto.org/446593/download',
      },
      {
        id: 5,
        name: 'Корелла',
        species: 'Nymphicus hollandicus',
        description: 'Характерное поведение для самца: стучание клювом по различным предметам, пение (многосложное, отличающееся от простого крика кви-кви), самцы складывают крылья сердечком и характерно подпрыгивают, в целом самцы создают намного больше шума. ',
        image: 'https://live.staticflickr.com/65535/48873989416_8af3b8073f_c.jpg',
        audio: 'https://www.xeno-canto.org/446593/download',
      },
      {
        id: 6,
        name: 'Неразлучники',
        species: 'Agapornis',
        description: 'Издавна этих попугаев называли неразлучниками, так как считали, что при гибели одной птицы, другая вскоре погибает от тоски.',
        image: 'https://live.staticflickr.com/3068/3389640204_73874536fb_c.jpg',
        audio: 'https://www.xeno-canto.org/422306/download',
      },
    ],
  },
  {
    family: 'Хищные птицы',
    data: [
      {
        id: 1,
        name: 'Орёл',
        species: 'Aquila nipalensis',
        description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
        image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
      },
      {
        id: 2,
        name: 'Коршун',
        species: 'Milvus migrans',
        description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
        image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
      },
      {
        id: 3,
        name: 'Лунь',
        species: 'Circus cyaneus',
        description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
        image: 'https://live.staticflickr.com/65535/49322743903_32f3922d9e.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
      },
      {
        id: 4,
        name: 'Сокол',
        species: 'Falco peregrinus',
        description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
        image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
      },
      {
        id: 5,
        name: 'Ястреб',
        species: 'Accipiter gentilis',
        description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
        image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
      },
      {
        id: 6,
        name: 'Филин',
        species: 'Bubo bubo',
        description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
        image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',
      },
    ],
  },
];

export default birdsData;
