import './login.css';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div>
            <header class="header">
    <div class="container">
      <a class="logo" href="index.html" aria-label="КодСтарт — главная">
        <span class="logo-mark">&lt;/&gt;</span>
        КодСтарт
      </a>
    </div>
  </header>

  <main>
    <section class="login-card" aria-labelledby="login-title">
      <h1 id="login-title">С возвращением!</h1>
      <p class="intro">Войдите, чтобы продолжить обучение.</p>

      <form action="/login" method="post">
        <div class="field">
          <label for="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            autocomplete="email"
            required
          />
        </div>

        <div class="field">
          <div class="password-row">
            <label for="password">Пароль</label>
            <a href="/forgot-password">Забыли пароль?</a>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Введите пароль"
            autocomplete="current-password"
            required
          />
        </div>

        <label class="options">
          <input type="checkbox" name="remember" />
          Запомнить меня
        </label>

        <Link to="/account">Войти</Link>
      </form>

      <p class="signup-note">
        Ещё нет аккаунта? <a href="/register">Зарегистрироваться</a>
      </p>
    </section>
  </main>

  <footer class="footer">
    © 2025 КодСтарт. Учись создавать.
  </footer>
        </div>
    )
}

export default Login;