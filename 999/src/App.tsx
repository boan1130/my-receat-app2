import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>網路程式設計</h1>
        <h2>Boan Chen</h2>
        <h4>陳柏安</h4>
        <p id="title">
          <strong>大家好 我是資管系3年級的陳柏安 學號是412637141</strong>
        </p>
      </header>

      <section className="interest-section card">
        <h3>興趣</h3>
        <ul>
          <li>籃球</li>
          <li>健身</li>
          <li>跑步</li>
        </ul>

        <a href="https://www.tku.edu.tw/" target="_blank" rel="noopener noreferrer">
          這是我目前讀的學校 淡江大學的網站
        </a>

        <div className="image-container">
          <img 
            id="picture_1" 
            src="/籃球.jpg" 
            alt="全國乙組第7名照片"
          />
          <p id="explain">
            <strong>這是我高中得全國乙組第7名的照片</strong>
          </p>
        </div>

        <div className="future-goals">
          <ul>
            <li><strong>對自己未來的期許</strong></li>
          </ul>
          <ol>
            <li>希望自己可以把程式學好</li>
          </ol>
        </div>

        <table className="info-table">
          <thead>
            <tr>
              <th>綽號</th>
              <th>年齡</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>饅頭</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App