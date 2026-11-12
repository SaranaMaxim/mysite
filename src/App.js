import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <header class="header">
    <div class="container nav">
      <a class="logo" href="#" aria-label="КодСтарт - главная">
        <span class="logo-mark">&lt;/&gt;</span>
        КодСтарт
      </a>

      <nav class="nav-links" aria-label="Основная навигация">
        <a href="#courses">Курсы</a>
        <a href="#about">Как учимся</a>
        <a href="#contacts">Контакты</a>
      </nav>

      <div class="auth-actions" id="auth-actions">
        <Link to="/login">Войти</Link>
        <Link class="button" to="/register">Зарегистрироваться</Link>
      </div>
    </div>
  </header>

  <main>
    <section class="container hero">
      <div>
        <div class="eyebrow">
          <span class="eyebrow-dot"></span>
          Программирование с нуля
        </div>

        <h1>Создавай будущее <span>с помощью кода</span></h1>

        <p class="hero-text">
          Практические курсы, понятные наставники и проекты для портфолио.
          Начни путь в IT в своём темпе.
        </p>

        <div class="hero-actions">
          <a class="button" href="#courses">Найти свой курс</a>
          <a class="button button-outline" href="#about">Как это работает</a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <strong>12 000+</strong>
            <span>учеников</span>
          </div>
          <div class="stat">
            <strong>8 курсов</strong>
            <span>для разных уровней</span>
          </div>
          <div class="stat">
            <strong>Практика</strong>
            <span>на каждом занятии</span>
          </div>
        </div>
      </div>

      <div class="hero-visual" aria-label="Пример кода на экране">
        <div class="code-window">
          <div class="window-bar"><i></i><i></i><i></i></div>
          <pre><span class="code-purple">const</span> dream = <span class="code-green">"IT-карьера"</span>;

<span class="code-orange">startLearning</span>();</pre>
        </div>

        <div class="floating-card">
          ✨ Первый проект - скоро
          <span>Шаг за шагом, без спешки</span>
        </div>
      </div>
    </section>

    <section class="section" id="courses">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2>Выбери направление</h2>
            <p>Начни с основ или освой новый инструмент - программа подойдёт для самостоятельного старта.</p>
          </div>
          <a class="button button-outline" href="#contacts">Все курсы</a>
        </div>

        <div class="course-grid">
          <article class="course-card">
            <div class="course-icon">🌐</div>
            <h3>Веб-разработка</h3>
            <p>Создавай сайты и интерактивные веб-приложения с HTML, CSS и JavaScript.</p>
            <div class="course-meta">
              <span>Для начинающих</span>
              <span>10 недель</span>
            </div>
          </article>

          <article class="course-card">
            <div class="course-icon">🐍</div>
            <h3>Python</h3>
            <p>Изучи популярный язык программирования и напиши первые полезные программы.</p>
            <div class="course-meta">
              <span>С нуля</span>
              <span>8 недель</span>
            </div>
          </article>

          <article class="course-card">
            <div class="course-icon">📱</div>
            <h3>Мобильные приложения</h3>
            <p>Разберись, как устроены приложения, и собери свой первый мобильный проект.</p>
            <div class="course-meta">
              <span>Базовый уровень</span>
              <span>12 недель</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2>Учиться проще, когда есть план</h2>
            <p>Теория сразу превращается в практику - так знания не остаются только в конспекте.</p>
          </div>
        </div>

        <div class="features">
          <article class="feature">
            <span class="feature-number">01</span>
            <h3>Короткие уроки</h3>
            <p>Разбирай темы постепенно и занимайся в удобное время.</p>
          </article>

          <article class="feature">
            <span class="feature-number">02</span>
            <h3>Практические задания</h3>
            <p>Закрепляй навыки на задачах и проектах, похожих на реальные.</p>
          </article>

          <article class="feature">
            <span class="feature-number">03</span>
            <h3>Поддержка наставника</h3>
            <p>Задавай вопросы и получай подсказки, когда что-то не получается.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="container" id="contacts">
      <div class="cta">
        <div>
          <h2>Первый шаг в программирование - проще, чем кажется</h2>
          <p>Выбери направление и начни создавать свои проекты.</p>
        </div>
        <a class="button" href="mailto:hello@kodstart.ru">Задать вопрос</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-inner">
      <span>© 2025 КодСтарт. Учись создавать.</span>
      <span>Почта: hello@kodstart.ru</span>
    </div>
  </footer>
    </div>
  );
}

export default App;
