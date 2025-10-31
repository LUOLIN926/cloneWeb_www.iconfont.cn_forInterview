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
});