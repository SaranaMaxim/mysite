import './account.css'
import { Link } from 'react-router-dom';

function Account()
{
    return(
        <div>
            <header className="header">
        <div className="container nav">
          <Link className="logo" to="/" aria-label="КодСтарт — главная">
            <span className="logo-mark">&lt;/&gt;</span>
            КодСтарт
          </Link>

          <nav className="nav-links" aria-label="Навигация">
            <Link to="/courses">Курсы</Link>
            <Link to="/dashboard" className="active">Моё обучение</Link>
            <Link to="/support">Поддержка</Link>
          </nav>

          <Link className="profile-button" to="/profile">
            <span className="avatar">А</span>
            <span className="profile-name">Алексей</span>
          </Link>
        </div>
      </header>

      <main className="container dashboard-main">
        <section className="dashboard-welcome">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Личный кабинет
            </div>
            <h1>Привет, Алексей <span>👋</span></h1>
            <p>Продолжай учиться — твой следующий проект уже ждёт.</p>
          </div>

          <Link className="button" to="/courses">
            Найти новый курс
          </Link>
        </section>

        <section className="dashboard-stats" aria-label="Статистика обучения">
          <article className="dashboard-stat">
            <span className="dashboard-stat-icon">📚</span>
            <div>
              <strong>1</strong>
              <span>активный курс</span>
            </div>
          </article>

          <article className="dashboard-stat">
            <span className="dashboard-stat-icon">✅</span>
            <div>
              <strong>18</strong>
              <span>уроков завершено</span>
            </div>
          </article>

          <article className="dashboard-stat">
            <span className="dashboard-stat-icon">🔥</span>
            <div>
              <strong>5 дней</strong>
              <span>учишься подряд</span>
            </div>
          </article>
        </section>

        <div className="dashboard-grid">
          <section className="dashboard-panel learning-panel">
            <div className="panel-heading">
              <div>
                <h2>Продолжить обучение</h2>
                <p>Твой текущий курс</p>
              </div>
              <Link className="text-link" to="/courses/web-development">
                О курсе →
              </Link>
            </div>

            <article className="learning-card">
              <div className="learning-card-top">
                <span className="course-icon">🌐</span>
                <span className="course-level">Для начинающих</span>
              </div>

              <h3>Веб-разработка</h3>
              <p>HTML, CSS и JavaScript — создавай первые сайты и приложения.</p>

              <div className="progress-label">
                <span>Прогресс курса</span>
                <strong>42%</strong>
              </div>
              <div
                className="progress-track"
                role="progressbar"
                aria-label="Прогресс курса"
                aria-valuenow="42"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span style={{ width: "42%" }} />
              </div>

              <div className="learning-card-bottom">
                <span>Урок 18 из 42</span>
                <Link className="button" to="/courses/web-development/lesson/18">
                  Продолжить
                </Link>
              </div>
            </article>
          </section>

          <section className="dashboard-panel">
            <div className="panel-heading">
              <div>
                <h2>Ближайшие задачи</h2>
                <p>Маленькие шаги ведут к большому результату</p>
              </div>
            </div>

            <div className="task-list">
              <article className="task-item">
                <span className="task-marker task-marker-purple">⌨</span>
                <div>
                  <h3>Сверстать страницу профиля</h3>
                  <p>Практика · Веб-разработка</p>
                </div>
                <span className="task-date">Сегодня</span>
              </article>

              <article className="task-item">
                <span className="task-marker task-marker-green">▶</span>
                <div>
                  <h3>Посмотреть урок про Flexbox</h3>
                  <p>Видеоурок · 12 минут</p>
                </div>
                <span className="task-date">Завтра</span>
              </article>

              <article className="task-item">
                <span className="task-marker task-marker-orange">✦</span>
                <div>
                  <h3>Отправить проект наставнику</h3>
                  <p>Проект · Модуль 3</p>
                </div>
                <span className="task-date">20 мая</span>
              </article>
            </div>
          </section>
        </div>

        <section className="dashboard-cta">
          <div>
            <span className="dashboard-cta-label">Твой следующий шаг</span>
            <h2>Один урок сегодня — ещё ближе к своей цели</h2>
            <p>Регулярная практика помогает закрепить новые навыки.</p>
          </div>
          <Link className="button" to="/courses/web-development/lesson/18">
            Вернуться к уроку
          </Link>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2025 КодСтарт. Учись создавать.</span>
          <span>Почта: hello@kodstart.ru</span>
        </div>
      </footer>
        </div>
    );
}

export default Account;