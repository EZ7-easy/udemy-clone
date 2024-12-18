import { VelocityScroll } from "../magicui/Velocity-scroll";
 
export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Ta'limot.uz saytidan sifatli kurslar xarid qiling"
      default_velocity={1}
      className="font-display text-center text-3xl font-bold tracking-[-0.01em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}