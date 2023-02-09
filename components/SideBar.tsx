import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="flex flex-col p-2">
      <NewChat />
      <div>{/* selection */}</div>
    </div>
  );
}

export default SideBar;
