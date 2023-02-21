"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden ">
      {messages?.empty && (
        <div className="h-screen flex flex-col justify-center">
          <p className="text-center text-white overflow-x-auto mx-5 text-xs">
            Welcome to Kristy's ChatGPT Clone App! Please type a prompt in below
            to get started.
          </p>
          <ArrowDownCircleIcon className="h-8 w-8 text-white animate-bounce mx-auto mt-5" />
        </div>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat;
