// --- STATE ---
const state = {
    selectedCardSizes: {},
    cart: [],
    customConfig: {
        pattern: 'Daisy Chain',
        price: 18000,
        base: THREAD_COLORS[0],   // Hitam Arang
        motif: THREAD_COLORS[6],  // Pink Pastel
        accent: THREAD_COLORS[5], // Putih Bersih
        activeSlot: 'base',
        size: 'M (16 cm)'
    }
};



CATALOG_PRODUCTS.forEach(p => {
    state.selectedCardSizes[p.id] = 'M (16cm)';
});

// --- HELPER FORMAT RUPIAH ---
function formatIDR(num) {
    return 'Rp ' + num.toLocaleString('id-ID');
}

// --- HELPER RENDER SVG GELANG ---
function generateBraceletSVG(pattern, colors, bgStyle = 'ceramic') {
    let bgMarkup = '';
    if (bgStyle === 'ceramic') {
        bgMarkup = `<circle cx="100" cy="100" r="88" fill="#FFFFFF" stroke="#E5DEC9" stroke-width="2.5"/>
                    <circle cx="100" cy="100" r="70" fill="#FAF8F4" stroke="#EFE9DD" stroke-width="1"/>`;
    } else if (bgStyle === 'wood') {
        bgMarkup = `<rect x="8" y="8" width="184" height="184" rx="24" fill="#4A3525"/>
                    <path d="M12 45 Q100 32 188 48 M12 100 Q100 112 188 96 M12 155 Q100 142 188 158" stroke="#362417" stroke-width="2" fill="none"/>`;
    } else if (bgStyle === 'moss') {
        bgMarkup = `<rect x="8" y="8" width="184" height="184" rx="24" fill="#2A3229"/>
                    <circle cx="45" cy="45" r="24" fill="#3B4D38" opacity="0.5"/>
                    <circle cx="155" cy="150" r="30" fill="#3B4D38" opacity="0.45"/>`;
    } else {
        bgMarkup = `<rect x="8" y="8" width="184" height="184" rx="24" fill="#323130"/>
                    <circle cx="60" cy="140" r="35" fill="#242322" opacity="0.6"/>`;
    }

    const ties = `<path d="M78 38 L52 30 M122 38 L148 30" stroke="${colors.base}" stroke-width="4.5" stroke-linecap="round"/>
                  <rect x="84" y="33" width="32" height="9" rx="4.5" fill="${colors.motif}"/>`;

    let braceletBody = '';
    if (pattern === 'daisy') {
        braceletBody = `<circle cx="100" cy="104" r="52" fill="none" stroke="${colors.base}" stroke-width="7"/>`;
        const angles = [35, 70, 105, 145, 215, 255, 290, 325];
        angles.forEach(deg => {
            const rad = (deg * Math.PI) / 180;
            const cx = 100 + 52 * Math.cos(rad);
            const cy = 104 + 52 * Math.sin(rad);
            braceletBody += `
                <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="7.5" fill="${colors.motif}"/>
                <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="2.8" fill="${colors.accent}"/>
            `;
        });
    } else if (pattern === 'spiral') {
        braceletBody = `
            <circle cx="100" cy="104" r="52" fill="none" stroke="${colors.base}" stroke-width="8.5"/>
            <circle cx="100" cy="104" r="52" fill="none" stroke="${colors.motif}" stroke-width="8.5" stroke-dasharray="9 18"/>
            <circle cx="100" cy="104" r="52" fill="none" stroke="${colors.accent}" stroke-width="8.5" stroke-dasharray="9 18" stroke-dashoffset="9"/>
        `;
    } else if (pattern === 'chevron') {
        braceletBody = `
            <circle cx="100" cy="104" r="52" fill="none" stroke="${colors.base}" stroke-width="10"/>
            <circle cx="100" cy="104" r="52" fill="none" stroke="${colors.motif}" stroke-width="5" stroke-dasharray="6 6"/>
            <circle cx="100" cy="104" r="52" fill="none" stroke="${colors.accent}" stroke-width="2" stroke-dasharray="3 9"/>
        `;
    } else {
        braceletBody = `
            <circle cx="100" cy="104" r="52" fill="none" stroke="${colors.base}" stroke-width="9"/>
            <circle cx="100" cy="104" r="52" fill="none" stroke="${colors.motif}" stroke-width="2.5" stroke-dasharray="4 4"/>
        `;
    }

    return `<svg viewBox="0 0 200 200" class="w-full h-full">${bgMarkup}${ties}${braceletBody}</svg>`;
}

// --- RENDER HERO DAISIES ---
function renderHeroDaisies() {
    const group = document.getElementById('hero-daisies');
    if (!group) return;
    const angles = [30, 65, 100, 140, 220, 260, 295, 330];
    group.innerHTML = angles.map(deg => {
        const rad = (deg * Math.PI) / 180;
        const cx = 110 + 56 * Math.cos(rad);
        const cy = 114 + 56 * Math.sin(rad);
        return `
            <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="8.5" fill="#C82829"/>
            <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3.2" fill="#1F1D1B"/>
        `;
    }).join('');
}

// --- RENDER KATALOG PRODUK ---
function renderCatalog(filter = 'Semua Koleksi') {
    const grid = document.getElementById('catalog-grid');
    const items = filter === 'Semua Koleksi'
        ? CATALOG_PRODUCTS
        : CATALOG_PRODUCTS.filter(p => p.category === filter);

    grid.innerHTML = items.map(prod => {
        const chosenSize = state.selectedCardSizes[prod.id] || 'M (16cm)';
        return `
        <div class="bg-white rounded-3xl border border-earth-sand overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
                <div class="p-4 pb-0">
                    <div onclick="openDetailModal('${prod.id}')" class="aspect-square rounded-2xl overflow-hidden bg-earth-cream relative cursor-pointer">
                        <img src="${prod.image}" alt="${prod.name}" loading="lazy"
                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-bold text-earth-wood shadow-2xs">
                            ${prod.category.replace(' Series', '')}
                        </span>
                        <span class="absolute bottom-2.5 right-2.5 px-2 py-1 rounded-full bg-black/55 text-white text-[10px] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <i data-lucide="zoom-in" class="w-3 h-3"></i> Lihat Detail
                        </span>
                    </div>
                </div>

                <div class="p-5 space-y-2.5">
                    <h3 class="font-serif text-xl font-bold text-earth-charcoal leading-snug">${prod.name}</h3>
                    <p class="text-xs text-earth-charcoal/75 line-clamp-2 leading-relaxed">${prod.desc}</p>
                    <p class="text-base font-bold text-earth-wood">${formatIDR(prod.price)}</p>

                    <!-- Pilihan Ukuran Cepat -->
                    <div class="pt-1">
                        <span class="text-[11px] font-semibold text-earth-charcoal/70 block mb-1.5">Pilih Ukuran:</span>
                        <div class="flex flex-wrap gap-1.5">
                            ${['XS', 'S', 'M', 'L', 'XL', 'Adj'].map((shortLabel, idx) => {
                                const fullVal = AVAILABLE_SIZES[idx];
                                const isActive = chosenSize === fullVal;
                                return `
                                    <button type="button" onclick="selectProductSize('${prod.id}', '${fullVal}')"
                                        class="px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${isActive
                                            ? 'bg-earth-wood text-earth-cream'
                                            : 'bg-earth-beige text-earth-charcoal hover:bg-earth-sand'}">
                                        ${shortLabel}
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-5 pb-5 pt-1 flex items-center gap-2">
                <button type="button" onclick="addCatalogToCart('${prod.id}')" class="flex-1 py-2.5 px-3 rounded-xl bg-earth-wood hover:bg-earth-woodDark text-earth-cream text-xs font-bold transition-colors flex items-center justify-center gap-1.5">
                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    <span>Keranjang</span>
                </button>
                <button type="button" onclick="openDetailModal('${prod.id}')" class="py-2.5 px-3 rounded-xl bg-earth-beige hover:bg-earth-sand text-earth-charcoal text-xs font-semibold transition-colors">
                    Detail
                </button>
            </div>
        </div>
        `;
    }).join('');

    lucide.createIcons();
}

// --- MODAL DETAIL PRODUK ---
function openDetailModal(prodId) {
    const prod = CATALOG_PRODUCTS.find(p => p.id === prodId);
    if (!prod) return;

    document.getElementById('m-category').textContent = prod.category;
    document.getElementById('m-name').textContent = prod.name;
    document.getElementById('m-price').textContent = formatIDR(prod.price);
    document.getElementById('m-desc').textContent = prod.desc;
    document.getElementById('m-svg-box').innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-contain rounded-xl">
    `;

    const renderModalSizes = () => {
        const current = state.selectedCardSizes[prod.id];
        document.getElementById('m-size-options').innerHTML = AVAILABLE_SIZES.map(sz => `
            <button type="button" onclick="updateModalSize('${prod.id}', '${sz}')"
                class="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${current === sz
                    ? 'border-earth-wood bg-earth-wood text-earth-cream'
                    : 'border-earth-sand bg-white text-earth-charcoal'}">
                ${sz}
            </button>
        `).join('');
    };

    renderModalSizes();

    document.getElementById('m-add-cart-btn').onclick = () => {
        addCatalogToCart(prod.id);
        closeDetailModal();
    };

    const modal = document.getElementById('detail-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function filterCatalog(category) {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (btn.dataset.cat === category) {
            btn.className = 'cat-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-earth-wood text-earth-cream shadow-sm transition-all';
        } else {
            btn.className = 'cat-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-earth-beige text-earth-charcoal hover:bg-earth-sand transition-all';
        }
    });
    renderCatalog(category);
}

function selectProductSize(prodId, fullSize) {
    state.selectedCardSizes[prodId] = fullSize;
    const activeCat = document.querySelector('.cat-btn.bg-earth-wood')?.dataset.cat || 'Semua Koleksi';
    renderCatalog(activeCat);
}

// --- MODAL DETAIL PRODUK ---
function openDetailModal(prodId) {
    const prod = CATALOG_PRODUCTS.find(p => p.id === prodId);
    if (!prod) return;

    document.getElementById('m-category').textContent = prod.category;
    document.getElementById('m-name').textContent = prod.name;
    document.getElementById('m-price').textContent = formatIDR(prod.price);
    document.getElementById('m-desc').textContent = prod.desc;
    document.getElementById('m-svg-box').innerHTML = generateBraceletSVG(prod.pattern, prod.colors, prod.bgStyle);

    const renderModalSizes = () => {
        const current = state.selectedCardSizes[prod.id];
        document.getElementById('m-size-options').innerHTML = AVAILABLE_SIZES.map(sz => `
            <button type="button" onclick="updateModalSize('${prod.id}', '${sz}')"
                class="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${current === sz
                    ? 'border-earth-wood bg-earth-wood text-earth-cream'
                    : 'border-earth-sand bg-white text-earth-charcoal'}">
                ${sz}
            </button>
        `).join('');
    };

    renderModalSizes();

    document.getElementById('m-add-cart-btn').onclick = () => {
        addCatalogToCart(prod.id);
        closeDetailModal();
    };

    const modal = document.getElementById('detail-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function updateModalSize(id, sz) {
    state.selectedCardSizes[id] = sz;
    openDetailModal(id);
    const activeCat = document.querySelector('.cat-btn.bg-earth-wood')?.dataset.cat || 'Semua Koleksi';
    renderCatalog(activeCat);
}

function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// --- STUDIO CUSTOM WARNA BENANG ---
function renderThreadPalette() {
    const grid = document.getElementById('thread-palette-grid');
    const activeColorHex = state.customConfig[state.customConfig.activeSlot].hex;

    grid.innerHTML = THREAD_COLORS.map(color => {
        const isSelected = color.hex === activeColorHex;
        return `
            <button type="button" onclick="pickThreadColor('${color.name}')"
                class="p-2.5 rounded-2xl border text-left transition-all flex flex-col items-center gap-1.5 ${isSelected
                    ? 'border-2 border-earth-wood bg-earth-cream shadow-xs scale-[1.02]'
                    : 'border-earth-sand bg-white hover:border-earth-wood/60'}">
                <span class="w-7 h-7 rounded-full border border-black/15 shadow-inner" style="background-color: ${color.hex};"></span>
                <span class="text-[11px] font-semibold text-earth-charcoal text-center leading-tight">${color.name}</span>
            </button>
        `;
    }).join('');
}

function setActiveColorSlot(slot) {
    state.customConfig.activeSlot = slot;
    ['base', 'motif', 'accent'].forEach(s => {
        const btn = document.getElementById(`slot-${s}`);
        if (s === slot) {
            btn.className = 'slot-tab px-3 py-1 rounded-full bg-earth-wood text-white transition-all';
        } else {
            btn.className = 'slot-tab px-3 py-1 rounded-full text-earth-charcoal transition-all';
        }
    });
    renderThreadPalette();
}

function pickThreadColor(colorName) {
    const found = THREAD_COLORS.find(c => c.name === colorName);
    if (!found) return;
    state.customConfig[state.customConfig.activeSlot] = found;
    renderThreadPalette();
    updateCustomPreview();
}

function setCustomPattern(patternName, price) {
    state.customConfig.pattern = patternName;
    state.customConfig.price = price;

    const mapId = { 'Daisy Chain': 'pat-daisy', 'Spiral Twist': 'pat-spiral', 'chevron': 'pat-chevron' };
    Object.entries(mapId).forEach(([name, id]) => {
        const el = document.getElementById(id);
        if (name === patternName) {
            el.className = 'pat-btn p-3.5 rounded-2xl border-2 border-earth-wood bg-earth-cream text-left transition-all';
        } else {
            el.className = 'pat-btn p-3.5 rounded-2xl border border-earth-sand bg-white hover:border-earth-wood text-left transition-all';
        }
    });

    document.getElementById('custom-price-display').textContent = formatIDR(price);
    updateCustomPreview();
}

function setCustomSize(sizeVal) {
    state.customConfig.size = sizeVal;
    document.getElementById('custom-size-pill').textContent = `Ukuran: ${sizeVal}`;
}

function updateCustomPreview() {
    const layer = document.getElementById('custom-svg-layer');
    const cBase = state.customConfig.base.hex;
    const cMotif = state.customConfig.motif.hex;
    const cAccent = state.customConfig.accent.hex;

    let svgContent = `
        <path d="M102 48 L68 38 M158 48 L192 38" stroke="${cBase}" stroke-width="5.5" stroke-linecap="round"/>
        <rect x="110" y="42" width="40" height="11" rx="5.5" fill="${cMotif}"/>
    `;

    if (state.customConfig.pattern === 'Daisy Chain') {
        svgContent += `<circle cx="130" cy="134" r="68" fill="none" stroke="${cBase}" stroke-width="9"/>`;
        const angles = [30, 65, 100, 140, 220, 260, 295, 330];
        angles.forEach(deg => {
            const rad = (deg * Math.PI) / 180;
            const cx = 130 + 68 * Math.cos(rad);
            const cy = 134 + 68 * Math.sin(rad);
            svgContent += `
                <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="10" fill="${cMotif}" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
                <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3.8" fill="${cAccent}"/>
            `;
        });
    } else if (state.customConfig.pattern === 'Spiral Twist') {
        svgContent += `
            <circle cx="130" cy="134" r="68" fill="none" stroke="${cBase}" stroke-width="11"/>
            <circle cx="130" cy="134" r="68" fill="none" stroke="${cMotif}" stroke-width="11" stroke-dasharray="12 24"/>
            <circle cx="130" cy="134" r="68" fill="none" stroke="${cAccent}" stroke-width="11" stroke-dasharray="12 24" stroke-dashoffset="12"/>
        `;
    } else {
        svgContent += `
            <circle cx="130" cy="134" r="68" fill="none" stroke="${cBase}" stroke-width="13"/>
            <circle cx="130" cy="134" r="68" fill="none" stroke="${cMotif}" stroke-width="6.5" stroke-dasharray="8 8"/>
            <circle cx="130" cy="134" r="68" fill="none" stroke="${cAccent}" stroke-width="2.5" stroke-dasharray="4 12"/>
        `;
    }

    layer.innerHTML = svgContent;

    document.getElementById('custom-recipe-text').textContent =
        `Pola ${state.customConfig.pattern} • Dasar ${state.customConfig.base.name} • Motif ${state.customConfig.motif.name} • Aksen ${state.customConfig.accent.name}`;
}

function addCustomBraceletToCart() {
    const note = document.getElementById('custom-note').value.trim();
    const cfg = state.customConfig;
    const variantDesc = `Dasar: ${cfg.base.name}, Motif: ${cfg.motif.name}, Aksen: ${cfg.accent.name}${note ? ` (${note})` : ''}`;
    const key = `custom-${cfg.pattern}-${variantDesc}-${cfg.size}`;

    const existing = state.cart.find(i => i.key === key);
    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.push({
            key,
            name: `Custom ${cfg.pattern}`,
            variant: variantDesc,
            size: cfg.size,
            price: cfg.price,
            qty: 1
        });
    }

    updateCartDrawer();
    showToast('Gelang Custom warna pilihanmu masuk keranjang!');
}

// --- PANDUAN HIGHLIGHTS ---
function renderHighlightSpools() {
    const container = document.getElementById('highlight-spools-grid');
    container.innerHTML = THREAD_COLORS.map((c, idx) => {
        const codeLabel = `Kode #${String(idx + 1).padStart(2, '0')}`;
        return `
        <div ${c.image ? `onclick="openHeroZoom('${c.image}', '${c.name}', '${codeLabel} • Benang Asli Natercraft')"` : ''}
             class="p-3.5 rounded-2xl bg-earth-cream border border-earth-sand hover:border-earth-wood transition-all flex flex-col items-center text-center gap-2.5 group ${c.image ? 'cursor-pointer' : ''}">
            ${c.image ? `
                <div class="w-full aspect-square rounded-xl overflow-hidden bg-white border border-earth-sand/70 relative">
                    <img src="${c.image}" alt="${c.name}" loading="lazy"
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
            ` : `
                <svg viewBox="0 0 64 64" class="w-12 h-12">
                    <rect x="14" y="8" width="36" height="6" rx="3" fill="#C8B69E"/>
                    <rect x="18" y="14" width="28" height="36" rx="4" fill="${c.hex}" stroke="rgba(0,0,0,0.12)" stroke-width="1"/>
                    <path d="M18 22 L46 26 M18 32 L46 36 M18 42 L46 46" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
                    <rect x="14" y="50" width="36" height="6" rx="3" fill="#C8B69E"/>
                </svg>
            `}
            <div>
                <span class="text-[10px] font-bold text-earth-wood block">${codeLabel}</span>
                <p class="text-xs font-bold text-earth-charcoal">${c.name}</p>
            </div>
        </div>
        `;
    }).join('');
}

function switchHighlightTab(tabName) {
    ['warna', 'mengukur', 'ukuran'].forEach(name => {
        const panel = document.getElementById(`hl-panel-${name}`);
        const btn = document.getElementById(`hl-btn-${name}`);
        const circle = btn.querySelector('div');
        const label = btn.querySelector('span');

        if (name === tabName) {
            panel.classList.remove('hidden');
            circle.className = 'w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 border-2 border-earth-wood bg-white shadow-sm transition-transform group-hover:scale-105';
            label.className = 'text-xs sm:text-sm font-bold text-earth-wood';
        } else {
            panel.classList.add('hidden');
            circle.className = 'w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 border-2 border-earth-sand bg-white shadow-sm transition-transform group-hover:scale-105';
            label.className = 'text-xs sm:text-sm font-semibold text-earth-charcoal/75';
        }
    });
}

// --- KERANJANG & CHECKOUT DM IG / WHATSAPP ---
function addCatalogToCart(prodId) {
    const prod = CATALOG_PRODUCTS.find(p => p.id === prodId);
    if (!prod) return;

    const size = state.selectedCardSizes[prodId] || 'M (16cm)';
    const key = `${prod.id}-${size}`;
    const existing = state.cart.find(i => i.key === key);

    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.push({
            key,
            name: prod.name,
            variant: prod.category,
            size,
            price: prod.price,
            qty: 1
        });
    }

    updateCartDrawer();
    showToast(`${prod.name} (${size}) ditambahkan!`);
}

function changeItemQty(key, delta) {
    const idx = state.cart.findIndex(i => i.key === key);
    if (idx === -1) return;
    state.cart[idx].qty += delta;
    if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
    updateCartDrawer();
}

function updateCartDrawer() {
    const count = state.cart.reduce((acc, i) => acc + i.qty, 0);
    const total = state.cart.reduce((acc, i) => acc + i.price * i.qty, 0);

    document.getElementById('cart-badge').textContent = count;
    document.getElementById('cart-total').textContent = formatIDR(total);

    const list = document.getElementById('cart-list');
    if (state.cart.length === 0) {
        list.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-center py-12 space-y-2">
                <div class="w-14 h-14 rounded-full bg-earth-beige text-earth-wood flex items-center justify-center">
                    <i data-lucide="shopping-bag" class="w-6 h-6"></i>
                </div>
                <p class="font-serif text-xl font-bold text-earth-charcoal">Keranjang Masih Kosong</p>
                <p class="text-xs text-earth-charcoal/70 max-w-xs">Pilih koleksi gelang benang atau rancang kombinasi warna custommu terlebih dahulu.</p>
            </div>
        `;
    } else {
        list.innerHTML = state.cart.map(item => `
            <div class="p-4 rounded-2xl bg-white border border-earth-sand flex items-start justify-between gap-3">
                <div class="space-y-1">
                    <h4 class="font-bold text-sm text-earth-charcoal">${item.name}</h4>
                    <p class="text-xs text-earth-charcoal/70">${item.variant}</p>
                    <p class="text-xs font-semibold text-earth-moss">Ukuran: ${item.size}</p>
                    <p class="text-sm font-bold text-earth-wood pt-0.5">${formatIDR(item.price * item.qty)}</p>
                </div>
                <div class="flex items-center gap-2 bg-earth-beige rounded-xl p-1">
                    <button onclick="changeItemQty('${item.key}', -1)" class="w-7 h-7 rounded-lg bg-white text-earth-charcoal font-bold text-xs shadow-2xs">-</button>
                    <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
                    <button onclick="changeItemQty('${item.key}', 1)" class="w-7 h-7 rounded-lg bg-white text-earth-charcoal font-bold text-xs shadow-2xs">+</button>
                </div>
            </div>
        `).join('');
    }
    lucide.createIcons();
}

function buildOrderMessage() {
    const name = document.getElementById('order-name').value.trim();
    const city = document.getElementById('order-city').value.trim();
    const notes = document.getElementById('order-notes').value.trim();

    if (state.cart.length === 0) {
        showToast('Keranjang masih kosong! Pilih gelang dulu ya.');
        return null;
    }
    if (!name || !city) {
        showToast('Mohon isi Nama Pemesan dan Kota/Alamat terlebih dahulu.');
        document.getElementById('order-name').focus();
        return null;
    }

    const total = state.cart.reduce((acc, i) => acc + i.price * i.qty, 0);
    let msg = `Halo kak @natercraft.id! Saya mau order gelang benang:\n\n`;
    state.cart.forEach((item, idx) => {
        msg += `${idx + 1}. ${item.name} (${item.qty} pcs)\n`;
        msg += `   - Detail: ${item.variant}\n`;
        msg += `   - Ukuran: ${item.size}\n`;
        msg += `   - Subtotal: ${formatIDR(item.price * item.qty)}\n`;
    });
    msg += `\nTotal Estimasi: ${formatIDR(total)}\n`;
    msg += `Nama: ${name}\n`;
    msg += `Kota/Alamat: ${city}\n`;
    if (notes) msg += `Catatan: ${notes}\n`;
    msg += `\nMohon info ketersediaan & total ongkirnya ya kak. Terima kasih!`;
    return msg;
}

function copyTextFallback(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        // Abaikan jika browser membatasi
    }
    document.body.removeChild(textarea);
}

function checkoutInstagramDM() {
    const msg = buildOrderMessage();
    if (!msg) return;

    copyTextFallback(msg);
    showToast('Format pesanan tersalin! Silakan Paste di DM @natercraft.id');
    setTimeout(() => {
        window.open(STORE_CONFIG.instagramUrl, '_blank');
    }, 900);
}

function checkoutWhatsApp() {
    const msg = buildOrderMessage();
    if (!msg) return;

    window.open(`https://wa.me/${STORE_CONFIG.whatsappCheckoutPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const isHidden = drawer.classList.contains('translate-x-full');
    if (isHidden) {
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        drawer.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    }
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function showToast(text) {
    const container = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = 'bg-earth-charcoal text-earth-cream px-4 py-3 rounded-2xl shadow-xl border border-earth-wood text-xs sm:text-sm font-medium flex items-center gap-2 transition-all duration-300 opacity-0 translate-y-2 pointer-events-auto';
    el.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-amber-300 shrink-0"></i><span>${text}</span>`;
    container.appendChild(el);
    lucide.createIcons();

    requestAnimationFrame(() => el.classList.remove('opacity-0', 'translate-y-2'));
    setTimeout(() => {
        el.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => el.remove(), 300);
    }, 3000);
}

// --- HERO SLIDER (4 PRODUK DAISY CHAIN) ---
let currentHeroSlide = 0;
let heroSlideTimer = null;

function renderHeroSlide() {
    const imgEl = document.getElementById('hero-slide-img');
    if (!imgEl || typeof HERO_DAISY_SLIDES === 'undefined') return;

    const item = HERO_DAISY_SLIDES[currentHeroSlide];
    imgEl.src = item.image;
    imgEl.alt = item.title;

    document.getElementById('hero-slide-title').textContent = item.title;
    document.getElementById('hero-slide-sub').textContent = item.subtitle;
    document.getElementById('hero-slide-price').textContent = item.price;
    document.getElementById('hero-slide-counter').textContent = `${currentHeroSlide + 1} / ${HERO_DAISY_SLIDES.length}`;

    const dotsContainer = document.getElementById('hero-slide-dots');
    dotsContainer.innerHTML = HERO_DAISY_SLIDES.map((_, idx) => `
        <button type="button" onclick="goToHeroSlide(${idx})" aria-label="Slide ${idx + 1}"
            class="h-1.5 rounded-full transition-all ${idx === currentHeroSlide
                ? 'w-5 bg-earth-wood'
                : 'w-1.5 bg-earth-sand hover:bg-earth-wood/50'}">
        </button>
    `).join('');
}

function nextHeroSlide(e) {
    if (e) e.stopPropagation();
    currentHeroSlide = (currentHeroSlide + 1) % HERO_DAISY_SLIDES.length;
    renderHeroSlide();
    resetHeroAutoSlide();
}

function prevHeroSlide(e) {
    if (e) e.stopPropagation();
    currentHeroSlide = (currentHeroSlide - 1 + HERO_DAISY_SLIDES.length) % HERO_DAISY_SLIDES.length;
    renderHeroSlide();
    resetHeroAutoSlide();
}

function goToHeroSlide(index) {
    currentHeroSlide = index;
    renderHeroSlide();
    resetHeroAutoSlide();
}

function openCurrentHeroZoom() {
    const item = HERO_DAISY_SLIDES[currentHeroSlide];
    openHeroZoom(item.image, item.title, `${item.subtitle} • ${item.price}`);
}

function resetHeroAutoSlide() {
    clearInterval(heroSlideTimer);
    heroSlideTimer = setInterval(() => {
        currentHeroSlide = (currentHeroSlide + 1) % HERO_DAISY_SLIDES.length;
        renderHeroSlide();
    }, 4000); // Berganti otomatis setiap 4 detik
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderHeroSlide();
    resetHeroAutoSlide();
    renderCatalog('Semua Koleksi');
    renderThreadPalette();
    updateCustomPreview();
    renderHighlightSpools();
    updateCartDrawer();
    lucide.createIcons();
});