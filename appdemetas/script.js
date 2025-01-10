document.addEventListener("DOMContentLoaded", function () {
    const activities = {};
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    function renderCalendar(calendarId) {
        const calendar = document.getElementById(calendarId);
        const year = 2025;

        for (let month = 0; month < 12; month++) {
            const monthContainer = document.createElement("div");
            monthContainer.classList.add("month");
            const monthName = document.createElement("h3");
            monthName.textContent = months[month];
            monthContainer.appendChild(monthName);

            const monthButtons = document.createElement("div");
            monthButtons.classList.add("month-buttons");

            for (let day = 1; day <= 31; day++) {
                const date = new Date(year, month, day);
                if (date.getMonth() !== month) break;

                const dayContainer = document.createElement("div");
                dayContainer.classList.add("day-container");

                const dayBtn = document.createElement("button");
                dayBtn.className = "day";
                dayBtn.textContent = `${day}`;
                dayBtn.title = `${months[month]} ${day}, ${year}`;

                // Div para armazenar as cores disponíveis
                const colorContainer = document.createElement("div");
                colorContainer.classList.add("color-options");

                // Adiciona as opções de cor (sem botões, apenas cor de fundo)
                const colors = ["vermelho", "verde", "laranja"];
                colors.forEach(color => {
                    const colorDiv = document.createElement("div");
                    colorDiv.classList.add("color-option", color);
                    colorDiv.addEventListener("click", () => {
                        dayBtn.classList.remove("vermelho", "verde", "laranja");
                        dayBtn.classList.add(color);
                    });
                    colorContainer.appendChild(colorDiv);
                });

                dayContainer.appendChild(dayBtn);
                dayContainer.appendChild(colorContainer);
                monthButtons.appendChild(dayContainer);
            }

            monthContainer.appendChild(monthButtons);
            calendar.appendChild(monthContainer);
        }
    }
    
    renderCalendar("calendar-professional-container");
    renderCalendar("calendar-personal-container");
    renderCalendar("calendar-learning-container");
    renderCalendar("calendar-projects-container");
    renderCalendar("calendar-fitness-container");

    showTab('calendar-professional-container'); // Default tab
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.calendar-tab');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}
