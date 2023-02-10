"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
// careful to use next/navigation dont use next/router
import { useRouter } from "next/navigation";
import { db } from "../firebase";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div
      onClick={createNewChat}
      className="chatRow p-2 border border-gray-700 "
    >
      <PlusIcon className="h-4 w-4" />
      <h2>New Chat</h2>
    </div>
  );
}

export default NewChat;
