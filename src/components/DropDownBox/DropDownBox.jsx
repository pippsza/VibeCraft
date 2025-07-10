import Dropdown from "../DropDownElement/DropDownElement.jsx";
export default function DropDownBox({ parametrs, setParametrs }) {
  return (
    <div className="flex flex-col gap-[22px]">
      <Dropdown
        parametrs={parametrs}
        setParametrs={setParametrs}
        type={"Style"}
      />
      <Dropdown
        parametrs={parametrs}
        setParametrs={setParametrs}
        type={"Category"}
      />
      <Dropdown
        parametrs={parametrs}
        setParametrs={setParametrs}
        type={"Audience"}
      />

      <Dropdown
        parametrs={parametrs}
        setParametrs={setParametrs}
        type={"Typography"}
      />
      <Dropdown
        parametrs={parametrs}
        setParametrs={setParametrs}
        type={"Icons"}
      />
    </div>
  );
}
