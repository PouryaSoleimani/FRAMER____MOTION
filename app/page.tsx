//^ HOME PAGE
// import DropDownMenu from '@/components/DropDownMenu';
import MotionNavbar from '@/components/MotionNavbar';
import FramerMotionPage1 from './framer-motion-1/page';
import BoxesComponent from '@/components/4Boxes';
import CirclesCompoent from '@/components/4Circles';
import Numbers from '@/components/Numbers';
import SharedLayoutExample from '@/components/SharedLayout';
import AnimationPresence from '@/components/AnimatePresence';
import SharedLayout2 from '@/components/SharedLayout2';

export default function Home() {
  return (
    <div className="w-full h-screen p-8 *:rounded-lg">
      <h2 className="bg-stone-400 text-3xl font-black text-center p-3 text-black my-4">STAGGER</h2>
      <MotionNavbar />
      <BoxesComponent />
      <CirclesCompoent />
      <Numbers />
      <AnimationPresence />
      <h2 className="bg-stone-400 text-3xl font-black text-center p-3 text-green-900 my-4">SHARED LAYOUT</h2>
      <SharedLayoutExample />
      <h2 className="bg-stone-400 text-3xl font-black text-center p-3 text-green-900 my-4">SHARED LAYOUT 2</h2>
      <SharedLayout2 />

      <h2 className="bg-stone-400 text-3xl font-black text-center p-3 text-green-900 my-4">SIMPLE ANIMATIONS</h2>
      <FramerMotionPage1 />

      {/* <DropDownMenu /> */}
    </div>
  );
}
