// 搜索区域切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取搜索区域的tab按钮
    const searchTabs = document.querySelectorAll('.swiper-pagination-bullet.custom-tab-bullet');
    
    // 确保有两个tab按钮
    if (searchTabs.length >= 2) {
        const searchTab = searchTabs[0];  // 搜索按钮
        const aiTab = searchTabs[1];      // AI生成图标按钮
        
        // 为搜索按钮添加点击事件
        searchTab.addEventListener('click', function(e) {
            e.preventDefault();
            // 移除AI按钮的active状态，添加搜索按钮的active状态
            aiTab.classList.remove('swiper-pagination-bullet-active');
            searchTab.classList.add('swiper-pagination-bullet-active');
        });
        
        // 为AI生成图标按钮添加点击事件
        aiTab.addEventListener('click', function(e) {
            e.preventDefault();
            // 移除搜索按钮的active状态，添加AI按钮的active状态
            searchTab.classList.remove('swiper-pagination-bullet-active');
            aiTab.classList.add('swiper-pagination-bullet-active');
        });
    }
    
    // 添加搜索下拉框的点击功能
    const searchDrop = document.querySelector('.search-drop');
    const searchDropdown = document.querySelector('.search-dropdown');
    
    if (searchDrop && searchDropdown) {
        // 点击搜索下拉框时切换显示/隐藏
        searchDrop.addEventListener('click', function(e) {
            // 阻止事件冒泡，避免点击文档其他地方时立即关闭
            e.stopPropagation();
            
            // 切换 dropdown-open 类
            this.classList.toggle('dropdown-open');
        });
        
        // 点击下拉选项时关闭下拉框
        const dropdownItems = searchDropdown.querySelectorAll('div[data-type]');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                // 移除 dropdown-open 类以关闭下拉框
                searchDrop.classList.remove('dropdown-open');
                
                // 可以在这里添加选择项的处理逻辑
                const selectedType = this.getAttribute('data-type');
                const selectedText = this.textContent.trim();
                
                // 更新显示文本
                const searchText = searchDrop.querySelector('.search-tab-text span');
                if (searchText) {
                    searchText.textContent = selectedText;
                }
            });
        });
        
        // 点击页面其他地方时关闭下拉框
        document.addEventListener('click', function(e) {
            if (searchDrop.classList.contains('dropdown-open')) {
                searchDrop.classList.remove('dropdown-open');
            }
        });
    }
});