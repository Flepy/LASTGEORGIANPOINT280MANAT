# Georgian Point - Netlify Deployment Guide

## 🚀 Как развернуть сайт на Netlify

### Метод 1: Автоматическое развертывание из Git

1. **Подготовка:**
   - Загрузите код в GitHub репозиторий
   - Убедитесь, что файлы `netlify.toml` находятся в корне проекта

2. **Развертывание на Netlify:**
   - Войдите в [netlify.com](https://netlify.com)
   - Нажмите "New site from Git"
   - Выберите ваш репозиторий GitHub
   - Настройки сборки уже настроены в `netlify.toml`

### Метод 2: Ручная загрузка (Drag & Drop)

1. **Сборка проекта:**
   ```bash
   npm run build
   ```

2. **Загрузка файлов:**
   - Перейдите на [netlify.com](https://netlify.com)
   - Перетащите папку `dist/public` в раздел "Deploy manually"

### Метод 3: Netlify CLI

1. **Установка CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Развертывание:**
   ```bash
   npm run build
   netlify deploy --dir=dist/public --prod
   ```

## 📁 Структура файлов для Netlify

```
dist/public/
├── index.html              # Главная страница
├── _redirects             # Правила перенаправления для SPA
├── assets/
│   ├── index-[hash].js    # JavaScript бандл
│   └── index-[hash].css   # CSS стили
```

## ⚙️ Конфигурация

### netlify.toml
```toml
[build]
  publish = "dist/public"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## ✅ Что включено в сайт

- ✅ Multi-language support (EN/RU/AZ)
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Social media links
- ✅ Contact information
- ✅ Gallery page
- ✅ Menu page
- ✅ SPA routing with redirects

## 🌐 После развертывания

1. Ваш сайт будет доступен по адресу: `https://[site-name].netlify.app`
2. Вы можете настроить собственный домен в настройках Netlify
3. SSL сертификат настраивается автоматически

## 📞 Контактная информация в сайте

- **Телефон:** +994 51 700 70 75
- **Адрес:** Landau 14, Baku, Azerbaijan
- **Instagram:** https://www.instagram.com/georgian_point_restaurant/
- **Facebook:** https://www.facebook.com/Georgian.Point.Restaurant/

## 🔧 Техническая информация

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Routing:** Wouter (SPA)
- **Icons:** Font Awesome
- **Fonts:** Google Fonts (Playfair Display, Inter)