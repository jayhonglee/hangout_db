import { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import HangoutCard from './HangoutCard';

const CATEGORIES = [
  {
    icon: '/icons/interest_sports.png',
    items: [
      { 
        title: 'Anyone wanna play badminton this saturday?', 
        location: 'Burnaby, BC', 
        image: '/images/badminton.png',
        date: '2:00PM, 4.6 (Sat)',
        participants: ['/potraits/potrait1.png', '/potraits/potrait2.png', '/potraits/potrait3.png'],
        maxSize: 4
      },
      { 
        title: 'Looking for tennis partner', 
        location: 'Vancouver, BC', 
        image: '/images/tennis.png',
        date: '10:30AM, 4.7 (Sun)',
        participants: ['/potraits/potrait4.png', '/potraits/potrait5.png'],
        maxSize: 4
      }
    ]
  },
  {
    icon: '/icons/interest_food_drink.png',
    items: [
      { 
        title: 'New Bigway Hot Pot Coquitlam', 
        location: 'Coquitlam, BC', 
        image: '/images/hotpot.png',
        date: '6:30PM, 4.5 (Fri)',
        participants: ['/potraits/potrait6.png', '/potraits/potrait7.png', '/potraits/potrait8.png', '/potraits/potrait9.png'],
        maxSize: 6
      },
      { 
        title: 'Whisky & Highball Night', 
        location: 'Gastown, Vancouver', 
        image: '/images/cocktail.png',
        date: '7:00PM, 4.6 (Sat)',
        participants: ['/potraits/potrait10.png', '/potraits/potrait1.png', '/potraits/potrait2.png'],
        maxSize: 5
      }
    ]
  },
  {
    icon: '/icons/interest_book.png',
    items: [
      { 
        title: 'Looking for study mate at VPL', 
        location: 'Downtown Vancouver', 
        image: '/images/library.png',
        date: '1:00PM, 4.8 (Mon)',
        participants: ['/potraits/potrait3.png', '/potraits/potrait4.png', '/potraits/potrait5.png'],
        maxSize: 5
      },
      { 
        title: 'Writing workshop', 
        location: 'Burnaby, BC', 
        image: '/images/writing.png',
        date: '3:00PM, 4.9 (Tue)',
        participants: ['/potraits/potrait6.png', '/potraits/potrait7.png', '/potraits/potrait8.png', '/potraits/potrait9.png'],
        maxSize: 6
      }
    ]
  },
  {
    icon: '/icons/interest_local.png',
    items: [
      { 
        title: 'Cherry blossom viewing', 
        location: 'Queen Elizabeth Park', 
        image: '/images/cherryblossom.png',
        date: '11:00AM, 4.6 (Sat)',
        participants: ['/potraits/potrait10.png', '/potraits/potrait1.png', '/potraits/potrait2.png', '/potraits/potrait3.png', '/potraits/potrait4.png'],
        maxSize: 8
      },
      { 
        title: 'Hiking Grouse Mountain', 
        location: 'North Vancouver', 
        image: '/images/hiking.png',
        date: '9:00AM, 4.7 (Sun)',
        participants: ['/potraits/potrait5.png', '/potraits/potrait6.png', '/potraits/potrait7.png'],
        maxSize: 6
      }
    ]
  }
];

const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds

export default function CategoryShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % CATEGORIES.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleCategoryClick = (index: number) => {
    setSelectedIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), AUTO_ROTATE_INTERVAL);
  };

  return (
    <div className="category-showcase">
      <div className="category-list">
        {CATEGORIES.map((category, index) => (
          <CategoryItem
            key={index}
            icon={category.icon}
            isSelected={index === selectedIndex}
            onClick={() => handleCategoryClick(index)}
          />
        ))}
      </div>
      
      <div className="hangout-list" data-category={selectedIndex + 1}>
        {CATEGORIES[selectedIndex].items.map((item, index) => (
          <HangoutCard
            key={index}
            title={item.title}
            location={item.location}
            image={item.image}
            date={item.date}
            participants={item.participants}
            maxSize={item.maxSize}
          />
        ))}
      </div>
    </div>
  );
} 