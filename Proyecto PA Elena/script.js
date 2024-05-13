// Mostrar día de la semana
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const date = new Date();
const dayOfWeek = date.getDay();
document.getElementById('dayOfWeek').innerText = 'Hoy es ' + days[dayOfWeek];
