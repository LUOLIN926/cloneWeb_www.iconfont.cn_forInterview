// 点击搜索图标展开搜索框功能
document.addEventListener('DOMContentLoaded', function() {
    
    const searchButton = document.getElementById('J_radius_search_wrap');
    const searchInput = document.getElementById('J_radius_search_input');
    
    if (searchButton && searchInput) {

        searchInput.placeholder = '';

        // 鼠标进入事件
        searchButton.addEventListener('mouseenter', function() {
            this.classList.add('radius-btn-search-in');
            searchInput.placeholder = '请输入文字';
        });
        
        // 鼠标离开事件
        searchButton.addEventListener('mouseleave', function() {
            this.classList.remove('radius-btn-search-in');
            searchInput.placeholder = '';
        });
    }
});

// 点击选中icon加上灰色框效果（添加selected类）给其父级li元素添加selected类
document.addEventListener('DOMContentLoaded', function() {
    // 使用事件委托处理点击事件
    document.addEventListener('click', function(e) {
        // 检查点击的元素是否是具有cover-item类的购物车图标（包括icon-gouwuche和icon-gouwuche1）
        if ((e.target.classList.contains('icon-gouwuche') || e.target.classList.contains('icon-gouwuche1')) && 
            e.target.classList.contains('cover-item')) {
            e.stopPropagation();
            // 找到父级li元素并切换selected类
            const parentLi = e.target.closest('li');
            if (parentLi) {
                parentLi.classList.toggle('selected');
                
                // 查找被点击的购物车图标元素
                const cartIcon = e.target;
                const iconId = parentLi.querySelector('.icon-name span').textContent;
                
                // 检查是否已选中（selected类是否存在）
                if (parentLi.classList.contains('selected')) {
                    // 已选中，更换为icon-gouwuche1
                    cartIcon.classList.remove('icon-gouwuche');
                    cartIcon.classList.add('icon-gouwuche1');
                } else {
                    // 取消选中，恢复为icon-gouwuche
                    cartIcon.classList.remove('icon-gouwuche1');
                    cartIcon.classList.add('icon-gouwuche');
                }
                
                // 保存购物车状态到 sessionStorage
                SessionStorageManager.saveToCart(iconId, parentLi.classList.contains('selected'));
                
                // 更新购物车计数器
                updateCartCount();
            }
        }
    });
});

// 点击选中icon加上灰色框效果（添加favor类）
document.addEventListener('DOMContentLoaded', function() {
    // 使用事件委托处理点击事件
    document.addEventListener('click', function(e) {
        // 检查点击的元素是否是具有cover-item类的收藏图标（包括icon-shoucang1和icon-favorites-fill）
        if ((e.target.classList.contains('icon-shoucang1') || e.target.classList.contains('icon-favorites-fill')) && 
            e.target.classList.contains('cover-item')) {
            e.stopPropagation();
            // 找到父级li元素并切换favor类
            const parentLi = e.target.closest('li');
            if (parentLi) {
                parentLi.classList.toggle('favor');
                
                // 查找被点击的收藏图标元素
                const favorIcon = e.target;
                const iconId = parentLi.querySelector('.icon-name span').textContent;
                
                // 检查是否已收藏（favor类是否存在）
                if (parentLi.classList.contains('favor')) {
                    // 已收藏，更换为icon-favorites-fill
                    favorIcon.classList.remove('icon-shoucang1');
                    favorIcon.classList.add('icon-favorites-fill');
                } else {
                    // 取消收藏，恢复为icon-shoucang1
                    favorIcon.classList.remove('icon-favorites-fill');
                    favorIcon.classList.add('icon-shoucang1');
                }
                
                // 保存收藏状态到 sessionStorage
                SessionStorageManager.saveFavorite(iconId, parentLi.classList.contains('favor'));
            }
        }
    });
});

