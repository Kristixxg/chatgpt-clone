import { PlusIcon } from "@heroicons/react/24/solid";

function NewChat() {
  return (
    <div className="chatRow p-2 border border-gray-700 ">
      <PlusIcon className="h-4 w-4" />
      <h2>New Chat</h2>
    </div>
  );
}

export default NewChat;
