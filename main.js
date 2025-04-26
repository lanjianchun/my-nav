document.addEventListener('DOMContentLoaded', () => {
  fetch('bookmarks.json')
    .then(res => res.json())
    .then(data => renderBookmarks(data))
    .catch(() => {
      document.getElementById('nav-container').innerHTML = '<div class="loading">加载书签失败，请检查 bookmarks.json 是否存在。</div>';
    });
});

function renderBookmarks(bookmarks) {
  if (!Array.isArray(bookmarks) || bookmarks.length === 0) {
    document.getElementById('nav-container').innerHTML = '<div class="loading">暂无收藏数据</div>';
    return;
  }
  // 分类
  const categories = {};
  bookmarks.forEach(item => {
    const cat = item.category || '未分类';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(item);
  });
  // 渲染
  let html = '';
  Object.keys(categories).sort().forEach(cat => {
    html += `<div class="category">
      <div class="category-title">${cat}</div>
      <div class="links">
        ${categories[cat].map(link => `
          <div class="link-item">
            <a href="${link.url}" target="_blank" rel="noopener">${link.name}</a>
          </div>
        `).join('')}
      </div>
    </div>`;
  });
  document.getElementById('nav-container').innerHTML = html;
} 