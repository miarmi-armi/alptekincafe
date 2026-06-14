/* =======================================================
   ALPTEKİNLER - VARSAYILAN MENÜ VERİLERİ
   Bu dosya başlangıç (varsayılan) menü verilerini içerir.
   Admin panelinden yapılan değişiklikler tarayıcının
   localStorage'ında saklanır ve bu varsayılanların
   üzerine yazılır.
======================================================= */

const DEFAULT_MENU_DATA = {

  /* ============== CAFE ============== */
  cafe: {
    pageTitle: "İçecek & Atıştırmalık Menüsü",
    pageEyebrow: "Kafemiz",
    categories: [
      {
        id: "sicak",
        title: "☕ Sıcak İçecekler",
        items: [
          { id: "c1", icon: "☕", name: "Türk Kahvesi", desc: "Geleneksel yöntemle pişirilmiş, köpüklü", price: "35 ₺" },
          { id: "c2", icon: "🍵", name: "Çay", desc: "Demlik çay, simit eşliğinde", price: "20 ₺" },
          { id: "c3", icon: "☕", name: "Filtre Kahve", desc: "Günlük taze çekilmiş özel harman", price: "55 ₺" },
          { id: "c4", icon: "☕", name: "Espresso", desc: "Tek veya çift shot", price: "45 ₺" },
          { id: "c5", icon: "☕", name: "Americano", desc: "Espresso ve sıcak su", price: "50 ₺" },
          { id: "c6", icon: "🥛", name: "Latte", desc: "Espresso bazlı, tam yağlı süt ile", price: "55 ₺" },
          { id: "c7", icon: "☕", name: "Cappuccino", desc: "Çift shot espresso, süt köpüğü", price: "60 ₺" },
          { id: "c8", icon: "🍫", name: "Sıcak Çikolata", desc: "Krema ve marshmallow ile", price: "60 ₺" },
          { id: "c9", icon: "🍵", name: "Bitki Çayı", desc: "Papatya, nane-limon veya ıhlamur", price: "30 ₺" },
          { id: "c10", icon: "🥛", name: "Sahlep", desc: "Tarçınlı, kış mevsimi özel", price: "55 ₺" }
        ]
      },
      {
        id: "soguk",
        title: "🧊 Soğuk İçecekler",
        items: [
          { id: "c11", icon: "🧋", name: "Ice Latte", desc: "Buzlu espresso, sütlü", price: "65 ₺" },
          { id: "c12", icon: "🧋", name: "Ice Americano", desc: "Buzlu espresso, soda gibi ferahlatıcı", price: "55 ₺" },
          { id: "c13", icon: "🍓", name: "Meyveli Soğuk Çay", desc: "Çilek, mango veya limon", price: "50 ₺" },
          { id: "c14", icon: "🥤", name: "Limonata", desc: "Taze sıkılmış, naneli", price: "45 ₺" },
          { id: "c15", icon: "🍹", name: "Smoothie", desc: "Günün meyvesiyle hazırlanmış", price: "70 ₺" },
          { id: "c16", icon: "🥤", name: "Soğuk Çikolata", desc: "Dondurma toplu, çikolata soslu", price: "75 ₺" },
          { id: "c17", icon: "🧃", name: "Taze Sıkma Portakal", desc: "Mevsiminde taze portakal suyu", price: "60 ₺" },
          { id: "c18", icon: "🥤", name: "Frozen Frappuccino", desc: "Karamel, vanilya veya çikolatalı", price: "75 ₺" }
        ]
      },
      {
        id: "atistirma",
        title: "🍰 Atıştırmalıklar",
        items: [
          { id: "c19", icon: "🍰", name: "Günün Pastası", desc: "Her gün taze yapılır, sorarak öğrenin", price: "80 ₺" },
          { id: "c20", icon: "🥐", name: "Kruvasan", desc: "Tereyağlı, sade veya peynirli", price: "55 ₺" },
          { id: "c21", icon: "🧁", name: "Muffin", desc: "Çikolatalı veya yaban mersinli", price: "50 ₺" },
          { id: "c22", icon: "🥪", name: "Tost / Sandviç", desc: "Kaşarlı, domatesli, ev yapımı ekmek", price: "75 ₺" },
          { id: "c23", icon: "🍪", name: "Kurabiye Tabağı", desc: "Ev yapımı, çeşitli kurabiyeler", price: "45 ₺" },
          { id: "c24", icon: "🍩", name: "Cheesecake", desc: "Meyveli soslu, ev yapımı", price: "95 ₺" }
        ]
      }
    ]
  },

  /* ============== RESTORAN ============== */
  restoran: {
    pageTitle: "Bugünün Lezzetleri",
    pageEyebrow: "Yemek Menüsü",
    categories: [
      {
        id: "baslangic",
        title: "🥗 Başlangıçlar & Çorbalar",
        items: [
          { id: "r1", icon: "🥗", name: "Mevsim Salatası", desc: "Taze sebzeler, zeytinyağı ve limon", price: "120 ₺" },
          { id: "r2", icon: "🫙", name: "Ezme", desc: "Nar ekşisi ile hazırlanmış acılı ezme", price: "80 ₺" },
          { id: "r3", icon: "🧀", name: "Çoban Salatası", desc: "Domates, salatalık, beyaz peynir", price: "100 ₺" },
          { id: "r4", icon: "🍲", name: "Mercimek Çorbası", desc: "Kızartma ve limonla servis edilir", price: "90 ₺" },
          { id: "r5", icon: "🍲", name: "Yayla Çorbası", desc: "Yoğurtlu pirinçli, tereyağlı nane", price: "95 ₺" },
          { id: "r6", icon: "🧆", name: "Sigara Böreği", desc: "Peynirli veya patatesli, kızarmış", price: "110 ₺" }
        ]
      },
      {
        id: "anayemek",
        title: "🍖 Ana Yemekler",
        items: [
          { id: "r7", icon: "🍖", name: "Kuzu Tandır", desc: "Özel baharatlarla 8 saat pişirilmiş kuzu", price: "420 ₺" },
          { id: "r8", icon: "🥩", name: "Adana Kebap", desc: "El yapımı, közde pişirilmiş, lavaşla", price: "320 ₺" },
          { id: "r9", icon: "🍗", name: "Tavuk Izgara", desc: "Közlenmiş sebze ve pilav eşliğinde", price: "280 ₺" },
          { id: "r10", icon: "🫕", name: "Etli Güveç", desc: "Kil tencerede pişirilmiş geleneksel güveç", price: "350 ₺" },
          { id: "r11", icon: "🥩", name: "İskender Kebap", desc: "Tereyağlı domates sosu, yoğurtla", price: "380 ₺" },
          { id: "r12", icon: "🍆", name: "Karnıyarık", desc: "Kıymalı patlıcan, pilav ile", price: "260 ₺" }
        ]
      },
      {
        id: "erzincan",
        title: "🏔️ Erzincan Lezzetleri",
        items: [
          { id: "r13", icon: "🥩", name: "Cağ Kebabı", desc: "Yatay şişte odun ateşinde pişen, ince dilim kuzu eti", price: "360 ₺" },
          { id: "r14", icon: "🥟", name: "Erzincan Mantısı", desc: "El açması mantı, yoğurt ve tereyağlı sos ile", price: "190 ₺" },
          { id: "r15", icon: "🍲", name: "Kesme Çorbası", desc: "El yapımı erişte, nohut ve etle pişen geleneksel çorba", price: "100 ₺" },
          { id: "r16", icon: "🧈", name: "Kuymak (Muhlama)", desc: "Tereyağı ve taze peynirle yapılan sıcak mısır unu lapası", price: "150 ₺" },
          { id: "r17", icon: "🍳", name: "Tava Ciğer", desc: "İnce doğranmış kuzu ciğeri, baharatlarla kavrulmuş", price: "240 ₺" },
          { id: "r18", icon: "🥧", name: "Su Böreği", desc: "Kat kat açılmış, peynirli veya kıymalı, fırın taze", price: "140 ₺" },
          { id: "r19", icon: "🥮", name: "Kadayıf Dolması", desc: "Cevizli iç, tel kadayıf ile sarılıp şerbetlenmiş tatlı", price: "150 ₺" },
          { id: "r20", icon: "🍯", name: "Pestil & Köme", desc: "Üzüm pestili içine ceviz-köme doldurulmuş yöresel tatlı", price: "90 ₺" }
        ]
      },
      {
        id: "tatli",
        title: "🍮 Tatlılar",
        items: [
          { id: "r21", icon: "🍮", name: "Kazandibi", desc: "Geleneksel süt tatlısı", price: "110 ₺" },
          { id: "r22", icon: "🍯", name: "Baklava", desc: "Fıstıklı, tereyağlı, ev yapımı", price: "130 ₺" },
          { id: "r23", icon: "🍨", name: "Sütlaç", desc: "Fırında, tarçınlı", price: "100 ₺" },
          { id: "r24", icon: "🍮", name: "Künefe", desc: "Peynirli, şerbetli, sıcak servis", price: "140 ₺" }
        ]
      }
    ]
  },

  /* ============== KASAP ============== */
  kasap: {
    pageTitle: "Taze Et Çeşitleri",
    pageEyebrow: "Ürünlerimiz",
    categories: [
      {
        id: "kuzu",
        title: "🐑 Kuzu & Koyun",
        items: [
          { id: "k1", icon: "🍖", name: "Kuzu Kol", desc: "Yumuşak dokulu, haşlama veya fırın için ideal", price: "320 ₺ / kg" },
          { id: "k2", icon: "🥩", name: "Kuzu Pirzola", desc: "İnce kesilmiş, ızgara için hazır", price: "450 ₺ / kg" },
          { id: "k3", icon: "🍖", name: "Kuzu But", desc: "Tam veya yarım, tandır veya fırın", price: "380 ₺ / kg" }
        ]
      },
      {
        id: "dana",
        title: "🐄 Dana & Sığır",
        items: [
          { id: "k4", icon: "🥩", name: "Dana Bonfile", desc: "En yumuşak et, özel kesim", price: "680 ₺ / kg" },
          { id: "k5", icon: "🥩", name: "Dana Antrikot", desc: "Mermer dokusu yüksek, ızgara için", price: "620 ₺ / kg" },
          { id: "k6", icon: "🍖", name: "Kıyma", desc: "Yağ oranı seçilebilir, taze çekim", price: "280 ₺ / kg" }
        ]
      },
      {
        id: "tavuk",
        title: "🐓 Tavuk & Kanatlı",
        items: [
          { id: "k7", icon: "🍗", name: "Bütün Tavuk", desc: "Köy tavuğu, doğal besleme", price: "180 ₺ / kg" },
          { id: "k8", icon: "🍗", name: "Tavuk Göğüs", desc: "Kemikli veya kemiksiz seçeneği", price: "160 ₺ / kg" },
          { id: "k9", icon: "🦃", name: "Hindi", desc: "Tam veya parça, sipariş ile", price: "220 ₺ / kg" }
        ]
      }
    ]
  },

  /* ============== BALIK ============== */
  balik: {
    pageTitle: "Balık & Deniz Ürünleri",
    pageEyebrow: "Günlük Taze",
    categories: [
      {
        id: "mavi",
        title: "🐟 Mavi Balıklar",
        items: [
          { id: "b1", icon: "🐟", name: "Hamsi", desc: "Karadeniz'in incisi, taze ve lezzetli", price: "Günlük Fiyat" },
          { id: "b2", icon: "🐟", name: "Lüfer", desc: "Izgara veya tava, mevsiminde taze", price: "Günlük Fiyat" },
          { id: "b3", icon: "🐟", name: "Palamut", desc: "Izgara veya fırın, iri dilim", price: "Günlük Fiyat" },
          { id: "b4", icon: "🐟", name: "Torik", desc: "Palamudun büyüğü, kalın dilim ızgara", price: "Günlük Fiyat" },
          { id: "b5", icon: "🐟", name: "İstavrit", desc: "Tavada kızartmalık, küçük boy", price: "Günlük Fiyat" },
          { id: "b6", icon: "🐟", name: "Sardalya", desc: "Izgara için ideal, yağlı ve lezzetli", price: "Günlük Fiyat" },
          { id: "b7", icon: "🐟", name: "Uskumru", desc: "Izgara, tava veya fırında", price: "Günlük Fiyat" }
        ]
      },
      {
        id: "beyaz",
        title: "🐠 Beyaz Etli Balıklar",
        items: [
          { id: "b8", icon: "🐠", name: "Çipura", desc: "Deniz çipurası, tuzda veya ızgara ideal", price: "Günlük Fiyat" },
          { id: "b9", icon: "🐟", name: "Levrek", desc: "Fırın veya ızgara için hazır", price: "Günlük Fiyat" },
          { id: "b10", icon: "🐡", name: "Barbunya", desc: "Tava için hazır, temizlenmiş", price: "Günlük Fiyat" },
          { id: "b11", icon: "🐟", name: "Tekir", desc: "Barbunyaya benzer, tavalık küçük balık", price: "Günlük Fiyat" },
          { id: "b12", icon: "🐟", name: "Mezgit", desc: "Unlanıp kızartmaya hazır, kemiksiz az", price: "Günlük Fiyat" },
          { id: "b13", icon: "🐟", name: "Kalkan", desc: "Karadeniz'in değerli balığı, fırın/ızgara", price: "Günlük Fiyat" },
          { id: "b14", icon: "🐟", name: "Mercan", desc: "Hafif ve lezzetli, fırın için ideal", price: "Günlük Fiyat" },
          { id: "b15", icon: "🐟", name: "Kefal", desc: "Izgara veya fırın, taze geldikçe", price: "Günlük Fiyat" },
          { id: "b16", icon: "🐟", name: "Dil Balığı", desc: "İnce filetolu, tavalık", price: "Günlük Fiyat" }
        ]
      },
      {
        id: "deniz",
        title: "🦐 Deniz Ürünleri",
        items: [
          { id: "b17", icon: "🦐", name: "Karides", desc: "Kavrulmuş veya haşlanmış, taze", price: "380 ₺ / kg" },
          { id: "b18", icon: "🦑", name: "Kalamar", desc: "Temizlenmiş, halka veya bütün", price: "280 ₺ / kg" },
          { id: "b19", icon: "🦀", name: "Yengeç", desc: "Canlı veya haşlanmış, sipariş ile", price: "Günlük Fiyat" },
          { id: "b20", icon: "🐙", name: "Ahtapot", desc: "Izgara için hazır, marine edilmiş", price: "350 ₺ / kg" },
          { id: "b21", icon: "🦪", name: "Midye", desc: "Taze midye, doldurma veya pişirme", price: "120 ₺ / kg" },
          { id: "b22", icon: "🦐", name: "Langust", desc: "Özel sipariş, fiyat için arayınız", price: "Sipariş ile" }
        ]
      }
    ]
  }
};

/* ============== STORAGE HELPERS ============== */
const MENU_STORAGE_KEY = "alptekinler_menu_data_v1";

function getMenuData() {
  try {
    const raw = localStorage.getItem(MENU_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return JSON.parse(JSON.stringify(DEFAULT_MENU_DATA));
}

function saveMenuData(data) {
  localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(data));
}

function resetMenuData() {
  localStorage.removeItem(MENU_STORAGE_KEY);
}
