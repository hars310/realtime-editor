import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";


const EditorPage = () => {
  const [clients, setClients] = useState([
    { SocketId: 1, username: "harsh" },
    { SocketId: 2, username: "harshit" },
  ]);

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-1/5 bg-gray-700 text-white p-4 relative">
        <div className="flex items-center mb-6">
          <span className="text-xl font-semibold">Editor</span>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Connected Members</h3>
          <div className="clientList">
            {clients.map((client) => (
              <Client key={client.SocketId} username={client.username} />
            ))}
          </div>
        </div>

        {/* Move the bottom-aside div here */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <button onClick={() => { }}
            className="bg-blue-500 hover:bg-blue-600 w-full text-sm text-white px-4 py-3 rounded mr-2"
          >
            Copy ClassID
          </button>
          <button
            className="bg-red-500 hover:bg-red-600  w-full text-sm text-white px-4 py-3 mt-2 rounded"
          >
            Leave Room
          </button>
        </div>
      </div>

       <div className="flex-1 bg-white p-4">
        <Editor />
      </div> 
    </div>
  );
};

export default EditorPage;
