function formValidation(type, refsValue, additionalData) {
    if (refsValue.title.trim() &&
        !(refsValue.dateFrom + refsValue.dateTo).split('').includes('_')) {

        const newBookInfo = {
            title: refsValue.title.replace(/\s+/gm,' ').trim(),
            description: refsValue.description.replace(/\s+/gm,' ').trim(),
            dateFrom: refsValue.dateFrom,
            dateTo: refsValue.dateTo,
        };

        if (type === 'EDIT'){
            newBookInfo.id = additionalData.bookInfo.id;
        }
        else {
            newBookInfo.id = Date.now();
        }

        additionalData.dispatch({type: type, bookInfo: newBookInfo});
        additionalData.setFormState(['hide', null]);
    }
    else {
        alert('Пожалуйста правильно введите данные')
    }
}

export default formValidation