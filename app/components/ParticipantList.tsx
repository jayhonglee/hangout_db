import Image from 'next/image';
import { Users } from 'lucide-react';

interface ParticipantListProps {
  participants: string[];
  maxSize: number;
}

export default function ParticipantList({ participants, maxSize }: ParticipantListProps) {
  return (
    <div className="participant-info">
      <div className="participant-list">
        {participants.map((portrait, index) => (
          <div key={index} className="participant-portrait">
            <Image
              src={portrait}
              alt={`Participant ${index + 1}`}
              width={24}
              height={24}
              className="portrait-image"
            />
          </div>
        ))}
      </div>
      <div className="group-size">
        <Users size={16} />
        <span>{participants.length}/{maxSize}</span>
      </div>
    </div>
  );
} 