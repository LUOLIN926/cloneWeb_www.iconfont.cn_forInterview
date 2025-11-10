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
        // 检查点击的元素是否是具有cover-item类的购物车图标
        if (e.target.classList.contains('icon-gouwuche') && 
            e.target.classList.contains('cover-item')) {
            e.stopPropagation();
            // 找到父级li元素并切换selected类
            const parentLi = e.target.closest('li');
            if (parentLi) {
                parentLi.classList.toggle('selected');
            }
        }
    });
});

// 点击选中icon加上灰色框效果（添加favor类）
document.addEventListener('DOMContentLoaded', function() {
    // 使用事件委托处理点击事件
    document.addEventListener('click', function(e) {
        // 检查点击的元素是否是具有cover-item类的收藏图标
        if (e.target.classList.contains('icon-shoucang') && 
            e.target.classList.contains('cover-item')) {
            e.stopPropagation();
            // 找到父级li元素并切换favor类
            const parentLi = e.target.closest('li');
            if (parentLi) {
                parentLi.classList.toggle('favor');
            }
        }
    });
});