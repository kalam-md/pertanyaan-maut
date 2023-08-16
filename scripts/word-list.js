const wordList = [
    {
        word: "gitar",
        hint: "Sebuah alat musik dengan senar."
    },
    {
        word: "oksigen",
        hint: "Sebuah gas tak berwarna dan tak berbau yang penting untuk kehidupan."
    },
    {
        word: "gunung",
        hint: "Elevasi alami yang besar pada permukaan Bumi."
    },
    {
        word: "lukisan",
        hint: "Sebuah bentuk seni menggunakan warna pada permukaan untuk menciptakan gambar atau ekspresi."
    },
    {
        word: "astronomi",
        hint: "Studi ilmiah tentang objek dan fenomena langit."
    },
    {
        word: "bola",
        hint: "Olahraga populer yang dimainkan dengan kaki dan ditendang."
    },
    {
        word: "cokelat",
        hint: "Makanan manis yang terbuat dari biji kakao."
    },
    {
        word: "tonggeret",
        hint: "Serangga dengan suara paling berisik."
    },
    {
        word: "sejarah",
        hint: "Studi tentang peristiwa masa lalu dan peradaban manusia."
    },
    {
        word: "pizza",
        hint: "Hidangan gurih yang terdiri dari dasar bundar yang pipih dengan topping."
    },
    {
        word: "jazz",
        hint: "Genre musik yang ditandai oleh improvisasi dan sinkopasi."
    },
    {
        word: "kamera",
        hint: "Alat yang digunakan untuk mengambil dan merekam gambar atau video."
    },
    {
        word: "intan",
        hint: "Batu permata berharga yang dikenal karena kilau dan kekerasannya."
    },
    {
        word: "petualangan",
        hint: "Pengalaman yang menarik atau berani."
    },
    {
        word: "lampu",
        hint: "Benda yang bisa menerangi suatu tempat."
    },
    {
        word: "sepeda",
        hint: "Kendaraan yang digerakkan oleh tenaga manusia dengan dua roda."
    },
    {
        word: "senja",
        hint: "Hilangnya matahari di bawah cakrawala setiap hari."
    },
    {
        word: "kopi",
        hint: "Minuman kafein populer yang terbuat dari biji kopi yang dipanggang."
    },
    {
        word: "tari",
        hint: "Gerakan ritmik tubuh yang sering dilakukan dengan musik."
    },
    {
        word: "galaksi",
        hint: "Sistem bintang, gas, dan debu yang luas dipegang bersama oleh gravitasi."
    },
    {
        word: "orkestra",
        hint: "Ensemble besar musisi yang memainkan berbagai instrumen."
    },
    {
        word: "semangka",
        hint: "Buah hijau bermotif bergaris dan besar."
    },
    {
        word: "novel",
        hint: "Karya fiksi panjang, biasanya dengan plot dan karakter yang kompleks."
    },
    {
        word: "patung",
        hint: "Bentuk seni tiga dimensi yang diciptakan dengan membentuk atau menggabungkan bahan."
    },
    {
        word: "simfoni",
        hint: "Komposisi musik panjang untuk orkestra penuh, biasanya dalam beberapa bagian."
    },
    {
        word: "arsitektur",
        hint: "Seni dan ilmu merancang dan membangun bangunan."
    },
    {
        word: "balet",
        hint: "Bentuk tari klasik yang ditandai oleh gerakan yang tepat dan anggun."
    },
    {
        word: "astronot",
        hint: "Seseorang yang dilatih untuk bepergian dan bekerja di luar angkasa."
    },
    {
        word: "algoritma",
        hint: "Proses penyelesaian masalah secara sistematis dan logis."
    },
    {
        word: "teknologi",
        hint: "Penerapan pengetahuan ilmiah untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena meteorologi yang disebabkan oleh pantulan, refraksi, dan dispersi cahaya."
    },
    {
        word: "semesta",
        hint: "Seluruh materi, ruang, dan waktu yang ada secara keseluruhan."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan tuts yang menyebabkan palu memukul senar."
    },
    {
        word: "liburan",
        hint: "Jangka waktu yang diberikan untuk kesenangan, istirahat, atau relaksasi."
    },
    {
        word: "hujan",
        hint: "Curah air tinggi terjadi pada musim tertentu."
    },
    {
        word: "teater",
        hint: "Bangunan atau area terbuka tempat pertunjukan drama, film, atau performa lainnya diselenggarakan."
    },
    {
        word: "telepon",
        hint: "Alat yang digunakan untuk mengirimkan suara melalui jarak jauh."
    },
    {
        word: "bahasa",
        hint: "Sistem komunikasi yang terdiri dari kata-kata, gerakan, dan tata bahasa."
    },
    {
        word: "gurun",
        hint: "Tanah kering atau tandus dengan sedikit atau tanpa presipitasi."
    },
    {
        word: "mawar",
        hint: "Tanaman indah yang wangi namun berduri."
    },
    {
        word: "fantasi",
        hint: "Genre fiksi imajinatif yang melibatkan sihir dan unsur-unsur supernatural."
    },
    {
        word: "teleskop",
        hint: "Alat optik yang digunakan untuk melihat objek yang jauh di angkasa."
    },
    {
        word: "kentut",
        hint: "Angin kesunyian yang sangat bau."
    },
    {
        word: "oasis",
        hint: "Tempat subur di tengah gurun tempat air ditemukan."
    },
    {
        word: "fotografi",
        hint: "Seni, proses, atau praktik menciptakan gambar dengan merekam cahaya atau radiasi elektromagnetik lainnya."
    },
    {
        word: "safari",
        hint: "Ekspedisi atau perjalanan, biasanya untuk mengamati satwa liar di habitat alaminya."
    },
    {
        word: "planet",
        hint: "Benda langit yang mengorbit bintang dan tidak memancarkan cahaya sendiri."
    },
    {
        word: "sungai",
        hint: "Arus air alami yang besar mengalir di saluran ke laut, danau, atau sungai lainnya."
    },
    {
        word: "tropis",
        hint: "Berkaitan dengan atau terletak di antara Tropika Kanser dan Tropika Capricorn."
    },
    {
        word: "misterius",
        hint: "Sulit atau tidak mungkin dipahami, dijelaskan, atau diidentifikasi."
    },
    {
        word: "enigma",
        hint: "Sesuatu yang misterius, membingungkan, atau sulit dipahami."
    },
    {
        word: "paradox",
        hint: "Pernyataan atau situasi yang bertentangan atau melawan intuisi."
    },
    {
        word: "catur",
        hint: "Permainan, mainan, atau masalah yang dirancang untuk menguji kepandaian atau pengetahuan."
    },
    {
        word: "bisikan",
        hint: "Berbicara sangat pelan atau lembut, seringkali dengan cara yang rahasia."
    },
    {
        word: "bayangan",
        hint: "Area atau bentuk gelap yang dihasilkan oleh objek yang menghalangi cahaya."
    },
    {
        word: "rahasia",
        hint: "Sesuatu yang disembunyikan atau tidak diketahui oleh orang lain."
    },
    {
        word: "kepo",
        hint: "Keinginan kuat untuk tahu atau belajar sesuatu."
    },
    {
        word: "unpredicable",
        hint: "Tidak dapat dilihat atau diketahui sebelumnya; tidak pasti."
    },
    {
        word: "membingungkan",
        hint: "Membuat bingung atau membingungkan seseorang; membuat sesuatu menjadi tidak jelas atau sulit dipahami."
    },
    {
        word: "mengungkapkan",
        hint: "Mengungkapkan atau mengungkapkan sesuatu yang sebelumnya rahasia atau tidak diketahui."
    },
    {
        word: "ilusi",
        hint: "Persepsi atau keyakinan palsu; penampilan atau kesan yang menyesatkan."
    },
    {
        word: "bulan",
        hint: "Penerangan alami pada malam hari."
    },
    {
        word: "bersemangat",
        hint: "Penuh energi, kecerahan, dan kehidupan."
    },
    {
        word: "nostalgia",
        hint: "Rasa kangen atau kasih sayang untuk masa lalu."
    },
    {
        word: "brilian",
        hint: "Terampil, berbakat, atau mengesankan secara luar biasa."
    },
];
