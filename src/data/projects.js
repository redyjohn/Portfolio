export const projects = [
  {
    id: 1,
    name: '電商購物平台',
    shortDescription: '一個功能完整的線上購物系統，支援商品瀏覽、購物車、結帳等功能。',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    thumbnail: 'https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=電商平台',
    presentation: [
      {
        type: 'heading',
        content: '專案概述'
      },
      {
        type: 'paragraph',
        content: '這是一個全功能的電商購物平台，提供完整的購物體驗。'
      },
      {
        type: 'heading',
        content: '主要功能'
      },
      {
        type: 'list',
        items: [
          '商品瀏覽與搜尋',
          '購物車管理',
          '會員系統',
          '訂單處理',
          '付款整合'
        ]
      },
      {
        type: 'heading',
        content: '技術亮點'
      },
      {
        type: 'paragraph',
        content: '使用 React 構建響應式前端，Node.js 和 Express 處理後端邏輯，MongoDB 儲存數據。'
      }
    ]
  },
  {
    id: 2,
    name: '任務管理系統',
    shortDescription: '幫助團隊協作的任務管理工具，支援看板視圖和進度追蹤。',
    technologies: ['Vue.js', 'Firebase', 'TypeScript'],
    thumbnail: 'https://via.placeholder.com/400x300/50C878/FFFFFF?text=任務管理',
    presentation: [
      {
        type: 'heading',
        content: '專案概述'
      },
      {
        type: 'paragraph',
        content: '一個現代化的任務管理系統，讓團隊協作更有效率。'
      },
      {
        type: 'heading',
        content: '主要功能'
      },
      {
        type: 'list',
        items: [
          '看板式任務管理',
          '即時協作',
          '進度追蹤',
          '通知系統',
          '數據分析'
        ]
      },
      {
        type: 'heading',
        content: '技術亮點'
      },
      {
        type: 'paragraph',
        content: '採用 Vue.js 3 和 TypeScript 確保代碼品質，使用 Firebase 實現即時數據同步。'
      }
    ]
  },
  {
    id: 3,
    name: '天氣預報應用',
    shortDescription: '即時天氣資訊查詢應用，提供詳細的天氣預報和圖表分析。',
    technologies: ['React Native', 'OpenWeatherMap API', 'Chart.js'],
    thumbnail: 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=天氣應用',
    presentation: [
      {
        type: 'heading',
        content: '專案概述'
      },
      {
        type: 'paragraph',
        content: '一個跨平台的天氣預報應用程式，提供準確的天氣資訊。'
      },
      {
        type: 'heading',
        content: '主要功能'
      },
      {
        type: 'list',
        items: [
          '即時天氣查詢',
          '7天預報',
          '天氣圖表',
          '位置定位',
          '多城市管理'
        ]
      },
      {
        type: 'heading',
        content: '技術亮點'
      },
      {
        type: 'paragraph',
        content: '使用 React Native 實現跨平台開發，整合 OpenWeatherMap API 獲取天氣數據，使用 Chart.js 呈現視覺化圖表。'
      }
    ]
  }
]

