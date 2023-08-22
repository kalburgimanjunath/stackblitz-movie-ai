export default function AllMovies({ items }) {
  console.log(items);
  return (
    <div>
      {items &&
        items.map((item) => {
          return (
            <>
              <div className="font-bold">{item.title}</div>
              <div>{item.description}</div>
            </>
          );
        })}
    </div>
  );
}
