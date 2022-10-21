/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.append(button);
    button.addEventListener('click', () => {
        button.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement('li');
        item.textContent = arr[i];
        ul.append(item);
        item.addEventListener('mouseover', () => {
            item.setAttribute('title', item.textContent);
        });
    }
    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.text = 'tensor';
    link.addEventListener(
        'click',
        (e) => {
            e.preventDefault();
            link.text += ' https://tensor.ru/';
        },
        { once: true },
    );
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let paragraph = document.createElement('li');
    paragraph.textContent = 'Пункт';
    let list = document.createElement('ul');
    list.append(paragraph);
    document.body.append(list);
    list.addEventListener('click', (event) => {
        event.target.textContent = event.target.textContent + '!';
    });
    let button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document.body.append(button);
    button.addEventListener('click', (event) => {
        let newParagraph = document.createElement('li');
        newParagraph.textContent = 'Пункт';
        list.append(newParagraph);
    });
}
