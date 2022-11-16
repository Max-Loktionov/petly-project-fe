const WorkTime = workDays => {
  console.log(workDays);

  return (
    <ul>
      {workDays.workDays.map(({ day, from, to, isOpen }) => (
        <li>
          {{ isOpen } ? (
            <p>
              {from} - {to}
            </p>
          ) : (
            <span>{day} Closed</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default WorkTime;
