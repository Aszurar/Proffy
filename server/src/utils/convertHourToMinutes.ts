export default function convertHourToMinutes(time: string){
// 8:00
    const [hour, minutes] = time.split(':').map(Number);
    // transformando a string horário em números
    const timeInMinutes = (hour * 60) + minutes;
    
    return timeInMinutes;
}