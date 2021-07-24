const topics = document.getElementById('topics')
topics.addEventListener('mouseover', () => {
    const counters = document.querySelectorAll('.counterNumber')
    const speed = 1;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); //+ is used to convert string into number
            const count = +counter.innerText; //+ is used to convert string into number

            if (count < target) {
                counter.innerText = count + 1;
                setTimeout(updateCount, 1)
            } else {
                count.innerText = target;
            }
        }

        updateCount();
    })
})