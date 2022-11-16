# React homework template

```
https://petly-be.herokuapp.com/auth/signup     post - реєстрація користувача (потребує  password, email- обов'язкові,  name, city, phone, birthday), потребує передачу даних для оновлення за допомогою body/raw/JSON {name,email, }

https://petly-be.herokuapp.com/auth/login      post - логінізація користувача (потрубує email, password), потребує передачу даних для оновлення за допомогою body/raw/JSON {name,email, }

https://petly-be.herokuapp.com/auth/logout     get -  вихід з аккаунту зареєстрованого юзера

https://petly-be.herokuapp.com/auth/current    get  - віддає данні користувача при вже наявному токені

----------------------------------------------------------------------------------------------

https://petly-be.herokuapp.com/friends  -      get -  всі дані з друзями /доступна пагінація (default {page = 1, limit = 10})

----------------------------------------------------------------------------------------------

https://petly-be.herokuapp.com/news -          get - всі дані з новинами /доступна пагінація (default {page = 1, limit = 10})

----------------------------------------------------------------------------------------------

https://petly-be.herokuapp.com/notices            get  - всі оголошення / доступна пагінація (default (page = 1, per_page = 15))/ (обрати за категорією з доступних: ["sell", "lost_found", "in_good_hands"], за допомогою params)

https://petly-be.herokuapp.com/notices/:id        get  - детальна інформація по оголошенню

https://petly-be.herokuapp.com/notices/:category  post -  додавання оголошення (потребує name,title,birthday,breed,male,location,comments - обов'язково, price, avatar, category ), потребує передачу даних за допомогою body/form-data/text (key=name,key=title, ...) body/form-data/file key=avatar

https://petly-be.herokuapp.com/notices/:id        delete - видалення оголошення за його id

-----------------------------------------------------------------------------------------

https://petly-be.herokuapp.com/user                  GET /user - віддає данні про користувача, включно з домашніми улюбленцями, при наявності токену;

https://petly-be.herokuapp.com/user/pets             POST /user/pets - додає юзеру домашнього улюбленця, наявніть токену (потребує name - обов'язково, birthday, breed, comments)), потребує передачу даних за допомогою body/raw/JSON {name,breed, };

 https://petly-be.herokuapp.com/user/pets/:petsId    DELETE /user/pets/:petsId - видаляє домашнього улюбленця по його id, наявність токену;

https://petly-be.herokuapp.com/user/avatar           PATCH /user/avatar - оновлення аватара юзера, наявність токену), потребує передачу даних за допомогою body/form-data/file key=avatar;

https://petly-be.herokuapp.com/user/:properties      PATCH /user/:properties - оновлює одне поле з інформацією про юзера(одне з name, email, birthday, city, phone), окрім аватара, properties - поле яке треба оновити, потребує передачу даних для оновлення у params  ;


```

Этот проект был создан при помощи [Create React App](https://github.com/facebook/create-react-app). Для знакомства и настройки дополнительных
возможностей [обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js. [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Клонируй этот репозиторий.
3. Измени имя папки с `react-homework-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи базовые зависимости проекта командой `npm install`.
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000). Эта страница будет автоматически перезагружаться после сохранения
   изменений в файлах проекта.

## Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и деплоиться на GitHub Pages, в ветку `gh-pages`, каждый раз когда
обновляется ветка `main`. Например, после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив `your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и выставить раздачу продакшн версии файлов из папки `/root` ветки
`gh-pages`, если это небыло сделано автоматически.

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в выпадающем окне перейти по ссылке `Details`.

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть по адресу указанному в отредактированном свойстве `homepage`. Например,
вот ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок связанных с неправильными путями к CSS и JS файлам проекта (**404**).
Скорее всего у тебя неправильное значение свойства `homepage` в файле `package.json`.

### Маршрутизация

Если приложение использует библиотеку `react-router-dom` для маршрутизации, необходимо дополнительно настроить компонент `<BrowserRouter>`, передав в
пропе `basename` точное название твоего репозитория. Слеши в начале и конце строки обязательны.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```
