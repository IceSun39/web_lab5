let html = "";
let schedule = [
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

function current_lesson() {
  const currentTime = new Date();
  const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  for (let i = 0; i < schedule.length(); i++) {
    const [hours, minutes] = startTimes[0].split(":").map(Number);
    const startMinutes = hours * 60 + minutes;
    const endMinutes = startMinutes + 80;

    // Якщо пари не почалися
    if (i == 0 && currentMinutes < startMinutes) {
      html = "Пари ще не почалися.";
    }
    // Коли вже пари закінчились
    else if (i == schedule.length() - 1 && currentMinutes > endMinutes) {
      html = "Пари закінчились.";
    }
    // Якщо йде пара
    else if (startMinutes <= currentMinutes && currentMinutes <= endMinutes) {
      html = `Пара №${i + 1}: ${schedule[i].name}.`;
      teacher = schedule[i].teacher;
      if (teacher) {
        html += ` Викладач: ${teacher}`;
      } else {
        html += " Викладач невідомий.";
      }
    }
    // Якщо перерва
    else {
      html = `Перерва після ${i + 1} пари`;
    }
  }
}
