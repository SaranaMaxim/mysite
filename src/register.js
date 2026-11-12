import './register.css'
import { useState } from "react";

function Register() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        if (password !== confirmPassword) {
        event.preventDefault();
        setError("Пароли не совпадают.");
        return;
        }

        setError("");
        // При совпадении паролей форма отправится на /api/register.
        // Этот маршрут должен обрабатывать ваш сервер.
    }
    return(
        <div>
            <main className="register-page">
      <section className="register-card">
        <a className="register-logo" href="/">
          <span className="register-logo-mark">&lt;/&gt;</span>
          КодСтарт
        </a>

        <h1>Создать аккаунт</h1>
        <p className="register-subtitle">
          Зарегистрируйтесь, чтобы начать обучение.
        </p>

        <form action="/api/register" method="post" onSubmit={handleSubmit}>
          <div className="register-field">
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ваше имя"
              autoComplete="name"
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="email">Электронная почта</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Не менее 8 символов"
              autoComplete="new-password"
              minLength={8}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="confirmPassword">Повторите пароль</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Введите пароль ещё раз"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          {error && <p className="register-error" role="alert">{error}</p>}

          <label className="register-consent">
            <input type="checkbox" name="consent" required />
            <span>
              Я согласен(на) с условиями использования и политикой
              конфиденциальности
            </span>
          </label>

          <button className="register-button" type="submit">
            Зарегистрироваться
          </button>
        </form>

        <p className="register-login">
          Уже есть аккаунт? <a href="/login">Войти</a>
        </p>
      </section>
    </main>
        </div>
    )
}

export default Register;