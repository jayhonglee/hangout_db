import Image from 'next/image';
import { Calendar } from 'lucide-react';
import ParticipantList from './ParticipantList';

interface HangoutCardProps {
  title: string;
  location: string;
  image: string;
  date: string;
  participants: string[];
  maxSize: number;
}

export default function HangoutCard({ 
  title, 
  location, 
  image, 
  date,
  participants,
  maxSize 
}: HangoutCardProps) {
  return (
    <div className="hangout-card">
      <div className="hangout-image">
        <Image
          src={image}
          alt={title}
          width={80}
          height={100}
          className="hangout-card-image"
        />
      </div>
      <div className="hangout-content">
        <h3 className="hangout-title">{title}</h3>
        <div className="hangout-details">
          <p className="hangout-date">
            <Calendar />
            {date}
          </p>
          <p className="hangout-location">{location}</p>
          <ParticipantList participants={participants} maxSize={maxSize} />
        </div>
      </div>
    </div>
  );
} 