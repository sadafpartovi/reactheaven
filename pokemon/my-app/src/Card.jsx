const Card = ({ activePok }) => {
  return (
    <div>
      <div>
        {activePok && (
          <>
            <p>{activePok.name}</p>
            <img alt={activePok.name} src={activePok.url} />
            <p>{activePok.des}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
