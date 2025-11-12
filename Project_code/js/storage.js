// sessionStorage 

// 会话存储管理器
const SessionStorageManager = {
    // 收藏相关
    saveFavorite(iconId, isFavor) {
        let favorites = this.getFavorites();
        if (isFavor) {
            favorites[iconId] = true;
        } else {
            delete favorites[iconId];
        }
        sessionStorage.setItem('iconFavorites', JSON.stringify(favorites));
    },
    
    getFavorites() {
        return JSON.parse(sessionStorage.getItem('iconFavorites') || '{}');
    },
    
    isFavorite(iconId) {
        const favorites = this.getFavorites();
        return !!favorites[iconId];
    },
    
    // 购物车相关
    saveToCart(iconId, isSelected) {
        let cart = this.getCart();
        if (isSelected) {
            cart[iconId] = true;
        } else {
            delete cart[iconId];
        }
        sessionStorage.setItem('iconCart', JSON.stringify(cart));
    },
    
    getCart() {
        return JSON.parse(sessionStorage.getItem('iconCart') || '{}');
    },
    
    isInCart(iconId) {
        const cart = this.getCart();
        return !!cart[iconId];
    },
    
    getCartCount() {
        const cart = this.getCart();
        return Object.keys(cart).length;
    },
    
    // 清除所有数据
    clearAll() {
        sessionStorage.removeItem('iconFavorites');
        sessionStorage.removeItem('iconCart');
    }
};

// 页面加载完成后恢复状态
document.addEventListener('DOMContentLoaded', function() {
    // 恢复收藏状态
    restoreFavoriteStates();
    
    // 恢复购物车状态
    restoreCartStates();
    
    // 更新购物车计数器
    updateCartCount();
});

// 恢复收藏状态
function restoreFavoriteStates() {
    const favorites = SessionStorageManager.getFavorites();
    
    document.querySelectorAll('.block-icon-list li').forEach(li => {
        const iconId = li.querySelector('.icon-name span').textContent;
        
        // 如果该图标之前被收藏
        if (favorites[iconId]) {
            li.classList.add('favor');
            const favorIcon = li.querySelector('.icon-shoucang1.cover-item');
            if (favorIcon) {
                favorIcon.classList.remove('icon-shoucang1');
                favorIcon.classList.add('icon-favorites-fill');
            }
        }
    });
}

// 恢复购物车状态
function restoreCartStates() {
    const cart = SessionStorageManager.getCart();
    
    document.querySelectorAll('.block-icon-list li').forEach(li => {
        const iconId = li.querySelector('.icon-name span').textContent;
        
        // 如果该图标之前被加入购物车
        if (cart[iconId]) {
            li.classList.add('selected');
            const cartIcon = li.querySelector('.icon-gouwuche.cover-item');
            if (cartIcon) {
                cartIcon.classList.remove('icon-gouwuche');
                cartIcon.classList.add('icon-gouwuche1');
            }
        }
    });
}

// 更新购物车计数器
function updateCartCount() {
    const count = SessionStorageManager.getCartCount();
    
    // 更新侧边栏购物车计数器
    const sidebarCount = document.getElementById('J_icon_sidebar_count');
    if (sidebarCount) {
        sidebarCount.textContent = count;
    }
}

