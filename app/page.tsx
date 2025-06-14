//^ HOME PAGE
// import DropDownMenu from '@/components/DropDownMenu';
import MotionNavbar from '@/components/MotionNavbar';
import FramerMotionPage1 from './framer-motion-1/page';

export default function Home() {
  return (
    <div className="w-full h-screen p-8 *:rounded-lg">
      <MotionNavbar />
      <FramerMotionPage1 />
      {/* <DropDownMenu /> */}
    </div>
  );
}
