// --- KONFIGURASI TAILWIND CSS ---
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            colors: {
                earth: {
                    cream: '#FAF7F2',
                    beige: '#F1EBE1',
                    sand: '#E4DACB',
                    wood: '#5C3D28',
                    woodDark: '#3E2718',
                    moss: '#4A634E',
                    mossLight: '#E7EFE8',
                    maroon: '#6E262C',
                    charcoal: '#1F1D1B',
                }
            }
        }
    }
};

// --- KONFIGURASI TOKO & KONTAK ---
const STORE_CONFIG = {
    instagramUrl: 'https://www.instagram.com/natercraft.id/',
    whatsappCheckoutPhone: '6287728962779' // Nomor WA untuk checkout keranjang (bisa disamakan dengan footer: 6287728962779)
};

// --- 12 PALET WARNA BENANG ASLI NATERCRAFT ---
const THREAD_COLORS = [
    { name: 'Hitam Arang', hex: '#1F1D1B', image: 'assets/img/threads/benang-000.jpg' },
    { name: 'Maroon Gelap', hex: '#6E262C', image: 'assets/img/threads/benang-7B3B51.jpg' },
    { name: 'Merah Cabai', hex: '#C82829', image: 'assets/img/threads/benang-1171.jpg' },
    { name: 'Coklat Kayu', hex: '#5C3D28', image: 'assets/img/threads/benang-686.jpg' },
    { name: 'Krem Natural', hex: '#E8DEC8', image: 'assets/img/threads/benang-EAE8DC.jpg' },
    { name: 'Putih Bersih', hex: '#F9F8F6', image: 'assets/img/threads/benang-fff.jpg' },
    { name: 'Pink Pastel', hex: '#F2A6B8', image: 'assets/img/threads/benang-2402.jpg' },
    { name: 'Kuning Emas', hex: '#EAB308', image: 'assets/img/threads/benang-8848.jpg' },
    { name: 'Hijau Lumut', hex: '#4A634E', image: 'assets/img/threads/benang-9020.jpg' },
    { name: 'Biru Langit', hex: '#5BA4CF', image: 'assets/img/threads/benang-2084.jpg' },
    { name: 'Biru Tosca', hex: '#2D8C8B', image: 'assets/img/threads/benang-8813.jpg' },
    { name: 'Merah Muda', hex: '#E8B7CB', image: 'assets/img/threads/benang-8048.jpg' },
    { name: 'Hijau', hex: '#79895B', image: 'assets/img/threads/benang-7905.jpg' },
    { name: 'Navy Blue', hex: '#22316C', image: 'assets/img/threads/benang-313BL.jpg' },
    { name: 'Bire', hex: '#22316C', image: 'assets/img/threads/benang-40E0D0.jpg' },
];

// --- 4 PRODUK SLIDER HERO (DAISY CHAIN SERIES) ---
const HERO_DAISY_SLIDES = [
    {
        image: 'assets/img/products/dc_brown.jpeg',
        title: 'Daisy Chain Brown',
        subtitle: 'Coklat • Cream • Kuning • Adjustable',
        price: 'Rp 20.000'
    },
    {
        image: 'assets/img/products/dc_purple.jpeg',
        title: 'Daisy Midnight Pink',
        subtitle: 'Hitam • Pink Pastel • Adjustable',
        price: 'Rp 18.000'
    },
    {
        image: 'assets/img/products/dc_red.jpeg',
        title: 'Daisy Forest Lime',
        subtitle: 'Hijau Lumut • Kuning • Adjustable',
        price: 'Rp 18.000'
    },
    {
        image: 'assets/img/products/dc_purple.jpeg',
        title: 'Daisy Ocean Wood',
        subtitle: 'Coklat Kayu • Tosca • Adjustable',
        price: 'Rp 18.000'
    },
];

// --- 10 KATALOG PRODUK ASLI @NATERCRAFT.ID ---
const CATALOG_PRODUCTS = [
    // Daisy Chain
    {
        id: 'nc-01',
        name: 'Daisy Chain Cherry Night',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_cherry_night.jpeg',
        desc: 'Edisi ikonik pertama @natercraft.id. Tali dasar hitam pekat dipadukan deretan bunga daisy pink pastel dengan putik putih.'
    },
    {
        id: 'nc-02',
        name: 'Daisy Chain Midnight Blossom',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_midnight_blossom.jpeg',
        desc: 'Edisi ikonik pertama @natercraft.id. Tali dasar hitam pekat dipadukan deretan bunga daisy pink pastel dengan putik putih.'
    },
    {
        id: 'nc-03',
        name: 'Daisy Chain Sunflower',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_sunflower.jpeg',
        desc: 'Edisi ikonik pertama @natercraft.id. Tali dasar hitam pekat dipadukan deretan bunga daisy pink pastel dengan putik putih.'
    },
    {
        id: 'nc-04',
        name: 'Daisy Chain Sweet Blossom',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_sweet_blossom.jpeg',
        desc: 'Edisi ikonik pertama @natercraft.id. Tali dasar hitam pekat dipadukan deretan bunga daisy pink pastel dengan putik putih.'
    },
    {
        id: 'nc-05',
        name: 'Daisy Chain Bluebell',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_bluebell.jpeg',
        desc: 'Edisi ikonik pertama @natercraft.id. Tali dasar hitam pekat dipadukan deretan bunga daisy pink pastel dengan putik putih.'
    },
    {
        id: 'nc-06',
        name: 'Daisy Chain Crimson Ruby',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_crimson_ruby.jpeg',
        desc: 'Perpaduan hangat tali benang coklat kayu dengan kelopak bunga daisy biru tosca cerah.'
    },
     {
        id: 'nc-07',
        name: 'Daisy Chain Scarlet Ruby',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_scarlet_ruby.jpeg',
        desc: 'Perpaduan hangat tali benang coklat kayu dengan kelopak bunga daisy biru tosca cerah.'
    },
    {
        id: 'nc-08',
        name: 'Daisy Chain Choco Butter',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_choco_butter.jpeg',
        desc: 'Nuansa alam hijau daun segar berpadu kelopak bunga kuning cerah yang ceria untuk dipakai harian.'
    },
    {
        id: 'nc-09',
        name: 'Daisy Chain Choco Cream',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_choco_cream.jpeg',
        desc: 'Nuansa alam hijau daun segar berpadu kelopak bunga kuning cerah yang ceria untuk dipakai harian.'
    },
    {
        id: 'nc-010',
        name: 'Daisy Chain Mocha Blossom',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_mocha_blossom.jpeg',
        desc: 'Nuansa alam hijau daun segar berpadu kelopak bunga kuning cerah yang ceria untuk dipakai harian.'
    },
    {
        id: 'nc-11',
        name: 'Daisy Chain lilac Blossom',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_lilac_blossom.jpeg',
        desc: 'Edisi ikonik pertama @natercraft.id. Tali dasar hitam pekat dipadukan deretan bunga daisy pink pastel dengan putik putih.'
    },
    {
        id: 'nc-12',
        name: 'Daisy Chain Lavender',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_lavender.jpeg',
        desc: 'Edisi ikonik pertama @natercraft.id. Tali dasar hitam pekat dipadukan deretan bunga daisy pink pastel dengan putik putih.'
    },
    {
        id: 'nc-13',
        name: 'Daisy Chain Midnight Lilac',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_midnight_lilac.jpeg',
        desc: 'Edisi ikonik pertama @natercraft.id. Tali dasar hitam pekat dipadukan deretan bunga daisy pink pastel dengan putik putih.'
    },
    {
        id: 'nc-14',
        name: 'Daisy Chain Velvet Violet',
        category: 'Daisy Chain Series',
        price: 18000,
        image: 'assets/img/products/dc_velvet_violet.jpeg',
        desc: 'Edisi ikonik pertama @natercraft.id. Tali dasar hitam pekat dipadukan deretan bunga daisy pink pastel dengan putik putih.'
    },

    // Flower Knot
    {
        id: 'nc-15',
        name: 'Flower Knot Tropical Bloom',
        category: 'Flower Knot Series',
        price: 18000,
        image: 'assets/img/products/fk_tropical_bloom.jpeg',
        desc: 'Kontras elegan benang hitam dengan bunga daisy merah cabai dan tali serut merah maroon.'
    },
    {
        id: 'nc-16',
        name: 'Flowe Knot Watermelon Bloom',
        category: 'Flower Knotn Series',
        price: 18000,
        image: 'assets/img/products/fk_watermelon_bloom.jpeg',
        desc: 'Kontras elegan benang hitam dengan bunga daisy merah cabai dan tali serut merah maroon.'
    },
    {
        id: 'nc-17',
        name: 'Flowe Knot Cotton Candy',
        category: 'Flower Knot Series',
        price: 18000,
        image: 'assets/img/products/fk_cotton_candy.jpeg',
        desc: 'Kontras elegan benang hitam dengan bunga daisy merah cabai dan tali serut merah maroon.'
    },
    {
        id: 'nc-18',
        name: 'Flowe Knot Sakura Snow',
        category: 'Flower Knot Series',
        price: 18000,
        image: 'assets/img/products/fk_sakura_snow.jpeg',
        desc: 'Kontras elegan benang hitam dengan bunga daisy merah cabai dan tali serut merah maroon.'
    },
    {
        id: 'nc-19',
        name: 'Candy Straircase Tropical Braid',
        category: 'Candy Straircase Series',
        price: 18000,
        image: 'assets/img/products/cs_tropical_braid.jpeg',
        desc: 'Tampilan lembut dan feminin dengan dasar benang putih bersih dan bunga sakura pink muda.'
    },
    {
        id: 'nc-20',
        name: 'Candy Straircase Volcano Braid',
        category: 'Candy Straircase Series',
        price: 18000,
        image: 'assets/img/products/cs_volcano_braid.jpeg',
        desc: 'Tampilan lembut dan feminin dengan dasar benang putih bersih dan bunga sakura pink muda.'
    },
    {
        id: 'nc-21',
        name: 'Candy Straircase Borneo Braid',
        category: 'Candy Straircase Series',
        price: 18000,
        image: 'assets/img/products/cs_borneo_braid.jpeg',
        desc: 'Tampilan lembut dan feminin dengan dasar benang putih bersih dan bunga sakura pink muda.'
    },
    {
        id: 'nc-22',
        name: 'Candy Straircase Cranberry Twist',
        category: 'Candy Straircase Series',
        price: 18000,
        image: 'assets/img/products/cs_cranberry_twist.jpeg',
        desc: 'Tampilan lembut dan feminin dengan dasar benang putih bersih dan bunga sakura pink muda.'
    },
    {
        id: 'nc-23',
        name: 'Candy Straircase Autumn Forest',
        category: 'Candy Straircase Series',
        price: 18000,
        image: 'assets/img/products/cd_autumn_forest.jpeg',
        desc: 'Tampilan lembut dan feminin dengan dasar benang putih bersih dan bunga sakura pink muda.'
    },
    {
        id: 'nc-24',
        name: 'Candy Straircase Ocean Breeze',
        category: 'Candy Straircase Series',
        price: 18000,
        image: 'assets/img/products/cs_ocean_breeze.jpeg',
        desc: 'Tampilan lembut dan feminin dengan dasar benang putih bersih dan bunga sakura pink muda.'
    },
    {
        id: 'nc-25',
        name: 'Candy Straircase Olive Twist',
        category: 'Candy Straircase Series',
        price: 18000,
        image: 'assets/img/products/cs_olive_twist.jpeg',
        desc: 'Tampilan lembut dan feminin dengan dasar benang putih bersih dan bunga sakura pink muda.'
    },
    {
        id: 'nc-26',
        name: 'Candy Straircase Olive Twist',
        category: 'Candy Straircase Series',
        price: 18000,
        image: 'assets/img/products/cs_skyline.jpeg',
        desc: 'Tampilan lembut dan feminin dengan dasar benang putih bersih dan bunga sakura pink muda.'
    },
    {
        id: 'nc-27',
        name: 'Caterpillar Maroon',
        category: 'Caterpillar Series',
        price: 15000,
        image: 'assets/img/products/cpr_red.jpg',
        desc: 'Anyaman lilit spiral dua warna klasik merah maroon dan krem natural yang cocok untuk gelang couple.'
    },
    {
        id: 'nc-28',
        name: 'Caterpillar Brown',
        category: 'Caterpillar Series',
        price: 16000,
        image: 'assets/img/products/cpr_brown.jpg',
        desc: 'Kombinasi dinamis tiga warna merah, kuning emas, dan hitam dengan tekstur lilitan padat.'
    },
    {
        id: 'nc-29',
        name: 'Caterpillar Black',
        category: 'Caterpillar Series',
        price: 16000,
        image: 'assets/img/products/cpr_black.jpg',
        desc: 'Perpaduan segar biru langit, putih bersih, dan hitam arang dengan simpul ujung rapi.'
    },
    {
        id: 'nc-30',
        name: 'Classic Solid Maroon',
        category: 'Classic',
        price: 15000,
        image: 'assets/img/products/cls_maroon.jpeg',
        desc: 'Rajutan polos minimalis dengan tekstur kepang rapat dalam pilihan warna earth tone (Maroon, Brown, Black).'
    }
];

const AVAILABLE_SIZES = ['XS (14cm)', 'S (15cm)', 'M (16cm)', 'L (17cm)', 'XL (18cm)', 'Adjustable'];

