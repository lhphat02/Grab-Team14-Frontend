import { useRef } from 'react';
import assets from '../assets';
import BaseButton from '../components/common/BaseButton';
import Divider from '../components/common/Divider';
import HeroSlide from '../components/features/landing/HeroSlide';
import LandingSlide from '../components/layouts/SlideLayout';
import { useInView } from 'react-intersection-observer';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const industries = [
  { name: 'IT & Media', icon: 'computer' },
  { name: 'Farming & Agriculture', icon: 'tree' },
  { name: 'Healthcare', icon: 'healthcare' },
  { name: 'Accommodation', icon: 'accommodation' },
  { name: 'Entertainment', icon: 'entertainment' },
  { name: 'Education', icon: 'education' },
  { name: 'Construction', icon: 'construction' },
  { name: 'Manufactoring', icon: 'manufactoring' },
  { name: 'Administration', icon: 'administration' },
  { name: 'Finance & Business', icon: 'money' },
  { name: 'Others', icon: 'dots' },
];

const LandingPage = () => {
  return (
    <div className="w-full">
      <HeroSlide />
    </div>
  );
};

export default LandingPage;
