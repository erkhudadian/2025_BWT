function getResponse() {
    console.log('Начало загрузки отзывов...')

    const content = [
        {
            "id": 1,
            "name": "Анна",
            "date": "15.11.2024",
            "cake": "Шоколадный торт",
            "text": "Невероятно вкусный торт! Шоколадный бисквит просто тает во рту. Заказывала на день рождения, все гости были в восторге!",
            "rating": 5
        },
        {
            "id": 2,
            "name": "Михаил",
            "date": "10.11.2024",
            "cake": "Наполеон",
            "text": "Настоящий наполеон, как в детстве! Хрустящие слои, нежный крем. Заказывал для семейного праздника - съели за один вечер!",
            "rating": 5
        },
        {
            "id": 3,
            "name": "Елена",
            "date": "05.11.2024",
            "cake": "Тирамису",
            "text": "Лучший тирамису в городе! Идеальное сочетание кофе и маскарпоне. Обязательно буду заказывать еще.",
            "rating": 4
        },
        {
            "id": 4,
            "name": "Дмитрий",
            "date": "01.11.2024",
            "cake": "Красный бархат",
            "text": "Красивый и очень вкусный торт. Яркий цвет, нежные коржи. Идеально подошел для романтического ужина.",
            "rating": 5
        },
        {
            "id": 5,
            "name": "Ольга",
            "date": "28.10.2024",
            "cake": "Медовик",
            "text": "Медовик просто восхитительный! Нежные коржи, идеальный крем. На следующий день заказала еще один для подруги.",
            "rating": 5
        },
        {
            "id": 6,
            "name": "Сергей",
            "date": "25.10.2024",
            "cake": "Фруктовый торт",
            "text": "Свежие фрукты, легкий крем - то что нужно после плотного ужина. Очень понравилось сочетание вкусов.",
            "rating": 4
        },
        {
            "id": 7,
            "name": "Ирина",
            "date": "20.10.2024",
            "cake": "Клубничный торт",
            "text": "Клубника была свежайшая, крем не приторный. Красивый дизайн, доставили вовремя. Рекомендую!",
            "rating": 5
        },
        {
            "id": 8,
            "name": "Алексей",
            "date": "15.10.2024",
            "cake": "Кофейный торт",
            "text": "Для любителей кофе - просто находка! Насыщенный вкус, красивая подача. Будем заказывать еще.",
            "rating": 4
        }
    ]

    console.log('Данные загружены:', content)

    let node_for_insert = document.getElementById("reviews_container")
    console.log('Node found:', node_for_insert)
    
    if (!node_for_insert) {
        console.error('Элемент reviews_container не найден!')
        return
    }
    
    let key
    for (key in content) {
        console.log(content[key].id, content[key].name)
        
        node_for_insert.innerHTML += `
        <li style="width: 350px" class="d-flex flex-column m-2 p-3 border bg-body rounded review-card">
            <div class="d-flex align-items-center mb-2">
                <div class="review-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style="width: 50px; height: 50px; font-size: 1.2rem; font-weight: bold">
                    ${content[key].name.charAt(0)}
                </div>
                <div>
                    <h5 class="card-subtitle mb-0">${content[key].name}</h5>
                    <small class="text-muted">${content[key].date}</small>
                </div>
            </div>
            <div class="mb-2">
                <strong>Торт:</strong> ${content[key].cake}
            </div>
            <p class="card-text flex-grow-1">${content[key].text}</p>
            <div class="rating mb-2">
                Оценка: <strong class="text-warning">${'★'.repeat(content[key].rating)}${'☆'.repeat(5-content[key].rating)}</strong>
            </div>
            <input type="hidden" name="review_id_${content[key].id}" value="${content[key].id}">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="selected_review" value="${content[key].id}" id="review_${content[key].id}">
                <label class="form-check-label" for="review_${content[key].id}">
                    Выбрать этот отзыв
                </label>
            </div>
            <div class="mt-2">
                <label>Ваш комментарий:</label>
                <input type="text" name="comment_${content[key].id}" class="form-control" placeholder="Ваш отзыв...">
            </div>
        </li>
        `
    }
    console.log('Отзывы добавлены')
}

document.addEventListener('DOMContentLoaded', function() {
    getResponse()
})