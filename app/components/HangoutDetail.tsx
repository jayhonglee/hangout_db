import Image from 'next/image';
import { Calendar } from 'lucide-react';
import ParticipantList from './ParticipantList';

interface HangoutDetailProps {
  title: string;
  description: string;
  location: string;
  image: string;
  date: string;
  participants: string[];
  maxSize: number;
}

export default function HangoutDetail({
  title,
  description,
  location,
  image,
  date,
  participants,
  maxSize
}: HangoutDetailProps) {
  return (
    <div className="hangout-detail">
      <div className="hangout-detail-image">
        <Image
          src={image}
          alt={title}
          width={800}
          height={150}
          className="detail-image"
        />
      </div>
      
      <div className="hangout-detail-content">
        <h2 className="detail-title">{title}</h2>
        <p className="detail-description">{description}</p>
        
        <div className="detail-info">
          <p className="detail-date">
            <Calendar size={16} />
            {date}
          </p>
          <p className="detail-location">{location}</p>
          <ParticipantList participants={participants} maxSize={maxSize} />
        </div>
      </div>
    </div>
  );
} 