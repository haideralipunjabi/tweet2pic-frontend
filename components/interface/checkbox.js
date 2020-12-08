export default function Checkbox(props) {
  const { label, onChange, name } = props;

  return (
    <>
      <div className="control">
        <label className="checkbox is-size-5">
          <input type="checkbox" name={name} onChange={onChange} />
          {label}
        </label>
      </div>
    </>
  );
}
