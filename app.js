// app.js

// 1. Define McDonald's Menu Items and base prices
const menuRaw = {
    mains: [
        // Classic Series (超值全餐)
        { name: '大麥克', price: 78, kcal: 530, beef: true },
        { name: '雙層牛肉吉事堡', price: 68, kcal: 450, beef: true },
        { name: '麥克雙牛堡', price: 78, kcal: 450, beef: true },
        { name: '四盎司牛肉堡', price: 92, kcal: 516, beef: true },
        { name: '雙層四盎司牛肉堡', price: 132, kcal: 800, beef: true },
        { name: '吉事漢堡', price: 45, kcal: 300, beef: true },
        { name: '漢堡', price: 33, kcal: 250, beef: true },
        { name: '麥香魚', price: 49, kcal: 330 },
        { name: '麥香鷄', price: 45, kcal: 380 },
        { name: '勁辣鷄腿堡', price: 78, kcal: 560 },
        { name: '嫩煎鷄腿堡', price: 82, kcal: 380 },
        { name: '麥克鷄塊(6塊)', price: 68, kcal: 270 },
        { name: '麥克鷄塊(10塊)', price: 109, kcal: 450 },
        { name: '原味麥脆鷄腿(2塊)', price: 120, kcal: 600 },
        { name: '辣味麥脆鷄腿(2塊)', price: 120, kcal: 600 },
        
        // Signature Series (極選系列)
        { name: 'BLT 安格斯牛肉堡', price: 124, kcal: 580, beef: true },
        { name: 'BLT 嫩煎鷄腿堡', price: 124, kcal: 480 },
        { name: '帕瑪森安格斯牛肉堡', price: 124, kcal: 610, beef: true },
        { name: '帕瑪森主廚鷄腿堡', price: 124, kcal: 520 },
        { name: '蕈菇安格斯牛肉堡', price: 134, kcal: 600, beef: true },
        { name: '蕈菇主廚鷄腿堡', price: 134, kcal: 510 },
        
        // Salads as Mains (沙拉主餐)
        { name: '藜麥沙拉', price: 109, kcal: 180 },
        { name: '藜麥鱈魚沙拉', price: 139, kcal: 400 },
        { name: '藜麥烤鷄沙拉', price: 139, kcal: 350 },
        { name: '藜麥辣脆鷄沙拉', price: 139, kcal: 450 }
    ],
    sides: [
        { name: '薯條(小)', price: 40, kcal: 220 },
        { name: '薯條(中)', price: 50, kcal: 330 },
        { name: '薯條(大)', price: 66, kcal: 470 },
        { name: '薯條(不指定大小)', generic: true, variants: ['薯條(小)', '薯條(中)', '薯條(大)'] },
        { name: '薯餅', price: 37, kcal: 150 },
        { name: '四塊麥克鷄塊', price: 48, kcal: 180 },
        { name: '麥克鷄塊(不指定塊數)(含四塊)', generic: true, variants: ['四塊麥克鷄塊', '麥克鷄塊(6塊)', '麥克鷄塊(10塊)'] },
        { name: '原味麥脆鷄腿(單點)', price: 60, kcal: 300 },
        { name: '辣味麥脆鷄腿(單點)', price: 60, kcal: 300 },
        { name: '勁辣香鷄翅(2塊)', price: 49, kcal: 130 },
        { name: '勁辣香鷄翅(6塊)', price: 130, kcal: 390 },
        { name: '蘋果派', price: 40, kcal: 240 },
        { name: '水果袋', price: 39, kcal: 40 },
        { name: '四季沙拉', price: 49, kcal: 150 },
        { name: '玉米杯', price: 39, kcal: 90 }, // Typo fixed
        { name: 'OREO冰炫風', price: 59, kcal: 350 },
        { name: '雙倍OREO冰炫風', price: 79, kcal: 450 },
        { name: '蛋捲冰淇淋', price: 18, kcal: 140 },
        { name: '大蛋捲冰淇淋', price: 30, kcal: 220 }
    ],
    drinks: [
        // Consolidated Options: Sugared/Carbonated
        { name: '可樂/Zero/雪碧/檸檬紅茶 (小)', generic: true, variants: [
            '可口可樂(小)', '可口可樂zero(小)', '雪碧(小)', '檸檬風味紅茶(小)'
        ]},
        { name: '可樂/Zero/雪碧/檸檬紅茶 (中)', generic: true, variants: [
            '可口可樂(中)', '可口可樂zero(中)', '雪碧(中)', '檸檬風味紅茶(中)'
        ]},
        { name: '可樂/Zero/雪碧/檸檬紅茶 (不指定大小)', generic: true, variants: [
            '可口可樂(小)', '可口可樂zero(小)', '雪碧(小)', '檸檬風味紅茶(小)',
            '可口可樂(中)', '可口可樂zero(中)', '雪碧(中)', '檸檬風味紅茶(中)'
        ]},
        
        // Consolidated Options: Sugar-Free Teas
        { name: '無糖紅茶/無糖綠茶 (小)', generic: true, variants: [
            '無糖紅茶(小)', '無糖綠茶(小)'
        ]},
        { name: '無糖紅茶/無糖綠茶 (中)', generic: true, variants: [
            '無糖紅茶(中)', '無糖綠茶(中)'
        ]},
        { name: '無糖紅茶/無糖綠茶 (不指定大小)', generic: true, variants: [
            '無糖紅茶(小)', '無糖綠茶(小)', '無糖紅茶(中)', '無糖綠茶(中)'
        ]},
        
        // Individual items (Hidden closely-priced variants)
        { name: '可口可樂(小)', price: 33, kcal: 110, hidden: true },
        { name: '可口可樂(中)', price: 38, kcal: 160, hidden: true },
        { name: '可口可樂zero(小)', price: 33, kcal: 0, hidden: true },
        { name: '可口可樂zero(中)', price: 38, kcal: 0, hidden: true },
        { name: '雪碧(小)', price: 33, kcal: 110, hidden: true },
        { name: '雪碧(中)', price: 38, kcal: 160, hidden: true },
        { name: '檸檬風味紅茶(小)', price: 33, kcal: 110, hidden: true },
        { name: '檸檬風味紅茶(中)', price: 38, kcal: 160, hidden: true },
        { name: '無糖紅茶(小)', price: 35, kcal: 0, hidden: true },
        { name: '無糖紅茶(中)', price: 43, kcal: 0, hidden: true },
        { name: '無糖綠茶(小)', price: 35, kcal: 0, hidden: true },
        { name: '無糖綠茶(中)', price: 43, kcal: 0, hidden: true },
        
        // Specialty Drinks
        { name: '熱紅茶(小)', price: 38, kcal: 0 },
        { name: '焦糖冰奶茶', price: 68, kcal: 200 },
        { name: '經典美式咖啡(中)', price: 50, kcal: 15 },
        { name: '經典美式咖啡(冰/中)', price: 50, kcal: 15 },
        { name: '經典美式咖啡(熱/中)', price: 50, kcal: 15 },
        { name: '玉米湯(小)', price: 45, kcal: 90 },
        { name: '玉米湯(大)', price: 55, kcal: 130 },
        { name: '玉米湯(不指定大小)', generic: true, variants: ['玉米湯(小)', '玉米湯(大)'] },
        { name: '奶昔(香草風味)', price: 55, kcal: 350 },
        { name: '奶昔(草莓風味)', price: 55, kcal: 350 }
    ]
};

// Flatten to lookup dictionary
const basePrices = {};
const kcalMap = {};
const genericItems = {};
const isBeefMap = {};

Object.values(menuRaw).flat().forEach(item => {
    if (item.beef) isBeefMap[item.name] = true;
    kcalMap[item.name] = item.kcal || 0;
    
    if (item.generic) {
        genericItems[item.name] = item.variants;
    } else {
        basePrices[item.name] = item.price;
    }
});

// Second pass to determine an internal basePrice and kcal for generic items (for suggestions UI)
Object.keys(genericItems).forEach(gName => {
    basePrices[gName] = basePrices[genericItems[gName][0]] || 0;
    kcalMap[gName] = kcalMap[genericItems[gName][0]] || 0;
});

// 2. Define Offer Schemes
let allOffers = [];

function generateActiveOffers() {
    allOffers = [];
    
    // UI Elements
    const useSweetheart = document.getElementById('toggleSweetheart')?.checked ?? true;
    const usePromos = document.getElementById('togglePromos2026')?.checked ?? true;
    const useAppCoupon = document.getElementById('toggleAppCoupon')?.checked ?? false;

    // A) A La Carte (單點) - fallback (Always on)
    Object.keys(basePrices).forEach(name => {
        allOffers.push({
            name: `單點: ${name}`,
            price: basePrices[name],
            items: { [name]: 1 }
        });
    });

    // B) 1+1 = $50 & $69 (Always on)
    const onePlusOneWhite = ['可口可樂(小)', '可口可樂zero(小)', '雪碧(小)', '檸檬風味紅茶(小)', '無糖綠茶(小)', '無糖紅茶(小)', '熱紅茶(小)'];
    
    // $50 Tier
    const onePlusOneRed50 = ['麥香鷄', '吉事漢堡', '四塊麥克鷄塊', '勁辣香鷄翅', '蘋果派', '薯條(小)', '大蛋捲冰淇淋'];
    onePlusOneRed50.forEach(red => {
        if(!basePrices[red]) return;
        onePlusOneWhite.forEach(white => {
            if(!basePrices[white]) return;
            allOffers.push({
                name: `1+1星級點($50): ${red} + ${white}`,
                price: 50,
                items: { [red]: 1, [white]: 1 }
            });
        });
    });

    // $69 Tier
    const onePlusOneRed69 = ['麥脆鷄腿(原味/一塊)', '麥脆鷄腿(辣味/一塊)', '麥克雙牛堡', '六塊麥克鷄塊', '麥香魚', 'OREO冰炫風'];
    onePlusOneRed69.forEach(red => {
        if(!basePrices[red]) return;
        onePlusOneWhite.forEach(white => {
            if(!basePrices[white]) return;
            allOffers.push({
                name: `1+1星級點($69): ${red} + ${white}`,
                price: 69,
                items: { [red]: 1, [white]: 1 }
            });
        });
    });

    // C) Sweetheart Card (甜心卡) - Toggleable
    if (useSweetheart) {
        const sweetA = ['麥克鷄塊(6塊)', '麥克鷄塊(10塊)', '薯條(大)', 'OREO冰炫風', '四塊麥克鷄塊', '經典美式咖啡(中)'];
        const sweetB = ['可口可樂(中)', '可口可樂zero(中)', '雪碧(中)', '檸檬風味紅茶(中)', '無糖紅茶(中)', '無糖綠茶(中)', '薯條(小)', '蛋捲冰淇淋', '熱紅茶(小)'];
        sweetA.forEach(a => {
            if(!basePrices[a]) return;
            sweetB.forEach(b => {
                if(!basePrices[b]) return;
                allOffers.push({
                    name: `甜心卡: 買 ${a} 送 ${b}`,
                    price: basePrices[a],
                    items: { [a]: 1, [b]: 1 }
                });
            });
        });
    }

    // D) Combo Meals (套餐) - Always on
    const combos = [
        { name: 'A經典配餐', addPrice: 65, gives: { '薯條(中)': 1, '可口可樂(中)': 1 } },
        { name: 'A經典配餐(配清爽茶)', addPrice: 65+5, gives: { '薯條(中)': 1, '無糖綠茶(中)': 1 } }
    ];
    menuRaw.mains.forEach(main => {
        combos.forEach(c => {
            let offerItems = { [main.name]: 1 };
            let givesNames = [];
            for (let k in c.gives) {
                offerItems[k] = c.gives[k];
                givesNames.push(k);
            }
            allOffers.push({
                name: `套餐(${c.name}): ${main.name} + ${givesNames.join(' + ')}`,
                price: main.price + c.addPrice,
                items: offerItems
            });
        });
    });

    // E) 2026 Promo Coupons (期間限定優惠券) - Toggleable
    if (usePromos) {
        const bogoDrinks = ['可口可樂(中)', '雪碧(中)', '經典美式咖啡(中)'];
        bogoDrinks.forEach(drink => {
            if (basePrices[drink]) {
                allOffers.push({
                    name: `優惠券: ${drink}買一送一`,
                    price: basePrices[drink],
                    items: { [drink]: 2 }
                });
            }
        });

        if (basePrices['薯條(大)']) {
            allOffers.push({
                name: `新春優惠券: 大薯雙享 99元`,
                price: 99,
                items: { '薯條(大)': 2 }
            });
        }

        if (basePrices['麥克鷄塊(6塊)']) {
            allOffers.push({
                name: `新春優惠券: 六塊麥克鷄塊雙享 99元`,
                price: 99,
                items: { '麥克鷄塊(6塊)': 2 }
            });
        }

        if (basePrices['薯餅']) {
            allOffers.push({
                name: `新春優惠券: 薯餅雙享 59元`,
                price: 59,
                items: { '薯餅': 2 }
            });
        }
    }
    
    // F) Custom APP Coupon - Toggleable
    if (useAppCoupon) {
        const couponType = document.getElementById('appCouponType')?.value;
        const targetItem = document.getElementById('appCouponTargetItem')?.value;
        const discountVal = parseInt(document.getElementById('appCouponDiscount')?.value) || 0;
        
        if (targetItem && basePrices[targetItem]) {
            if (couponType === 'discount' && discountVal > 0) {
                let finalPrice = Math.max(0, basePrices[targetItem] - discountVal);
                allOffers.push({
                    name: `APP優惠: ${targetItem}現折${discountVal}元`,
                    price: finalPrice,
                    items: { [targetItem]: 1 }
                });
            } else if (couponType === 'buy_one_get_one') {
                allOffers.push({
                    name: `APP優惠: ${targetItem}買一送一`,
                    price: basePrices[targetItem],
                    items: { [targetItem]: 2 }
                });
            }
        }
    }
}

// Remove items that aren't defined in base prices exactly
// allOffers is now fully populated

// 3. Application State & UI logic
let currentCart = {}; // { '麥香魚': 2, '小薯': 1 }
let activeTab = 'mains';

const menuGrid = document.getElementById('menuGrid');
const cartItemsContainer = document.getElementById('cartItems');
const originalPriceEl = document.getElementById('originalPrice');
const moneySavedEl = document.getElementById('moneySaved');
const bestTotalPriceEl = document.getElementById('bestTotalPrice');
const strategyListEl = document.getElementById('strategyList');
const comboCountEl = document.getElementById('comboCount');
const discountRateEl = document.getElementById('discountRate');
const totalCaloriesEl = document.getElementById('totalCalories');
const checkoutBtn = document.getElementById('checkoutBtn');

function init() {
    setupTabs();
    renderMenu();
    updateCartUI();
    
    document.getElementById('clearCartBtn').addEventListener('click', () => {
        for (const key in currentCart) currentCart[key] = 0;
        updateCartUI();
    });
    
    const noBeefCb = document.getElementById('noBeefCheckbox');
    if (noBeefCb) {
        noBeefCb.addEventListener('change', () => {
            renderMenu();
        });
    }

    // Coupon UI Initialization
    generateActiveOffers(); // Initial generation
    
    const targetSelect = document.getElementById('appCouponTargetItem');
    if (targetSelect) {
        Object.keys(basePrices).forEach(itemName => {
            const opt = document.createElement('option');
            opt.value = itemName;
            opt.textContent = itemName;
            targetSelect.appendChild(opt);
        });
    }

    // Coupon Event Listeners
    const triggerRecalculate = () => {
        generateActiveOffers();
        memo = {}; // Clear DP cache because available offers changed
        updateCartUI();
    };

    ['toggleSweetheart', 'togglePromos2026', 'appCouponType', 'appCouponTargetItem', 'appCouponDiscount'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', triggerRecalculate);
    });

    const toggleApp = document.getElementById('toggleAppCoupon');
    const configPanel = document.getElementById('appCouponConfig');
    if (toggleApp && configPanel) {
        toggleApp.addEventListener('change', (e) => {
            configPanel.style.display = e.target.checked ? 'flex' : 'none';
            triggerRecalculate();
        });
    }

    // Theme Switch logic
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        // Load preference
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeBtn.textContent = '☀️ 淺色模式';
        }

        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeBtn.textContent = '🌙 深色模式';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeBtn.textContent = '☀️ 淺色模式';
            }
        });
    }
}

function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            activeTab = e.target.getAttribute('data-category');
            renderMenu();
        });
    });

    // Clear memo when togging rules
    document.querySelectorAll('.coupons-panel input').forEach(input => {
        input.addEventListener('change', () => {
            memo = {};
            updateCartUI();
        });
    });
}

function renderMenu() {
    menuGrid.innerHTML = '';
    let items = menuRaw[activeTab];
    
    // Filter out beef if checkbox is checked
    const noBeefCheckbox = document.getElementById('noBeefCheckbox');
    if (noBeefCheckbox && noBeefCheckbox.checked) {
        items = items.filter(item => !item.beef);
    }
    
    items.forEach(item => {
        if (item.hidden) return; // Skip rendering hidden items to keep generic categories clean
        
        const qty = currentCart[item.name] || 0;
        
        const card = document.createElement('div');
        card.className = 'menu-item-card';
        card.innerHTML = `
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.generic ? '浮動計價' : '$' + item.price}</div>
                ${item.kcal !== undefined ? `<span class="item-kcal">${item.kcal} kcal</span>` : ''}
            </div>
            <div class="quantity-controls">
                <button class="qty-btn minus-btn" data-name="${item.name}">-</button>
                <div class="qty-display">${qty}</div>
                <button class="qty-btn plus-btn" data-name="${item.name}">+</button>
            </div>
        `;
        menuGrid.appendChild(card);
    });

    // Attach events
    menuGrid.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const name = e.target.getAttribute('data-name');
            currentCart[name] = (currentCart[name] || 0) + 1;
            renderMenu();
            updateCartUI();
        });
    });

    menuGrid.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const name = e.target.getAttribute('data-name');
            if (currentCart[name] > 0) {
                currentCart[name]--;
                if (currentCart[name] === 0) delete currentCart[name];
                renderMenu();
                updateCartUI();
            }
        });
    });
}

function updateCartUI() {
    // 1. Render items
    cartItemsContainer.innerHTML = '';
    let hasItems = false;
    let singleTotal = 0;
    let currentKcal = 0; // Initialize kcal counter
    
    for (const [name, qty] of Object.entries(currentCart)) {
        if (qty > 0) {
            hasItems = true;
            
            let singlePriceStr = '浮動';
            if (basePrices[name]) {
                const singlePrice = basePrices[name];
                singleTotal += singlePrice * qty;
                singlePriceStr = `$${singlePrice * qty}`;
            }
            // Sum kcal for current cart
            currentKcal += (kcalMap[name] || 0) * qty;
            
            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <button class="remove-item-btn" data-name="${name}">✕</button>
                <span class="cart-item-name">${name}</span>
                <span class="cart-item-qty">x${qty}</span>
                <span class="cart-item-subtotal">${singlePriceStr}</span>
            `;
            cartItemsContainer.appendChild(row);
        }
    }
    
    // Attach remove events
    cartItemsContainer.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const name = e.target.getAttribute('data-name');
            delete currentCart[name];
            renderMenu();
            updateCartUI();
        });
    });

    if (!hasItems) {
        cartItemsContainer.innerHTML = '<div class="empty-state">目前尚未選擇任何餐點</div>';
        originalPriceEl.textContent = '$0';
        moneySavedEl.textContent = '0';
        bestTotalPriceEl.textContent = '$0';
        if(totalCaloriesEl) totalCaloriesEl.textContent = '0 kcal';
        strategyListEl.innerHTML = '<p class="empty-strategy">請先加入餐點，我會幫您算出最便宜的點法！</p>';
        if(comboCountEl) comboCountEl.textContent = '0';
        if(discountRateEl) discountRateEl.style.display = 'none';
        return;
    }
    
    originalPriceEl.textContent = `$${singleTotal}`;
    if(totalCaloriesEl) totalCaloriesEl.textContent = currentKcal + ' kcal'; // Display total kcal
    
    // 2. Run Algorithm
    findBestStrategy(singleTotal);
}

// 4. Algorithm Setup

// memoization cache
let memo = {};

// Convert cart to stable string for memo key
function cartToString(cart) {
    let res = "";
    // Optimization: using a fixed order of keys instead of sorting every time could work, 
    // but a-la-carte item names are many. Let's just avoid array creation where possible.
    const keys = Object.keys(cart).sort();
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (cart[k] > 0) res += k + ":" + cart[k] + "|";
    }
    return res;
}

// Check if cart contains all items of an offer
function canApplyOffer(cart, offer) {
    for (const [item, qty] of Object.entries(offer.items)) {
        if ((cart[item] || 0) < qty) return false;
    }
    return true;
}

// Subtract offer items from cart
function applyOffer(cart, offer) {
    const newCart = { ...cart };
    for (const [item, qty] of Object.entries(offer.items)) {
        newCart[item] -= qty;
        if (newCart[item] === 0) delete newCart[item];
    }
    return newCart;
}

function solveDP(cart) {
    const stateKey = cartToString(cart);
    if (!stateKey) return { cost: 0, steps: [] }; // empty cart
    
    if (memo[stateKey]) return memo[stateKey];
    
    let bestCost = Infinity;
    let bestSteps = [];
    
    // To speed up deeply nested loops, we could filter offers that are applicable first
    const applicableOffers = allOffers.filter(o => canApplyOffer(cart, o));
    
    for (const offer of applicableOffers) {
        const nextCart = applyOffer(cart, offer);
        const nextRes = solveDP(nextCart);
        
        if (nextRes.cost + offer.price < bestCost) {
            bestCost = nextRes.cost + offer.price;
            bestSteps = [offer, ...nextRes.steps];
        }
    }
    
    memo[stateKey] = { cost: bestCost, steps: bestSteps };
    return memo[stateKey];
}

// Expands "generic" items into an array of strictly concrete carts
// e.g., {'薯條(不指定大小)': 1} -> [{'薯條(小)': 1}, {'薯條(中)': 1}, {'薯條(大)': 1}]
function expandConcretes(cart) {
    let variants = [ { ...cart } ];

    for (const [item, qty] of Object.entries(cart)) {
        if (genericItems[item]) {
            let newVariants = [];
            for (let i = 0; i < variants.length; i++) {
                // Remove generic item
                const baseCart = variants[i];
                delete baseCart[item];
                
                // For this cart, create branching states where to assign the `qty` items
                // Simple implementation: uniformly assign `qty` to just one concrete variant at a time
                // (Advanced: partition `qty` among multiple sizes, but usually users pick "Any Size x 2" meaning 2 items of ANY matching size)
                const choices = genericItems[item];
                
                // We'll generate permutations where EACH of the `qty` items can independently be any of `choices`
                // This cart expansion is O(|choices|^qty).
                let branchVariants = [baseCart];
                for(let itemIter = 0; itemIter < qty; itemIter++){
                    let nextLevel = [];
                    for(let bCart of branchVariants) {
                        for(let choice of choices){
                            let newC = {...bCart};
                            newC[choice] = (newC[choice] || 0) + 1;
                            nextLevel.push(newC);
                        }
                    }
                    branchVariants = nextLevel;
                }
                newVariants.push(...branchVariants);
            }
            variants = newVariants;
        }
    }
    
    // De-duplicate same signatures
    const uniqueMap = {};
    variants.forEach(c => {
        uniqueMap[cartToString(c)] = c;
    });
    
    return Object.values(uniqueMap);
}

// Solve wrapper that expands generics, finds best DP over all concretes
function solveExpandedDP(cart) {
    const concreteCarts = expandConcretes(cart);
    let overallBest = { cost: Infinity, steps: [], cart: null };
    
    for (const cCart of concreteCarts) {
        let curPureCost = 0;
        for (const [n, q] of Object.entries(cCart)) curPureCost += basePrices[n] * q;
        
        const res = solveDP(cCart);
        if (res.cost < overallBest.cost) {
            overallBest = {
                cost: res.cost,
                steps: res.steps,
                cart: cCart,
                singleTotal: curPureCost
            };
        }
    }
    return { best: overallBest, variants: concreteCarts };
}

// Generate smart suggestions by adding 1 of each menu item
function generateSuggestions(concreteVariants, currentBestCost) {
    let suggestions = [];
    
    const noBeefCheckbox = document.getElementById('noBeefCheckbox');
    const hideBeef = noBeefCheckbox && noBeefCheckbox.checked;
    
    // Candidate items to suggest: visible menu items
    const candidateItems = [];
    Object.values(menuRaw).flat().forEach(item => {
        if (!item.hidden && !(hideBeef && item.beef) && !item.name.includes('不指定')) {
            candidateItems.push(item);
        }
    });

    for (const itemObj of candidateItems) {
        const singleItem = itemObj.name;
        const variantsToCheck = itemObj.generic ? itemObj.variants : [itemObj.name];
        
        // Instead of re-expanding the whole cart, we "inject" the candidate item into the variants we already have.
        // If the item is generic, we branch. If not, we just increment.
        let expandedHypotheticalVariants = [];
        for (const v of concreteVariants) {
            for (const concreteItem of variantsToCheck) {
                const hypo = { ...v, [concreteItem]: (v[concreteItem] || 0) + 1 };
                expandedHypotheticalVariants.push(hypo);
            }
        }

        let bestHypo = { cost: Infinity, steps: [] };
        for (const hCart of expandedHypotheticalVariants) {
            const res = solveDP(hCart);
            if (res.cost < bestHypo.cost) {
                bestHypo = { cost: res.cost, steps: res.steps };
            }
        }
        
        if (bestHypo.cost !== Infinity) {
            const addedCost = bestHypo.cost - currentBestCost;
            const itemPrice = basePrices[singleItem];
            
            if (addedCost < itemPrice && addedCost >= 0) {
                const savings = itemPrice - addedCost;
                if (savings > 5) {
                    let triggeredDealName = "";
                    if (bestHypo.steps) {
                        const dealStep = bestHypo.steps.find(step => {
                            if (step.name.startsWith("單點:")) return false;
                            return variantsToCheck.some(v => step.items[v]);
                        });
                        if (dealStep) {
                            triggeredDealName = dealStep.name.split(':')[0];
                        }
                    }
                    const dealText = triggeredDealName ? `，透過 ${triggeredDealName}` : "";

                    suggestions.push({
                        name: singleItem,
                        savings: savings,
                        html: `
                            <div>💡</div>
                            <p>多點【${singleItem}】，只需多 <strong>$${addedCost}</strong> 元，省 <strong>$${savings}</strong> 元${dealText}。</p>
                        `
                    });
                }
            }
        }
    }
    return suggestions;
}

function findBestStrategy(singleTotalDisplayVal) {
    strategyListEl.innerHTML = '<p style="color:#666;text-align:center;">計算中...</p>';
    
    setTimeout(() => {
        // DO NOT clear memo here. Memo persists unless rules change.
        const expandedRes = solveExpandedDP(currentCart);
        const result = expandedRes.best;
        
        strategyListEl.innerHTML = '';
        if (result.cost === Infinity || result.steps.length === 0) {
            strategyListEl.innerHTML = '<p class="empty-strategy">無法找到有效的組合，這可能表示包含不存在的商品。</p>';
            return;
        }
        
        // Group identical offers
        const groupedSteps = {};
        result.steps.forEach(step => {
            if(!groupedSteps[step.name]) groupedSteps[step.name] = { count: 0, price: step.price };
            groupedSteps[step.name].count++;
        });
        
        for (const [name, data] of Object.entries(groupedSteps)) {
            const el = document.createElement('div');
            el.className = 'strategy-step';
            el.innerHTML = `
                <div>
                    <span class="s-count">${data.count}x</span>
                    <span class="s-name">${name}</span>
                </div>
                <span class="s-price">$${data.price * data.count}</span>
            `;
            strategyListEl.appendChild(el);
        }
        
        // Update Actual "Original Price" context if generic items swapped values
        const actualSingleTotal = result.singleTotal || singleTotalDisplayVal;
        if(actualSingleTotal !== singleTotalDisplayVal) {
             originalPriceEl.textContent = `$${actualSingleTotal} (自動替換後視角)`;
        }
        
        bestTotalPriceEl.textContent = `$${result.cost}`;
        const saved = actualSingleTotal - result.cost;
        moneySavedEl.textContent = saved > 0 ? saved : 0;
        
        // Update stats and discount rate
        const calculatedCombos = Object.keys(memo).length;
        if (comboCountEl) comboCountEl.textContent = calculatedCombos.toLocaleString();
        
        if (saved > 0 && actualSingleTotal > 0) {
            const rate = (result.cost / actualSingleTotal) * 10;
            // Format to 1 decimal place, e.g., 6.8折
            if (discountRateEl) {
                discountRateEl.textContent = `${rate.toFixed(1)}折`;
                discountRateEl.style.display = 'inline-flex';
            }
        } else {
            if (discountRateEl) discountRateEl.style.display = 'none';
        }

        // Render Suggestions (Top 5 Clickable)
        const sgArray = generateSuggestions(expandedRes.variants, result.cost);
        if (sgArray && sgArray.length > 0) {
            // Sort by highest savings
            sgArray.sort((a, b) => b.savings - a.savings);
            
            // Take top 5
            const top5 = sgArray.slice(0, 5);
            
            top5.forEach(sg => {
                const sl = document.createElement('div');
                sl.className = 'suggestion-box';
                sl.innerHTML = sg.html;
                
                // Click-to-add interactivity
                sl.addEventListener('click', () => {
                    currentCart[sg.name] = (currentCart[sg.name] || 0) + 1;
                    renderMenu();
                    updateCartUI();
                });
                
                strategyListEl.appendChild(sl);
            });
        }
        
    }, 10);
}

// Bootstrap
window.addEventListener('DOMContentLoaded', init);
