/* =======================================================
   ALPTEKİNLER - MENÜ GÖRÜNTÜLEME SCRIPTİ
   Sayfadaki [data-menu-page] elementine, menu-data.js'ten
   gelen (ve admin panelinden güncellenebilen) verileri
   dinamik olarak basar.
======================================================= */
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('[data-menu-page]');
  if (!container) return;

  const pageKey = container.getAttribute('data-menu-page');
  const data = getMenuData();
  const pageData = data[pageKey];
  if (!pageData) {
    container.innerHTML = '<p style="text-align:center;color:var(--muted)">Menü verisi bulunamadı.</p>';
    return;
  }

  // Başlık alanlarını güncelle (varsa)
  const eyebrowEl = document.querySelector('[data-menu-eyebrow]');
  const titleEl = document.querySelector('[data-menu-title]');
  if (eyebrowEl && pageData.pageEyebrow) eyebrowEl.textContent = pageData.pageEyebrow;
  if (titleEl && pageData.pageTitle) titleEl.textContent = pageData.pageTitle;

  let html = '';
  pageData.categories.forEach(function (cat) {
    html += '<div class="menu-section-title">' + escapeHtml(cat.title) + '</div>';
    html += '<div class="menu-grid">';
    cat.items.forEach(function (item) {
      html += '<div class="menu-item">';
      html += '<div class="menu-item-icon">' + escapeHtml(item.icon || '') + '</div>';
      html += '<div>';
      html += '<div class="menu-item-name">' + escapeHtml(item.name) + '</div>';
      if (item.desc) html += '<div class="menu-item-desc">' + escapeHtml(item.desc) + '</div>';
      html += '<div class="menu-item-price">' + escapeHtml(item.price || '') + '</div>';
      html += '</div></div>';
    });
    html += '</div>';
  });

  container.innerHTML = html;
});

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}
