import Image from 'next/image';

const CHAT_PREVIEW = {
  groupName: "🏸 Saturday Badminton Group Chat",
  participants: [
    { name: "Sarah Chen", avatar: "/potraits/potrait1.png" },
    { name: "Jay Kim", avatar: "/potraits/potrait2.png" },
    { name: "Mike Johnson", avatar: "/potraits/potrait3.png" },
  ],
  messages: [
    {
      sender: "Sarah Chen",
      content: "I'll bring an extra racket! See you all at 2pm 🎉",
      time: "11:23 AM"
    },
    {
      sender: "Mike Johnson",
      content: "Perfect! I found parking near the courts",
      time: "11:20 AM"
    },
    {
      sender: "Jay Kim",
      content: "Can't wait for tomorrow's game!",
      time: "11:15 AM"
    }
  ]
};

export default function GroupChatPreview() {
  return (
    <div className="group-chat-preview">
      <div className="chat-header">
        <h3 className="chat-title">{CHAT_PREVIEW.groupName}</h3>
        <div className="chat-participants">
          <div className="chat-avatars">
            {CHAT_PREVIEW.participants.map((participant, index) => (
              <div key={index} className="chat-avatar">
                <Image
                  src={participant.avatar}
                  alt={participant.name}
                  width={32}
                  height={32}
                  className="avatar-image"
                />
              </div>
            ))}
            <p className="participant-names">
              {CHAT_PREVIEW.participants.map(p => p.name).join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {CHAT_PREVIEW.messages.map((message, index) => (
          <div key={index} className="chat-message">
            <span className="message-sender">{message.sender}:</span>
            {" "}
            <span className="message-content">{message.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 