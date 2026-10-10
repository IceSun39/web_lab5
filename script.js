const schedule = [
  {
    name: "Проектування ІС",
    start_time: "09:00",
    teacher: "Федусенко О.В.",
  },
  {
    name: "Технології комп'ютерного Проектування",
    start_time: "10:30",
    teacher: "Мінаєва Ю.І.",
  },
  {
    name: "Бази даних та знань",
    start_time: "12:10",
    teacher: "",
  },
  {
    name: "Проектування та розробка веб-застосувань",
    start_time: "13:30",
    teacher: "Федусенко О.В.",
  },
];

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function current_lesson() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let html = "";

  if (schedule.length === 0) {
    html = "Розклад порожній.";
  } else if (currentMinutes < timeToMinutes(schedule[0].start_time)) {
    html = "Пари ще не почалися.";
  } else {
    let found = false;

    for (let i = 0; i < schedule.length; i++) {
      const startMinutes = timeToMinutes(schedule[i].start_time);
      const endMinutes = startMinutes + 80;

      // Якщо зараз триває пара
      if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
        html = `Пара №${i + 1}: ${schedule[i].name}.`;

        if (schedule[i].teacher) {
          html += ` Викладач: ${schedule[i].teacher}`;
        } else {
          html += " Викладач невідомий.";
        }

        found = true;
        break;
      }

      // Якщо зараз перерва після цієї пари
      if (i < schedule.length - 1) {
        const nextStartMinutes = timeToMinutes(schedule[i + 1].start_time);

        if (currentMinutes >= endMinutes && currentMinutes < nextStartMinutes) {
          html = `Перерва після ${i + 1} пари.`;
          found = true;
          break;
        }
      }
    }

    // Якщо всі пари вже закінчилися
    if (!found) {
      html = "Пари закінчилися.";
    }
  }

  document.getElementById("result").textContent = html;
}

document.querySelector(".btn").addEventListener("click", current_lesson);

