export default function PageTitle(props) {
  return (
    <h1 className="mt-4 py-2 text-center font-primary text-3xl font-extrabold text-primary dark:text-lighter">
      {props.title}
    </h1>
  );
}
