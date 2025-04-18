* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: "Arial", sans-serif;
    background: #f5f5f5;
    color: #222;
    text-align: center;
  }
  
  h1 {
    font-size: 24px;
    margin: 16px 0;
  }
  
  .post-ad p {
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  .section h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  /* Swiper */
  .swiper-container {
    width: 100%;
    padding-bottom: 40px;
  }
  
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 12px;
    padding: 10px;
    margin: 0 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  .swiper-slide img {
    width: 100%;
    max-width: 220px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .swiper-slide img:hover {
    transform: scale(1.05);
  }
  
  .swiper-slide p {
    margin-top: 8px;
    font-size: 14px;
    color: #444;
  }
  
  .swiper-pagination-bullet {
    background: #555;
  }
  
