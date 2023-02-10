"use client";
import { collection } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  );

  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile picture"
          className="h-12 w-12 rounded-full cursor-auto mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
