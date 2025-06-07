import Hero from "./_components/layout/hero";
import Featured from "./_components/layout/featured";
import ProductDetail from "./_components/ui/productDetail";
import Bags from "./_components/layout/bags";
import Process from "./_components/layout/process";
import Wallets from "./_components/layout/wallets";
import About from "./_components/layout/about";

export default function Home() {
  return (
    <main className="mt-16">
      <Hero />
      <Featured />
      <Bags />
      <Process />
      <Wallets />
      <About />
      <ProductDetail />
    </main>
  );
}
