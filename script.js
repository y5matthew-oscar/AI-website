const { createApp } = Vue;

createApp({
  data() {
    return {
      menus: [
        "主要指數",
        "股票",
        "商品",
        "外匯",
        "加密貨幣",
        "ETF",
        "期貨",
        "經濟日曆"
      ],

      marketTicker: [
        { name: "S&P 500", value: "5,104.35", change: 0.42 },
        { name: "Nasdaq", value: "16,231.12", change: 0.66 },
        { name: "Dow Jones", value: "38,904.04", change: -0.18 },
        { name: "Gold", value: "2,356.80", change: 0.25 },
        { name: "BTC/USD", value: "64,820.50", change: -1.12 },
        { name: "USD/TWD", value: "32.41", change: 0.08 }
      ],

      indices: [
        { name: "S&P 500", price: "5,104.35", change: 0.42 },
        { name: "Nasdaq 100", price: "18,021.22", change: 0.66 },
        { name: "Dow Jones", price: "38,904.04", change: -0.18 },
        { name: "Nikkei 225", price: "38,240.10", change: 0.31 },
        { name: "TAIEX", price: "20,120.85", change: -0.27 }
      ],

      commodities: [
        { name: "Gold", price: "2,356.80", change: 0.25 },
        { name: "Crude Oil WTI", price: "82.14", change: -0.46 },
        { name: "Silver", price: "28.03", change: 0.72 },
        { name: "Natural Gas", price: "2.11", change: -1.25 },
        { name: "Copper", price: "4.42", change: 0.19 }
      ],

      watchlist: [
        { name: "AAPL", price: "189.98", change: 0.51 },
        { name: "TSLA", price: "171.22", change: -1.34 },
        { name: "NVDA", price: "905.12", change: 2.16 },
        { name: "MSFT", price: "421.44", change: 0.73 }
      ],

      newsList: [
        {
          category: "市場新聞",
          title: "美股科技類股走強，投資人關注最新財報表現",
          desc: "這裡是新聞摘要預留區，之後可由 Laravel 後台管理新聞內容。"
        },
        {
          category: "商品市場",
          title: "黃金價格維持高檔，市場避險需求升溫",
          desc: "可串接商品 API 或自行建立資料表，提供即時或延遲行情。"
        },
        {
          category: "外匯",
          title: "美元指數小幅震盪，亞洲貨幣表現分歧",
          desc: "此區塊可做成文章列表、推薦新聞或熱門分析。"
        }
      ]
    };
  },

  mounted() {
    // 未來可在這裡串 Laravel API
    // fetch('/api/markets')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.indices = data.indices;
    //   });
  }
}).mount("#app");