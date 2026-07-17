
interface ContactFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
}

export default function ContactField({ id, name, label, placeholder, type = "text", as = "input", required = false }: ContactFieldProps) {
  return (
    <>
      <label htmlFor={id} className="form-label primary-font-color">
        {label}
      </label>
      {as === "input" ? (
        <input id={id} name={name} type={type} placeholder={placeholder} className="form-control" required={required} />
      ) : (
        <textarea id={id} name={name} placeholder={placeholder} className="form-control" required={required} />
      )}
    </>
  );
}
