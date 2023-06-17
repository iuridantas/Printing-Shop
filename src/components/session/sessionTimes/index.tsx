import { useState } from 'react';
import { format, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { TimesSession } from './style';

export function SessionTimes() {
  
  const week = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
    'Feriado',
  ];
  
  const hours = [
    '08:00 às 18:00',
    '08:00 às 18:00',
    '08:00 às 18:00',
    '08:00 às 18:00',
    '08:00 às 18:00',
    '08:00 às 12:00',
    'Fechado',
    'Fechado',
  ];

  const [showAllHours, setShowAllHours] = useState(false);

  const handleClick = () => {
    setShowAllHours(!showAllHours);
  };

  const currentDate = new Date();

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <section aria-label="Horário de atendimento" id="horarios">
      <TimesSession>
        <h2>Horário de atendimento</h2>
        <div className="hours-container">
          <h3>
            Hoje ({capitalize(format(currentDate, 'iiii', { locale: ptBR }))})
          </h3>
          <h3>{hours[(getDay(currentDate) + 6) % 7]}</h3>
        </div>
        {showAllHours && (
          <div>
            {week.map((day, index) => (
              <h3 key={day}>
                {day}: {hours[index]}
              </h3>
            ))}
          </div>
        )}
        <button onClick={handleClick}>
          {showAllHours ? 'Ver menos' : 'Ver todos os horários'}
        </button>
      </TimesSession>
    </section>
  );
}
