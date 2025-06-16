//^ HOME PAGE
// import DropDownMenu from '@/components/DropDownMenu';
import MotionNavbar from '@/components/MotionNavbar';
import FramerMotionPage1 from './framer-motion-1/page';
import BoxesComponent from '@/components/4Boxes';
import CirclesCompoent from '@/components/4Circles';
import Numbers from '@/components/Numbers';

export default function Home() {
  return (
    <div className="w-full h-screen p-8 *:rounded-lg">
      <h2 className="bg-stone-400 text-3xl font-black text-center p-3 text-black my-4">STAGGER</h2>
      <MotionNavbar />
      <BoxesComponent />
      <CirclesCompoent />
      <Numbers />
      <h2 className="bg-stone-400 text-3xl font-black text-center p-3 text-green-900 my-4">SIMPLE ANIMATIONS</h2>
      <FramerMotionPage1 />
      {/* <DropDownMenu /> */}
    </div>
  );
}
