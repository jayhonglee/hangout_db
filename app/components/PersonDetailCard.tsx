import Image from 'next/image';
import { Calendar, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const PEOPLE = [
  {
    name: 'Sarah Chen',
    birthDate: 'April 15, 2001',
    introduction: 'Passionate foodie & amateur photographer who loves exploring new restaurants',
    interests: ['Food Photography', 'Cooking', 'Travel'],
    portrait: '/potraits/potrait1.png'
  },
  {
    name: 'Mike Johnson',
    birthDate: 'June 22, 2003',
    introduction: 'Sports enthusiast and coffee lover. Always up for a game of tennis!',
    interests: ['Tennis', 'Coffee', 'Hiking'],
    portrait: '/potraits/potrait3.png'
  },
  {
    name: 'Jay Kim',
    birthDate: 'March 8, 1999',
    introduction: 'Photography enthusiast with a passion for capturing urban landscapes.',
    interests: ['Photography', 'Digital Art'],
    portrait: '/potraits/potrait2.png'
  }
];

const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds

export default function PersonDetailCard() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % PEOPLE.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const person = PEOPLE[selectedIndex];

  return (
    <div className="person-detail-card">
      <div className="person-header">
        <Image
          src={person.portrait}
          alt={person.name}
          width={48}
          height={48}
          className="person-portrait"
        />
        <div className="person-basic-info">
          <h3 className="person-name">{person.name}</h3>
          <p className="person-birth">
            <Calendar size={14} />
            {person.birthDate}
          </p>
        </div>
      </div>
      
      <p className="person-intro">
        {person.introduction}
      </p>
      
      <div className="person-interests">
        <Heart size={14} />
        <div className="interest-tags">
          {person.interests.map((interest, index) => (
            <span key={index} className="interest-tag">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 